'use client';

import Select from 'react-select'

export type CarSelectValue = {
    label: string;
    value: string
}

interface CarSelectProps {
    value?: CarSelectValue;
    onChange: (value: CarSelectValue) => void;
}

const CarSelect: React.FC<CarSelectProps> = ({
    value,
    onChange
}) => {

    const vwOptions = [
        { value: "VWPassat", label: "Volkswagen Passat", },
        { value: "VWJetta", label: "Volkswagen Jetta" },
        { value: "VWTuareg", label: "Volkswagen Tuareg" },
        { value: "VWGolf", label: "Volkswagen Golf" },
        { value: "VWTiguan", label: "Volkswagen Tiguan" }
    ];

    const bmwOptions = [
        { value: "BMW3", label: "BMW 3-series" },
        { value: "BMW5", label: "BMW 5-series" },
        { value: "BMWX5", label: "BMW X5" }
    ];

    const groupedOptions = [
        {
            label: "Volkswagen",
            options: vwOptions
        },
        {
            label: "BMW",
            options: bmwOptions
        }
    ];
    return (

        <Select
        
            components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
            placeholder="Select car"
            isClearable
            options={groupedOptions}
            onChange={(value) => onChange(value as CarSelectValue)}
            value={value}
            formatOptionLabel={(option: any) => (
                <div className="
                    flex flex-row items-center gap-3">
                    <div>
                        {option.label}
                    </div>
                </div>
            )}
            classNames={{
                control: () => 'uppercase p-3 border-1 ',
                input: () => 'text-lg text-black ',
                option: () => 'text-lg'
            }}
            theme={(theme) => ({
                ...theme,
                borderRadius: 6,
                colors: {
                    ...theme.colors,
                    primary: '#3b82f6',
                    primary25: '#93c5fd'
                }
            })}
        />
    )
}

export default CarSelect;