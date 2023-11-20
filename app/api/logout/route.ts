import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const response  = NextResponse.json({ message: "Logged out" });
    response.cookies.set("jwt-token", "");
    return response;
}