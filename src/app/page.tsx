"use client";
import { useState, useRef } from "react";
import {
  FaFileAlt,
  FaCalculator,
  FaPaintBrush,
  FaTrademark,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import Testimonial from "@/components/Testimonial";
import Hero from "@/components/Hero";
import ProductModal from "@/components/ProductModal";
import Feature from "@/components/Feature";
import { useRouter } from "next/navigation";
import Card from "@/components/Card";

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
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const router = useRouter();

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
      description:
        "Layanan profesional untuk membantu Anda mendapatkan izin usaha yang diperlukan dengan cepat dan efisien",
      longDescription:
        "Tim ahli kami akan memandu Anda melalui proses perizinan usaha yang kompleks, memastikan semua persyaratan terpenuhi dan dokumen lengkap untuk mempercepat proses persetujuan.",
      icon: FaTrademark,
      color: "purple",
      buttonText: "Urus Perizinan Sekarang",
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

  const aboutRef = useRef(null);
  const servicesRef = useRef(null);

  // Check Section apakah in view
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.1 });

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <main className="flex-grow">
        <Hero />

        {/* About EasyIzin Section */}
        <section id="about" className="py-16 bg-white" ref={aboutRef}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-2/3 mb-8 md:mb-0">
                <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden">
                  <motion.img
                    src="/LogoNoText.png"
                    alt="EasyIzin Logo"
                    className="absolute top-0 left-0 w-full h-full object-contain"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isAboutInView ? 1 : 0 }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-12">
                <motion.h2
                  className="text-3xl font-bold mb-4"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{
                    y: isAboutInView ? 0 : -20,
                    opacity: isAboutInView ? 1 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  Apa itu EasyIzin?
                </motion.h2>
                <motion.p
                  className="text-gray-600 mb-4 text-xl text-justify"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: isAboutInView ? 0 : 20,
                    opacity: isAboutInView ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  EasyIzin adalah platform inovatif yang menyederhanakan proses
                  perizinan dan legalitas bisnis di Indonesia. Kami hadir untuk
                  membantu para pengusaha dan pemilik bisnis mengatasi kerumitan
                  birokrasi dengan solusi yang efisien dan terpercaya.
                </motion.p>
                <motion.p
                  className="text-gray-600 text-xl text-justify"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: isAboutInView ? 0 : 20,
                    opacity: isAboutInView ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Dengan tim ahli kami yang berpengalaman, EasyIzin menawarkan
                  layanan komprehensif mulai dari pengurusan dokumen legal,
                  konsultasi pajak, hingga penyediaan kantor virtual. Kami
                  berkomitmen untuk menjadi mitra terpercaya dalam perjalanan
                  kesuksesan bisnis Anda.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose EasyIzin Section */}
        <Feature />

        <motion.section
          id="layanan"
          className="py-24 relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/siluet.jpg')",
          }}
          ref={servicesRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: isServicesInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              className="text-6xl md:text-7xl font-bold text-center mb-20 tracking-wide text-white"
              initial={{ y: -50, opacity: 0 }}
              animate={{
                y: isServicesInView ? 0 : -50,
                opacity: isServicesInView ? 1 : 0,
              }}
              transition={{ duration: 0.8 }}
            >
              LAYANAN KAMI
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{
                    y: isServicesInView ? 0 : 50,
                    opacity: isServicesInView ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    title={
                      service.title.includes("Usaha")
                        ? service.title.replace("Usaha", "\nUsaha")
                        : service.title
                    }
                    description={service.description}
                    buttonText={service.buttonText}
                    Icon={service.icon}
                    onClick={() =>
                      service.link
                        ? router.push(service.link)
                        : openModal(service)
                    }
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

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
