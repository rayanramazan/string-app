import { getJWTPayload } from "@/app/util/auth";
import { sql } from "@/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    // get current logged in user
    const jwtPayload = await getJWTPayload();

    // fetch user data
    const res = await sql(
        "select id, username, avatar from public.users where id = $1",
        [jwtPayload.sub]
    );
    const user = res.rows[0];

    // return user data

    if(!user) {
        return NextResponse.json({error: "user not found"}, {status: 404});
    } 

    return NextResponse.json({data: user});
}