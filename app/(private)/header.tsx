import useSWR from "swr";
import User from "../components/user";

export default function Header() {
    const { data, error, isLoading } = useSWR("/api/user/profile");

    if(error) return <div>{error.message}</div>;
    if(isLoading) return <div>Loading...</div>;

    console.log(data);
    return (
        <header className="flex justify-between items-center bg-slate-600 p-4 mt-4 rounded">
            <div className="text-white font-mono">
                String
            </div>
            <User user={data.data} href="account" />
        </header>
    );
}