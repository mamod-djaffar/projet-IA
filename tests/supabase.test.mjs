import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { test } from "node:test";
import { runInNewContext } from "node:vm";
import ts from "typescript";

const require = createRequire(import.meta.url);
const { NextRequest, NextResponse } = require("next/server");

// Charger les modules TS réels avec un environnement isolé et un SDK simulé.
function loadModule(name, env, dependencies = {}) {
  const source = readFileSync(
    new URL(`../src/lib/supabase/${name}.ts`, import.meta.url),
    "utf8",
  );
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  });
  const exports = {};
  runInNewContext(outputText, {
    exports,
    process: { env },
    require: (id) => (id in dependencies ? dependencies[id] : require(id)),
  });
  return exports;
}

function loadProxy(env, createServerClient) {
  return loadModule("proxy", env, {
    "./config": loadModule("config", env),
    "@supabase/ssr": { createServerClient },
  });
}

const configuredEnv = {
  NEXT_PUBLIC_SUPABASE_URL: "https://example.supabase.co",
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: "sb_publishable_test",
};

test("une configuration absente ou partielle donne une erreur explicite", () => {
  for (const env of [{}, { NEXT_PUBLIC_SUPABASE_URL: configuredEnv.NEXT_PUBLIC_SUPABASE_URL }]) {
    const config = loadModule("config", env);
    assert.equal(config.isSupabaseConfigured(), false);
    assert.throws(() => config.getSupabaseConfig(), /NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY/);
  }
});

test("le proxy laisse fonctionner l’accueil sans configuration et sans appel distant", async () => {
  const { updateSession } = loadProxy({}, () => assert.fail("Appel Supabase inattendu"));
  const response = await updateSession(new NextRequest("http://localhost:3000/"));
  assert.ok(response instanceof NextResponse);
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("x-middleware-next"), "1");
});

test("une requête anonyme configurée vérifie les claims sans redirection", async () => {
  let checked = false;
  const { updateSession } = loadProxy(configuredEnv, (url, key, { cookies }) => {
    assert.equal(url, configuredEnv.NEXT_PUBLIC_SUPABASE_URL);
    assert.equal(key, configuredEnv.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY);
    assert.equal(cookies.getAll().length, 0);
    return { auth: { getClaims: async () => { checked = true; return { data: null }; } } };
  });
  const response = await updateSession(new NextRequest("http://localhost:3000/"));
  assert.equal(checked, true);
  assert.equal(response.headers.has("location"), false);
});

test("les cookies et en-têtes anti-cache survivent à plusieurs écritures de session", async () => {
  const request = new NextRequest("http://localhost:3000/");
  const { updateSession } = loadProxy(configuredEnv, (_url, _key, { cookies }) => ({
    auth: {
      getClaims: async () => {
        cookies.setAll([
          { name: "session", value: "renewed", options: { path: "/", httpOnly: true } },
        ], { "Cache-Control": "private, no-store", Expires: "0", Pragma: "no-cache" });
        cookies.setAll([
          { name: "verifier", value: "", options: { path: "/", maxAge: 0 } },
        ], {});
        return { data: { claims: { sub: "test-user" } } };
      },
    },
  }));
  const response = await updateSession(request);
  assert.equal(request.cookies.get("session")?.value, "renewed");
  assert.equal(response.cookies.get("session")?.value, "renewed");
  assert.equal(response.cookies.get("session")?.httpOnly, true);
  assert.equal(response.cookies.get("verifier")?.maxAge, 0);
  assert.equal(response.headers.get("cache-control"), "private, no-store");
  assert.equal(response.headers.get("expires"), "0");
  assert.equal(response.headers.get("pragma"), "no-cache");
  assert.match(response.headers.get("x-middleware-request-cookie"), /session=renewed/);
});

test("le client serveur lit et écrit les cookies de la requête courante", async () => {
  let saved;
  const cookieStore = {
    getAll: () => [{ name: "session", value: "old" }],
    set: (...args) => { saved = args; },
  };
  let adapter;
  const client = { auth: {} };
  const { createClient } = loadModule("server", configuredEnv, {
    "server-only": {},
    "./config": loadModule("config", configuredEnv),
    "next/headers": { cookies: async () => cookieStore },
    "@supabase/ssr": {
      createServerClient: (_url, _key, options) => { adapter = options.cookies; return client; },
    },
  });
  assert.equal(await createClient(), client);
  assert.equal(adapter.getAll()[0].value, "old");
  adapter.setAll([{ name: "session", value: "new", options: { path: "/" } }]);
  assert.deepEqual(saved, ["session", "new", { path: "/" }]);
});

test("le client serveur tolère les cookies en lecture seule d’un Server Component", async () => {
  let adapter;
  const { createClient } = loadModule("server", configuredEnv, {
    "server-only": {},
    "./config": loadModule("config", configuredEnv),
    "next/headers": { cookies: async () => ({
      getAll: () => [],
      set: () => { throw new Error("Cookies can only be modified in a Server Action or Route Handler."); },
    }) },
    "@supabase/ssr": {
      createServerClient: (_url, _key, options) => { adapter = options.cookies; return {}; },
    },
  });
  await createClient();
  assert.doesNotThrow(() => adapter.setAll([
    { name: "session", value: "renewed", options: {} },
  ]));
});
