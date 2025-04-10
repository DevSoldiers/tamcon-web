import ContactForm from "@/_components/Contact.form";
import ContactLeftSection from "@/_components/Contact.leftsection";
import Container from "@/_components/container";
import Divider from "@/_components/Divider";
import Image from "next/image";

export default function ContactUI() {
  return (
    <Divider className="gap-x-10 max-md:gap-y-12">
      <ContactLeftSection className="bg-primary-600 h-full flex justify-center items-center">
        <Image
          src={"/others/doughnut.png"}
          height={200}
          width={200}
          className="aspect-auto w-full scale-75"
          alt="doughnut_icon"
        />
      </ContactLeftSection>
      <ContactForm className="max-w-[592px]" />
    </Divider>
  );
}
