import Image from "next/image";
import useSWR from "swr";

export default function AvatarForm() {
    const { data, error, isLoading } = useSWR("api/user/profile");

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    const user = data.data;

    return (
        <form className="mb-10">
            {user.avatar && (
                <div>
                    <Image 
                        src={user.avatar}
                        alt={user.avatar}
                        width={200}
                        height={200}
                        className="rounded-full mx-auto my-5"
                    />
                </div>
            )}{!user.avatar && (
                <div 
                    className="bg-slate-600 rounded-full m-auto my-5"
                    style={{width: 200, height: 200}}
                    >
                </div>
            )}
            <input type="file" />
        </form>
    );
}