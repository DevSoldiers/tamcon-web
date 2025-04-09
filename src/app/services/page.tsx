import Container from "@/_components/container";
import ServicesHero from "@/_ui/(services)/hero";
import DevDetails from "@/_ui/(services)/development_desc";
import Faq from "@/_ui/(services)/faq";
import ContactUI from "@/_ui/contact.ui";

export default function ServicesPage() {
  return (
    <>
      <Container className="max-w-full bg-primary-600">
        <ServicesHero />
        {/* design lists */}
        {/* software development */}
        <DevDetails />
      </Container>
      <Faq />
      {/* contact us */}
      <ContactUI />
    </>
  );
}
