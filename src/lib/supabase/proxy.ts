import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { getSupabaseConfig, isSupabaseConfigured } from "./config";

export async function updateSession(request: NextRequest) {
  // La page d'accueil reste accessible avant la configuration de Supabase.
  if (!isSupabaseConfigured()) {
    return NextResponse.next({ request });
  }

  const { url, key } = getSupabaseConfig();
  let response = NextResponse.next({ request });

  const supabase = createServerClient(url, key, {
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll(cookiesToSet, headers) {
        for (const { name, value } of cookiesToSet) {
          request.cookies.set(name, value);
        }

        const previousResponse = response;
        response = NextResponse.next({ request });

        for (const cookie of previousResponse.cookies.getAll()) {
          response.cookies.set(cookie);
        }

        for (const name of ["cache-control", "expires", "pragma"]) {
          const value = previousResponse.headers.get(name);
          if (value !== null) response.headers.set(name, value);
        }

        for (const { name, value, options } of cookiesToSet) {
          response.cookies.set(name, value, options);
        }

        // Ne jamais mettre en cache une réponse qui renouvelle une session.
        for (const [name, value] of Object.entries(headers)) {
          response.headers.set(name, value);
        }
      },
    },
  });

  // Vérifie le jeton et déclenche son rafraîchissement si nécessaire.
  // Les futures actions/routes privées devront aussi vérifier leurs droits.
  await supabase.auth.getClaims();

  return response;
}
