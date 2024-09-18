import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

const commonStyles = {
  grid: "grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto mt-12 lg:max-w-6xl",
};

export default function PenerbitanCV() {
  const plans = [
    {
      title: "Basic CV",
      price: "Rp 1.000.000",
      features: [
        "Pendirian CV Dasar",
        "Akta Notaris",
        "NPWP Badan",
        "SKT Pajak",
        "Konsultasi Gratis 1 Jam",
      ],
    },
    {
      title: "Pro CV",
      price: "Rp 2.500.000",
      features: [
        "Semua fitur Basic CV",
        "SIUP",
        "TDP",
        "Domisili Usaha",
        "Konsultasi Gratis 3 Jam",
      ],
    },
    {
      title: "Enterprise CV",
      price: "Rp 5.000.000",
      features: [
        "Semua fitur Pro CV",
        "Izin Khusus Industri",
        "Pendaftaran Merek Dagang",
        "Konsultasi Pajak",
        "Pendampingan 1 Bulan",
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
        <h1 className="text-3xl font-bold mb-4 text-white">Penerbitan CV</h1>
        <p className="mb-4 text-white">
          Layanan penerbitan CV (Commanditaire Vennootschap) untuk membantu Anda mendirikan usaha dengan struktur kemitraan terbatas.
        </p>
        <div className={commonStyles.grid}>
          {plans.map((plan, index) => (
            <ProductCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
}