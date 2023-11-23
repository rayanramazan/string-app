import Image from "next/image";
import Link from "next/link";

function Post({ post, showEditBtn }: { post: PostI; showEditBtn?: boolean; }){
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    }

    const createAt = new Date(post.created_at).toLocaleDateString('en-US', options);

    return (
        <div className="flex flex-col mt-4">
            <div className="flex justify-between">
            <Link href={`/${post.username}`} className="flex items-stretch gap-4">
                {post.avatar && (
                <Image src={post.avatar} alt={post.username} width={50} height={50} className="rounded-full max-h-[50px]" />
                )}
                {!post.avatar && (
                    <div className="w-[50px] h-[50px] rounded-full bg-gray-500"></div>
                )}

                <div className="flex flex-col">
                    <h3 className="text-lg font-medium text-white">{post.username}</h3>
                    <span className="text-white/40">{createAt}</span>
                    <p className="mt-4 text-white/80">{post.content}</p>
                </div>
            </Link>
            {showEditBtn && (
                <Link href={`/profile/edit-post/${post.id}`} className="text-green-400">Edit</Link>
            )}
            </div>

            <hr className="my-5" />
        </div>
        
    )
}

export default Post;