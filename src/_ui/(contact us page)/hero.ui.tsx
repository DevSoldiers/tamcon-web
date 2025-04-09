import ContactForm from "@/_components/Contact.form";
import ContactLeftSection from "@/_components/Contact.leftsection";
import Container from "@/_components/container";
import Divider from "@/_components/Divider";
import { font_accent, font_body, font_header } from "@/app/fonts/fonts";

export default function ContactHero() {
  return (
    <Container className="flex flex-col gap-16">
      <h2
        className={`${font_accent.className} text-2xl md:text-4xl text-primary-600 font-bold text-center`}
      >
        <span>[</span>
        Contact Us
        <span>]</span>
      </h2>
      <Divider className="gap-y-16">
        <ContactLeftSection className="max-h-[640px] h-full flex flex-col justify-center items-start">
          <h1
            className={`${font_header.className} text-primary-600 font-bold text-5xl md:text-8xl`}
          >
            Let’s Work Together.
          </h1>
          <p
            className={`${font_body.className} text-base font-regular text-gray-500`}
          >
            Let’s build the future together. Drop us a message.
          </p>
        </ContactLeftSection>
        <ContactForm className="px-0" hide />
      </Divider>
    </Container>
  );
}
