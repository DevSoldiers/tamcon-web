import Container from "@/_components/container";
import { font_accent, font_header } from "../fonts/fonts";
import { projects_list } from "@/_content/projects_content";

export default function FeaturedProjects() {
  return (
    <Container>
      <h2 className={`${font_accent.className} text-2xl md:text-4xl font-bold`}>
        <span>[</span>
        Featured Projects
        <span>]</span>
      </h2>
      <section className="projects_container grid md:grid-cols-2 gap-1 mt-[90px] md:mt-16">
        {projects_list?.map((item, key) => (
          <article key={key} className="p-6 min-h-[360px] bg-white">
            <h3
              className={`${font_header.className} text-3xl md:text-4xl text-gray-600`}
            >
              {item.name}
            </h3>
          </article>
        ))}
      </section>
    </Container>
  );
}
