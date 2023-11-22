'use client'

import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionItemProps> = ({
  title,
  children
}) => {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full pt-4 pb-4  focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-gray-700 text-lg font-medium">{title}</p>
        {isOpen ? <FaAngleUp className= "h-4 w-4"/> : <FaAngleDown className= "h-4 w-4"/>}
      </button>
      {isOpen && (
        <div className="pt-4 pb-4">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;