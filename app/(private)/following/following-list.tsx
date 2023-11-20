import User from "@/app/components/user";
import useSWR from "swr";

function FollowingList({index}: {index: number}) {
    const {data: userData} = useSWR(`/api/user/profile`);
    const {data: followingData} = useSWR(() => `/api/user/${userData.data.id}/following?page=${index}`);

    if (!followingData) return <div>Loading...</div>;
    return (
        <ul>
            {followingData.data.map((user: UserI) => {
                return (
                    <li key={user.id}>
                        <User user={user} />
                    </li>
                )
            })}
        </ul>
    )
}

export default FollowingList;