import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "@/configs/i18n";



export default function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE === "true";

  // ✅ 1. maintenance page ni skip qil
  if (pathname.startsWith("/maintenance")) {
    return;
  }

  // ✅ 2. maintenance redirect
  const userAgent = request.headers.get("user-agent") || "";
  const isBot = /bot|googlebot|crawler|spider|robot|crawling|telegrambot|facebookexternalhit|twitterbot/i.test(userAgent);
  const isNewsPage = pathname.includes("/news/");

  if (isMaintenance && !isBot && !isNewsPage) {
    return NextResponse.redirect(new URL("/maintenance", request.url));
  }

  // ✅ 3. locale check
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale: string) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${i18n.defaultLocale}${pathname}`, request.url),
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    "/((?!api|_next/static|_next/image|source|img|webviewer|icon|docs|_next/chunks|favicon.ico).*)",
  ],
};

// export const config = {
//   // Skip all paths that should not be internationalized
//   matcher: ["/((?!api|_next|.*\\..*).*)"],
// };
