import Container from "@/_components/container";
import { font_accent, font_body, font_header } from "@/app/fonts/fonts";
import Divider from "@/_components/Divider";

export default function JobOpportunities() {
  return (
    <Container className="max-w-full px-0 bg-primary-600 py-[90px] md:py-[120px] mt-16">
      <Container className="flex flex-col gap-16">
        <h1
          className={`${font_accent.className} text-2xl md:text-4xl font-bold text-base-0 text-center`}
        >
          <span>[</span>
          Career Opportunities
          <span>]</span>
        </h1>
        <p
          className={`${font_header.className} text-2xl md:text-4xl text-base-0 text-left`}
        >
          We are currently looking for...
        </p>
      </Container>
      <Container className="py-16 md:py-[150px]">
        <Divider className="py-3 md:py-3 md:grid-cols-[1fr_auto_1fr] gap-y-16 md:gap-x-4 border-b-[1px] border-primary-400">
          <article className="flex flex-col gap-y-[96px]">
            <div className="desc_wrapper">
              <h1
                className={`${font_header.className} text-4xl font-bold text-base-0`}
              >
                Job Title
              </h1>
              <p className={`${font_body.className} text-2xl text-base-0`}>
                Sub text
              </p>
            </div>
            <button
              className={`${font_header.className} uppercase bg-gray-25 rounded-xs text-base font-bold py-4 px-6 self-end`}
            >
              Apply
            </button>
          </article>
          <div className="w-full h-[1px] md:w-[1px] md:h-full bg-primary-400"></div>
          <article className="flex flex-col gap-y-[96px]">
            <div className="desc_wrapper">
              <h1
                className={`${font_header.className} text-4xl font-bold text-base-0`}
              >
                Job Title
              </h1>
              <p className={`${font_body.className} text-2xl text-base-0`}>
                Sub text
              </p>
            </div>
            <button
              className={`${font_header.className} uppercase bg-gray-25 rounded-xs text-base font-bold py-4 px-6 self-end`}
            >
              Apply
            </button>
          </article>
        </Divider>
      </Container>
      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-flex animate-marquee">
          <p
            className={`${font_accent.className} inline-block text-base-0 text-7xl md:text-9xl font-bold mr-3 md:mr-14`}
          >
            Career Opportunities
          </p>
          <p
            className={`${font_accent.className} inline-block text-base-0 text-7xl md:text-9xl font-bold`}
          >
            Career Opportunities
          </p>
        </div>
      </div>
    </Container>
  );
}
