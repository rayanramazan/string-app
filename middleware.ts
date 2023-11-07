import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const authenticatedAPIRoutes = [
        pathname.startsWith("/api/user"),
    ]

    if (authenticatedAPIRoutes.includes(true)) {
        const cookie = request.cookies.get("jwt-token");

        if(!cookie || !cookie?.value) {
            return NextResponse.json({error: "unauthorized"}, {status: 401});
        }

        try {
            const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

            await jwtVerify(cookie.value, secret);
        } catch (error) {
            console.error(error);
            return NextResponse.json({ error: "internal server error" }, { status: 500 });
        }
    }
}


export const config = {
    matcher: "/:path*"
}