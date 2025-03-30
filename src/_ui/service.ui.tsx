import Container from "@/_components/container";
import CardGrid from "@/_components/servicesAnimated.card";
import SystemofTheFuture from "@/_components/systemofthefuture";
import { font_accent, font_body, font_header } from "@/app/fonts/fonts";
import Image from "next/image";

export default function Services() {
  return (
    <Container className="bg-primary-600 max-w-full service-top-gear px-0 relative">
      <Image
        src="/others/mobile_top_gear.svg"
        alt="closer-gear"
        width={0}
        height={0}
        className="md:hidden w-full aspect-auto absolute top-0"
      />
      <Image
        src="/others/desktop_top_gear.svg"
        alt="closer-gear"
        width={0}
        height={0}
        className="hidden md:block w-full aspect-auto absolute top-0"
      />
      <Image
        src="/others/mobile_bottom_gear.svg"
        alt="closer-gear"
        width={0}
        height={0}
        className="w-full aspect-auto absolute bottom-0"
      />
      <SystemofTheFuture />
      <Container className="max-md:max-w-full w-full text-base-0  border-t-1 border-primary-400 py-[90px] md:py-[150px] bg-transparent">
        <h3
          className={`${font_accent.className} text-2xl md:text-4xl font-bold mb-16`}
        >
          [Services]
        </h3>
        <div className="flex max-lg:flex-wrap max-lg:justify-center grow">
          {Array(5)
            .fill(0)
            .map((_, key) => (
              <article
                key={key}
                className=" bg-base-0 max-md:not-last:border-b border-primary-200 px-6 py-6 drop-shadow-sm shadow-[#2D2E831A] max-md:w-full h-[200px] md:h-[480px]"
              >
                <p
                  className={`${font_header.className} uppercase text-3xl text-primary-600 font-regular`}
                >
                  Software Development
                </p>
              </article>
            ))}
        </div>
      </Container>
    </Container>
  );
}
