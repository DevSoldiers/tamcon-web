import * as motion from "motion/react-client";

import { font_accent, font_body, font_header } from "@/app/fonts/fonts";
import Container from "./container";
import Image from "next/image";

export default function SystemofTheFuture() {
  return (
    <Container className="pt-[90px] pb-10 md:py-[150px] text-base-0 overflow-clip">
      <motion.section
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        className="services-intro grid grid-cols-2 relative gap-12 pt-[90px] md:pt-[150px]"
      >
        <div className="col-span-2">
          <motion.h1
            className={`${font_header.className} font-bold text-6xl md:text-9xl`}
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          >
            <span>{"{ "}</span>System Of
          </motion.h1>
        </div>
        <Image
          src="/others/mobile_3d_cloud.svg"
          width={0}
          height={0}
          alt="cloud-3d-icon"
          className="min-w-[90] md:max-w-[240px] min-md:w-full aspect-auto absolute right-0 -top-12"
        />
        <p
          className={`${font_body.className} font-regular text-base md:text-2xl leading-[100%] text-center col-span-2 max-w-[750px] md:w-full md:mx-auto`}
        >
          Software isn’t just about logic and lines of code. It’s about power,
          precision, and progress. We craft systems that think, adapt, and
          evolve—just like the world they serve. We engineer, design, and
          strategize to turn ideas into powerful digital experiences. From
          concept to execution, we build products that shape the future.
        </p>
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="col-span-2 justify-self-end "
        >
          <h2
            className={`${font_accent.className} font-extrabold spa text-5xl md:text-9xl leading-[100%] tracking-tighter`}
          >
            The Future.<span>]</span>
          </h2>
        </motion.div>
        <button
          className={`${font_header.className} cursor-pointer group flex gap-2 mt-[90px] md:mt-[120px] text-primary-600 text-base font-bold bg-gray-25 px-6 py-4 rounded-xs mx-auto max-w-[151px] w-full col-span-2`}
        >
          <p>Learn More</p>
          <Image
            src="/others/right_arrow.svg"
            width={20}
            height={10}
            alt="tamcon software solutions arrow icon"
            className="relative left-0 transition-all duration-500 delay-75 group-hover:left-2"
          />
        </button>
      </motion.section>
    </Container>
  );
}
