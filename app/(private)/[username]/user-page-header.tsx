"use client";
import useSWR, { mutate } from "swr";

export default function UserPageHeader({username}: { username: string }) {
    const {
        data: dataUser,
        error: errorUser,
        isLoading: isLoadingUser
    } = useSWR("/api/user?username=" + username);
    const id = dataUser?.data?.[0]?.id;
    const {
        data: dataFollow,
        error: errorFollow,
        isLoading: isLoadingFollow
    } = useSWR(() => "/api/follows?user_id=" + dataUser.data[0].id);
    
    if(errorFollow || errorUser) return <div>failed to load</div>
    if(isLoadingFollow || isLoadingUser) return <div>loading...</div>

    console.log(dataUser, dataFollow);

    const user = dataUser.data[0];

    async function handleUnfollow() {
        const res = await fetch("/api/follows/" + user.id, {
            method: "delete",
        });
        if(res.ok){
            mutate("/api/follows?user_id=" + user.id);
        }
    }

    async function handleFollow() {
        const res = await fetch("/api/follows", {
            method: "post",
            body: JSON.stringify({
                user_id: user.id
            })
        });
        if(res.ok){
            mutate("/api/follows?user_id=" + user.id);
        }
    }
    
    return (
        <header className="w-full bg-slate-600 p-2 rounded-lg flex justify-between items-center">
            <h1 className="text-lg font-bold text-white">{username}</h1>
            {dataFollow.data.length > 0 && (
                <button className="bg-slate-900 p-2 rounded-lg text-white" onClick={handleUnfollow}>Unfollow</button>
            )}
            {dataFollow.data.length === 0 && (
                <button className="bg-slate-900 p-2 rounded-lg text-white" onClick={handleFollow}>Follow</button>
            )}
        </header>
    )
}