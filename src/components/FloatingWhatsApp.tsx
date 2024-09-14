"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

interface FloatingWhatsAppProps {
  message?: string;
}

export default function FloatingWhatsApp({
  message = "Halo, saya ingin bertanya",
}: FloatingWhatsAppProps) {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "6289517889100";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50 flex items-center overflow-hidden"
      style={{
        width: isHovered ? "240px" : "64px",
        height: "64px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex items-center transition-all duration-300"
        style={{
          transform: isHovered ? "translateX(4px)" : "translateX(0)",
        }}
      >
        <FaWhatsapp size={32} className="mx-4" />
        <span
          className="whitespace-nowrap transition-all duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateX(0)" : "translateX(20px)",
          }}
        >
          Call Center Penjualan
        </span>
      </div>
    </a>
  );
}
