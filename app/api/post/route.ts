import { getJWTPayload } from "@/app/util/auth";
import { sql } from "@/db";
import { NextResponse } from "next/server";

export async function GET(requiest: Request) {
    const jwtPayload = await getJWTPayload();
    const { searchParams } = new URL(requiest.url);
    const username = searchParams.get("username");
    const page = 
        (searchParams.get("page") && parseInt(searchParams.get("page")!)) || 0;
    const limit = 10;
    const offset = page * 10;

    const statement = `select p.*, u.avatar, u.username
        from posts p inner join users u 
        on p.user_id = u.id where user_id = $1
        order by created_at desc limit $2 offset $3`;

    if(username) {
        const userRes = await sql("select * from users where username = $1",
        [username]);
        if(userRes.rowCount == 0) {
            return NextResponse.json({ msg: "not found" });
        }
        const user = userRes.rows[0];
        const postRes = await sql(statement, [user.id, limit, offset]);
        return NextResponse.json({ data: postRes.rows });
    }

    const res = await sql(statement, [jwtPayload.sub, limit, offset]);

    return NextResponse.json({ data: res.rows});
}


export async function POST(requiest: Request) {
    const json = await requiest.json();
    const content = json.content;
    const jwtPayload = await getJWTPayload();

    const res = await sql("insert into posts (user_id, content) values ($1, $2) returning *" ,
    [jwtPayload.sub, content]
    );
    return NextResponse.json({ data: res.rows[0]} , { status: 201 });
}