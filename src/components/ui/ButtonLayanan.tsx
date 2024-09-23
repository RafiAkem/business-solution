import React from "react";

interface ButtonLayananProps {
  text: string;
  className?: string;
}

const ButtonLayanan: React.FC<ButtonLayananProps> = ({ text, className }) => {
  return (
    <button
      className={`relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-blue-500 text-white rounded hover:bg-white group ${className}`}
    >
      <span className="w-48 h-48 rounded rotate-[-40deg] bg-white absolute bottom-0 left-0 -translate-x-full ease-out duration-[800ms] transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span className="relative w-full text-left font-bold font-sans text-sm md:text-lg transition-colors duration-[800ms] ease-in-out group-hover:text-blue-500">
        {text}
      </span>
    </button>
  );
};

export default ButtonLayanan;
