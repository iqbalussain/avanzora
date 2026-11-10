import { Link } from "react-router-dom";

export default function ContactCallout() {
  return (
    <section className="contact-callout">
      <div>
        <p className="eyebrow">Talk with Avanzora</p>
        <h2>Build and manage the technology your business depends on.</h2>
        <p className="contact-callout__description">
          From software and digital experiences to infrastructure and IT support, Avanzora brings
          business technology together.
        </p>
      </div>
      <Link className="button button--light" to="/contact-us">
        Contact Avanzora <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}
