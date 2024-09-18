"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaFileAlt,
  FaCalculator,
  FaPaintBrush,
  FaTrademark,
  FaClock,
  FaUsers,
  FaPuzzlePiece,
  FaHeadset,
  FaPlayCircle,
} from "react-icons/fa";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Testimonial from "@/components/Testimonial";
import Hero from "@/components/Hero";
import ProductModal from "@/components/ProductModal";

interface Product {
  title: string;
  description: string;
  longDescription: string;
  icon: React.ElementType;
  color: string;
  buttonText: string;
  isLegalPublication?: boolean;
}

export default function Home() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const loadVideo = () => {
    setVideoLoaded(true);
  };

  const openModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const services: Product[] = [
    {
      title: "Penerbitan Legalitas",
      description: "Pendampingan pemenuhan legalitas usaha cabos dan cadirut untuk keamanan dan bonafitas dalam menjalankan usaha",
      longDescription: "", 
      icon: FaFileAlt,
      color: "green",
      buttonText: "Lihat Selengkapnya",
      isLegalPublication: true
    },
    {
      title: "Konsultasi Perpajakan",
      description: "Layanan konsultasi pajak profesional untuk membantu Anda memahami dan memenuhi kewajiban perpajakan dengan efisien",
      longDescription: "Tim ahli perpajakan kami siap membantu Anda dalam berbagai aspek perpajakan, termasuk perencanaan pajak, kepatuhan pajak, audit pajak, dan penyelesaian sengketa pajak. Kami memastikan bisnis Anda mematuhi peraturan perpajakan yang berlaku sambil mengoptimalkan efisiensi pajak.",
      icon: FaCalculator,
      color: "blue",
      buttonText: "Pelajari Lebih Lanjut"
    },
    {
      title: "Perizinan Usaha",
      description: "",
      longDescription: "Kami membantu mengurus detail-detail perizinan dalam usaha Anda .",
      icon: FaTrademark,
      color: "purple",
      buttonText: "Daftarkan Merek Anda"
    },
    {
      title: "Branding Usaha",
      description: "Layanan branding komprehensif untuk membangun identitas merek yang kuat dan menarik bagi bisnis Anda",
      longDescription: "Tim kreatif kami akan membantu Anda mengembangkan strategi branding yang efektif, termasuk desain logo, pemilihan palet warna, tipografi, dan elemen visual lainnya. Kami juga menyediakan panduan penggunaan merek untuk memastikan konsistensi dalam semua materi pemasaran dan komunikasi bisnis Anda.",
      icon: FaPaintBrush,
      color: "orange",
      buttonText: "Mulai Branding"
    }
  ];

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
            <h2 className="text-3xl font-bold text-center mb-10">Layanan Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                  onClick={() => openModal(service)}
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <service.icon className={`text-4xl text-${service.color}-600`} />
                      <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 flex-grow text-sm">{service.description}</p>
                    <button className="mt-4 text-blue-500 font-semibold hover:underline">
                      {service.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonial />
      </main>

      <ProductModal 
        isOpen={!!selectedProduct}
        onClose={closeModal}
        product={selectedProduct || { title: '', description: '', longDescription: '', isLegalPublication: false }}
      />
    </div>
  );
}
