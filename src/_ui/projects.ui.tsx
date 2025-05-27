import * as motion from "motion/react-client";

import Container from "@/_components/container";
import { font_accent, font_header } from "@/app/fonts/fonts";
import { RightArrowIcon } from "@/lib/icons";

export default function Projects() {
  return (
    <Container className="mt-9 md:mt-[90px] bg-primary-25 flex flex-col">
      <motion.h2
        className={`${font_accent.className} text-2xl md:text-4xl font-extrabold text-primary-600 mb-8`}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
      >
        <span>{"["}</span>Selected Projects<span>{"]"}</span>
      </motion.h2>

      <section className="projects_wrapper flex flex-col">
        {Array(3)
          .fill(0)
          .map((_, key) => (
            <motion.article
              key={key}
              className="projects_card py-8 md:pt-8 w-full h-[180px] md:h-[260px] overflow-clip border-b-[1px] border-b-primary-25 relative"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            >
              <h2
                className={`${font_header.className} proj_adv_title uppercase pl-8 text-3xl md:text-5xl text-gray-500 font-extrabold`}
              >
                Addis Neger Exhibition
              </h2>
              <article className="flex-1 bg-blue-500 h-full projects_card_clip cursor-pointer hover:absolute inset-0">
                <h2
                  className={`${font_header.className} pt-8 text-base-0 proj_adv_title uppercase pl-8 text-3xl md:text-5xl font-extrabold relative z-50`}
                >
                  [ Addis Neger Exhibition ]
                </h2>
              </article>
            </motion.article>
          ))}
      </section>

      <button
        className={`${font_header.className} cursor-pointer group flex gap-2 items-center text-base-0 border-primary-600 border-2 text-base font-bold bg-primary-600 px-6 py-4 rounded-xs max-w-[151px] w-full col-span-2 self-end mt-16 mb-[90px] md:mb-[93.25px] hover:bg-primary-25 hover:text-primary-600`}
      >
        See More
        <RightArrowIcon
          width={20}
          height={10}
          color="#ffffff"
          className="relative left-0 transition-all duration-500 delay-75 group-hover:left-2 group-hover:text-primary-600"
        />
      </button>
    </Container>
  );
}
