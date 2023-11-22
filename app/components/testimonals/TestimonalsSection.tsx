'use client'

import Testimonal from "./Testimonal"

const TestimonalsList = [
    { name: 'Jonathan Peterson', avatar: 'https://res.cloudinary.com/dutv56tvx/image/upload/v1699924207/snnm8tsigzxib4oxmiay.jpg', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quo harum sapiente aspernatur beatae repellendus praesentium quasi animi corrupti.' },
    { name: 'Larry Smith', avatar: 'https://res.cloudinary.com/dutv56tvx/image/upload/v1699924207/snnm8tsigzxib4oxmiay.jpg', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quo harum sapiente aspernatur beatae repellendus praesentium quasi animi corrupti.' },
    { name: 'James Gonzalez', avatar: 'https://res.cloudinary.com/dutv56tvx/image/upload/v1699924207/snnm8tsigzxib4oxmiay.jpg', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quo harum sapiente aspernatur beatae repellendus praesentium quasi animi corrupti.' },
    { name: 'Ernest Blake', avatar: 'https://res.cloudinary.com/dutv56tvx/image/upload/v1699924207/snnm8tsigzxib4oxmiay.jpg', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quo harum sapiente aspernatur beatae repellendus praesentium quasi animi corrupti.' }
]

const TestimonalsSection = () => {
    return (
        <div className="w-full">
            <div className="relative py-20">
                <div className="container mx-auto px-4">
                    <div className="mb-12 flex flex-wrap -mx-4 justify-start">
                        <div className="px-4 relative w-full lg:w-8/12 text-left">
                            <h3 className="text-3xl font-bold mt-3 mb-1 text-gray-700">What people say?</h3>
                            <p className="mt-2 mb-4 text-xl leading-relaxed text-gray-500">The best? Certainly!</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        {TestimonalsList && TestimonalsList.map(({ name, avatar, text }) => (
                            <div className="px-4 relative w-full md:w-3/12">
                                <Testimonal name={name} avatar={avatar} text={text}/>
                            </div> 
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonalsSection