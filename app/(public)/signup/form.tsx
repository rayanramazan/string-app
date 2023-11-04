"use client";
import React, {FormEvent, useState } from "react";

function Form(){
    const [username, setUsername] = useState<undefined | string>("");
    const [password, setPassword] = useState<undefined | string>("");
    const [confirmPassword, setConfirmPassword] = useState<undefined | string>("");
    const [error, setError] = useState<undefined | string>("");

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setError("");

        if(password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        const res = await fetch("api/signup", {
            method: "POST",
            body: JSON.stringify({
                username,
                password
            })
        })

        if(res.ok) {
            window.location.href = "/feed";
        } else {
            alert("Sign up failed");
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
            <div>
                <input type="password" className="border-0 text-sm px-2 py-1 rounded focus:outline-none"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                placeholder="Confirm Password"
                id="confirmPassword"
                required
                />
            </div>
            <p className="text-sm text-red-500">{error}</p>
            <button type="submit" className=" bg-slate-900 text-white w-full px-2 py-1 rounded">Sign Up</button>
        </form>
    )
}

export default Form