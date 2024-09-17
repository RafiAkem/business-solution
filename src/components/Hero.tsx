"use client";
import WordFadeIn from "@/components/magicui/word-fade-in";
import WordRotate from "@/components/magicui/word-rotate";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative text-center min-h-screen flex items-center justify-center"
    >
      <Image
        src="/BG-Web2.png"
        fill
        alt="Hero Background"
        style={{
          objectFit: "cover",
        }}
        quality={100}
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 font-dm-sans container mx-auto px-4">
        <WordFadeIn
          words="EasyIzin Solusi Bisnis Terbaik untuk Anda"
          className="mb-6 text-3xl md:text-4xl lg:text-6xl font-bold text-white"
        />
        <div className="mb-4 text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto">
          <p className="mb-2">EasyIzin siap membantu Anda dalam Masalah</p>
          <WordRotate
            words={[
              "Penerbitan Legalitas Usaha",
              "Laporan perpajakan dan akuntansi",
              "Penyewaan kantor virtual & ruang kantor",
              "Branding usaha",
            ]}
            className="text-yellow-300 block"
            duration={3000}
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8 font-questrial">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/form"
              className="inline-block w-full sm:w-auto bg-white text-[rgb(27,87,197)] px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-xl text-lg sm:text-xl font-semibold border-2 border-white relative overflow-hidden group"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Konsultasi Sekarang
              </span>
              <span className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <a
              href="#layanan"
              className="inline-block w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-white hover:text-[rgb(27,87,197)] transition-all duration-300 text-lg sm:text-xl font-semibold"
            >
              Pelajari Layanan Kami
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
