import React, { useRef } from "react";
import { FaUsers, FaRocket, FaFileAlt, FaBalanceScale } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const commonStyles = "text-white h-11 w-11";

const features = [
  {
    icon: <FaFileAlt className={commonStyles} />,
    title: "Pengurusan Legalitas",
    description:
      "Kami membantu Anda mengurus semua dokumen legal yang diperlukan untuk memulai dan menjalankan bisnis Anda dengan aman.",
  },
  {
    icon: <FaRocket className={commonStyles} />,
    title: "Proses Cepat",
    description:
      "Dengan EasyIzin, proses perizinan dan legalitas bisnis Anda dapat diselesaikan dengan cepat dan efisien.",
  },
  {
    icon: <FaUsers className={commonStyles} />,
    title: "Tim Ahli",
    description:
      "Tim kami terdiri dari para ahli di bidang hukum dan perizinan bisnis yang siap membantu Anda.",
  },
  {
    icon: <FaBalanceScale className={commonStyles} />,
    title: "Kepatuhan Hukum",
    description:
      "Kami memastikan bisnis Anda mematuhi semua peraturan dan hukum yang berlaku di Indonesia.",
  },
];

function Feature() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 1,
        delay: 1,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 relative"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <Image
        src="/BG-Web2.png"
        alt="Background"
        fill
        style={{ objectFit: "cover" }}
        quality={100}
        className="z-0"
      />
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-32 gap-y-12">
          <motion.div variants={itemVariants}>
            <h2 className="tracking-tighter text-white">
              <span className="font-sans text-4xl md:text-6xl">
                Percepat Proses Legalitas Bisnis Anda dengan
              </span>
              <span className="font-serif text-5xl italic md:block md:text-7xl">
                EasyIzin
              </span>
            </h2>
            <motion.p
              className="mt-8 font-sans text-lg font-normal leading-8 text-white"
              variants={itemVariants}
            >
              EasyIzin menyediakan layanan pengurusan legalitas dan perizinan
              bisnis yang cepat, mudah, dan terpercaya. Kami membantu Anda fokus
              pada pengembangan bisnis tanpa khawatir dengan kerumitan
              birokrasi.
            </motion.p>
            <div className="mt-8">
              <motion.div variants={buttonVariants}>
                <Link
                  href="/form"
                  title="Konsultasi"
                  className="inline-flex items-center justify-center px-5 py-2 font-sans text-base font-semibold transition-all duration-200 bg-white border-2 rounded-full sm:leading-8 text-blue-600 border-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white sm:text-lg focus:ring-offset-blue-600"
                  role="button"
                >
                  <FaRocket className="w-6 h-6 mr-2" />
                  Konsultasi Sekarang
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="space-y-5 overflow-hidden transition-all duration-200 border rounded-lg border-white bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20"
                >
                  <div className="px-4 py-5 sm:p-6 lg:p-8">
                    {feature.icon}
                    <h3 className="mt-3 font-sans text-2xl font-normal text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-base font-normal text-white">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Feature;
