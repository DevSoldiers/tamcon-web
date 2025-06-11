import ContactHero from "@/_ui/(contact us page)/hero.ui";
import JobOpportunities from "@/_ui/(contact us page)/job_opportunities.ui";

export const metadata = {
  title: "Contact Us | Tamcon Software Solutions",
  description:
    "Contact Tamcon Software Solutions, one of the best software companies in Ethiopia, for your next tech project.",
};

export default function ContactUs() {
  return (
    <>
      <h1 className="sr-only">
        Contact Tamcon Software Solutions - Software Company in Ethiopia
      </h1>
      <ContactHero />
      {/* career opportunities */}
      <JobOpportunities />
    </>
  );
}
