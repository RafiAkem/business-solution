import React from "react";
import Image from "next/image";

export default function TentangKami() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">
              Tentang EasyIzin
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              EasyIzin adalah platform inovatif yang menyederhanakan proses
              perizinan dan legalitas bisnis di Indonesia. Kami hadir untuk
              membantu para pengusaha dan pemilik bisnis mengatasi kerumitan
              birokrasi dengan solusi yang efisien dan terpercaya.
            </p>
          </div>
        </section>

        {/* Vision and Mission Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Visi & Misi</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Visi</h3>
                <p className="text-gray-600">
                  Menjadi mitra terpercaya dalam mewujudkan ekosistem bisnis
                  yang efisien dan patuh hukum di Indonesia.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Misi</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Menyederhanakan proses perizinan bisnis</li>
                  <li>Memberikan layanan konsultasi yang komprehensif</li>
                  <li>Mendukung pertumbuhan UMKM di Indonesia</li>
                  <li>Meningkatkan kepatuhan hukum dalam berbisnis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Company Profile Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Profil Perusahaan
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 mb-4">
                  EasyIzin didirikan pada tahun 2023 oleh sekelompok profesional
                  yang memiliki pengalaman luas dalam bidang hukum, perpajakan,
                  dan teknologi. Kami berkomitmen untuk terus berinovasi dalam
                  memberikan solusi terbaik bagi klien kami.
                </p>
                <p className="text-gray-600">
                  Dengan tim ahli yang berpengalaman, EasyIzin menawarkan
                  layanan komprehensif mulai dari pengurusan dokumen legal,
                  konsultasi pajak, hingga penyediaan kantor virtual. Kami
                  bangga menjadi mitra terpercaya dalam perjalanan kesuksesan
                  bisnis Anda.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/logo.png"
                  alt="EasyIzin Team"
                  className="rounded-lg shadow-lg"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
