"use client";
import useSWR from "swr";
import Form from "./form";

export default function EditForm({params}: {params: {id: number}}){
    const { data, error, isLoading } = useSWR("/api/post/" + params.id);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    return (
        <div>
            <h1>Edit Post</h1>
            <Form post={data.data} />
        </div>
    )
}