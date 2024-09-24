"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTiktok, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { Icon: FaInstagram, href: "https://www.instagram.com/easyizin" },
    { Icon: FaTiktok, href: "https://www.tiktok.com/@easyizinid" },
    {
      Icon: FaFacebookF,
      href: "https://www.facebook.com/profile.php?id=61565388835649",
    },
  ];

  return (
    <footer className="w-full bg-[#09132e] font-sans py-12 px-4">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center justify-between space-y-12">
          <div className="text-center">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight mb-6">
              Siap Mengembangkan Bisnis Anda?
            </h2>

            <p className="w-full max-w-[659px] mx-auto text-center text-white text-base sm:text-lg font-normal leading-snug opacity-80 mb-10">
              Kami membantu Anda mengatasi kerumitan birokrasi dengan layanan
              profesional dan efisien. Fokus pada pertumbuhan bisnis Anda,
              biarkan kami menangani perizinannya.
            </p>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
              <Link
                href="/form"
                className="bg-white text-[#09132e] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              >
                Konsultasi Gratis Sekarang
              </Link>
              <a
                href="https://wa.me/6289517889100"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              >
                <FaWhatsapp className="inline-block mr-2" />
                Hubungi via WhatsApp
              </a>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full h-px bg-white opacity-25 mb-8" />

            <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
              <div className="w-full sm:w-[200px] flex justify-center sm:justify-start">
                <Image
                  src="/LogoWhiteEasyIzin.png"
                  alt="EasyIzin Logo"
                  width={150}
                  height={50}
                  className="object-contain"
                />
              </div>

              <div className="text-center text-white text-sm font-normal">
                © 2024 EasyIzin. All Rights Reserved.
              </div>

              <div className="flex space-x-4">
                {socialLinks.map(({ Icon, href }, index) => (
                  <Link
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[45px] h-[45px] flex items-center justify-center rounded-full border border-white border-opacity-25 hover:bg-white hover:bg-opacity-10 transition-all duration-300"
                  >
                    <Icon className="text-white" size={18} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
