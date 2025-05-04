import * as motion from "motion/react-client";

import Container from "@/_components/container";
import SystemofTheFuture from "@/_components/systemofthefuture";
import { font_accent, font_header } from "@/app/fonts/fonts";
import { RightArrowIcon } from "@/lib/icons";
import Image from "next/image";
import { OUR_SERVICES } from "@/_content/services_content";

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
      <Container className="flex flex-col max-md:max-w-full w-full text-base-0  border-t-1 border-primary-400 py-[90px] md:py-[150px] bg-transparent">
        <motion.h3
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className={`${font_accent.className} text-2xl md:text-4xl font-extrabold mb-16`}
        >
          [Services]
        </motion.h3>
        <motion.div
          className="flex max-lg:flex-wrap max-lg:justify-center grow cursor-pointer"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          {OUR_SERVICES.map((service, key) => (
            <article
              key={key}
              className="group w-full bg-base-0 hover:bg-orange-400 max-md:not-last:border-b border-primary-200 px-6 py-6 drop-shadow-sm shadow-[#2D2E831A] max-md:w-full h-[200px] md:h-[408px] relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] hover:w-[200%] hover:z-10"
            >
              {/* Background image - full cover with no clipping */}
              <div
                className={`absolute inset-0 bg-[url('/services/${
                  service.img + ".svg"
                }')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 bg-no-repeat{`}
                style={{
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  marginLeft: "0px", // Ensures no clipping
                  marginRight: "0px",
                }}
              ></div>

              {/* Service name - completely hidden on hover */}
              <div className="relative z-10 h-full flex flex-col justify-between transition-opacity duration-300 group-hover:opacity-0">
                <p
                  className={`${font_header.className} uppercase text-3xl text-primary-600 font-regular`}
                >
                  {service?.name}
                </p>
              </div>
            </article>
          ))}
        </motion.div>

        <motion.button
          className={`${font_header.className} cursor-pointer group flex gap-2 items-center text-base-0 border-white border-2 text-base font-bold bg-primary-600 px-6 py-4 rounded-xs max-w-[151px] w-full col-span-2 self-end mt-16 mb-[90px] md:mb-[93.25px] hover:bg-primary-25 hover:text-primary-600`}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          Learn More
          <RightArrowIcon
            width={20}
            height={10}
            color="#ffffff"
            className="relative left-0 transition-all duration-500 delay-75 group-hover:left-2 group-hover:text-primary-600"
          />
        </motion.button>
      </Container>
    </Container>
  );
}
