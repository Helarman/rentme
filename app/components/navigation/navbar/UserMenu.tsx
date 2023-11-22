'use client';

import {useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import { AiOutlineDown } from "react-icons/ai";

import { SafeUser } from "@/app/types";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";

import MenuItem from "./MenuItem";
import Avatar from "../../Avatar";

interface UserMenuProps {
  currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({
  currentUser
}) => {

  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ul className="lg:items-center lg:ml-auto flex flex-wrap list-none pl-0 mb-0 flex flex-col list-none pl-0 mb-0 lg:flex-row">
        <li>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hover:opacity-75 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-light transition-all duration-150 ease-in-out text-white"> 
            <AiOutlineDown /> <span className="ml-1 mr-5">{currentUser ? ` ${currentUser.name}  ` : ' My account  '}</span> {currentUser ? <Avatar src={currentUser?.image} /> : ``}</button>
        </li>

      </ul>

      {isOpen && (
        <div className="absolute shadow-mdw-3/12 md:w-2/12 bg-gray-800 text-white overflow-hidden lg:right-0 lg:top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                {currentUser?.role === `ADMIN` ? 
                <MenuItem
                  label="Dashboard"
                  onClick={() => router.push('/admin')}
                /> 
                : ''}
                <MenuItem
                  label="Profile"
                  onClick={() => router.push('/profile')}
                />
                <MenuItem
                  label="Trips"
                  onClick={() => router.push('/trips')}
                />
                <MenuItem
                  label="Favorites"
                  onClick={() => router.push('/favorites')}
                />
                <hr />
                <MenuItem
                  label="Logout"
                  onClick={() => signOut()}
                />
              </>
            ) : (
              <>
                <MenuItem
                  label="Login"
                  onClick={loginModal.onOpen}
                />
                <MenuItem
                  label="Sign up"
                  onClick={registerModal.onOpen}
                />
              </>
            )}
          </div>
        </div>
      )
      }
    </>
  );
}

export default UserMenu;