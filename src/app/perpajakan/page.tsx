import ProductCard from "@/components/ProductCard";
import Link from "next/link";

const commonStyles = {
  grid: "grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto mt-12 lg:max-w-7xl",
};

export default function Perpajakan() {
  const taxServices = [
    {
      title: "Laporan Perpajakan & Keuangan Badan Usaha - Paket A",
      price: "Rp 1.000.000 / bulan",
      features: [
        "Pengelolaan Laporan Perpajakan Rutin (All Tax) Bulanan dan Tahunan",
        "Penyusunan laporan keuangan bulanan dan tahunan",
        "Jawaban atas SP2DK dari DJP",
        "Mewakili wajib pajak saat pemeriksaan DJP",
        "Pembukaan faktur pajak (jika PKP)",
      ],
      note: "Untuk omset 50 JUTA - 1 MILYAR per tahun",
    },
    {
      title: "Laporan Perpajakan & Keuangan Badan Usaha - Paket B",
      price: "Rp 1.500.000 / bulan",
      features: [
        "Semua fitur Paket A",
        "Untuk omset 1 Milyar - 5 Milyar per tahun",
      ],
    },
    {
      title: "Laporan Perpajakan & Keuangan Badan Usaha - Paket C",
      price: "Rp 2.500.000 / bulan",
      features: [
        "Semua fitur Paket A",
        "Untuk omset 5 Milyar - 50 Milyar per tahun",
      ],
    },
    {
      title: "Pengurusan SPT Tahunan Badan Usaha",
      price: "Rp 2.500.000",
      features: [
        "Bukti Penerimaan Elektronik (Bukti Lapor)",
        "SPT Tahunan Badan Usaha",
        "Laporan Keuangan Fiskal",
      ],
    },
    {
      title: "Pengurusan SPT Tahunan Orang Pribadi",
      price: "Rp 1.000.000",
      features: [
        "Bukti Penerimaan Elektronik (Bukti Lapor)",
        "SPT Tahunan Orang Pribadi",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-white">
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
              Konsultasi Perpajakan
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Layanan konsultasi pajak profesional untuk membantu Anda memahami
              dan memenuhi kewajiban perpajakan dengan efisien.
            </p>
          </div>
        </div>
      </section>
      <div className={commonStyles.grid}>
        {taxServices.map((service, index) => (
          <ProductCard
            key={index}
            {...service}
            entityType="Konsultasi Perpajakan"
          />
        ))}
      </div>
    </div>
  );
}
