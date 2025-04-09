import Container from "@/_components/container";
import { software_dev_details } from "@/_content/service_page_content";
import { font_accent, font_body } from "@/app/fonts/fonts";
import Image from "next/image";

export default function DevDetails() {
  return (
    <section className="mt-[90px] md:mt-16 pb-[90px] md:pb-[120px]">
      {software_dev_details?.map((item, key) => (
        <Container
          key={key}
          className="border-b-[1px] border-primary-400 group cursor-pointer bg-primary-600  hover:bg-primary-25 py-4 md:py-[28.28px] grid gap-y-[22.28px ] md:grid-cols-2"
        >
          <p
            className={`${font_accent.className} text-2xl md:text-5xl font-medium 
            text-base-0 cursor-pointer group-hover:text-primary-600`}
          >
            {item.title}
          </p>
          <article className="dev-desc flex flex-col gap-y-[27.27px] md:gap-y-[60.27px] justify-end items-center md:items-end mt-[22.28px] md:mt-0">
            <Image
              alt={`tamcon software solutions ${item.title} icon`}
              src={"/others/sw_development.svg"}
              width={90}
              height={82}
            />
            <p
              className={`${font_body.className} text-xs md:text-base font-medium text-primary-600 text-right max-w-[480px]`}
            >
              {item.desc}
            </p>
          </article>
        </Container>
      ))}
    </section>
  );
}
