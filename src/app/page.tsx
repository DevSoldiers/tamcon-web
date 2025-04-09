import ContactUI from "@/_ui/contact.ui";
import { Hero } from "@/_ui/hero";
import Projects from "@/_ui/projects.ui";
import Services from "@/_ui/service.ui";
import Testimony from "@/_ui/testimony.ui";
import Winners from "@/_ui/winners.ui";

export default function Home() {
  return (
    <section className="bg-primary-25">
      <Hero />
      <Services />
      <Projects />
      <Winners />
      <Testimony />
      <ContactUI />
    </section>
  );
}
