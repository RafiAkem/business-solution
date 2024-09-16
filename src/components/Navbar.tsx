"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { BiPhoneCall } from "react-icons/bi";
import FloatingWhatsApp from "./FloatingWhatsApp";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const isTentangKamiPage = pathname === "/tentang-kami";

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (href === "/") {
      router.push("/");
    } else if (href.startsWith("/#")) {
      const targetId = href.substring(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(href);
      }
    } else {
      router.push(href);
    }
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="relative">
      <header
        className={`${
          isHomePage
            ? "fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            : isTentangKamiPage
            ? "relative"
            : "fixed top-0 left-0 right-0 z-50"
        } ${
          isHomePage
            ? isScrolled
              ? "bg-[rgb(27,87,197)] bg-opacity-90 backdrop-blur-md"
              : "bg-transparent"
            : "bg-[rgb(27,87,197)]"
        }`}
      >
        <nav className="container mx-auto flex justify-between items-center p-4">
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <div className="relative w-32 h-24">
              <Image
                src="/LogoWhiteEasyIzin.png"
                alt="EasyIzin"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Hamburger menu button */}
          <button
            className={`md:hidden z-50 ${
              isMenuOpen ? "text-white" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop menu - Centered */}
          <ul className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
            {[
              { href: "/", label: "BERANDA" },
              { href: "/#layanan", label: "LAYANAN KAMI" },
              { href: "/#testimonial", label: "TESTIMONI" },
              { href: "/artikel", label: "ARTIKEL" },
              { href: "/tentang-kami", label: "TENTANG KAMI" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`hover-underline-animation font-bold text-white ${
                    isActive(href) ? "active-nav-item" : ""
                  }`}
                  onClick={(e) => handleNavClick(e, href)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA button */}
          <Link
            href="/form"
            className="hidden md:flex items-center bg-white text-[rgb(27,87,197)] px-6 py-2 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-source-sans-pro font-semibold"
          >
            <BiPhoneCall className="mr-2" />
            Hubungi Kami
          </Link>

          {/* Mobile menu */}
          <div
            className={`md:hidden fixed inset-0 bg-[rgb(27,87,197)]/90 backdrop-blur-md z-40 transition-all duration-300 ease-in-out ${
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <ul className="flex flex-col items-center justify-center h-full space-y-8">
              <li>
                <Link
                  href="/"
                  className="text-2xl text-white hover:text-gray-300 transition-colors font-bold"
                  onClick={(e) => handleNavClick(e, "/")}
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/#layanan"
                  className="text-2xl text-white hover:text-gray-300 transition-colors font-bold"
                  onClick={(e) => handleNavClick(e, "/#layanan")}
                >
                  Layanan Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/#testimonial"
                  className="text-2xl text-white hover:text-gray-300 transition-colors font-bold"
                  onClick={(e) => handleNavClick(e, "/#testimonial")}
                >
                  Testimoni
                </Link>
              </li>
              <li>
                <Link
                  href="/artikel"
                  className="text-2xl text-white hover:text-gray-300 transition-colors font-bold"
                  onClick={(e) => handleNavClick(e, "/artikel")}
                >
                  Artikel
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang-kami"
                  className="text-2xl text-white hover:text-gray-300 transition-colors font-bold"
                  onClick={(e) => handleNavClick(e, "/tentang-kami")}
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/form"
                  className="flex items-center bg-white text-[rgb(27,87,197)] px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-xl font-source-sans-pro font-semibold"
                  onClick={(e) => handleNavClick(e, "/form")}
                >
                  <BiPhoneCall className="mr-2" />
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <FloatingWhatsApp />
    </div>
  );
}
