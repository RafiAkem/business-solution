"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0081fd] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and company info */}
          <div className="flex items-center mb-4 md:mb-0">
            <Image
              src="/logo.jpg"
              alt="EasyIzin Logo"
              width={80}
              height={80}
              className="object-contain mr-4"
            />
            <div>
              <p className="text-sm">123 asiap St. 323</p>
              <p className="text-sm">Bandung, Jawa Barat, Indonesia</p>
              <p className="text-sm">(+62) 89654782430</p>
              <p className="text-sm">yc66zio@easyizin.com</p>
            </div>
          </div>

          {/* Social Links and Back to top button */}
          <div className="flex items-center space-x-8">
            <div>
              <h4 className="font-semibold mb-2">Social</h4>
              <Link
                href="https://instagram.com/easyizinid"
                className="flex items-center text-sm opacity-75 hover:opacity-100"
              >
                <FaInstagram className="mr-2" /> Instagram
              </Link>
            </div>
            <button
              onClick={scrollToTop}
              className="bg-white text-[#0081fd] p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
              aria-label="Back to top"
            >
              <FaArrowUp size={20} />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 text-sm opacity-60">
          © 2024 EasyIzin. RafiAkem Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
