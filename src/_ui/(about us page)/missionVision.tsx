import Container from "@/_components/container";
import Divider from "@/_components/Divider";
import Image from "next/image";
import { font_accent, font_body } from "@/app/fonts/fonts";

export default function AboutMissionVision() {
  return (
    <Container className="max-w-full bg-primary-600 mt-12 md:mt-[90px]">
      <Container>
        <Divider className="py-16 md:py-[150px] md:grid-cols-[1fr_auto_1fr] gap-y-16 md:gap-x-16">
          <article className="mission flex flex-col gap-y-12">
            <h2
              className={`${font_accent.className} text-3xl md:text-4xl font-bold text-base-0`}
            >
              <span>[</span>
              Mission
              <span>]</span>
            </h2>
            <p
              className={`${font_body.className} text-xl font-regular text-primary-200`}
            >
              At Tamcon Software Solutions, our mission is to empower businesses
              and organizations with cutting-edge technology that enhances
              efficiency, drives innovation, and accelerates digital
              transformation. We strive to deliver intelligent, scalable, and
              high-performance software solutions that solve real-world
              challenges and improve user experiences.
            </p>
            <Image
              src={"/others/mission_icon.svg"}
              width={58}
              height={64}
              alt="mission of tamcon software solutions"
            />
          </article>
          <div className="w-full h-[1px] md:w-[1px] md:h-full bg-primary-400"></div>
          <article className="vision flex flex-col gap-y-12">
            <h2
              className={`${font_accent.className} text-3xl md:text-4xl font-bold text-base-0`}
            >
              <span>[</span>
              Vision
              <span>]</span>
            </h2>
            <p
              className={`${font_body.className} text-xl font-regular text-primary-200`}
            >
              Our vision is to lead Ethiopia’s digital revolution and set new
              standards in technological innovation. We aspire to be the most
              trusted and sought-after software solutions provider, driving
              growth for businesses through smart, data-driven, and user-centric
              technology.
            </p>
            <Image
              src={"/others/vision_icon.svg"}
              width={58}
              height={64}
              alt="mission of tamcon software solutions"
            />
          </article>
        </Divider>
      </Container>
    </Container>
  );
}
