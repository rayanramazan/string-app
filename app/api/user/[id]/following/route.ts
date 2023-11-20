import { sql } from "@/db";
import { NextResponse } from "next/server";

export async function GET(
    request: Request, 
    { params }: { params: { id: string }}) 
{
    const { searchParams } = new URL(request.url);
    const pages = 
        (searchParams.get("page") && parseInt(searchParams.get("page")!)) || 0;
    const limit = 1;
    const offset = pages * 1;
    const id = params.id;
    const res = await sql(`
        select u.id, u.username, u.avatar
        from users u inner join follows f on u.id = f.user_id
        where f.follower_id = $1 limit $2 offset $3
    `, [id, limit, offset]);
    if(res.rowCount == 0) {
        return NextResponse.json({ error: "No users found" }, { status: 404 });
    } 
    return NextResponse.json({ data: res.rows});
}