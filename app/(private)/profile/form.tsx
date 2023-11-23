import { FormEvent, useState } from "react";
import { useSWRConfig } from "swr";

function Form() {
    const { mutate } = useSWRConfig();
    const [post, setPost] = useState("");

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const res = await fetch("/api/post", {
            method: "POST",
            body: JSON.stringify({content: post})
        });

        if (res.ok) {
            setPost("");
            mutate((key) => typeof key === "string" && key.startsWith("/api/post"));
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <textarea
                className=" bg-gray-700 p-2 rounded-lg text-white my-2"
                placeholder="What's on your mind?"
                onChange={(e) => setPost(e.target.value)}
                value={post}
            />
            <button type="submit" className=" bg-slate-900 p-2 rounded-lg text-white">Post</button>
        </form>
    );
}

export default Form;