import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from 'next/navigation';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    title: string;
    description: string;
    longDescription: string;
    isLegalPublication?: boolean;
  };
}

const legalPublicationTypes = [
  { title: "Penerbitan CV", image: "", slug: "penerbitan-cv" },
  { title: "Penerbitan PT", image: "", slug: "penerbitan-pt" },
  { title: "Penerbitan Koperasi", image: "", slug: "penerbitan-koperasi" },
  { title: "Penerbitan Yayasan", image: "", slug: "penerbitan-yayasan" },
  { title: "Penerbitan PMA", image: "", slug: "penerbitan-pma" },
  { title: "Penerbitan Firma", image: "", slug: "penerbitan-firma" },
];

export default function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  const router = useRouter();

  if (!isOpen) return null;

  const handleCardClick = (slug: string) => {
    router.push(`/penerbitan-legalitas/${slug}`);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="bg-white p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-2xl font-bold mb-4 text-center font-['Source_Sans_Pro',_sans-serif]">{product.title}</h2>
          {product.isLegalPublication ? (
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                {legalPublicationTypes.map((type, index) => (
                  <div key={index} className="text-center border border-gray-200 rounded-lg p-4 flex flex-col items-center">
                    <Image
                      src={type.image}
                      alt={type.title}
                      width={100}
                      height={100}
                      className="mb-2 rounded-lg"
                    />
                    <p className="text-sm font-semibold mb-2">{type.title}</p>
                    <button 
                      className="w-full mt-auto bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition-colors"
                      onClick={() => handleCardClick(type.slug)}
                    >
                      Pilih
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-gray-600 mb-4">{product.longDescription}</p>
          )}
          <button
            onClick={onClose}
            className="mt-4 text-blue-500 hover:text-blue-600"
          >
            Tutup
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
