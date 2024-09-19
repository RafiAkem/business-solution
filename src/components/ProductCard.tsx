import React from "react";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  price: string;
  features: string[];
  entityType: string;
}

export default function ProductCard({
  title,
  price,
  features,
  entityType,
}: ProductCardProps) {
  const whatsappNumber = "6289517889100";
  const message = encodeURIComponent(
    `Halo, Saya mendapatkan informasi dari website EasyIzin tentang ${title} untuk ${entityType}`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="bg-white rounded-lg p-6 flex flex-col h-full border-2 border-blue-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-gray-800 font-sans">{title}</h3>
        <div className="flex items-end mt-6">
          <p className="text-4xl font-bold text-blue-600 font-sans">{price}</p>
        </div>
        <ul className="mt-6 space-y-3 text-base font-medium text-gray-700">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <FaCheck className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
              <span className="font-sans">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex items-center justify-center px-4 py-3 mt-6 text-base font-bold text-white transition-all duration-300 bg-blue-600 border border-blue-600 rounded font-sans overflow-hidden group"
      >
        <span className="relative z-10 transition-colors duration-300 group-hover:text-blue-600">
          Pilih Paket
        </span>
        <span className="absolute inset-0 bg-white transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></span>
      </Link>
    </div>
  );
}
