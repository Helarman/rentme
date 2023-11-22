'use client'

import { useState } from "react";
import { FaAngleUp } from "react-icons/fa6";

interface AccordionItemProps {
  title: string;
  children: string;
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
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-semibold text-gray-700">{title}</p>
        <FaAngleUp className={`h-3 w-3 ${isOpen ? 'rotate-180' : ''
          }`} />
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;