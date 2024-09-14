import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-[rgb(27,87,197)]">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <p className="text-2xl text-white mb-8">Halaman tidak ditemukan</p>
          <Link
            href="/"
            className="bg-white text-[rgb(27,87,197)] px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
