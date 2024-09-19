import ProductCard from "@/components/ProductCard";
import Link from "next/link";

const commonStyles = {
  grid: "grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto mt-12 lg:max-w-6xl",
};

export default function PenerbitanKoperasi() {
  const plans = [
    {
      title: "Paket A",
      price: "Rp 4.500.000",
      features: [
        "Pengecekan & Pemesanan Nama Koperasi",
        "Akta Pendirian",
        "SKT Kemenkumham",
        "Akun OSS RBA",
        "NIB (Nomor Induk Berusaha) / Izin Usaha",
        "NPWP",
        "Surat Keterangan Terdaftar di KPP",
        "Pembukaan Rekening Giro Bank",
      ],
    },
    {
      title: "Paket B",
      price: "Rp 7.500.000",
      features: ["Semua fitur Paket A", "Kontrak Sewa Virtual Office 1 Tahun"],
    },
    {
      title: "Paket C",
      price: "Rp 14.000.000",
      features: [
        "Semua fitur Paket B",
        "Pengelolaan Laporan Keuangan dan Perpajakan selama 1 Tahun",
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
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-serif">
            Penerbitan Legalitas Koperasi
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Layanan pendirian Koperasi untuk membantu Anda mendirikan badan
            usaha berbasis keanggotaan dengan prinsip gotong royong.
          </p>
        </div>
      </section>
      <div className={commonStyles.grid}>
        {plans.map((plan, index) => (
          <ProductCard key={index} {...plan} entityType="Penerbitan Koperasi" />
        ))}
      </div>
    </div>
  );
}
