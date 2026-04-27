import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTECTED_PATHS = [
  "/dashboard",
  "/product-catalog",
  "/sources",
  "/research-runs",
  "/accounts",
  "/projects",
  "/contacts",
  "/lead-review",
  "/outreach-briefs",
  "/settings"
];

export function middleware(request: NextRequest) {
  const isProtected = PROTECTED_PATHS.some((path) => request.nextUrl.pathname.startsWith(path));
  if (!isProtected) return NextResponse.next();

  const hasSession = request.cookies.has("sb-access-token") || request.cookies.has("sb:token");
  if (hasSession) return NextResponse.next();

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
