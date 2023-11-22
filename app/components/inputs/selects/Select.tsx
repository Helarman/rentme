'use client';

import Select from 'react-select'

export type SelectValue = {
    label: string;
    value: string
}

interface SelectProps {
    value?: SelectValue;
    onChange: (value: SelectValue) => void;
    placeholder: string
    options: SelectValue[];
}

const GearboxSelect: React.FC<SelectProps> = ({
    value,
    options,
    placeholder,
    onChange
}) => {



    return (
        <Select
            components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
            placeholder={placeholder}
            isClearable
            options={options}
            onChange={(value) => onChange(value as SelectValue)}
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

export default GearboxSelect;