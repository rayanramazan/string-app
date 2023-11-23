import useSWR from "swr";
import Post from "./post";

function PostList({
    index,
    username,
    showEditBtn
}: {
    index: number;
    username: string;
    showEditBtn?: boolean;
}){
    const { data, error, isLoading } = useSWR(() => "api/post?page=" + index + "&username=" + username);

    if(error) return <div>Error loading posts</div>;
    if(isLoading || !data) return <div>Loading...</div>;

    return (
        <ul>
            {data.data.map((post: PostI) => {
                return (
                    <li key={post.id}>
                        <Post post={post} showEditBtn={showEditBtn} />
                    </li>
                );
            })}
        </ul>
    )
}

export default PostList;