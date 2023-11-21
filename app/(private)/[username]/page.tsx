import UserPageHeader from "./user-page-header";

export default function UserPage({params}: { params: { username: string } }) {
    return (
        <UserPageHeader username={params.username} />
    )
}