import Container from "@/_components/container";
import Divider from "@/_components/Divider";
import { font_accent, font_body, font_header } from "@/app/fonts/fonts";
import { RightArrowIcon } from "@/lib/icons";

export default function Winners() {
  return (
    <Divider className="md:h-[720px] gap-x-10 max-md:pb-16 bg-primary-25 border-t-[1px] border-primary-100">
      <article className="bg-primary-600 h-[390px] w-full md:h-full advert_section max-md:mb-8" />
      <Container className="md:px-0 md:w-full md:max-w-full flex flex-col items-baseline md:pr-[120px] max-md:mt-8">
        <article className="flex flex-col items-baseline md:pr-[120px] max-md:mt-8">
          <div className="relative">
            <h2
              className={`${font_header.className} text-6xl font-bold text-primary-600 uppercase`}
            >
              Digitalizing Ethiopian Lottery!
            </h2>
            <p
              className={`hidden md:block ${font_accent.className} text-3xl text-gray-500 p-7 border-gray-500 border-[1px] rounded-full text-center w-[200px] absolute -top-20 -right-[140px] rotate-[28deg]`}
            >
              Ipsum !
            </p>
          </div>
          <p
            className={`${font_body.className} text-base font-regular text-gray-500`}
          >
            We didn’t just digitize a lottery, we redefined how millions play,
            win, and experience luck.{" "}
          </p>
          <button
            className={`${font_header.className} cursor-pointer group flex gap-2 items-center text-base-0 border-primary-600 border-2 text-base font-bold bg-primary-600 px-6 py-4 rounded-xs max-w-[151px] w-full col-span-2 mt-16 mb-[90px] md:mb-[93.25px] hover:bg-primary-25 hover:text-primary-600`}
          >
            Learn More
            <RightArrowIcon
              width={20}
              height={10}
              color="#ffffff"
              className="relative left-0 transition-all duration-500 delay-75 group-hover:left-2 group-hover:text-primary-600"
            />
          </button>
        </article>
      </Container>
    </Divider>
  );
}
