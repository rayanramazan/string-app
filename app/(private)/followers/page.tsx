"use client";
import FollowersContainer from "./followers-container";

export default async function Followers() {
    return (
        <main>
            <h1 className="text-white">Followers</h1>
            <FollowersContainer />
        </main>
    )
}