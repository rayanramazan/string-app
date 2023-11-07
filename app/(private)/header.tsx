import useSWR from "swr";

export default function Header() {
    const { data, error, isLoading } = useSWR("/api/user/profile");

    if(error) return <div>{error.message}</div>;
    if(isLoading) return <div>Loading...</div>;

    console.log(data);
    return (
        <header>{data.data.username}</header>
    );
}