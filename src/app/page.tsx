"use client";
import { useState } from "react";
import {
  FaFileAlt,
  FaCalculator,
  FaPaintBrush,
  FaTrademark,
  FaPlayCircle,
} from "react-icons/fa";
import Testimonial from "@/components/Testimonial";
import Hero from "@/components/Hero";
import ProductModal from "@/components/ProductModal";
import Feature from "@/components/Feature";
import { useRouter } from "next/navigation";

interface Product {
  title: string;
  description: string;
  longDescription: string;
  icon: React.ElementType;
  color: string;
  buttonText: string;
  isLegalPublication?: boolean;
  link?: string;
}

export default function Home() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const router = useRouter();

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
      description:
        "Pendampingan pemenuhan legalitas usaha cabos dan cadirut untuk keamanan dan bonafitas dalam menjalankan usaha",
      longDescription: "",
      icon: FaFileAlt,
      color: "green",
      buttonText: "Lihat Selengkapnya",
      isLegalPublication: true,
    },
    {
      title: "Konsultasi Perpajakan",
      description:
        "Layanan konsultasi pajak profesional untuk membantu Anda memahami dan memenuhi kewajiban perpajakan dengan efisien",
      longDescription:
        "Tim ahli perpajakan kami siap membantu Anda dalam berbagai aspek perpajakan, termasuk perencanaan pajak, kepatuhan pajak, audit pajak, dan penyelesaian sengketa pajak.",
      icon: FaCalculator,
      color: "blue",
      buttonText: "Pelajari Lebih Lanjut",
      link: "/perpajakan",
    },
    {
      title: "Perizinan Usaha",
      description: "",
      longDescription:
        "Kami membantu mengurus detail-detail perizinan dalam usaha Anda .",
      icon: FaTrademark,
      color: "purple",
      buttonText: "Daftarkan Merek Anda",
    },
    {
      title: "Branding Usaha",
      description:
        "Layanan branding komprehensif untuk membangun identitas merek yang kuat dan menarik bagi bisnis Anda",
      longDescription:
        "Tim kreatif kami akan membantu Anda mengembangkan strategi branding yang efektif, termasuk desain logo, pemilihan palet warna, tipografi, dan elemen visual lainnya. Kami juga menyediakan panduan penggunaan merek untuk memastikan konsistensi dalam semua materi pemasaran dan komunikasi bisnis Anda.",
      icon: FaPaintBrush,
      color: "orange",
      buttonText: "Mulai Branding",
    },
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
        <Feature />

        <section id="layanan" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 tracking-wide">
              LAYANAN KAMI
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full"
                  onClick={() =>
                    service.link
                      ? router.push(service.link)
                      : openModal(service)
                  }
                >
                  <div className="p-8 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <service.icon
                        className={`text-5xl text-${service.color}-600`}
                      />
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-gray-600">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 flex-grow text-base mb-6">
                      {service.description}
                    </p>
                    <button className="mt-auto text-blue-500 font-semibold hover:underline text-lg">
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
        product={
          selectedProduct || {
            title: "",
            description: "",
            longDescription: "",
            isLegalPublication: false,
          }
        }
      />
    </div>
  );
}
