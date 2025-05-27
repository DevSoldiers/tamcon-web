import Container from "@/_components/container";
import { copyright_note } from "@/_content/footer_content";
import { font_header } from "@/app/fonts/fonts";
import Image from "next/image";

export default function Footer_Logo_section() {
  return (
    <Container className="grid gap-y-16 md:gap-y-[90px] pb-16 bg-primary-25 max-w-full">
      <Image
        src={"/Logo/tamcon.logo.svg"}
        width={0}
        height={0}
        alt="tamcon-logo"
        className="w-full aspect-auto"
      />
      <p className={`${font_header} text-base font-regular text-primary-400 `}>
        &#169;{copyright_note}
      </p>
    </Container>
  );
}
