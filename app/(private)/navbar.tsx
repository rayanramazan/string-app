import Link from "next/link";

export default function NavBar() {
    return (
        <ul className=" bg-slate-600 flex mt-3 justify-between items-center p-4 rounded text-white">
            <li>
                <Link href="/feed">Feed</Link>
            </li>
            <li>
                <Link href="/profile">Profile</Link>
            </li>
            <li>
                <Link href="/following">Following</Link>
            </li>
            <li>
                <Link href="/followers">Followers</Link>
            </li>
        </ul>
    )
}