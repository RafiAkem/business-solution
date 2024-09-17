import React from "react";
import { CiPlay1 } from "react-icons/ci";
import Image from "next/image";

const commonButtonClasses =
  "inline-flex items-center justify-center text-white transition-all duration-200 border-2 border-white pointer-events-auto h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-lg hover:bg-white/20";
const commonTextClasses = "text-base font-semibold text-white";
const commonSubTextClasses = "mt-1 text-sm font-normal text-gray-300";

function Testimonial() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Apa Kata Mereka?
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
            EasyIzin memberikan kemudahan untuk mereka yang ingin memulai bisnis
            mereka sendiri.
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-5 mx-auto mt-12 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-3 sm:gap-6 lg:gap-8 xl:gap-10">
          {[
            {
              imgSrc: "/Testimonials/Testi1.jpg",
              name: "Rafi Ikhsanul Hakim",
              title: "Founder Of RalJoki",
            },
            {
              imgSrc: "/Testimonials/Testi2.jpg",
              name: "Rafi Ikhsanul Hakim",
              title: "Founder Of RalJoki",
            },
            {
              imgSrc: "/Testimonials/Testi3.jpg",
              name: "Rafi Ikhsanul Hakim",
              title: "Founder Of RalJoki",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="relative overflow-hidden group rounded-2xl"
            >
              <Image
                className="object-cover w-full transition-all duration-200 group-hover:scale-110 group-hover:-rotate-2"
                src={testimonial.imgSrc}
                alt=""
                width={400}
                height={225}
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-full px-6 py-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className={commonTextClasses}>{testimonial.name}</p>
                    <p className={commonSubTextClasses}>{testimonial.title}</p>
                  </div>

                  <button type="button" className={commonButtonClasses}>
                    <CiPlay1 className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
