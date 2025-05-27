"use client";

import { font_accent, font_body, font_header } from "@/app/fonts/fonts";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    text: `Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim...`,
    name: "Full Name",
    company: "Tamcon Software",
  },
  {
    text: `Second testimonial text goes here, maybe from another user or different piece of feedback.`,
    name: "Another Person",
    company: "Another Company",
  },
  {
    text: `Third testimonial text goes here, giving more variety to the cards.`,
    name: "User Three",
    company: "Company Three",
  },
];

export default function Testimony() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }

  function handlePrev() {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }

  return (
    <section className="bg-secondary-600 px-3.5 py-16 md:py-[120px]">
      <p
        className={`${font_accent.className} text-2xl md:text-4xl font-extrabold text-center text-gray-600`}
      >
        <span>[</span>
        What Our Clients Say
        <span>]</span>
      </p>

      <section className="max-w-[1132px] mx-auto mt-[105px] md:mt-[120px] flex flex-col gap-y-20 md:flex-row md:gap-16 relative">
        {/* Testimonial cards container */}
        <div className="relative w-full max-md:w-[95%] h-[400px] md:h-[500px]">
          {testimonials.map((testimonial, index) => {
            // Calculate position and rotation for stacked cards
            const position =
              (index - currentIndex + testimonials.length) %
              testimonials.length;
            let transform = "";
            let zIndex = 0;
            let opacity = 1;

            if (position === 0) {
              // Current card (front and center)
              zIndex = 10;
            } else if (position === 1 || position === testimonials.length - 1) {
              // Adjacent cards (slightly rotated and offset)
              transform =
                position === 1
                  ? "rotate(3deg) translateX(20px)"
                  : "rotate(-3deg) translateX(-20px)";
              zIndex = 5;
              opacity = 0.8;
            } else {
              // Other cards (more rotated and further offset)
              transform =
                position < currentIndex
                  ? "rotate(-8deg) translateX(-40px) scale(0.9)"
                  : "rotate(8deg) translateX(40px) scale(0.9)";
              zIndex = 1;
              opacity = 0.6;
            }

            return (
              <article
                key={index}
                className={`bg-secondary-50 overflow-y-auto rounded-3xl p-6 md:p-9 absolute top-0 left-0 w-full h-full transition-all duration-500 ${
                  position === 0 ? "cursor-auto" : "cursor-pointer"
                }`}
                style={{
                  transform,
                  zIndex,
                  opacity,
                }}
                onClick={() => position !== 0 && setCurrentIndex(index)}
              >
                <p
                  className={`${font_body.className} text-xl md:text-3xl text-gray-600 font-medium p-6 md:p-9`}
                >
                  {testimonial.text}
                </p>
                <section className="flex flex-col gap-6 justify-self-end">
                  <div className="w-[90px] h-[90px] md:h-[120px] rounded-3xl md:w-[120px] aspect-auto bg-gray-200"></div>
                  <div>
                    <p
                      className={`${font_header.className} text-2xl font-bold text-gray-600`}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className={`${font_body.className} text-xs md:text-base font-regular font-medium text-gray-500`}
                    >
                      {testimonial.company}
                    </p>
                  </div>
                </section>
              </article>
            );
          })}
        </div>

        {/* arrow icons */}
        <article className="self-end flex gap-x-6 md:flex-col md:gap-y-12">
          <button
            onClick={handlePrev}
            className="rounded-full bg-secondary-700 w-12 h-12 aspect-auto flex justify-center items-center hover:bg-secondary-800 transition-colors"
          >
            <Image
              alt="arrow-top"
              src={"/others/arrow-top.svg"}
              width={13}
              height={18}
              className="md:rotate-0 rotate-[270deg]"
            />
          </button>
          <button
            onClick={handleNext}
            className="rounded-full bg-secondary-700 w-12 h-12 aspect-auto flex justify-center items-center hover:bg-secondary-800 transition-colors"
          >
            <Image
              alt="arrow-bottom"
              src={"/others/arrow-bottom.svg"}
              width={13}
              height={18}
              className="md:rotate-0 -rotate-[90deg]"
            />
          </button>
        </article>
      </section>
    </section>
  );
}
