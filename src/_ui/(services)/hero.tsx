import Container from "@/_components/container";
import { font_accent, font_header } from "@/app/fonts/fonts";

export default function ServicesHero() {
  return (
    <Container className="pt-[90.09px] md:pt-20">
      <h1
        className={`${font_accent.className} text-2xl md:text-4xl font-extrabold text-base-0 text-center`}
      >
        <span>[</span>
        Services
        <span>]</span>
      </h1>
      <h1
        className={`${font_header.className} max-w-[592px] text-4xl md:text-6xl font-bold text-base-0 text-left ml-auto leading-[110.00000000000001%] mt-12 md:mt-16 tracking-[2%]`}
      >
        <span>[</span>
        Our expert team delivers tailored and high-performance solutions for
        businesses of all sizes.
        <span>]</span>
      </h1>
    </Container>
  );
}
