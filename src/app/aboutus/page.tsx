import Container from "@/_components/container";
import AboutHero from "@/_ui/(about us page)/hero";
import AboutMissionVision from "@/_ui/(about us page)/missionVision";
import TheTeam from "@/_ui/(about us page)/theTeam";

export default function AboutUs() {
  return (
    <>
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
