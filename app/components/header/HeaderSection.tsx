'use client'

import Button from "../buttons/Button";
import Dropdown from "../navigation/search/CalendarDropdown";
import Search from "../navigation/search/CarSearch";


const Header = () => {
    return (
        <div className="bg-cover bg-center lg:h-5/6 bg-[url('https://res.cloudinary.com/dutv56tvx/image/upload/v1699840071/woghvhxqemub8pknoops.jpg')]">
            <div className="bg-gray-700/75 h-full w-full">
                <div className="container flex flex-col items-center justify-center text-white mx-auto text-center pt-20 pb-15 lg:pb-56 md:pt-36 md:px-10 lg:px-32  z-[10]">
                    <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl  z-[10]">Search for car hire,<br />book easily and quickly!</h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl z-[10]">Lorem ipsum dolor sit amet</p>

                </div>

                <Search />
            </div>
        </div>
    );
};

export default Header;