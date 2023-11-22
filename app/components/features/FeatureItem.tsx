'use client'

import { IconType } from "react-icons";

interface FeatureItemProps {
    label: string;
    text: string;
    icon?: IconType;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ label, text, icon: Icon }) => {
    return (
        <div className="bg-white text-gray-800 rounded-lg text-left p-6 flex items-start">
            <div className="bg-blue-500 text-white shadow-lg rounded-full justify-center items-center inline-flex text-center p-2 text-xl w-12 h-12">
                {Icon && (
                    <Icon
                        size={24}
                        className="
                                w-10 
                                h-10 
                                text-deep-purple-accent-400"
                    />
                )}
            </div>
            <div className="ml-6 flex-1">
                <h6 className="text-blue-500 text-xl font-bold mt-3 mb-0">{label}</h6>
                <p className="text-gGray-500 mt-2 mb-4 leading-relaxed">{text}</p>
            </div>
        </div>





    )
}

export default FeatureItem