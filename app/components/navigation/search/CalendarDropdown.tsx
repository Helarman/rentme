'use client'

import { useState } from "react";

interface DropdownProps{
    title: String;
    altTitle: String;
    children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ children, title, altTitle }) => {

    const [isDropdowOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdowOpen)

    }
    const [isDateSelected, setDateSelected] = useState(false);

    const onClick = () => {
        toggleDropdown();
        setTimeout(() => {
            setDateSelected(true);
        }, 500);
    }

    return (
        <div className="relative ">
            <div
                className={` p-3  text-[#808080]  ${isDropdowOpen ? 'border-[#3b82f6] border-[2px]' : 'border-[#CCCCCC] hover:border-[#CDCDCD] border-[1px]'} rounded-[6px]`} 
            >
                <button
                    onClick={onClick}
                    className="px-4 py-2 text-lg/none text-[#808080] uppercase font-normal leading-6"
                >
                    {isDateSelected ? `${altTitle}` : `${title}`}
                  
                </button>
               
                
            </div>

            <div
                className={`
                    ${isDropdowOpen ? '' : 'hidden'}
                    absolute 
                    z-[1000]
                    mt-2
                    w-full
                    rounded-md 
                    bg-white 
                    shadow-lg
                `}
                role="menu"
            >
                <div className="p-2 ">
                    {children}
                </div>
            </div>
        </div>

    )
}

export default Dropdown;