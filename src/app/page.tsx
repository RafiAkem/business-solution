import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WordFadeIn from "@/components/magicui/word-fade-in";
import WordRotate from "@/components/magicui/word-rotate";
import Link from "next/link";
import {
  FaFileAlt,
  FaCalculator,
  FaPaintBrush,
  FaBuilding,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />

      <main className="flex-grow">
        <section
          id="beranda"
          className="relative text-center py-32 bg-[rgb(27,87,197)]"
        >
          <div className="relative z-10 font-dm-sans">
            <WordFadeIn
              words="EasyIzin Solusi Bisnis Terbaik untuk Anda"
              className="mb-6 text-4xl md:text-6xl font-bold text-white"
            />
            <div className="mb-4 text-xl text-gray-200 max-w-2xl mx-auto">
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
            <div className="flex justify-center space-x-4 mt-8 font-questrial">
              <Link
                href="/form"
                className="bg-white text-[rgb(27,87,197)] px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 pulse-animation"
              >
                Konsultasi Sekarang
              </Link>
              <a
                href="#layanan"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[rgb(27,87,197)] transition-all duration-300"
              >
                Pelajari Layanan Kami
              </a>
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
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">
                &ldquo;Layanan konsultasi mereka sangat membantu bisnis kami
                berkembang.&rdquo;
              </p>
              <cite className="font-semibold">- John Doe, CEO PT XYZ</cite>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">
                &ldquo;Tim yang profesional dan solusi yang diberikan sangat
                tepat sasaran.&rdquo;
              </p>
              <cite className="font-semibold">
                - Jane Smith, Founder ABC Corp
              </cite>
            </div>
          </div>
        </section>

        <section id="hubungi" className="py-24 bg-[rgb(27,87,197)] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Siap Mengembangkan Bisnis Anda?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Jangan biarkan kerumitan birokrasi menghambat pertumbuhan bisnis
              Anda. Tim ahli EasyIzin siap membantu Anda mengatasi setiap
              tantangan!
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="/form"
                className="bg-white text-[rgb(27,87,197)] px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 pulse-animation"
              >
                Konsultasi Gratis Sekarang
              </Link>
              <a
                href="https://wa.me/your_whatsapp_number"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Hubungi via WhatsApp
              </a>
            </div>
            <p className="mt-8 text-sm opacity-75">
              Kami siap membantu Anda 24/7. Hubungi kami sekarang dan raih
              kesuksesan bersama EasyIzin!
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
