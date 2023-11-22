'use client'

import { AiOutlineRise, AiOutlineFall } from "react-icons/ai"
import { IconType } from "react-icons";

interface CounterProps {
    title: String
    since: String
    count: number
    isSymbolFirst: boolean
    symbol: String
    difference: number
    isDifferenceFall: boolean
    icon: IconType
}



const Counter: React.FC<CounterProps> = ({ 
    title, 
    since, 
    count, 
    isSymbolFirst,
    symbol, 
    difference, 
    isDifferenceFall,
    icon: Icon 
}) => {
    return (
        <div className="inline-grid w-1/4  pr-5 pb-10">
            <article className="rounded-lg border border-gray-100 bg-white p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">{title}</p>

                        <p className="text-2xl font-medium text-gray-900">{isSymbolFirst ? `${symbol}${count}` : `${count} ${symbol}`}</p>
                    </div>

                    <span className="rounded-full bg-blue-100 p-3 text-blue-600">
                        <Icon className="h-8 w-8"/>
                    </span>
                </div>

                {isDifferenceFall ?
                    <div className="mt-1 flex gap-1 text-red-600">
                        <AiOutlineFall className="h4 w4" />
                        <p className="flex gap-2 text-xs">
                            <span className="font-medium">{difference}%</span>

                            <span className="text-gray-500"> Since {since}</span>
                        </p>
                    </div>
                    :
                    <div className="mt-1 flex gap-1 text-green-600">

                        <AiOutlineRise className="h-4 w-4" />

                        <p className="flex gap-2 text-xs">
                            <span className="font-medium">{difference}%</span>

                            <span className="text-gray-500"> Since {since}</span>
                        </p>
                    </div>
                }
            </article>
        </div>
    )
}

export default Counter;