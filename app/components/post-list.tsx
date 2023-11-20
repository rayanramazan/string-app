import useSWR from "swr";
import Post from "./post";

function PostList({
    index,
    username
}: {
    index: number;
    username: string;
}){
    const { data, error, isLoading } = useSWR(() => "api/post?page=" + index + "&username=" + username);

    if(error) return <div>Error loading posts</div>;
    if(isLoading || !data) return <div>Loading...</div>;

    return (
        <ul>
            {data.data.map((post: PostI) => {
                return (
                    <li key={post.id}>
                        <Post post={post} />
                    </li>
                );
            })}
        </ul>
    )
}

export default PostList;