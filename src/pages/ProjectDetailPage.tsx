import { Link, useParams } from "react-router-dom";
import ContactCallout from "../components/ContactCallout";
import ProjectGrid from "../components/ProjectGrid";
import SectionHeading from "../components/SectionHeading";
import { projectsFallback } from "../data/fallback";
import { useSanityContent } from "../hooks/useSanityContent";
import { projectDetailQuery } from "../lib/sanity";
import { imageUrl, type Project } from "../types/content";

export default function ProjectDetailPage() {
  const { slug = "" } = useParams();
  const query = projectDetailQuery.replace("$slug", JSON.stringify(slug));
  const sourceProject = projectsFallback.find((project) => project.slug === slug) ?? null;
  const fetchedProject = useSanityContent<Project | null>(query, sourceProject);
  const project = fetchedProject ? { ...(sourceProject ?? {}), ...fetchedProject } : sourceProject;
  const cover = imageUrl(project?.coverUrl);
  const categories = project?.categories ?? [];

  if (!project) {
    return (
      <main className="empty-page">
        <p className="eyebrow">Projects</p>
        <h1>Project not found.</h1>
        <Link className="text-link" to="/projects">
          Back to projects <span aria-hidden="true">↗</span>
        </Link>
      </main>
    );
  }

  const relatedProjects = projectsFallback.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <>
      <article className="project-detail">
        <header className="project-detail__heading">
          <Link className="text-link" to="/projects">
            ← All projects
          </Link>
          <p className="eyebrow">Selected work</p>
          <h1 data-reveal>{project.title}</h1>
          {project.description && <p className="project-detail__result">{project.description}</p>}
          {categories.length > 0 && (
            <ul className="tag-list" aria-label="Project categories">
              {categories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          )}
        </header>
        {cover && (
          <img
            className="project-detail__cover"
            src={cover}
            alt=""
            loading="eager"
            data-reveal="image"
          />
        )}
        {project.story && project.story.length > 0 && (
          <section className="project-detail__story" aria-label="Case study">
            {[0, 1].map((group) => {
              const paragraphs = group === 0 ? project.story?.slice(0, 1) : project.story?.slice(1);
              if (!paragraphs?.length) return null;

              return (
                <section className="project-detail__story-section" data-reveal key={group}>
                  <h2>
                    {project.storyHeadings?.[group] ?? (group === 0 ? "Overview" : "Outcome")}
                  </h2>
                  <div className="project-detail__story-copy">
                    {paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              );
            })}
          </section>
        )}
        {project.gallery && project.gallery.length > 0 && (
          <div className="project-detail__gallery" aria-label={`${project.title} project gallery`}>
            {project.gallery.map((image, index) => {
              const src = imageUrl(image);
              return src ? (
                <figure data-reveal="image" key={`${src}-${index}`}>
                  <img
                    src={src}
                    alt={`${project.title} project view ${index + 1}`}
                    loading="lazy"
                  />
                </figure>
              ) : null;
            })}
          </div>
        )}
      </article>
      {relatedProjects.length > 0 && (
        <section className="section related-projects">
          <SectionHeading eyebrow="More project." title="Masterpieces." align="center" />
          <ProjectGrid projects={relatedProjects} />
        </section>
      )}
      <ContactCallout />
    </>
  );
}
