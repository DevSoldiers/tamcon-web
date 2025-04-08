import { font_accent, font_body, font_header } from "@/app/fonts/fonts";
import Image from "next/image";

export default function Testimony() {
  return (
    <section className="bg-secondary-600 px-3.5 py-16 md:py-[120px]">
      <p
        className={`${font_accent} text-2xl md:text-4xl font-bold text-center`}
      >
        <span>[</span>
        What Our Clients Say
        <span>]</span>
      </p>

      <section className="max-w-[1132px] mx-auto  mt-[105px] md:mt-[120px] flex flex-col gap-y-20 md:flex-row md:gap-16">
        {/* slanted section content */}
        <article className="bg-secondary-50 rounded-3xl p-6 md:p-9">
          <p
            className={`${font_body} text-xl md:text-3xl text-gray-600 font-medium p-6 md:p-9`}
          >
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus.
          </p>
          <section className="flex flex-col gap-6">
            <div className="w-[90px] md:w-[120px] aspect-auto bg-gray-200"></div>
            <div>
              <p className={`${font_header} text-2xl font-bold text-gray-600`}>
                Full Name
              </p>
              <p
                className={`${font_body} text-xs md:text-base font-regular font-medium text-gray-500`}
              >
                Tamcon Software.
              </p>
            </div>
          </section>
        </article>
        {/* arrow icons */}
        <article className="self-end flex gap-x-6 md:flex-col md:gap-y-12 ">
          <div className="rounded-full bg-secondary-700 w-12 h-12 aspect-auto flex justify-center items-center">
            <Image
              alt="arrow-top"
              src={"/others/arrow-top.svg"}
              width={13}
              height={18}
            />
          </div>
          <div className="rounded-full bg-secondary-700 w-12 h-12 aspect-auto flex justify-center items-center">
            <Image
              alt="arrow-top"
              src={"/others/arrow-bottom.svg"}
              width={13}
              height={18}
            />
          </div>
        </article>
      </section>
    </section>
  );
}
