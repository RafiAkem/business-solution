"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaArrowUp, FaTiktok, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[rgb(27,87,197)] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">EasyIzin</h3>
            <p className="mb-4">
              Solusi terpercaya untuk perizinan dan legalitas bisnis Anda.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/easyizin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@easyizinid"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaTiktok size={24} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61565388835649&mibextid=JRoKGi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaFacebookF size={24} />
              </a>
            </div>
          </div>
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
        <div className="mt-8 text-center">
          <p>&copy; 2023 EasyIzin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
