'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white p-4 relative z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image
            src="/logo.png"
            alt="Logo Atalla"
            width={120}
            height={160}
            className="object-contain"
          />
          <span className="ml-3 font-bold text-xl">Atalla</span>
        </Link>
        
        {/* Hamburger menu button */}
        <button 
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/" className="hover:text-gray-300 transition-colors">Beranda</Link></li>
          <li><Link href="/#tentang" className="hover:text-gray-300 transition-colors">Tentang Kami</Link></li>
          <li><Link href="/#layanan" className="hover:text-gray-300 transition-colors">Layanan Kami</Link></li>
        </ul>
        
        {/* Desktop CTA button */}
        <Link href="/form" className="hidden md:block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Hubungi Kami
        </Link>

        {/* Mobile menu */}
        <div className={`md:hidden fixed inset-0 bg-black bg-opacity-90 z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <ul className="flex flex-col items-center justify-center h-full space-y-8">
            <li><Link href="/" className="text-2xl hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Beranda</Link></li>
            <li><Link href="/#tentang" className="text-2xl hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Tentang Kami</Link></li>
            <li><Link href="/#layanan" className="text-2xl hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Layanan Kami</Link></li>
            <li>
              <Link href="/form" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-xl" onClick={() => setIsMenuOpen(false)}>
                Hubungi Kami
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}