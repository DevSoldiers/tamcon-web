"use client";
import Container from "@/_components/container";
import { font_accent, font_body, font_header } from "@/app/fonts/fonts";
import { theTeam } from "@/_content/about_content";

export default function TheTeam() {
  return (
    <Container className="pt-16 md:pb-[90px] md:pt-[90px] bg-secondary-600 max-w-full ">
      <Container>
        <h2
          className={`${font_accent.className} text-2xl md:text-4xl text-gray-600 text-center font-extrabold`}
        >
          <span>[</span>
          The Team
          <span>]</span>
        </h2>
        {/* team wrapper */}
        <section
          className="the_team_wrapper 
             h-full 
             grid 
             grid-cols-2 
             md:grid-cols-3 
             gap-x-3 
             md:gap-x-[116px] 
             gap-y-9 
             md:gap-y-16 
             rounded-bl-lg 
             mt-9 
             md:mt-16"
        >
          {theTeam?.map((team, idx) => {
            // Suppose you store each card’s hover offsets in an array or compute them:
            // E.g. transformPositions[0] = { x: -16, y: -16 }, etc.
            // Adjust the array below to match your screenshot offsets.
            const transformPositions = [
              { x: -16, y: -16 },
              { x: 0, y: -16 },
              { x: 16, y: -16 },
              { x: -12, y: -12 },
              { x: 0, y: -12 },
              { x: 12, y: -12 },
              { x: -8, y: -8 },
              { x: 0, y: -8 },
              { x: 8, y: -8 },
              // etc... fill out for all 12
            ];

            // Safely pick the transform or default to (0,0) if out of range
            const { x, y } = transformPositions[idx] || { x: 0, y: 0 };

            // Inline style for the translate:
            const hoverTransform = `translate(${x}px, ${y}px)`;

            return (
              <article className="card group relative" key={idx}>
                <div className="relative w-full min-h-[180px] md:min-h-[360px] aspect-auto">
                  {/* BACK CARD */}
                  <div
                    className="
              absolute 
              top-0 
              left-0 
              w-full 
              h-full 
              bg-gray-200
            "
                  >
                    {/* This is the card “behind” */}
                  </div>
                  {/* FRONT CARD */}
                  <div
                    className="
              absolute 
              top-0 
              left-0 
              w-full 
              h-full 
              bg-primary-50 
              transition-transform 
              duration-300 
              ease-in-out
              z-10
              group-hover:shadow-lg
            "
                    style={{ transform: "translate(0, 0)" }}
                    // We can do the hover transform inline via onMouseEnter / onMouseLeave:
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = hoverTransform;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translate(0,0)";
                    }}
                  >
                    {/* This is the card “on top,” which slides out of the way */}
                  </div>
                </div>

                {/* Content below the card */}
                <div className="team_content mt-8">
                  <p className="text-3xl text-gray-600">{team.name}</p>
                  <p className="text-base text-gray-600">{team.position}</p>
                </div>
              </article>
            );
          })}
        </section>
      </Container>
      {/* show more button */}
      <div className="btn_wrapper flex justify-center mt-12 md:mt-16">
        <button
          className={`${font_header.className} text-base font-bold text-gray-600 border-[1px] border-gray-600 py-[21.5px] px-6`}
        >
          Show More
        </button>
      </div>
    </Container>
  );
}
