import User from "@/app/components/user";
import useSWR from "swr";

function FollowersList({index}: {index: number}) {
    const {data: userData} = useSWR(`/api/user/profile`);
    const {data: followersData} = useSWR(() => `/api/user/${userData.data.id}/followers?page=${index}`);

    if (!followersData) return <div>Loading...</div>;
    return (
        <ul>
            {followersData.data.map((user: UserI) => {
                return (
                    <li key={user.id}>
                        <User user={user} />
                    </li>
                )
            })}
        </ul>
    )
}

export default FollowersList;