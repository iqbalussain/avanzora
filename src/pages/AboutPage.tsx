import { Link } from "react-router-dom";
import ContactCallout from "../components/ContactCallout";
import SectionHeading from "../components/SectionHeading";
import { aboutFallback } from "../data/fallback";
import { useSanityContent } from "../hooks/useSanityContent";
import { aboutPageQuery } from "../lib/sanity";
import { imageUrl, type AboutPageContent } from "../types/content";

const storyImages = [
  "/assets/images/image-banner-team-oae6nr5ry.jpg",
  "/assets/images/image-banner-team-g3yjx6hkp.jpg",
  "/assets/images/image-banner-team-sksnevxgx.jpg",
];

export default function AboutPage() {
  const fetched = useSanityContent<AboutPageContent>(aboutPageQuery, aboutFallback);
  const content = {
    ...aboutFallback,
    ...fetched,
    teamMembers: fetched.teamMembers ?? aboutFallback.teamMembers,
    awards: fetched.awards ?? aboutFallback.awards,
  };

  return (
    <>
      <section className="page-hero page-hero--about">
        <p className="eyebrow">AVANZORA</p>
        <h1>{content.heroTitle}</h1>
        <p className="page-hero__subtitle">{content.heroSubtitle}</p>
      </section>

      <section className="section story-section" data-reveal>
        <div className="story-copy">
          <SectionHeading
            eyebrow="Our story"
            title={content.storyTitle}
            description="Software development, digital delivery and IT operations, brought together around business needs."
          />
          <p>{content.storyBody}</p>
        </div>
        <div className="story-image-grid">
          {storyImages.map((src, index) => (
            <img
              key={src}
              src={src}
              alt=""
              loading="lazy"
              data-position={index}
              data-reveal="image"
              data-reveal-index={index}
            />
          ))}
        </div>
      </section>

      <section className="founders-strip" aria-label="Avanzora technology capabilities">
        <span className="eyebrow">CONNECTED CAPABILITIES</span>
        <div
          className="founders-strip__names"
          aria-label="Software, digital experiences, cloud, networks and IT support"
        >
          <span>Software</span>
          <span>Digital experiences</span>
          <span>Cloud</span>
          <span>Networks</span>
          <span>IT support</span>
        </div>
      </section>

      <section className="section section--team">
        <SectionHeading
          eyebrow="What we do"
          title="Connected technology capabilities."
          description="Software, infrastructure, networking and support, aligned with the needs of your business."
          align="center"
        />
        <div className="team-grid">
          {content.teamMembers.map((member) => {
            const portrait = imageUrl(member.imageUrl);
            return (
              <article className="team-card" data-reveal key={member.name}>
                {portrait && <img src={portrait} alt="" loading="lazy" />}
                <div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section section--awards">
        <div className="section-intro-row">
          <SectionHeading eyebrow="Capabilities" title="Practical business technology." />
          <Link className="text-link" to="/contact-us">
            Discuss a project <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="awards-list">
          {content.awards.map((award) => (
            <article className="award-row" data-reveal key={award.name}>
              <h3>{award.name}</h3>
              <p>{award.description}</p>
              <time>{award.year}</time>
              <span aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--fit">
        <SectionHeading
          eyebrow="Our approach"
          title="One technology partner. Connected services."
          description="Bring digital development and business IT into a coordinated technology plan."
          align="center"
        />
        <div className="comparison-grid">
          <div className="comparison-card comparison-card--highlight">
            <h3>Avanzora</h3>
            <ul>
              <li>Digital development and IT services under one brand.</li>
              <li>Solutions scoped around business requirements.</li>
              <li>Websites, software and internal applications.</li>
              <li>Cloud, network and infrastructure services.</li>
              <li>Automation, reporting and system integrations.</li>
              <li>Technical support and maintenance options.</li>
            </ul>
          </div>
          <div className="comparison-card">
            <h3>Separate technology providers</h3>
            <ul>
              <li>Separate providers for software and IT.</li>
              <li>Different scopes across digital and infrastructure work.</li>
              <li>More handoffs between technology suppliers.</li>
              <li>Coordination across separate service relationships.</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactCallout />
    </>
  );
}
