import WordFadeIn from "@/components/magicui/word-fade-in";
import WordRotate from "@/components/magicui/word-rotate";
import Link from "next/link";
import Image from "next/image";
import {
  FaFileAlt,
  FaCalculator,
  FaPaintBrush,
  FaBuilding,
  FaClock,
  FaUsers,
  FaPuzzlePiece,
  FaHeadset,
} from "react-icons/fa";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          id="beranda"
          className="relative text-center min-h-screen flex items-center justify-center"
        >
          <Image
            src="/BG-Web2.png"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0 z-0"
          />
          <div className="relative z-10 font-dm-sans container mx-auto px-4">
            <WordFadeIn
              words="EasyIzin Solusi Bisnis Terbaik untuk Anda"
              className="mb-6 text-3xl md:text-4xl lg:text-6xl font-bold text-white"
            />
            <div className="mb-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
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
              <Link
                href="/form"
                className="bg-white text-[rgb(27,87,197)] px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 pulse-animation text-base sm:text-lg font-semibold"
              >
                Konsultasi Sekarang
              </Link>
              <a
                href="#layanan"
                className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-white hover:text-[rgb(27,87,197)] transition-all duration-300 text-base sm:text-lg font-semibold"
              >
                Pelajari Layanan Kami
              </a>
            </div>
          </div>
        </section>

        {/* About EasyIzin Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0">
                {/* Increased height of the media player */}
                <div
                  className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg max-w-3xl mx-auto"
                  style={{ height: "450px" }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/your-video-id"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold mb-4">Apa itu EasyIzin?</h2>
                <p className="text-gray-600 mb-4 text-xl">
                  EasyIzin adalah platform inovatif yang menyederhanakan proses
                  perizinan dan legalitas bisnis di Indonesia. Kami hadir untuk
                  membantu para pengusaha dan pemilik bisnis mengatasi kerumitan
                  birokrasi dengan solusi yang efisien dan terpercaya.
                </p>
                <p className="text-gray-600 text-xl">
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
                <p className="text-lg text-gray-600 mb-6">
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

        <section id="testimonial" className="bg-gray-100 py-16">
          <h2 className="text-3xl font-bold text-center mb-10">
            Apa Kata Klien Kami
          </h2>
          <div className="container mx-auto px-4">
            <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 bg-white">
              <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-900">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Sangat Mudah Digunakan
                  </h3>
                  <p className="my-4">
                    &quot;Jika Anda peduli dengan waktu Anda, saya sangat
                    merekomendasikan layanan ini.&quot;
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center">
                  <img
                    className="rounded-full w-9 h-9"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                    alt="profile picture"
                  />
                  <div className="space-y-0.5 font-medium text-left ms-3">
                    <div>Budi Santoso</div>
                    <div className="text-sm text-gray-500">
                      CEO di PT Maju Bersama
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-900">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Fondasi Solid untuk Bisnis
                  </h3>
                  <p className="my-4">
                    &quot;EasyIzin memberikan dasar yang kuat untuk memulai dan
                    mengembangkan bisnis kami dengan aman dan efisien.&quot;
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center">
                  <img
                    className="rounded-full w-9 h-9"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                    alt="profile picture"
                  />
                  <div className="space-y-0.5 font-medium text-left ms-3">
                    <div>Siti Rahma</div>
                    <div className="text-sm text-gray-500">
                      Founder di Kreasi Nusantara
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-900">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Proses yang Luar Biasa
                  </h3>
                  <p className="my-4">
                    &quot;Layanan EasyIzin sangat membantu dalam menyelesaikan
                    masalah perizinan yang rumit dengan cepat dan efisien.&quot;
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center">
                  <img
                    className="rounded-full w-9 h-9"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    alt="profile picture"
                  />
                  <div className="space-y-0.5 font-medium text-left ms-3">
                    <div>Andi Prasetyo</div>
                    <div className="text-sm text-gray-500">
                      Direktur di Tech Innovate
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-900">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Kolaborasi yang Efisien
                  </h3>
                  <p className="my-4">
                    &quot;Tim EasyIzin sangat responsif dan profesional. Mereka
                    benar-benar memahami kebutuhan bisnis kami.&quot;
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center">
                  <img
                    className="rounded-full w-9 h-9"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                    alt="profile picture"
                  />
                  <div className="space-y-0.5 font-medium text-left ms-3">
                    <div>Dewi Lestari</div>
                    <div className="text-sm text-gray-500">
                      Manager di Sustainable Solutions
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
