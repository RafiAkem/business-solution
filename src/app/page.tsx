"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaFileAlt,
  FaCalculator,
  FaPaintBrush,
  FaBuilding,
  FaClock,
  FaUsers,
  FaPuzzlePiece,
  FaHeadset,
  FaPlayCircle,
} from "react-icons/fa";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Testimonial from "@/components/Testimonial";
import Hero from "@/components/Hero";

export default function Home() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const loadVideo = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <main className="flex-grow">
        <Hero />

        {/* About EasyIzin Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-2/3 mb-8 md:mb-0">
                <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden">
                  {!videoLoaded ? (
                    <div
                      className="absolute inset-0 bg-gray-200 flex items-center justify-center cursor-pointer"
                      onClick={loadVideo}
                    >
                      <FaPlayCircle className="text-6xl text-gray-500" />
                      <span className="sr-only">Load video</span>
                    </div>
                  ) : (
                    <video
                      src="/path/to/your/video.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold mb-4">Apa itu EasyIzin?</h2>
                <p className="text-gray-600 mb-4 text-xl text-justify">
                  EasyIzin adalah platform inovatif yang menyederhanakan proses
                  perizinan dan legalitas bisnis di Indonesia. Kami hadir untuk
                  membantu para pengusaha dan pemilik bisnis mengatasi kerumitan
                  birokrasi dengan solusi yang efisien dan terpercaya.
                </p>
                <p className="text-gray-600 text-xl text-justify">
                  Dengan tim ahli kami yang berpengalaman, EasyIzin menawarkan
                  layanan komprehensif mulai dari pengurusan dokumen legal,
                  konsultasi pajak, hingga penyediaan kantor virtual. Kami
                  berkomitmen untuk menjadi mitra terpercaya dalam perjalanan
                  kesuksesan bisnis Anda.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose EasyIzin Section */}
        <section id="why-choose" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="lg:w-1/4">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  Kenapa Harus Memilih EasyIzin?
                </h2>
                <p className="text-lg text-gray-600 mb-6 text-justify">
                  Kami menyediakan solusi terbaik untuk kebutuhan perizinan
                  bisnis Anda dengan keunggulan-keunggulan yang tidak ditemukan
                  di tempat lain. EasyIzin hadir untuk mempermudah proses
                  perizinan dan legalitas bisnis Anda.
                </p>
                <Link
                  href="/form"
                  className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-bold hover:bg-blue-600 transition-all duration-300"
                >
                  Konsultasi Sekarang
                </Link>
              </div>
              <div className="lg:w-3/4">
                <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mobile-bento-grid">
                  {[
                    {
                      Icon: FaClock,
                      name: "Proses Cepat",
                      description:
                        "Optimalisasi setiap tahapan untuk proses perizinan yang cepat.",
                      background: (
                        <div className="absolute inset-0 bg-blue-100 opacity-20 rounded-xl" />
                      ),
                      className: "col-span-1",
                    },
                    {
                      Icon: FaUsers,
                      name: "Tim Ahli",
                      description:
                        "Didukung oleh profesional berpengalaman dalam perizinan bisnis.",
                      background: (
                        <div className="absolute inset-0 bg-green-100 opacity-20 rounded-xl" />
                      ),
                      className: "col-span-1",
                    },
                    {
                      Icon: FaPuzzlePiece,
                      name: "Solusi Lengkap",
                      description:
                        "Dari perizinan hingga konsultasi pajak, semua dalam satu atap.",
                      background: (
                        <div className="absolute inset-0 bg-purple-100 opacity-20 rounded-xl" />
                      ),
                      className: "col-span-1",
                    },
                    {
                      Icon: FaCalculator,
                      name: "Harga Transparan",
                      description:
                        "Harga yang jelas dan kompetitif tanpa biaya tersembunyi.",
                      background: (
                        <div className="absolute inset-0 bg-yellow-100 opacity-20 rounded-xl" />
                      ),
                      className: "col-span-1",
                    },
                    {
                      Icon: FaHeadset,
                      name: "Dukungan 24/7",
                      description:
                        "Tim kami siap membantu Anda kapan pun dibutuhkan. Kami berkomitmen untuk memberikan pelayanan terbaik setiap saat.",
                      background: (
                        <div className="absolute inset-0 bg-red-100 opacity-20 rounded-xl" />
                      ),
                      className: "col-span-1",
                    },
                  ].map((feature) => (
                    <BentoCard key={feature.name} {...feature} />
                  ))}
                </BentoGrid>
              </div>
            </div>
          </div>
        </section>

        <section id="layanan" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">
              Layanan Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                <FaFileAlt className="text-4xl text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Penerbitan Legalitas
                </h3>
                <p className="text-gray-600">
                  Kami membantu Anda dalam proses pengurusan dan penerbitan
                  dokumen legalitas usaha, termasuk SIUP, TDP, dan perizinan
                  lainnya.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                <FaCalculator className="text-4xl text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Konsultasi Pajak</h3>
                <p className="text-gray-600">
                  Tim ahli kami menyediakan layanan konsultasi pajak untuk
                  membantu Anda memahami dan memenuhi kewajiban perpajakan
                  dengan efisien.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                <FaPaintBrush className="text-4xl text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Branding Usaha</h3>
                <p className="text-gray-600">
                  Kami membantu mengembangkan identitas merek yang kuat untuk
                  bisnis Anda, termasuk desain logo, strategi branding, dan
                  pemasaran.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                <FaBuilding className="text-4xl text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Virtual Office</h3>
                <p className="text-gray-600">
                  Layanan kantor virtual kami menyediakan alamat bisnis
                  profesional dan fasilitas pendukung tanpa biaya sewa fisik
                  yang mahal.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Testimonial />
      </main>
    </div>
  );
}
