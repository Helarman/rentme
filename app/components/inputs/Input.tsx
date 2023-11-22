'use client';

import {
  FieldErrors,
  FieldValues,
  UseFormRegister
} from "react-hook-form";
import { FaEuroSign } from "react-icons/fa6";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  register,
  required,
  errors,
}) => {
  return (
    <div className="w-full relative">
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`
          block
          rounded-t-lg 
          px-2.5 
          pb-2.5 
          pt-5 
          w-full 
          text-sm 
          text-gray-900  
          border-0 
          border-b-2 
          border-gray-300 
          appearance-none 
          focus:outline-none 
          focus:ring-0 
          focus:border-blue-600 
          peer
          ${errors[id] ? 'border-rose-500' : 'border-gray-300'}
          ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
        `}
      />
      <label
        className={`
          absolute 
          text-sm 
          duration-300 
          transform 
          -translate-y-4 
          scale-75 
          top-4 
          z-10 
          origin-[0] 
          left-2.5 
          peer-focus:text-blue-600 
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75 
          peer-focus:-translate-y-4"
          ${errors[id] ? 'text-rose-500' : 'text-gray-500'}
        `}
      >
        {label}
      </label>
    </div>
  );
}

export default Input;