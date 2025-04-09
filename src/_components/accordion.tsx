"use client";

import { ReactNode, useState } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
  titleClassName?: string;
  contentClassName?: string;
  iconOpen?: ReactNode;
  iconClosed?: ReactNode;
}

export const Accordion = ({
  title,
  children,
  titleClassName = "",
  contentClassName = "",
  iconOpen,
  iconClosed,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultIcon = (
    <svg
      className={`w-4 h-4 transition-transform duration-200 ${
        isOpen ? "transform rotate-180" : ""
      }`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center w-full py-4 text-left ${titleClassName}`}
      >
        {title}
        {iconOpen && iconClosed
          ? isOpen
            ? iconOpen
            : iconClosed
          : defaultIcon}
      </button>
      <div
        className={`transition-all duration-200 overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className={`pb-4 ${contentClassName}`}>{children}</div>
      </div>
    </div>
  );
};
