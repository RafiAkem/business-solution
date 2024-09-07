import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WordFadeIn from "@/components/magicui/word-fade-in";
import WordRotate from "@/components/magicui/word-rotate";
import DotPattern from "@/components/magicui/dot-pattern";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      
      <main className="flex-grow">
        <section id="beranda" className="relative bg-gradient-to-b from-gray-50 to-gray-100 text-center py-32 overflow-hidden">
          <DotPattern className="absolute inset-0 opacity-10" />
          <div className="relative z-10">
            <WordFadeIn
              words="Atalla Solusi Bisnis Terbaik untuk Anda"
              className="mb-6 text-4xl md:text-6xl font-bold text-gray-800"
            />
            <p className="mb-4 text-xl text-gray-600 max-w-2xl mx-auto">
              NRP siap membantu Anda dalam Masalah{' '}
              <WordRotate
                words={[
                  "Penerbitan Legalitas Usaha",
                  "Laporan perpajakan dan akuntansi",
                  "Penyewaan kantor virtual & ruang kantor",
                  "Branding usaha"
                ]}
                className="inline-block text-blue-600"
                duration={3000}
              />
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <a 
                href="#hubungi" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Konsultasi Sekarang
              </a>
              <a 
                href="#layanan" 
                className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Pelajari Layanan Kami
              </a>
            </div>
          </div>
        </section>

        <section id="layanan" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-10">Layanan Kami</h2>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Konsultasi Strategi</h3>
              <p>Kami membantu Anda merencanakan strategi bisnis yang efektif</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Analisis Pasar</h3>
              <p>Kami melakukan riset pasar untuk memahami target audiens Anda</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Optimasi Proses</h3>
              <p>Kami membantu mengoptimalkan proses bisnis Anda untuk efisiensi maksimal</p>
            </div>
          </div>
        </section>

        <section id="testimonial" className="bg-gray-100 py-16">
          <h2 className="text-3xl font-bold text-center mb-10">Apa Kata Klien Kami</h2>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">&ldquo;Layanan konsultasi mereka sangat membantu bisnis kami berkembang.&rdquo;</p>
              <cite className="font-semibold">- John Doe, CEO PT XYZ</cite>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">&ldquo;Tim yang profesional dan solusi yang diberikan sangat tepat sasaran.&rdquo;</p>
              <cite className="font-semibold">- Jane Smith, Founder ABC Corp</cite>
            </div>
          </div>
        </section>

        <section id="hubungi" className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Hubungi Kami</h2>
          <p className="mb-8">Siap untuk mengembangkan bisnis Anda? Hubungi kami sekarang!</p>
          <a href="/form" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Isi Formulir Konsultasi
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
