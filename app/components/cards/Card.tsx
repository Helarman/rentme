'use client'

import { IconType } from "react-icons";

export type CardType = "primary" | "secondary" | "warning" | "success" | "danger";


interface CardProps {
    label: string
    description: string
    icon?: IconType
    cardType: CardType
    outline?: boolean
    rounded?: boolean
}

const Card: React.FC<CardProps> = ({
    label,
    description,
    icon: Icon,
    cardType,
    outline,
    rounded
}) => {

    const backgrounds = {
        primary: "bg-blue-500",
        secondary: "bg-gray-500",
        warning: "bg-amber-500",
        danger: "bg-red-500",
        success: "bg-green-500",
    };

    const background = backgrounds[cardType];

    const borders = {
        primary: "border-blue-500",
        secondary: "border-gray-500",
        warning: "border-amber-500",
        danger: "border-red-500",
        success: "border-green-500",
    };

    const border = borders[cardType];

    const colors = {
        primary: "text-blue-500",
        secondary: "text-gray-500",
        warning: "text-amber-500",
        danger: "text-red-500",
        success: "text-green-500",
    };

    const color = colors[cardType];

    return (
        <div

            className={`
                flex 
                items-center
                justify-center
                flex-col
                w-full 
                px-6 
                py-6 
                text-sm 
                shadow 
                justify-center
                uppercase 
                font-bold 
                block 
                border-2 
                ${border}
                ${rounded ? 'rounded-full' : 'rounded'}
                ${outline ? 'bg-white' : background}
                ${outline ? color : 'text-white'}
            `}
        >
            {Icon ? <Icon className="my-4 w-12 h-12" /> : ``}

            <h2
                className="
                        text-3xl 
                        font-bold 
                        mt-2
                    "
            >
                {label}
            </h2>

            <p>
                <small>
                    {description}
                </small>
            </p>

        </div>
    )
}

export default Card;