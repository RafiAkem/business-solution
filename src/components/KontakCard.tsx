import Link from "next/link";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function KontakCard() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-semibold mb-6">
        Ada yang ingin anda tanyakan?
      </h2>
      <div className="space-y-4">
        <p className="flex items-center">
          <FaEnvelope className="mr-3 text-blue-500" />
          <span>
            <strong>Email:</strong> info@easyizin.com
          </span>
        </p>
        <p className="flex items-center">
          <FaPhone className="mr-3 text-blue-500" />
          <span>
            <strong>Telepon:</strong> +62 89517889100
          </span>
        </p>
        <p className="flex items-center">
          <FaMapMarkerAlt className="mr-3 text-blue-500" />
          <span>
            <strong>Alamat:</strong> Jl. Contoh No. 123, Jakarta
          </span>
        </p>
      </div>
      <Link
        href="/form"
        className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-full inline-block hover:bg-blue-600 transition-colors text-center w-full"
      >
        Konsultasi Gratis
      </Link>
    </div>
  );
}
