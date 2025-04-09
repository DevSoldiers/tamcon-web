import Container from "@/_components/container";
import { font_accent, font_body, font_header } from "@/app/fonts/fonts";
import Image from "next/image";

export default function Services() {
  return (
    <Container className="pt-[90.09px] md:pt-20">
      <h1
        className={`${font_accent.className} text-2xl md:text-4xl font-bold text-base-0 text-center`}
      >
        <span>[</span>
        Services
        <span>]</span>
      </h1>
      <h1
        className={`${font_header.className} max-w-[592px] text-4xl md:text-6xl font-bold text-base-0 text-left ml-auto leading-[110.00000000000001%] mt-12 md:mt-16`}
      >
        <span>[</span>
        Our expert team delivers tailored and high-performance solutions for
        businesses of all sizes.
        <span>]</span>
      </h1>
      {/* software development */}
      <Container className="bg-primary-25 py-4 md:py-[28.28px] grid gap-y-[22.28px ] md:grid-cols-2 mt-[90px] md:mt-16">
        <p
          className={`${font_accent.className} text-2xl md:text-5xl font-medium text-primary-600`}
        >
          Software Development
        </p>
        <article className="dev-desc flex flex-col gap-y-[27.27px] md:gap-y-[60.27px] justify-center items-center mt-[22.28px] md:mt-0">
          <Image
            alt="tamcon software solutions software development icon"
            src={"/others/sw_development.svg"}
            width={90}
            height={82}
          />
          <p
            className={`${font_body.className} text-xs md:text-base font-medium text-primary-600 text-right`}
          >
            At Tamcon, we develop custom software solutions designed to meet
            your specific needs, ensuring scalability, security, and seamless
            performance across platforms.
          </p>
        </article>
      </Container>
    </Container>
  );
}
