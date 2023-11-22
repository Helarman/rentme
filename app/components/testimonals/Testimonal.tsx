'use client'

interface TestimonalProps {
    name: string
    avatar: string
    text: string
}
const Testimonal: React.FC<TestimonalProps> = ({
    name,
    avatar,
    text
}) => {
    return (
        <div className=" rounded-lg p-6 transform duration-300 transition-all ease-in-out mx-auto shadow-lg ">
            <div className="text-left">
                <p className="leading-relaxed text-gray-700 mb-4">{text}</p>
                <div className="flex items-start">
                    <img src={avatar} className="rounded-full shadow-lg mt-3 mr-2 w-10 h-10" alt="..." />
                    <div className="flex-1">
                        <div className="justify-between items-center">
                            <h4 className="text-gray-700 font-semibold leading-tight mt-6">{name}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonal