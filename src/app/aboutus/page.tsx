import Container from "@/_components/container";
import AboutHero from "@/_ui/(about us page)/hero";
import AboutMissionVision from "@/_ui/(about us page)/missionVision";
import TheTeam from "@/_ui/(about us page)/theTeam";

export const metadata = {
  title: "About Us | Tamcon Software Solutions",
  description:
    "Learn about Tamcon Software Solutions, a top software company in Addis Ababa, Ethiopia. Meet our team and discover our mission.",
};

export default function AboutUs() {
  return (
    <>
      <h1 className="sr-only">
        About Tamcon Software Solutions - Top Software Company in Addis Ababa
      </h1>
      <Container>
        {/* hero section */}
        <AboutHero />
      </Container>

      {/* misson vission */}
      <AboutMissionVision />
      {/* the team */}
      <TheTeam />
    </>
  );
}
