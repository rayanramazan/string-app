import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteBtn({ post }: { post: PostI }) {
    const router = useRouter();
    const [state, setState] = useState({showConfirm: false});

    async function handleDeletePost() {
        const res = await fetch("/api/post/" + post.id, {
            method: "DELETE",
        });
        if(res.ok) {
            router.push("/profile");
        }
    }

    function handleClick() {
        // const newState = Object.assign({}, state, {
        //     showConfirm: !state.showConfirm
        // });
        setState({ ...state, showConfirm: !state.showConfirm });
    }

    return (
        <div>
            {!state.showConfirm && (
                <button className="text-red-400 mt-10" onClick={handleClick}>Delete Post</button>
            )}

            {state.showConfirm && (
                <div className="mt-10">
                    <p className="text-white font-mediam">Are you sure you want to delete this post ?</p>
                    <div className="flex gap-10 mt-4">
                        <button className="bg-red-400 p-2 rounded text-white font-semibold" onClick={handleDeletePost}>Yes</button>
                        <button className="text-blue-400" onClick={handleClick}>No</button>
                    </div>
                </div>
            )}
        </div>
    )
}