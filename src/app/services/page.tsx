import Container from "@/_components/container";
import ServicesHero from "@/_ui/(services)/hero";
import DevDetails from "@/_ui/(services)/development_desc";
import Faq from "@/_ui/(services)/faq";
import ContactUI from "@/_ui/contact.ui";

export const metadata = {
  title: "Services | Tamcon Software Solutions",
  description:
    "Explore our software development, cloud, DevOps, UI/UX, and consulting services. Tamcon Software Solutions is a leading tech company in Ethiopia.",
};

export default function ServicesPage() {
  return (
    <>
      <h1 className="sr-only">
        Our Services - Tamcon Software Solutions, Ethiopia
      </h1>
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
