import Link from "next/link";
import Image from "next/image";

interface ArticleCardProps {
  id: number;
  title: string;
  excerpt: string;
  imageUrl?: string;
}

export default function ArticleCard({
  id,
  title,
  excerpt,
  imageUrl,
}: ArticleCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {imageUrl ? (
        <div className="relative w-full h-48">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400">No image available</span>
        </div>
      )}
      <div className="p-6">
        <Link href={`/artikel/${id}`}>
          <h2 className="text-xl font-semibold mb-2 hover:text-blue-500 transition-colors cursor-pointer">
            {title}
          </h2>
        </Link>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link href={`/artikel/${id}`} className="text-blue-500 hover:underline">
          Baca selengkapnya
        </Link>
      </div>
    </div>
  );
}
