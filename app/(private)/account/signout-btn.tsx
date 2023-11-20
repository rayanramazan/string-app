import { useRouter } from "next/navigation";

export default function SignOutButton() {
    const router = useRouter();

    async function handleSignOut() {
        const res = await fetch("/api/logout");

        if(res.ok) {
            router.push("/signin");
        }
    }

    return (
        <button
            onClick={handleSignOut}
            className="text-green-400"
        >
            Sign Out
        </button>
    )
}