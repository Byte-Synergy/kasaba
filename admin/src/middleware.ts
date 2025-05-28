import { NextResponse, type NextRequest } from "next/server";
import {
  getUserFromSession,
  updateUserSessionExpiration,
} from "./utils/session";
const authRoutes = ["/login"];

export async function middleware(request: NextRequest) {
  const isApiRoute = request.nextUrl.pathname.startsWith("/api");

  if (isApiRoute) return NextResponse.next();
  const response = (await middlewareAuth(request)) ?? NextResponse.next();

  await updateUserSessionExpiration({
    set: (key, value, options) => {
      response.cookies.set({ ...options, name: key, value });
    },
    get: (key) => request.cookies.get(key),
  });

  return response;
}

async function middlewareAuth(req: NextRequest) {
  const nextUrl = req.nextUrl;

  const isAPIRoute = nextUrl.pathname.startsWith("/api");
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isAPIRoute) return NextResponse.next();

  const user = await getUserFromSession(req.cookies);

  if (!user && !isAuthRoute)
    return NextResponse.redirect(new URL("/login", req.url));
  if (user && isAuthRoute) return NextResponse.redirect(new URL("/", req.url));
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
