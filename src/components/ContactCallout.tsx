import { Link } from "react-router-dom";

export default function ContactCallout() {
  return (
    <section className="contact-callout">
      <div>
        <p className="eyebrow">Let's start building</p>
        <h2>You focus on your company. We make it happen</h2>
        <p className="contact-callout__description">
          Cloud computing infrastructure paired with robust local network security to ensure
          end-to-end data safety.
        </p>
      </div>
      <Link className="button button--light" to="/contact-us">
        Book a Call <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}
