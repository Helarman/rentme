'use client';

import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterProps {
  title: string;
  subtitle?: string;
  value: number;
  onChange: (value: number) => void;
}

const Counter: React.FC<CounterProps> = ({
  title,
  subtitle,
  value,
  onChange,
}) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === 1) {
      return;
    }

    onChange(value - 1);
  }, [onChange, value]);

  return (

    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="font-medium">{title}</div>
        <div className="font-light text-gray-600">
          {subtitle}
        </div>
      </div>

      <div className="flex flex-row items-center border border-gray-200 rounded gap-4">
          <button
            onClick={onReduce}
            type="button"
            className=" leading-10 text-gray-600 transition hover:opacity-75 ml-1"
          >
            <AiOutlineMinus />
          </button>

          <input
            type="number"
            id="Quantity"
            value={value}
            className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
          />

          <button
            type="button"
            className=" leading-10 text-gray-600 transition hover:opacity-75 mr-1"
            onClick={onAdd}
          >
            <AiOutlinePlus />
          </button>
        </div>
      </div>
  );
}

export default Counter;