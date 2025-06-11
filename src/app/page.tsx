import ContactUI from "@/_ui/contact.ui";
import { Hero } from "@/_ui/hero";
import Projects from "@/_ui/projects.ui";
import Services from "@/_ui/service.ui";
import Testimony from "@/_ui/testimony.ui";
import Winners from "@/_ui/winners.ui";

export const metadata = {
  title: "Home | Tamcon Software Solutions",
  description:
    "Discover Tamcon Software Solutions, one of the best software companies in Ethiopia. Explore our services, projects, and client testimonials.",
};

export default function Home() {
  return (
    <section className="bg-primary-25">
      <h1 className="sr-only">
        Tamcon Software Solutions - Best Software Company in Ethiopia
      </h1>
      <Hero />
      <Services />
      <Projects />
      <Winners />
      <Testimony />
      <ContactUI />
    </section>
  );
}
