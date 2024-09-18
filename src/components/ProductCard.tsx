import React from "react";
import { FaCheck } from "react-icons/fa";

const commonStyles = {
  card: "flex flex-col p-8 transition-transform duration-200 transform bg-gradient-to-br from-blue-500 to-blue-700 rounded-md hover:-translate-y-2",
  header: "text-lg font-normal text-white",
  price: "text-6xl font-normal text-white",
  period: "ml-1 text-base font-normal text-blue-200",
  description: "mt-4 text-base font-normal text-blue-100",
  divider: "mt-8 border-blue-400",
  listItem: "flex items-center",
  listIcon: "w-5 h-5 text-blue-200",
  listText: "ml-2 text-base font-normal text-white",
  gradientButton:
    "inline-flex items-center cursor-pointer justify-center w-full px-8 py-4 text-base font-normal text-blue-700 transition-all duration-200 rounded-md bg-white hover:bg-blue-100",
};

interface PlanProps {
  title: string;
  price: string;
  features: string[];
}

function ProductCard({ title, price, features }: PlanProps) {
  return (
    <div className={commonStyles.card}>
      <div className="relative flex-1">
        <h3 className={commonStyles.header}>{title}</h3>
        <div className="flex items-end mt-3">
          <p className={commonStyles.price}>{price}</p>
        </div>
        <hr className={commonStyles.divider} />
        <ul className="mt-8 space-y-5">
          {features.map((feature, i) => (
            <li key={i} className={commonStyles.listItem}>
              <FaCheck className={commonStyles.listIcon} />
              <span className={commonStyles.listText}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative mt-8">
        <button className={commonStyles.gradientButton}>
          Pilih Paket
        </button>
      </div>
    </div>
  );
}

export default ProductCard;