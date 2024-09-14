"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full h-[485px] relative bg-white">
      <div className="w-full h-[485px] left-0 top-0 absolute bg-[#0081fd]">
        <div className="container mx-auto h-full flex flex-col justify-between py-16 relative">
          <div className="flex justify-between items-start">
            {/* Logo and company info */}
            <div className="flex items-start">
              <div className="mr-8">
                <Image
                  src="/logo.jpg"
                  alt="EasyIzin Logo"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <div className="text-white mx-10">
                <p className="mb-2">123 asiap St. 323</p>
                <p>Bandung, Jawa Barat, Indonesia</p>
                <p className="mt-4">(+62) 89654782430</p>
                <p>yc66zio@easyizin.com</p>
              </div>
            </div>

            {/* Social Links and Back to top button */}
            <div className="flex items-start space-x-16">
              <div>
                <h4 className="text-white font-semibold mb-4">Social</h4>
                <ul className="text-white opacity-75 space-y-2">
                  <li>
                    <Link
                      href="https://instagram.com/easyizinid"
                      className="flex items-center"
                    >
                      <FaInstagram className="mr-2" /> Instagram
                    </Link>
                  </li>
                </ul>
              </div>
              <button
                onClick={scrollToTop}
                className="bg-white text-[#0081fd] p-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 self-start mt-8 mx-1"
                aria-label="Back to top"
              >
                <FaArrowUp size={24} />
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-white opacity-60 text-sm">
            © 2024 EasyIzin. RafiAkem Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
