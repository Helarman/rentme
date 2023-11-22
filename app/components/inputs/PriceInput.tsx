'use client'

import RangeSlider from "react-range-slider-input"; // fix later or ignore
import "react-range-slider-input/dist/style.css";

export type PriceValue = number[];

interface PriceInputProps {
    value?: PriceValue;
    onChange: (value: PriceValue) => void;
}


const PriceInput: React.FC<PriceInputProps> = ({
    value,
    onChange
}) => {
    console.log(value)

    return (
        <div className="pt-5">
            <div className="w-full inline-flex pb-3">
                <div className="w-1/2">${value ? value[0] : '' }</div>

                <div className="text-right w-1/2 ">${value ? value[1 ] : '' }</div>
            </div>

            <RangeSlider min="0" max="9999" value={value} onInput={onChange} />
        </div>
    )
};

export default PriceInput