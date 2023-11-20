"use client";
import useSWR from "swr";
import PostContainer from "@/app/components/post-container";
import Form from "./form";

export default function Profile() {
    const { data, error, isLoading } = useSWR("/api/user/profile");

    if(error) return <div>Error loading profile</div>;
    if(isLoading) return <div>Loading...</div>;

    return (
        <main>
            <h1 className="text-white">Profile</h1>
            <Form />
            <PostContainer username={data.data.username} />
        </main>
    )
}