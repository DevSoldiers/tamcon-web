import * as motion from "motion/react-client";

import Container from "@/_components/container";
import Divider from "@/_components/Divider";
import { font_accent, font_body, font_header } from "@/app/fonts/fonts";
import { RightArrowIcon } from "@/lib/icons";

export default function Winners() {
  return (
    <Divider className="md:h-[720px] gap-x-10 max-md:pb-16 bg-primary-25 border-t-[1px] border-primary-100">
      <motion.article
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        className="bg-primary-600 h-[390px] w-full md:h-full advert_section max-md:mb-8"
      />
      <Container className="md:px-0 md:w-full md:max-w-full flex flex-col items-baseline md:pr-[120px] max-md:mt-8">
        <article className="flex flex-col items-baseline md:pr-[120px] max-md:mt-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <h2
              className={`max-[320px]:text-3xl ${font_header.className} text-6xl font-bold text-primary-600 uppercase`}
            >
              Digitalizing Ethiopian Lottery!
            </h2>
            <p
              className={`hidden md:block ${font_accent.className} text-3xl text-gray-500 p-7 border-gray-500 border-[1px] rounded-full text-center w-[200px] absolute -top-20 -right-[140px] rotate-[28deg]`}
            >
              Ipsum !
            </p>
          </motion.div>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className={`${font_body.className} text-base font-regular text-gray-500`}
          >
            We didn’t just digitize a lottery, we redefined how millions play,
            win, and experience luck.{" "}
          </motion.p>
          <motion.button
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className={`${font_header.className} cursor-pointer group flex gap-2 items-center text-base-0 border-primary-600 border-2 text-base font-bold bg-primary-600 px-6 py-4 rounded-xs max-w-[151px] w-full col-span-2 mt-16 mb-[90px] md:mb-[93.25px] hover:bg-primary-25 hover:text-primary-600`}
          >
            Learn More
            <RightArrowIcon
              width={20}
              height={10}
              color="#ffffff"
              className="relative left-0 transition-all duration-500 delay-75 group-hover:left-2 group-hover:text-primary-600"
            />
          </motion.button>
        </article>
      </Container>
    </Divider>
  );
}
