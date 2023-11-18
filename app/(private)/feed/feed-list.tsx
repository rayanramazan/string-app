import Post from "@/app/components/post";
import useSWR from "swr";

function FeedList({index}: {index: number}) {
    const { data, error, isLoading } = useSWR('/api/post/feed?page=' + index);

    if(error) return <div>error</div>
    if(isLoading) return <div>loading...</div>

    return (
        <ul>
            {data.data.map((post: PostI) => {
                return (
                    <li className="my-5" key={post.id}>
                        <Post post={post} />    
                    </li>
                )
            })}
        </ul>
    )
}

export default FeedList;