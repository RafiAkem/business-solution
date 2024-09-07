import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-black text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image
            src="/logo.png"
            alt="Logo Atalla"
            width={120}
            height={160}
            className="object-contain"
          />
          <span className="ml-3 font-bold text-xl">Atalla</span>
        </Link>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-gray-300 transition-colors">Beranda</Link></li>
          <li><Link href="/#tentang" className="hover:text-gray-300 transition-colors">Tentang Kami</Link></li>
          <li><Link href="/#layanan" className="hover:text-gray-300 transition-colors">Layanan Kami</Link></li>
        </ul>
        <Link href="/form" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Hubungi Kami
        </Link>
      </nav>
    </header>
  );
}