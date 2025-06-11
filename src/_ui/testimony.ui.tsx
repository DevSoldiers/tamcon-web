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
        <div
          className="relative w-full max-md:w-[95%] h-[400px] md:h-[500px] perspective-[1000px] group"
          onMouseEnter={(e) => {
            // On hover, slant all cards
            const articles = e.currentTarget.querySelectorAll("article");
            articles.forEach((el, idx) => {
              if (idx < currentIndex) {
                el.style.transform = "rotate(-12deg)";
              } else if (idx > currentIndex) {
                el.style.transform = "rotate(12deg)";
              } else {
                el.style.transform = "rotate(2deg)";
              }
            });
          }}
          onMouseLeave={(e) => {
            // On leave, reset all cards
            const articles = e.currentTarget.querySelectorAll("article");
            articles.forEach((el, idx) => {
              if (idx < currentIndex) {
                el.style.transform = "rotate(-6deg)";
              } else if (idx > currentIndex) {
                el.style.transform = "rotate(6deg)";
              } else {
                el.style.transform = "rotate(0deg)";
              }
            });
          }}
        >
          {testimonials.map((testimonial, index) => {
            const isActive = index === currentIndex;
            // Set initial and hover rotation for each card
            let initialRotate = 0;
            let hoverRotate = 0;
            if (!isActive) {
              // Stacked cards: left and right
              if (index < currentIndex) {
                initialRotate = -6;
                hoverRotate = -12;
              } else if (index > currentIndex) {
                initialRotate = 6;
                hoverRotate = 12;
              }
            } else {
              // Active card
              initialRotate = 0;
              hoverRotate = 2;
            }
            return (
              <article
                key={index}
                data-index={index}
                className={`absolute top-0 left-0 w-full h-full bg-secondary-50 rounded-3xl p-6 md:p-9 border border-black transition-transform duration-700 ease-in-out ${
                  isActive
                    ? "z-10 opacity-100 scale-100"
                    : "z-0 opacity-100 scale-100"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotate(${initialRotate}deg)`,
                }}
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

        <article className="self-end flex gap-x-6 md:flex-col md:gap-y-12">
          <button
            onClick={handlePrev}
            className="cursor-pointer rounded-full bg-secondary-700 w-12 h-12 flex justify-center items-center hover:bg-secondary-800 transition-colors"
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
            className="cursor-pointer rounded-full bg-secondary-700 w-12 h-12 flex justify-center items-center hover:bg-secondary-800 transition-colors"
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
