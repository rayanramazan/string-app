import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
    const pathName = usePathname();
    return (
        <ul className=" bg-slate-600 flex mt-3 justify-between items-center p-4 rounded text-white">
            <li
                className={pathName.startsWith("/feed") ? "text-green-400" : ""}
            >
                <Link href="/feed">Feed</Link>
            </li>
            <li
                className={pathName.startsWith("/profile") ? "text-green-400" : ""}>
                <Link href="/profile">Profile</Link>
            </li>
            <li
                className={pathName.startsWith("/following") ? "text-green-400" : ""}
            >
                <Link href="/following">Following</Link>
            </li>
            <li
                className={pathName.startsWith("/followers") ? "text-green-400" : ""}
            >
                <Link href="/followers">Followers</Link>
            </li>
        </ul>
    )
}