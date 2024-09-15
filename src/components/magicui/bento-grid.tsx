import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  description,
  Icon,
}: {
  name: string;
  className: string;
  background: ReactNode;
  description: string;
  Icon: React.ElementType;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      "bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300",
      className
    )}
  >
    <div className="absolute inset-0 opacity-10">{background}</div>
    <div className="z-10 flex flex-col gap-1 p-6">
      <Icon className="text-3xl text-blue-500 mb-4" />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export { BentoCard, BentoGrid };
