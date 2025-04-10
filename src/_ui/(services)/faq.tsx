import Container from "@/_components/container";
import { font_accent, font_body } from "@/app/fonts/fonts";
import { faqs } from "@/_content/service_page_content";
import { Accordion } from "@/_components/accordion";

export default function Faq() {
  return (
    <Container className="max-w-full bg-primary-25 py-16 md:py-[120px]">
      <Container className="px-0 max-w-[1072px]">
        <h1
          className={`${font_accent.className} text-4xl font-extrabold text-primary-600 text-center`}
        >
          <span>[</span>
          FAQS
          <span>]</span>
        </h1>

        {faqs?.map((faq, key) => (
          <Accordion
            key={key}
            title={faq.question}
            titleClassName={`${font_body.className} text-2xl md:text-3xl font-bold text-gray-600 cursor-pointer`}
            contentClassName={`${font_body.className} text-xl md:text-2xl text-gray-500`}
          >
            {faq.answer}
          </Accordion>
        ))}
      </Container>
    </Container>
  );
}
