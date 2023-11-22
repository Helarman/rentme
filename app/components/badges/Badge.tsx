'use client'
import { IconType } from "react-icons";

export type BadgeType = 'primary' | 'secondary' | 'warning' | 'success' | 'danger';

interface BadgeProps {
    title: String
    rounded?: boolean
    outline?: boolean
    type: BadgeType
    icon?: IconType
}

const Badge: React.FC<BadgeProps> = ({
    title,
    rounded,
    outline,
    type,
    icon: Icon
}) => {

    const backgrounds = {
        primary: "bg-blue-500",
        secondary: "bg-gray-500",
        warning: "bg-amber-500",
        danger: "bg-red-500",
        success: "bg-green-500",
    };

    const background = backgrounds[type];

    const borders = {
        primary: "border-blue-500",
        secondary: "border-gray-500",
        warning: "border-amber-500",
        danger: "border-red-500",
        success: "border-green-500",
    };

    const border = borders[type];

    const colors = {
        primary: "text-blue-500",
        secondary: "text-gray-500",
        warning: "text-amber-500",
        danger: "text-red-500",
        success: "text-green-500",
    };

    const color = colors[type];

    return (
        <span
            className={`
                inline-flex 
                items-center 
                justify-center 
                mt-1
                px-2 
                py-1
                border-2 
                ${border}
                ${rounded ? 'rounded-full' : 'rounded'}
                ${outline ? 'bg-white' : background}
                ${outline ? color : 'text-white'}
            `}
        >
            {Icon ? <Icon /> : ``}
            <p className="ml-1 whitespace-nowrap text-sm">{title}</p>
        </span>
    )
}


export default Badge;