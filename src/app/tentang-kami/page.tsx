"use client";
import React, { useRef } from "react";
import Image from "next/image";
import useInView from "@/hooks/useInView";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import BoxReveal from "@/components/magicui/box-reveal";

export default function TentangKami() {
  const visiMisiRef = useRef<HTMLDivElement>(null);
  const isVisiMisiInView = useInView(visiMisiRef, { threshold: 0.1 });

  return (
    <div className="container mx-auto px-4 pt-24 sm:pt-48 pb-16 sm:pb-32">
      <h1 className="font-lato font-normal text-gray-600 text-lg sm:text-xl mb-2 text-center animate-fadeIn">
        TENTANG KAMI
      </h1>
      <div className="w-full max-w-4xl mx-auto mb-8 relative animate-slideUp">
        <p className="font-source-serif font-semibold text-black text-3xl sm:text-[48px] md:text-[56px] lg:text-[64px] text-center tracking-[0] leading-tight">
          The dream team of EasyIzin
        </p>
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2">
          <Image
            src="/GarisKuning.svg"
            alt="Underline"
            width={284}
            height={40}
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="relative w-full sm:w-[90%] mx-auto aspect-[4/3] sm:aspect-[16/9] mt-8 sm:-mt-20">
        {/* Background div - without animation */}
        <div className="w-[80%] sm:w-[600px] h-[70%] sm:h-[336px] bg-[#dedede] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl">
          <div className="inline-flex items-start gap-4 relative top-10 left-11">
            <div className="relative flex-[0_0_auto]" />
          </div>
        </div>
        {/* Image container */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <Image
            src="/Transparen.png"
            alt="Dream Team"
            fill
            style={{ objectFit: "contain" }}
            className="relative z-10"
          />
        </div>
        {/* Text container untuk mobile */}
        <div className="absolute left-0 right-0 top-[95%] sm:top-full mt-2 sm:mt-6 sm:hidden flex justify-between px-4">
          {/* Left text */}
          <div className="text-center">
            <p className="font-source-serif font-semibold text-base sm:text-lg">
              Attala Izzataka
            </p>
            <p className="font-source-serif text-sm sm:text-base text-gray-600">
              Co-Founder Of EasyIzin
            </p>
          </div>
          {/* Right text */}
          <div className="text-center">
            <p className="font-source-serif font-semibold text-base sm:text-lg">
              Muhammad Farhan
            </p>
            <p className="font-source-serif text-sm sm:text-base text-gray-600">
              Founder Of EasyIzin
            </p>
          </div>
        </div>
        {/* Text untuk Desktop/Layar besar */}
        <div className="hidden sm:block">
          {/* Left text*/}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-1/4 sm:translate-x-1/2 text-center">
            <GradualSpacing
              text="Attala Izzataka"
              className="font-source-serif font-semibold text-xl sm:text-2xl"
              duration={0.3}
              delayMultiple={0.02}
            />
            <GradualSpacing
              text="Co-Founder Of EasyIzin"
              className="font-source-serif text-base sm:text-lg text-gray-600"
              duration={0.3}
              delayMultiple={0.02}
            />
          </div>
          {/* Right text */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/4 sm:-translate-x-1/2 text-center">
            <GradualSpacing
              text="Muhammad Farhan"
              className="font-source-serif font-semibold text-xl sm:text-2xl"
              duration={0.3}
              delayMultiple={0.02}
            />
            <GradualSpacing
              text="Founder Of EasyIzin"
              className="font-source-serif text-base sm:text-lg text-gray-600"
              duration={0.3}
              delayMultiple={0.02}
            />
          </div>
        </div>
      </div>

      {/*Visi Misi */}
      <div
        ref={visiMisiRef}
        className={`mt-24 transition-opacity duration-1000 ${
          isVisiMisiInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col gap-16">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="flex-1">
              <BoxReveal boxColor="#1b57c5" duration={0.5}>
                <h1 className="text-4xl font-source-serif font-semibold mb-6 text-black">
                  Visi
                </h1>
              </BoxReveal>
              <BoxReveal boxColor="#1b57c5" duration={0.5}>
                <p className="text-gray-700 text-xl font-sans leading-relaxed">
                  Menjadi platform terdepan dalam menyederhanakan dan
                  mengoptimalkan proses perizinan bisnis di Indonesia, mendukung
                  pertumbuhan ekonomi dan inovasi.
                </p>
              </BoxReveal>
            </div>
            <div className="flex-1 md:invisible"></div>
          </div>
          <div className="flex flex-col md:flex-row gap-16">
            <div className="flex-1 md:invisible"></div>
            <div className="flex-1">
              <BoxReveal boxColor="#1b57c5" duration={0.5}>
                <h1 className="text-4xl font-source-serif font-semibold mb-6 text-black">
                  Misi
                </h1>
              </BoxReveal>
              <BoxReveal boxColor="#1b57c5" duration={0.5}>
                <ul className="list-disc list-inside text-gray-700 space-y-4 text-xl font-sans leading-relaxed">
                  <li>
                    Menyediakan solusi perizinan yang efisien dan transparan
                  </li>
                  <li>
                    Membantu pengusaha fokus pada pengembangan bisnis mereka
                  </li>
                  <li>
                    Meningkatkan kepatuhan hukum dalam dunia bisnis Indonesia
                  </li>
                  <li>Mendorong digitalisasi proses administratif bisnis</li>
                </ul>
              </BoxReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
