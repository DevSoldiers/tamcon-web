import Container from "@/_components/container";
import AboutHero from "@/_ui/(about us page)/hero";
import AboutMissionVision from "@/_ui/(about us page)/missionVision";
import { font_accent, font_body, font_header } from "../fonts/fonts";
import { theTeam } from "@/_content/about_content";

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
      <Container>
        <h2
          className={`${font_accent.className} text-2xl md:text-4xl text-gray-600 text-center`}
        >
          <span>[</span>
          The Team
          <span>]</span>
        </h2>
        {/* team wrapper */}
        <section className="the_team_wrapper h-full grid grid-cols-2 gap-x-3 gap-y-9 md:gap-y-16 md:grid-cols-3 md:gap-x-[116px] rounded-bl-lg mt-9 md:mt-16">
          {theTeam?.map((team, key) => (
            <article className="card" key={key}>
              <div className="w-full min-h-[180px] md:min-h-[360px] aspect-auto bg-primary-50"></div>
              <div className="team_content mt-8">
                <p
                  className={`${font_header.className} text-3xl text-gray-600`}
                >
                  {team.name}
                </p>
                <p
                  className={`${font_body.className} text-base font-regular text-gray-600`}
                >
                  {team.position}
                </p>
              </div>
            </article>
          ))}
        </section>
      </Container>
    </>
  );
}
