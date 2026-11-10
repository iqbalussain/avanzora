import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { homeFallback } from "../data/fallback";

const contactDetails = [
  {
    label: "Email",
    value: "iqbalussain@gmail.com",
    href: "mailto:iqbalussain@gmail.com",
  },
  {
    label: "WhatsApp / Phone",
    value: "+968 78301334",
    href: "https://wa.me/96878301334",
  },
  {
    label: "Operational base",
    value: "Muscat & Seeb, Sultanate of Oman",
  },
  {
    label: "Availability",
    value: "Contact us to discuss support availability for your requirements.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero page-hero--projects">
        <p className="eyebrow">Contact</p>
        <h1 data-reveal>Talk with Avanzora.</h1>
        <p className="page-hero__subtitle" data-reveal>
          Tell us about the technology your business needs, from a website or business application
          to cloud infrastructure, networking, CCTV or ongoing IT support.
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
