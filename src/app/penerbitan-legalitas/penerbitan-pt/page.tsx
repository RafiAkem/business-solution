import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

const commonStyles = {
  grid: "grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto mt-12 lg:max-w-6xl",
};

export default function PenerbitanPT() {
  const plans = [
    {
      title: "Basic PT",
      price: "Rp 5.000.000",
      features: [
        "Pendirian PT Dasar",
        "Akta Notaris",
        "SK Kemenkumham",
        "NPWP Badan",
        "SKT Pajak",
        "Konsultasi Gratis 2 Jam",
      ],
    },
    {
      title: "Pro PT",
      price: "Rp 7.500.000",
      features: [
        "Semua fitur Basic PT",
        "SIUP",
        "NIB",
        "Domisili Usaha",
        "Konsultasi Gratis 5 Jam",
      ],
    },
    {
      title: "Enterprise PT",
      price: "Rp 12.000.000",
      features: [
        "Semua fitur Pro PT",
        "Izin Khusus Industri",
        "Pendaftaran Merek Dagang",
        "Konsultasi Pajak",
        "Pendampingan 2 Bulan",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen">
      <Image
        src="/product-bg.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      {/* Non-sticky Navbar */}
      <nav className="relative z-10 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
              EasyIzin
            </Link>
            <div className="space-x-4">
              <Link href="/" className="text-gray-600 hover:text-blue-600">
                Beranda
              </Link>
              <Link href="/tentang-kami" className="text-gray-600 hover:text-blue-600">
                Tentang Kami
              </Link>
              <Link href="/layanan" className="text-gray-600 hover:text-blue-600">
                Layanan
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-semibold mb-4 text-white font-source-serif text-center">Penerbitan PT</h1>
          <p className="mb-4 text-white font-bold text-center font-lato">
            Layanan penerbitan PT (Perseroan Terbatas) untuk membantu Anda mendirikan perusahaan dengan struktur yang kuat dan profesional.
          </p>
        </div>
        <div className={commonStyles.grid}>
          {plans.map((plan, index) => (
            <ProductCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
}