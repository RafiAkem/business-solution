import ProductCard from "@/components/ProductCard";
import Link from "next/link";

const commonStyles = {
  grid: "grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto mt-12 lg:max-w-6xl",
};

export default function PenerbitanCV() {
  const plans = [
    {
      title: "Paket A",
      price: "Rp 2.500.000",
      features: [
        "Konsultasi Pendirian CV",
        "Pengecekan dan Pemesanan Nama CV",
        "SKT Kemenkumham",
        "NIB/IZIN USAHA",
        "NPWP",
        "SKT KPP",
        "PEMBUKAAN REKENING GIRO BANK",
      ],
    },
    {
      title: "Paket B",
      price: "Rp 4.500.000",
      features: ["Semua fitur Paket A", "Virtual Office 1 Tahun"],
    },
    {
      title: "Paket C",
      price: "Rp 10.000.000",
      features: [
        "Semua fitur Paket B",
        "Pengelolaan Laporan Keuangan dan Perpajakan Selama 1 Tahun",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-white">
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
              <Link
                href="/tentang-kami"
                className="text-gray-600 hover:text-blue-600"
              >
                Tentang Kami
              </Link>
              <Link
                href="/layanan"
                className="text-gray-600 hover:text-blue-600"
              >
                Layanan
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-serif">
              Penerbitan Legalitas CV
            </h2>
            <p className="mt-4 text-xl text-gray-600 font-sans">
              Layanan pendirian CV (Commanditaire Vennootschap) untuk membantu
              Anda mendirikan usaha dengan struktur kemitraan terbatas.
            </p>
          </div>
        </div>
      </section>
      <div className={commonStyles.grid}>
        {plans.map((plan, index) => (
          <ProductCard key={index} {...plan} entityType="Penerbitan CV" />
        ))}
      </div>
    </div>
  );
}
