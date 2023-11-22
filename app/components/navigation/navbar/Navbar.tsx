'use client'



import { SafeUser } from "@/app/types";


import UserMenu from "./UserMenu";

import { useRouter, usePathname } from "next/navigation";


import { useState, useEffect } from 'react'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


interface NavbarProps {
    currentUser?: SafeUser | null;
}
type ToggleMenuProps = boolean;


const Navbar: React.FC<NavbarProps> = ({
    currentUser,
}) => {
    const router = useRouter();

    const [isMenuOpen, setIsMenuOpen] = useState<ToggleMenuProps>(false);

    const NavLinks = [
        { label: 'Home', href: '/' },
        { label: 'Cars', href: '/cars' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Contacts', href: '/contacts' },
    ]

    const [color, setColor] = useState(false);

    const listenScrollEvent = () => {
        window.scrollY < 70 ? setColor(false) : setColor(true)
        }
    
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);
    
    const pathname = usePathname()
    const pathLength = pathname?.length;

    return (


        <div className="w-full h-16 fixed z-[100]">
            <nav className={`w-full z-50 flex flex-wrap items-center justify-between px-2 py-3 mb-3 bg-gray-800 ${color || pathLength && pathLength > 1 ? 'bg-gray-800' : 'lg:bg-transparent '}`}>
                <div className="flex container mx-auto flex flex-wrap items-center justify-between px-0 lg:px-4">
                    <button onClick={() => router.push('/')} className="text-sm font-bold leading-relaxed inline-flex items-center mr-4 py-2 whitespace-nowrap text-white" >
                        rentme
                    </button>

                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-auto cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-gray-400 rounded bg-transparent block outline-none focus:outline-none text-gray-300 lg:hidden" type="button">
                        {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </button>

                    <div className={`items-center w-full lg:flex lg:w-auto flex-grow duration-300 transition-all ease-in-out  ${isMenuOpen ? '' : 'hidden'} `}>
                        <ul className="lg:items-center flex flex-wrap list-none pl-0 mb-0 flex flex-col list-none pl-0 mb-0 lg:flex-row">
                            {NavLinks && NavLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <button onClick={() => router.push(href)} className="hover:opacity-75 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-light transition-all duration-150 ease-in-out text-white">
                                        {label}</button>
                                </li>
                            ))}
                        </ul>

                        <UserMenu currentUser={currentUser} />

                    </div>
                </div>
            </nav>
        </div>



    );
}


export default Navbar;