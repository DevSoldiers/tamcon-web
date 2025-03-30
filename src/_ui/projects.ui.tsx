import Container from "@/_components/container";
import { font_accent, font_header } from "@/app/fonts/fonts";
import Image from "next/image";

export default function Projects() {
  return (
    <Container className="mt-9 bg-white flex flex-col">
      <h2
        className={`${font_accent.className} text-2xl md:text-4xl font-bold text-primary-600 mb-8`}
      >
        <span>{"{"}</span>Selected Projects<span>{"}"}</span>
      </h2>

      <section className="projects_wrapper flex flex-col">
        {Array(3)
          .fill(0)
          .map((_, key) => (
            <article key={key} className="projects_card py-8 md:pt-8 w-full h-[180px] md:h-[260px] overflow-clip border-b-[1px] border-b-primary-25">
              <h2
                className={`${font_header.className} uppercase text-3xl md:text-5xl text-gray-500`}
              >
                Addis Neger Exhibition
              </h2>
              <article className="flex-1 bg-blue-500 h-full projects_card_clip cursor-pointer"></article>
            </article>
          ))}
      </section>

      <button
        className={`${font_header.className} text-base-0 border-white border-2 text-base font-bold bg-primary-600 px-6 py-4 rounded-xs max-w-[151px] w-full col-span-2 self-end mt-16`}
      >
        See More
      </button>
    </Container>
  );
}
