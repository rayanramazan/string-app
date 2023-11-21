import { getJWTPayload } from "@/app/util/auth";
import { sql } from "@/db";
import { NextResponse } from "next/server";

export async function DELETE(
    request: Request,
    { params }: { params: {user_id: number }}
) {
    const jwtPayload = await getJWTPayload();
    const userId = params.user_id;
    const res =await sql(
        "delete from follows where user_id = $1 and follower_id = $2", [
            userId,
            jwtPayload.sub
        ]
    );
    if(res.rowCount == 0 ) {
        return NextResponse.json({ msg: "follow not found" });
    }

    return NextResponse.json({ msg: "follow deleted" });
}