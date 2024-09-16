import { useState, useEffect, RefObject } from "react";

function useInView(ref: RefObject<HTMLElement>, options = {}): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const currentRef = ref.current; // Menyimpan ref.current dalam variabel
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options); // Menyimpan options dalam variabel

    if (currentRef) {
      observer.observe(currentRef); // Menggunakan variabel currentRef
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Menggunakan variabel currentRef
      }
    };
  }, [ref, options]); // Menyimpan ref dan options dalam variabel

  return isIntersecting;
}

export default useInView;
