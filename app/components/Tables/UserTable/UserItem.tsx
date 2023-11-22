"use client"

import { useRouter } from 'next/navigation';

import UserDelete from '@/app/actions/deleteUserById';

import { UserType } from '@/app/types';
import Badge from "@/app/components/badges/Badge"


type ButtonHandlerProps = string;

type HandleDeleteProps = string;


const UserItem: React.FC<UserType> = ({ id, name, email, image, role }) => {

    const router = useRouter();


    const buttonHandler: React.FC<ButtonHandlerProps> = (id) => {
        router.push(`/listings/${id}`)
        return null;
    }


    const handleDelete: React.FC<HandleDeleteProps> = (id) => {
        UserDelete(id);
        return null;
    }

    /* temporary solution */
    const RoleBadge = () => { 
        if (role === `ADMIN`) {
            return <Badge type='danger' title={role}/>
        }
        if (role === `EDITOR`) {
            return <Badge type='warning' title={role}/>
        }
        return <Badge type='primary' title={role}/>
    }

    return (
        <div>

            <li className="flex flex flex-col lg:flex-row text-center md:text-left items-center gap-4 border p-5">
                <img
                    src={image ? image : `https://res.cloudinary.com/dutv56tvx/image/upload/v1697326916/dikeqk7z4k1nbcyznpjc.png`}
                    alt=""
                    className="h-16 rounded-full object-cover"
                />
                <div>
                    <h3 className="text-sm text-gray-900">{name}</h3>

                    <div className="mt-0.5 space-y-px text-sm text-gray-600">
                        <div>
                            <div className="inline">{email}</div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="inline ml-5"><RoleBadge/></div>
                </div>
            </li>
        </div>
    )
};

export default UserItem;