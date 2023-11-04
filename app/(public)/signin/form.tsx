// when we have a form, we need to use the useState hook to store the values of the form
// we need to use the useRouter hook to redirect the user to the feed page if the login is successful
// we need to use the fetch api to send the login request to the server
// we need to use the onSubmit event to send the login request to the server
// we need to use the onChange event to update the values of the form
// wen need to use client side routing to redirect the user to the feed page if the login is successful
//  ? 
"use client";
import { useRouter } from "next/navigation";
import React, {FormEvent, useState } from "react";

function Form() {
    const router = useRouter();
    const [username, setUsername] = useState<undefined | string>("");
    const [password, setPassword] = useState<undefined | string>("");

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({ 
                username,
                password
            })
        });
        if(res.ok) {
            router.push("/feed");
        } else {
            alert("Login failed");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col bg-slate-600 justify-center items-center w-fit mx-auto p-5 gap-6 rounded-xl">
            <div className="text-xl text-white font-semibold">
                Sign in
            </div>
            <hr className="border border-white/10 w-full"/>
            <div>
                <input type="text" className="border-0 text-sm px-2 py-1 rounded focus:outline-none"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                placeholder="Username"
                id="username"
                required
                />
            </div>
            <div>
                <input type="password" className="border-0 text-sm px-2 py-1 rounded focus:outline-none"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
                id="password"
                required
                />
            </div>
            <button type="submit" className=" bg-slate-900 text-white w-full px-2 py-1 rounded">Login</button>
        </form>
    )
}

export default Form;