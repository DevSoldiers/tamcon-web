import Container from "@/_components/container";
import CardGrid from "@/_components/servicesAnimated.card";
import SystemofTheFuture from "@/_components/systemofthefuture";
import { font_accent, font_body, font_header } from "@/app/fonts/fonts";
import Image from "next/image";

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
      <SystemofTheFuture/>
              <Container className="max-md:max-w-full w-full text-base-0  border-t-1 border-primary-400 md:py-[150px] bg-transparent">
                <h3 className={`${font_accent.className} text-2xl font-bold mb-16`}>[Services]</h3>
                <CardGrid/>
      </Container>
    </Container>
  );
}
