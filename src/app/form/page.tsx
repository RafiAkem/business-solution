'use client'

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import DotPattern from "@/components/magicui/dot-pattern";

export default function Form() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [nomorHP, setNomorHP] = useState('');
  const [pesan, setPesan] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const preMessage = "Halo, saya tertarik dengan layanan konsultasi Atalla. Berikut adalah detail saya:";
    const whatsappUrl = `https://wa.me/6281532700888?text=${encodeURIComponent(
      `${preMessage}\n\nNama: ${nama}\nEmail: ${email}\nNomor HP: ${nomorHP}\nPesan: ${pesan}\n\nMohon informasi lebih lanjut. Terima kasih!`
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow relative bg-gradient-to-br from-blue-50 via-green-50 to-teal-50 py-16">
        <DotPattern className="absolute inset-0 opacity-20 text-gray-400" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Hubungi Kami</h1>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {/* Informasi Kontak */}
            <div className="w-full md:w-1/3 bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Informasi Kontak</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>Alamat:</strong> Jl. Contoh No. 123, Jakarta Pusat</p>
                <p><strong>Telepon:</strong> (021) 1234-5678</p>
                <p><strong>Email:</strong> info@atalla.com</p>
                <p><strong>Jam Operasional:</strong></p>
                <ul className="list-disc list-inside pl-4">
                  <li>Senin - Jumat: 09:00 - 17:00</li>
                  <li>Sabtu: 09:00 - 13:00</li>
                  <li>Minggu: Tutup</li>
                </ul>
              </div>
            </div>

            {/* Formulir */}
            <form onSubmit={handleSubmit} className="w-full md:w-1/2 bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Formulir Konsultasi</h2>
              <div className="mb-6">
                <label htmlFor="nama" className="block mb-2 text-sm font-medium text-gray-700">Nama Lengkap:</label>
                <input
                  type="text"
                  id="nama"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="nomorHP" className="block mb-2 text-sm font-medium text-gray-700">Nomor HP:</label>
                <input
                  type="tel"
                  id="nomorHP"
                  value={nomorHP}
                  onChange={(e) => setNomorHP(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="pesan" className="block mb-2 text-sm font-medium text-gray-700">Kebutuhan:</label>
                <textarea
                  id="pesan"
                  value={pesan}
                  onChange={(e) => setPesan(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
                  rows={4}
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-3 rounded-md hover:from-blue-600 hover:to-teal-600 transition-all duration-300 shadow-md hover:shadow-lg">
                Kirim ke WhatsApp
              </button>
            </form>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2023 Atalla. Hak Cipta Dilindungi.</p>
      </footer>
    </div>
  );
}