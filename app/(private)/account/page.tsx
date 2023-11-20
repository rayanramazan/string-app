"use client";

import AvatarForm from "./avatar-form";
import SignOutButton from "./signout-btn";

export default function Account() {
    return (
        <main>
            <h1 className="text-white">Account</h1>
            <AvatarForm />
            <SignOutButton />
        </main>
    )
}