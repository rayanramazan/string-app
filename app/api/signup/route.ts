import { sql } from "@/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const json = await request.json();

    const res = await sql("select id, username from public.users where username ilike $1",
    [json.username])

    if(res.rowCount > 0) {
        return NextResponse.json({error: "username already exists"}, {status: 400});
    }

    const saltRound = 10;
    const hash = await bcrypt.hash(json.password, saltRound);

    await sql("insert into public.users (username, password) values($1, $2)", [
        json.username,
        hash
    ])
    return NextResponse.json({msg: "user created"}, {status: 201});
}