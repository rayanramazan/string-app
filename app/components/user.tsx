import Image from "next/image";
import Link from "next/link";

function User ({ user, href}: { user: UserI, href?: string}) {
    return (
        <div>
            <Link
                href={`/${href || user.username}`}
                className="flex items-center gap-3"
            >
                <div>
                    {user.avatar && (
                        <Image 
                            src={user.avatar}
                            width={50}
                            height={50}
                            alt={user.username}
                            className="rounded-full"
                        />
                    )}
                    {!user.avatar && (
                        <div style={{width: 50, height: 50}} className=" bg-slate-900 rounded-full"></div>
                    )}
                </div>
                <div className="text-white">
                    {user.username}
                </div>
            
            </Link>
        </div>
    )
}

export default User;