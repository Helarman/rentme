'use client'

import { useRouter } from 'next/navigation'
import { BsFacebook, BsTwitter, BsInstagram, BsArrowRight } from 'react-icons/bs'

interface FooterProps {
    admin?: boolean
    small?: boolean
}
interface LinkProps {
    label: string
    link: string
}

const Footer: React.FC<FooterProps> = ({
    admin,
    small,
}) => {

    const year = new Date().getFullYear()

    const router = useRouter();

    const Links: LinkProps[] = [
        { label: 'Home page', link: '/' },
        { label: 'Cars', link: '/admin/cars' },
        { label: 'Bids', link: '/admin/bids' },
        { label: 'Users', link: '/admin/users' },
    ]
    
    if (admin) {
        return (
            <>
                <footer className="block py-4">
                    <div className="container mx-auto ">
                        <hr className="mb-4 border-b-1 border-gray-200" />
                        <div className="flex flex-wrap items-center md:justify-between justify-center">
                            <div className="w-full md:w-4/12 px-4">
                                <div className="text-center mb-2 md:text-left md:mb-0">
                                    <div className="text-sm text-gray-500 font-semibold py-1 text-center md:text-left">
                                        <button className='text-gray-500 hover:opacity-75' onClick={() => router.push('/')}>rentme</button> © {year}
                                        <span className='ml-3'>by <a target="_blank" href='https://helarman.pro' className='text-blue-500 hover:opacity-75'>helarman</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-8/12 px-4">
                                <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                                    {Links && Links.map(({ label, link }) => (
                                        <li key={label}>
                                            <button
                                                onClick={() => router.push(link)}
                                                className="text-gray-700 opacity-75 text-sm font-semibold block py-1 px-3"
                                            >
                                                {label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
    return (

        <footer className="bg-gray-900 w-full">
            <div className="relative py-20">
                <div className="container mx-auto px-4">
                    <div
                        className="flex flex-col items-center gap-4 rounded-lg bg-blue-500 p-6 shadow-lg sm:flex-row sm:justify-between"
                    >
                        <strong className="text-xl text-white sm:text-xl">
                            Select a car and start renting!
                        </strong>

                        <a
                            className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-blue-500 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
                            href="/"
                        >
                            <span className="text-sm font-medium">Get Started!</span>
                            <BsArrowRight className="h-5 w-5" />

                        </a>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-white">
                                First col
                            </p>

                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <a
                                        className="transition text-white hover:text-white/75"
                                        href="/"
                                    >
                                        Lorem ipsum
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="transition text-white hover:text-white/75"
                                        href="/"
                                    >
                                        Proin interdum
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="transition text-white hover:text-white/75"
                                        href="/"
                                    >
                                        Lacinia commodo
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="transition text-white hover:text-white/75"
                                        href="/"
                                    >
                                        Vestibulum id
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-white">
                                Second col
                            </p>

                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <a
                                        className="transition text-white hover:text-white/75"
                                        href="/"
                                    >
                                        Efficitur
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="transition text-white hover:text-white/75"
                                        href="/"
                                    >
                                        Nullam efficitur
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="transition text-white hover:text-white/75"
                                        href="/"
                                    >
                                        Metus
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="transition text-white hover:text-white/75"
                                        href="/"
                                    >
                                        Donec dignissim
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-white">
                                Third col
                            </p>

                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <a
                                        className="transition text-white hover:text-white/75"
                                        href="/"
                                    >
                                        Etiam aliquam
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="transition text-white hover:text-white/75"
                                        href="/"
                                    >
                                        Varius
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="transition text-white hover:text-white/75"
                                        href="/"
                                    >
                                        Suspendisse lacinia
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="transition text-white hover:text-white/75"
                                        href="/"
                                    >
                                        Aliquet
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-white">
                                Social Links
                            </p>

                            <ul className="flex justify-center mt-8 gap-6 sm:justify-start">
                                <li>
                                    <a
                                        href="/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="transition  text-white hover:text-blue-500"
                                    >
                                        <span className="sr-only">Facebook</span>
                                        <BsFacebook className="h-6 w-6" />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="transition  text-white hover:text-blue-500"
                                    >
                                        <span className="sr-only">Instagram</span>
                                        <BsInstagram className="h-6 w-6" />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="transition text-white hover:text-blue-500"
                                    >
                                        <span className="sr-only">Twitter</span>
                                        <BsTwitter className="h-6 w-6" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16">

                        <div className="mt-16 sm:flex sm:items-center sm:justify-between">
                            <div
                                className="flex justify-center text-white sm:justify-start"
                            >
                                rentme
                            </div>

                            <p
                                className="mt-4 text-center text-sm text-gray-400 sm:mt-0 sm:text-right"
                            >
                                Copyright &copy; {year}. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;