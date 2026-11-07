import { Link, useParams } from "react-router-dom";
import ContactCallout from "../components/ContactCallout";
import SectionHeading from "../components/SectionHeading";
import { aboutFallback } from "../data/fallback";
import { careerBenefits, careerRoles } from "../data/careers";
import { imageUrl } from "../types/content";

function applicationLink(roleTitle: string) {
  return `mailto:hello@lamosa.studio?subject=${encodeURIComponent(`Application: ${roleTitle}`)}`;
}

function CareerListing() {
  return (
    <>
      <section className="page-hero page-hero--projects">
        <p className="eyebrow">Careers</p>
        <h1 data-reveal>Be part of something bold.</h1>
        <p className="page-hero__subtitle" data-reveal>
          creating a culture where ideas flow freely and innovation thrives.
        </p>
      </section>

      <section className="section career-culture">
        <div>
          <SectionHeading eyebrow="This's the vibe" title="That drive us." />
          <p>
            We move fast, refine every detail, and put the user at the heart of everything we
            create. If you’re driven by performance, simplicity, and the thrill of making a real
            impact on the web, you’ll thrive at lamosa.
          </p>
        </div>
        <div className="career-benefits-grid">
          {careerBenefits.map((benefit) => (
            <article className="career-benefit-card" data-reveal key={benefit.title}>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--team career-team">
        <SectionHeading
          eyebrow="Meet our"
          title="amazing team."
          description="Great things in business are never done by one person - Steve jobs."
          align="center"
        />
        <div className="team-grid">
          {aboutFallback.teamMembers.map((member) => {
            const portrait = imageUrl(member.imageUrl);
            return (
              <article className="team-card" data-reveal key={member.name}>
                {portrait && <img src={portrait} alt={member.name} loading="lazy" />}
                <div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section career-roles">
        <SectionHeading eyebrow="Open Roles." title="Join the Creative Force." align="center" />
        <div className="career-role-list">
          {careerRoles.map((role) => (
            <article className="career-role-card" data-reveal key={role.slug}>
              <div>
                <h3>
                  <Link to={`/career/${role.slug}`}>{role.title}</Link>
                </h3>
                <p>{role.summary}</p>
              </div>
              <div className="career-role-card__meta">
                <span>{role.employmentType}</span>
                <span>{role.location}</span>
                <span>{role.salary}</span>
              </div>
              <Link className="text-link" to={`/career/${role.slug}`}>
                View role <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <ContactCallout />
    </>
  );
}

function CareerDetail({ slug }: { slug: string }) {
  const role = careerRoles.find((item) => item.slug === slug);

  if (!role) {
    return (
      <main className="empty-page">
        <p className="eyebrow">Careers</p>
        <h1>Role not found.</h1>
        <Link className="text-link" to="/career">
          Back to careers <span aria-hidden="true">↗</span>
        </Link>
      </main>
    );
  }

  return (
    <>
      <article className="career-detail">
        <header className="career-detail__heading">
          <Link className="text-link" to="/career">
            ← Go to Career
          </Link>
          <p className="eyebrow">Open role</p>
          <h1 data-reveal>{role.title}</h1>
          <p className="career-detail__summary" data-reveal>
            {role.summary}
          </p>
          <div className="career-detail__meta">
            <span>Posted {role.postedAt}</span>
            <span>Deadline {role.deadline}</span>
            <span>{role.location}</span>
            <span>{role.employmentType}</span>
            <span>{role.salary}</span>
          </div>
          <a className="button button--primary" href={applicationLink(role.title)}>
            Apply Now <span aria-hidden="true">↗</span>
          </a>
        </header>

        <div className="career-detail__sections">
          <section data-reveal>
            <h2>About the Role</h2>
            <p>{role.about}</p>
          </section>
          <section data-reveal>
            <h2>Job Description</h2>
            <p>{role.description}</p>
          </section>
          <section data-reveal>
            <h2>Responsibilities</h2>
            <ul>
              {role.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section data-reveal>
            <h2>Requirements</h2>
            <ul>
              {role.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section data-reveal>
            <h2>Perks &amp; Benefits</h2>
            <ul>
              {role.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </article>

      <section className="section career-close">
        <SectionHeading
          eyebrow="Be part of"
          title="something bold."
          description="creating a culture where ideas flow freely and innovation thrives."
          align="center"
        />
        <a className="button button--primary" href={applicationLink(role.title)}>
          Apply for this role <span aria-hidden="true">↗</span>
        </a>
      </section>
      <ContactCallout />
    </>
  );
}

export default function CareerPage() {
  const { slug } = useParams();
  return slug ? <CareerDetail slug={slug} /> : <CareerListing />;
}
