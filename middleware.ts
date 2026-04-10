import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// by default all the routes are public, so we need to specify which ones are protected
// and which ones are role-based
const protectedRoutes = [
	"/api/protected",
	"/protected",
	// Add more routes that require authentication here
];

const roleRoutes = [
	{ route: "/api/admin", roles: ["startup"] }, // Accessible by "startup"
	{ route: "/api/investor-dashboard", roles: ["investor"] }, // Accessible by "investor"
	{ route: "/api/startup-investor", roles: ["startup", "investor"] }, // Accessible by both "startup" and "investor"
];

export async function middleware(req: NextRequest) {
	const session = await getToken({ req });
	const { pathname } = req.nextUrl;

	if (protectedRoutes.some((route) => pathname.startsWith(route))) {
		if (!session) {
			return NextResponse.redirect(new URL("/auth/login", req.url));
		}
	}

	const roleRoute = roleRoutes.find((r) => pathname.startsWith(r.route));
	if (roleRoute) {
		if (!session) {
			return NextResponse.redirect(new URL("/auth/login", req.url));
		}

		if (
			!roleRoute.roles.some(
				(role) =>
					Array.isArray(session.roles) && session.roles.includes(role)
			)
		) {
			return NextResponse.redirect(new URL("/unauthorized", req.url));
		}
	}

	if (
		(pathname === "/auth/login" ||
			pathname === "/auth/register" ||
			pathname.startsWith("/auth/verify-email") ||
			pathname === "/auth/email-confirm") &&
		session
	) {
		return NextResponse.redirect(new URL("/", req.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/:path*"], // /:path* is temporary for debugging purposes
};
