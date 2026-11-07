import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ContactCallout from "../components/ContactCallout";
import ProjectGrid from "../components/ProjectGrid";
import SectionHeading from "../components/SectionHeading";
import { animationConfig } from "../animation/config";
import { projectsFallback } from "../data/fallback";
import { useSanityContent } from "../hooks/useSanityContent";
import { projectsQuery } from "../lib/sanity";
import { imageUrl, type Project } from "../types/content";

const originalFilters = [
  "All",
  "Fintech",
  "SaaS",
  "Motion Design",
  "Branding",
  "Web Design",
  "Product Design",
  "UI Design",
  "UX Design",
];

export default function ProjectsPage() {
  const fetchedProjects = useSanityContent<Project[]>(projectsQuery, projectsFallback);
  const projects = useMemo(() => {
    if (fetchedProjects.length === 0) return projectsFallback;
    return fetchedProjects.map((project) => {
      const sourceProject = projectsFallback.find((item) => item.slug === project.slug);
      return { ...(sourceProject ?? {}), ...project };
    });
  }, [fetchedProjects]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);
  const filteredProjects = useMemo(() => {
    const search = searchText.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesFilter = activeFilter === "All" || project.categories?.includes(activeFilter);
      const matchesSearch =
        !search ||
        project.title.toLowerCase().includes(search) ||
        project.categories?.some((category) => category.toLowerCase().includes(search));
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, projects, searchText]);

  return (
    <>
      <section className="page-hero page-hero--projects">
        <p className="eyebrow">Selected projects</p>
        <h1>Bold ideas, Stunning results.</h1>
        <p className="page-hero__subtitle">
          Have a project in mind or need guidance? Let's bring your vision to life.
        </p>
      </section>

      <section className="section projects-list">
        <label className="project-search">
          <span className="sr-only">Search projects</span>
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            placeholder="Search Project…"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
        </label>
        <div className="project-filters" aria-label="Filter projects">
          {originalFilters.map((filter) => (
            <button
              className={activeFilter === filter ? "is-active" : ""}
              aria-pressed={activeFilter === filter}
              key={filter}
              onClick={() => setActiveFilter(filter)}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>
        {filteredProjects[0] && (
          <FeaturedProject
            project={filteredProjects[0]}
            prefersReducedMotion={prefersReducedMotion}
          />
        )}
        {filteredProjects.length > 1 && <ProjectGrid projects={filteredProjects.slice(1)} />}
        {filteredProjects.length === 0 && <p className="empty-state">No matching projects.</p>}
      </section>

      <section className="section section--testimonials">
        <SectionHeading eyebrow="We're loved." title="Just success stories." align="center" />
        <div className="testimonial-grid">
          {[
            ["3.1×", "increase in qualified leads"],
            ["41%", "reduction in drop-off rate"],
            ["2.3×", "increase in lead conversion"],
            ["45%", "Reduced bounce rate"],
          ].map(([value, label]) => (
            <figure className="result-card" key={value}>
              <span className="result-card__metric">{value}</span>
              <figcaption>{label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <ContactCallout />
    </>
  );
}

function FeaturedProject({
  project,
  prefersReducedMotion,
}: {
  project: Project;
  prefersReducedMotion: boolean;
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slides = useMemo(
    () =>
      Array.from(
        new Set(
          [project.coverUrl, ...(project.gallery ?? [])]
            .map((image) => imageUrl(image))
            .filter((src): src is string => Boolean(src)),
        ),
      ),
    [project.coverUrl, project.gallery],
  );

  useEffect(() => {
    setActiveSlide(0);
  }, [project.slug]);

  useEffect(() => {
    if (isPaused || slides.length < 2 || prefersReducedMotion) {
      return;
    }

    const timer = window.setInterval(
      () => setActiveSlide((current) => (current + 1) % slides.length),
      animationConfig.carousel.intervalMs,
    );
    return () => window.clearInterval(timer);
  }, [isPaused, prefersReducedMotion, slides.length]);

  if (slides.length === 0) return null;

  const showSlide = (index: number) => {
    setActiveSlide((index + slides.length) % slides.length);
    setIsPaused(true);
  };

  return (
    <article
      className="project-showcase"
      data-reveal
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="project-showcase__image">
        {slides.map((src, index) => (
          <img
            aria-hidden={activeSlide !== index}
            key={src}
            src={src}
            alt={activeSlide === index ? `${project.title} project image ${index + 1}` : ""}
            className={activeSlide === index ? "is-active" : ""}
          />
        ))}
        {slides.length > 1 && (
          <>
            <button
              className="project-showcase__control project-showcase__control--previous"
              type="button"
              aria-label="Previous project image"
              onClick={() => showSlide(activeSlide - 1)}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              className="project-showcase__control project-showcase__control--next"
              type="button"
              aria-label="Next project image"
              onClick={() => showSlide(activeSlide + 1)}
            >
              <span aria-hidden="true">→</span>
            </button>
          </>
        )}
      </div>
      <div className="project-showcase__caption">
        <div>
          <h2>{project.title}</h2>
          {project.description && <p>{project.description}</p>}
        </div>
        <Link to={`/projects/${project.slug}`}>
          View Project <span aria-hidden="true">↗</span>
        </Link>
      </div>
      {slides.length > 1 && (
        <div className="project-showcase__slides" aria-label="Project slideshow">
          {slides.map((src, index) => (
            <button
              type="button"
              key={src}
              aria-label={`Show project slide ${index + 1}`}
              aria-current={activeSlide === index}
              onClick={() => showSlide(index)}
            >
              <img src={src} alt="" className={activeSlide === index ? "is-active" : ""} />
            </button>
          ))}
        </div>
      )}
    </article>
  );
}
