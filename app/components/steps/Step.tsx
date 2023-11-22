'use client'

import { IconType } from "react-icons";

interface StepProps {
    title: string
    text: string
    icon?: IconType;
}

const Step: React.FC<StepProps> = ({
    title,
    text,
    icon: Icon
}) => {
    return (
        <>
            <div className="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
                {Icon && (
                    <Icon
                        size={24}
                        className="
                                w-12 
                                h-12
                                text-deep-purple-accent-400"
                    />
                )}
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-bold title-font text-blue-500 mb-1 text-xl">{title}</h2>
                <p className="leading-relaxed text-gray-700">{text}</p>
            </div>
        </>
    )
}

export default Step