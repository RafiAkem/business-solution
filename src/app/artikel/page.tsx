import ArticleCard from "@/components/ArticleCard";
import KontakCard from "@/components/KontakCard";

// Mock data articles
const articles = [
  {
    id: 1,
    title: "Cara Mudah Mendaftarkan Perusahaan",
    excerpt:
      "Pelajari langkah-langkah sederhana untuk mendaftarkan perusahaan Anda...",
    imageUrl: "/Artikel/artikel1.jpg",
  },
  {
    id: 2,
    title: "Tips Mengurus Pajak Bisnis",
    excerpt: "Temukan cara efektif mengelola pajak bisnis Anda tanpa stress...",
    imageUrl: "/Artikel/artikel1.jpg",
  },
  {
    id: 3,
    title: "Manfaat Virtual Office untuk Startup",
    excerpt:
      "Mengapa virtual office bisa menjadi solusi tepat untuk startup Anda...",
    imageUrl: "/Artikel/artikel1.jpg",
  },
  // Tambah Artikel
];

export default function ArtikelPage() {
  return (
    <div className="flex flex-col min-h-screen font-poppins">
      <main className="flex-grow bg-white">
        {/* Artikel Terbaru Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 mt-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-800">
              Artikel Terbaru
            </h1>
            <p className="text-xl text-center text-gray-600 mb-12">
              Temukan informasi terkini seputar bisnis dan perizinan
            </p>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {articles.map((article) => (
                    <ArticleCard key={article.id} {...article} />
                  ))}
                </div>
              </div>
              <div className="md:w-1/3">
                <KontakCard />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
