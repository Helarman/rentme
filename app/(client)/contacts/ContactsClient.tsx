'use client'

import { toast } from 'react-hot-toast';
import Button from "../../components/buttons/Button";

const Contact = () => {

    const onSubmit = () => {
        //Mmessage sending code could be here
        toast.success('Message sent!');
    }

    return (
        <>
            <div className="w-full">
                <div
                    className="
                        relative 
                        pb-12 
                        pt-28"
                >
                    <div
                        className="
                            container 
                            mx-auto 
                            px-4"
                    >

                        <div
                            className="
                                mb-4
                                flex 
                                flex-wrap 
                                -mx-4 
                                justify-start"
                        >
                            <div
                                className="
                                    px-4 
                                    relative
                                     w-full 
                                     lg:w-8/12 
                                     text-left">
                                <h1
                                    className="
                                        text-3xl 
                                        font-bold 
                                        mt-3 
                                        mb-1 
                                        text-gray-700"
                                >
                                    Our Contacts
                                </h1>

                                <p
                                    className="
                                    mt-2 
                                    mb-4 
                                    text-xl 
                                    leading-relaxed 
                                    text-gray-500"
                                >
                                    Find us, contact us!
                                </p>
                            </div>
                        </div>

                        <div
                            className="
                                mx-auto 
                                flex 
                                sm:flex-nowrap 
                                flex-wrap"
                        >
                            <div
                                className="
                                    lg:w-2/3 
                                    md:w-1/2 
                                    bg-gray-300
                                    rounded-lg 
                                    overflow-hidden 
                                    sm:mr-10 
                                    p-10 
                                    flex 
                                    items-end 
                                    justify-start 
                                    relative">
                                <iframe
                                    className="
                                        absolute 
                                        inset-0 
                                        h-full
                                        w-full
                                        rounded-lg"

                                    src="https://www.openstreetmap.org/export/embed.html?bbox=13.297276496887209%2C52.507275372038826%2C13.315193653106691%2C52.51309994293086&amp;layer=mapnik&amp;marker=52.510187753977576%2C13.306235074996948">
                                </iframe>

                                <div
                                    className="
                                        bg-white 
                                        relative 
                                        flex 
                                        flex-wrap 
                                        py-6 
                                        rounded 
                                        shadow-md"
                                >
                                    <div
                                        className="
                                            lg:w-1/2 
                                            px-6"
                                    >
                                        <h2
                                            className="
                                                font-semibold 
                                                text-xs
                                                text-gray-700"
                                        >
                                            Adress
                                        </h2>

                                        <p className="
                                            mt-1
                                            text-gray-700"
                                        >
                                            Schillerstraße 40, 10627 Berlin, Germany
                                        </p>
                                    </div>

                                    <div
                                        className="
                                            lg:w-1/2 
                                            px-6 
                                            mt-4 
                                            lg:mt-0"
                                    >
                                        <h2
                                            className="
                                                font-semibold 
                                                text-xs
                                                text-gray-700"
                                        >
                                            Email
                                        </h2>

                                        <a
                                            href='mailto:info@email.com'
                                            className="
                                                hover:opacity-75
                                                mt-1
                                                text-gray-700"
                                        >
                                            info@email.com
                                        </a>

                                        <h2
                                            className="
                                                font-semibold 
                                                text-xs
                                                text-gray-700"
                                        >
                                            Phone
                                        </h2>

                                        <a
                                            href='tel:+12345678900'
                                            className="
                                                hover:opacity-75
                                                mt-1
                                                text-gray-700"
                                        >
                                            +1 (234) 567-89-00
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="
                                    lg:w-1/3 
                                    md:w-1/2 
                                    bg-white 
                                    flex 
                                    flex-col 
                                    md:ml-auto 
                                    w-full 
                                    md:py-8 
                                    md:mt-0"
                            >
                                <h2
                                    className="
                                        font-2xl 
                                        font-bold 
                                        mb-1 
                                        text-gray-700"
                                >
                                    Contact form
                                </h2>




                                <div
                                    className="
                                        relative 
                                        mb-4"
                                >
                                    <input
                                        required
                                        type="text"
                                        id="name"
                                        className="
                                                        block
                                                        rounded-t-lg 
                                                        px-2.5 
                                                        pb-2.5 
                                                        pt-5 
                                                        w-full 
                                                        text-sm 
                                                        text-gray-900  
                                                        border-0 
                                                        border-b-2 
                                                        border-gray-300 a
                                                        ppearance-none 
                                                        focus:outline-none 
                                                        focus:ring-0 
                                                        focus:border-blue-600 
                                                        peer"
                                        placeholder=" " />
                                    <label
                                        htmlFor="name"
                                        className="
                                                        absolute 
                                                        text-sm 
                                                        text-gray-500 
                                                        duration-300 
                                                        transform 
                                                        -translate-y-4 
                                                        scale-75 
                                                        top-4 
                                                        z-10 
                                                        origin-[0] 
                                                        left-2.5 
                                                        peer-focus:text-blue-600 
                                                        peer-placeholder-shown:scale-100 
                                                        peer-placeholder-shown:translate-y-0 
                                                        peer-focus:scale-75 
                                                        peer-focus:-translate-y-4"
                                    >
                                        Name
                                    </label>
                                </div>
                                <div className="relative mb-4">
                                    <input
                                        required
                                        type="email"
                                        id="email"
                                        className="
                                                        block
                                                        rounded-t-lg 
                                                        px-2.5 
                                                        pb-2.5 
                                                        pt-5 
                                                        w-full 
                                                        text-sm 
                                                        text-gray-900  
                                                        border-0 
                                                        border-b-2 
                                                        border-gray-300 a
                                                        ppearance-none 
                                                        focus:outline-none 
                                                        focus:ring-0 
                                                        focus:border-blue-600 
                                                        peer"
                                        placeholder=" " />
                                    <label
                                        htmlFor="email"
                                        className="
                                                        absolute 
                                                        text-sm 
                                                        text-gray-500 
                                                        duration-300 
                                                        transform 
                                                        -translate-y-4 
                                                        scale-75 
                                                        top-4 
                                                        z-10 
                                                        origin-[0] 
                                                        left-2.5 
                                                        peer-focus:text-blue-600 
                                                        peer-placeholder-shown:scale-100 
                                                        peer-placeholder-shown:translate-y-0 
                                                        peer-focus:scale-75 
                                                        peer-focus:-translate-y-4"
                                    >
                                        Email
                                    </label>
                                </div>
                                <div className="relative mb-4">
                                    <textarea
                                        required
                                        id="message"
                                        rows={5}
                                        className="
                                                        resize-none
                                                        block
                                                        rounded-t-lg 
                                                        px-2.5 
                                                        pb-2.5 
                                                        pt-5 
                                                        w-full 
                                                        text-sm 
                                                        text-gray-900  
                                                        border-0 
                                                        border-b-2 
                                                        border-gray-300 a
                                                        ppearance-none 
                                                        focus:outline-none 
                                                        focus:ring-0 
                                                        focus:border-blue-600 
                                                        peer"
                                        placeholder=" " ></textarea>
                                    <label
                                        htmlFor="message"
                                        className="
                                                        absolute 
                                                        text-sm 
                                                        text-gray-500 
                                                        duration-300 
                                                        transform 
                                                        -translate-y-4 
                                                        scale-75 
                                                        top-4 
                                                        z-10 
                                                        origin-[0] 
                                                        left-2.5 
                                                        peer-focus:text-blue-600 
                                                        peer-placeholder-shown:scale-100 
                                                        peer-placeholder-shown:translate-y-0 
                                                        peer-focus:scale-75 
                                                        peer-focus:-translate-y-4"
                                    >
                                        Message
                                    </label>
                                </div>
                                <Button
                                    type='primary'
                                    disabled={false}
                                    label="Send"
                                    onClick={onSubmit}

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
};

export default Contact;
