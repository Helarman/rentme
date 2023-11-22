`use client`

import { UserType } from "@/app/types";
import UserItem from "./UserItem"

interface UserTableProps {
    users: Array<UserType>;
}

const UserTable: React.FC<UserTableProps> = ({users}) => {

    
    return (
        <>
        <div >
            <div>

                <div className="mt-8">
                    <ul className="space-y-4">
                        {users && users.map(({ id, name, email, image, role, emailVerified, createdAt, updatedAt, favoriteIds, }) => (
                            <UserItem key={id} id={id} name={name} email={email} image={image} role={role} emailVerified={emailVerified} hashedPassword={null} createdAt={createdAt} updatedAt={updatedAt} favoriteIds={favoriteIds}/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </>
    )
}

export default UserTable;