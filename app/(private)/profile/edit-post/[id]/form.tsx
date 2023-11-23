import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function Form({post}: {post: PostI}){
    const router = useRouter();
    const [content, setContent] = useState<string>(post.content);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const res = await fetch("/api/post/" + post.id, {
            method: "PATCH",
            body: JSON.stringify({content: content})
        });
        if(res.ok) {
            setContent("");
            router.push("/profile");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea onChange={(e) => setContent(e.target.value)}
            className="bg-grey-700 p-2 rounded-lg w-full my-2"
            value={content}
            placeholder="What is happening?"
            />
        <button type="submit" className="bg-slate-900 p-2 rounded-lg text-white">
            Update Post
        </button>
        </form>
    )
}

export default Form;