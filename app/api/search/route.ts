import { sql } from "@/db";
import { NextResponse } from "next/server";

export async function GET(requiest: Request){
    const { searchParams } = new URL(requiest.url);
    const search = searchParams.get("q");
    if(!search) {
        return new Response("Missing search query", { status: 400 });
    }
    const res = await sql("select id, username, avatar from users where username ilike $1 limit 10",
    ["%" + search + "%"]);
    return NextResponse.json({ data: res.rows });
}