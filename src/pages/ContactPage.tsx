import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { homeFallback } from "../data/fallback";

const contactDetails = [
  {
    label: "Email",
    value: "hello@lamosa.studio",
    href: "mailto:hello@lamosa.studio",
  },
  {
    label: "Phone",
    value: "+1 23456778",
    href: "tel:+123456778",
  },
  {
    label: "Address",
    value: "447 Broadway, 2nd Floor, New York city, USA",
  },
  {
    label: "Availability",
    value: "Available from Monday to Friday, 9 AM - 6 PM GMT",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero page-hero--projects">
        <p className="eyebrow">Contact</p>
        <h1 data-reveal>Get in touch with us.</h1>
        <p className="page-hero__subtitle" data-reveal>
          Have a project taking shape or a question worth talking through? Tell us what you’re
          building, and our team will help you map the clearest path to making it real.
        </p>
      </section>

      <section className="section contact-page">
        <div className="contact-details-grid">
          {contactDetails.map((detail) => (
            <article className="contact-detail-card" data-reveal key={detail.label}>
              <p className="eyebrow">{detail.label}</p>
              {detail.href ? <a href={detail.href}>{detail.value}</a> : <p>{detail.value}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="section section--faq contact-faq">
        <div className="faq-intro">
          <SectionHeading eyebrow="Got a question?" title="We've got answers." />
          <Link className="text-link" to="/projects">
            Explore our work <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="faq-list">
          {homeFallback.faqs.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>
                {item.question}
                <span aria-hidden="true">+</span>
              </summary>
              {item.answer && <p>{item.answer}</p>}
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
