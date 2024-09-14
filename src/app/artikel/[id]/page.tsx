"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import KontakCard from "@/components/KontakCard";

interface Article {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
}

// Mock data untuk artikel (idealnya ini akan berasal dari API atau database)
const articles: Article[] = [
  {
    id: 1,
    title: "Cara Mudah Mendaftarkan Perusahaan",
    content: `
      <h2 class="text-2xl font-bold mb-4">Langkah-langkah Mendaftarkan Perusahaan</h2>
      <p class="mb-4">Mendaftarkan perusahaan mungkin terdengar rumit, namun dengan panduan yang tepat, proses ini bisa menjadi lebih mudah. Berikut adalah langkah-langkah yang perlu Anda ikuti:</p>
      <ol class="list-decimal list-inside mb-4 space-y-2">
        <li>Tentukan jenis badan usaha (PT, CV, atau lainnya)</li>
        <li>Siapkan dokumen-dokumen yang diperlukan</li>
        <li>Dapatkan Nomor Pokok Wajib Pajak (NPWP)</li>
        <li>Ajukan permohonan pendirian badan usaha ke Kementerian Hukum dan HAM</li>
        <li>Daftarkan perusahaan Anda ke sistem OSS (Online Single Submission)</li>
      </ol>
      <p>Dengan mengikuti langkah-langkah di atas, Anda dapat memastikan bahwa perusahaan Anda terdaftar secara resmi dan legal di Indonesia.</p>
    `,
    imageUrl: "/Artikel/artikel1.jpg",
  },
  // ... (add other articles as needed)
];

export default function ArticlePage() {
  const params = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const id = typeof params.id === "string" ? parseInt(params.id, 10) : -1;
    const foundArticle = articles.find((a) => a.id === id);
    if (foundArticle) {
      setArticle(foundArticle);
    } else {
      notFound();
    }
  }, [params.id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen font-poppins">
      <main className="flex-grow bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <article className="bg-white rounded-lg shadow-md overflow-hidden md:w-2/3">
              <div className="p-8">
                <h1 className="text-4xl font-bold mb-6 text-left text-gray-800">
                  {article.title}
                </h1>
                <div className="relative w-full aspect-video mb-8">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div
                  className="text-lg text-gray-700 leading-relaxed space-y-4 text-left"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
            </article>

            <div className="md:w-1/3">
              <KontakCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
