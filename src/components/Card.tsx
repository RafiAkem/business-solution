import React from "react";
import ButtonLayanan from "@/components/ui/ButtonLayanan";

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
  Icon: React.ElementType;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  buttonText,
  onClick,
  Icon,
}) => {
  return (
    <div
      className="flex flex-col items-center justify-between w-full p-5 m-2 text-center cursor-pointer shadow-lg rounded-lg bg-gradient-to-r from-[#04051d] to-[#2b566e] h-full"
      onClick={onClick}
    >
      <div className="flex flex-col items-center mb-4">
        <div className="flex justify-center mb-4">
          <Icon className="text-5xl text-white" />
        </div>
        <div className="font-extrabold uppercase text-white mt-2 text-2xl tracking-wide whitespace-pre-line">
          {title}
        </div>
        <div className="text-gray-300 mt-2 text-base">{description}</div>
      </div>
      <ButtonLayanan
        text={buttonText}
        className="uppercase font-bold text-sm py-3 px-6 rounded-md shadow-md group"
      />
    </div>
  );
};

export default Card;
