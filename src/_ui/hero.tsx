import * as motion from "motion/react-client";

import Container from "@/_components/container";
import { hero_content } from "@/_content/hero.content";
import { font_accent, font_body, font_header } from "@/app/fonts/fonts";
import Image from "next/image";

export function Hero() {
  return (
    <Container className="">
      <main className="md:grid grid-cols-2 gap-x-16 items-center">
        <article className="left max-w-[624px]">
          {hero_content?.map((content, key) => (
            <section className="flex flex-col" key={key}>
              <motion.article
                className="top_title_container mb-6 md:mb-0 flex flex-col w-fit self-end"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              >
                <div className="self-start">
                  <h1
                    className={`${font_header.className} uppercase font-bold text-6xl md:text-8xl text-primary-600 tracking-[2px]`}
                  >
                    {content.title}
                  </h1>
                </div>
                <div className="self-end max-w-[533px]">
                  <h1
                    className={`${font_accent.className} uppercase font-extrabold text-5xl md:text-6xl text-gray-400 text-right text-wrap`}
                  >
                    {content.subTitle}
                  </h1>
                </div>
              </motion.article>

              {/* description */}
              <motion.div
                className="mt-6 mb-6 md:mb-0"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              >
                <p
                  className={`${font_body.className} text-base text-regular font-regular text-left text-gray-600 leading-[100%]`}
                >
                  {content.description}
                </p>
              </motion.div>

              {/* button */}
              <motion.button
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
                className={`${font_header.className} text-base font-bold text-gray-25 py-4 px-6 mt-6 bg-primary-600 max-w-32 rounded-xs hover:bg-white hover:text-primary-600 border-primary-600 border-[1px] text-nowrap cursor-pointer`}
              >
                Book Meeting
              </motion.button>
            </section>
          ))}
        </article>
        <motion.section
          initial={{ scale: 0 }}
          transition={{ duration: 0.5 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1, cursor: "pointer" }}
          drag
          dragElastic={1}
          dragListener
          dragConstraints={false}
          dragSnapToOrigin
          className="right hidden md:block z-[50]"
        >
          <Image
            src="/others/hero_float.svg"
            className="w-full aspect-auto animate-float"
            alt="tamcon_floating_logo"
            width={0}
            height={0}
          />
        </motion.section>
      </main>
    </Container>
  );
}
