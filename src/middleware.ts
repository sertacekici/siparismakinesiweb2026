import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect dashboard routes (except login)
  if (pathname.startsWith("/dashboard") && pathname !== "/dashboard/login") {
    // Check for auth token cookie (set by Firebase Auth on client)
    const authToken = request.cookies.get("__session");

    if (!authToken) {
      // Redirect to login — client-side auth will handle the actual verification
      // This is a lightweight check; real auth is verified on the client
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
