import { font_accent, font_body, font_header } from "@/app/fonts/fonts";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="hero">
      <h1
        className={`${font_accent.className} text-2xl md:text-4xl font-extrabold text-primary-600 text-center`}
      >
        <span>[</span>
        About TAMCON
        <span>]</span>
      </h1>
      <Image
        src={"/others/about_hero.png"}
        sizes="fill"
        width={0}
        height={0}
        alt="tamcon office"
        className="w-full aspect-auto rounded-t-xl mt-12 md:mt-16"
      />
      <article className="desc-wrapper mt-9  grid md:grid-cols-2 md:gap-x-9 gap-y-8">
        <p
          className={`${font_header.className} text-5xl md:text-7xl font-bold text-gray-600`}
        >
          Innovating the Future, One Solution at a Time
        </p>
        <article className="about-desc flex flex-col gap-y-8 md:gap-y-2">
          <p
            className={`${font_body.className} text-base font-regular text-gray-600`}
          >
            At Tamcon Software Solutions, we are dedicated to transforming
            businesses through cutting-edge technology. With a strong focus on
            innovation, efficiency, and scalability, we provide excellent
            software solutions tailored to meet the evolving needs of industries
            in Ethiopia and Beyond.
          </p>
          <button
            className={`${font_header.className} uppercase text-base-0 border-white border-2 text-base font-bold bg-primary-600 px-6 py-4 rounded-xs max-w-[151px] max-h-[60px] w-full col-span-2`}
          >
            Book Meeting
          </button>
        </article>
      </article>
    </section>
  );
}
