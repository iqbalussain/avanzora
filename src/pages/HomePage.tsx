import ContactCallout from "../components/ContactCallout";
import ProgressiveSmearCarousel from "../components/ProgressiveSmearCarousel";
import SectionHeading from "../components/SectionHeading";
import { Link } from "react-router-dom";
import { homeFallback } from "../data/fallback";
import { useSanityContent } from "../hooks/useSanityContent";
import { homePageQuery } from "../lib/sanity";
import { imageUrl, type HomePageContent } from "../types/content";

export default function HomePage() {
  const fetched = useSanityContent<HomePageContent>(homePageQuery, homeFallback);
  const content = {
    ...homeFallback,
    ...fetched,
    metrics: fetched.metrics ?? homeFallback.metrics,
    services: fetched.services ?? homeFallback.services,
    processSteps: fetched.processSteps ?? homeFallback.processSteps,
    pricingPlans: (fetched.pricingPlans ?? homeFallback.pricingPlans).map((plan, index) => ({
      ...homeFallback.pricingPlans[index],
      ...plan,
      cta: plan.cta ?? homeFallback.pricingPlans[index]?.cta ?? "Request Quote",
    })),
    testimonials: fetched.testimonials ?? homeFallback.testimonials,
    faqs: fetched.faqs ?? homeFallback.faqs,
  };

  return (
    <>
      <section className="home-hero" id="section-hero">
        <div className="hero-copy">
          <h1 data-reveal>{content.heroTitle}</h1>
          <p>{content.heroDescription}</p>
        </div>
        <div className="hero-media" data-reveal="image">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Avanzora digital projects and product designs"
          >
            <source src="/media/home-hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-footer">
          <span>Digital products and software.</span>
          <span>Infrastructure and IT support.</span>
          <Link to="/contact-us" aria-label="Discuss a project">
            Discuss a project <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="section section--metrics" data-reveal>
        <SectionHeading
          eyebrow="What we bring together"
          title="Technology for every part of your business."
        />
        <div className="metrics-grid">
          {content.metrics.map((metric) => (
            <article className="metric-card" key={metric.title}>
              <div className="metric-card__value">{metric.value}</div>
              <h3>{metric.title}</h3>
              {metric.description && <p>{metric.description}</p>}
            </article>
          ))}
        </div>
      </section>

      <div className="home-carousel-band">
        <ProgressiveSmearCarousel />
      </div>

      <section className="section section--services" id="section-services" data-reveal>
        <div className="section-intro-row">
          <SectionHeading
            eyebrow="What we do"
            title="Build, connect and support your technology."
            description="Digital products, business systems and infrastructure, planned around the way your organization works."
          />
          <Link className="text-link" to="/contact-us">
            Discuss a project <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="service-grid">
          {content.services.map((service, index) => {
            const cover = imageUrl(service.imageUrl);
            return (
              <article
                className={`service-card service-card--${index + 1}`}
                data-reveal
                data-reveal-index={index}
                key={service.title}
              >
                {cover && <img src={cover} alt="" loading="lazy" />}
                <div className="service-card__content">
                  <span className="service-card__number">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <span className="service-card__arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section section--process" id="section-process" data-reveal>
        <SectionHeading
          eyebrow="A practical process"
          title="From business needs to working technology."
          description="We learn how your business operates, define a practical scope, implement the solution and help support it over time."
          align="center"
        />
        <div className="process-grid">
          {content.processSteps.map((step, index) => (
            <article
              className="process-step"
              data-reveal
              data-reveal-index={index}
              key={step.number}
            >
              <span className="process-step__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <span className="process-step__line" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="process-result" aria-label="Process results">
        <strong>Unified Technology Execution</strong>
        <span>Connecting software development, cloud infrastructure, and operational IT under one partner.</span>
      </section>

      <section className="section section--pricing" id="section-pricing" data-reveal>
        <div className="section-intro-row">
          <SectionHeading
            eyebrow="Engagement options"
            title="Choose the right scope for your business."
            description="From a defined digital project to ongoing technology support, recommendations are shaped around your requirements."
          />
          <p className="pricing-intro__aside">
            Project scope and pricing depend on your requirements.
          </p>
        </div>
        <div className="pricing-grid">
          {content.pricingPlans.map((plan, index) => (
            <article
              className={`pricing-card${index === 0 ? " pricing-card--featured" : ""}`}
              data-reveal
              data-reveal-index={index}
              key={plan.name}
            >
              <div className="pricing-card__heading">
                <div>
                  <h3>{plan.name}</h3>
                  {plan.label && <span className="pricing-card__label">{plan.label}</span>}
                </div>
                {plan.price && <strong>{plan.price}</strong>}
              </div>
              <p className="pricing-card__description">{plan.description}</p>
              {plan.priceUnit && <p className="pricing-card__unit">{plan.priceUnit}</p>}
              <Link className="button button--dark" to="/contact-us">
                {plan.cta} <span aria-hidden="true">↗</span>
              </Link>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--testimonials" id="section-testimonials" data-reveal>
        <SectionHeading
          eyebrow="Our approach"
          title="Technology should work for your business."
          align="center"
        />
        <div className="testimonial-grid">
          {content.testimonials.map((testimonial) => {
            const portrait = imageUrl(testimonial.imageUrl);
            return (
              <figure className="testimonial-card" data-reveal key={testimonial.name}>
                {testimonial.metric && (
                  <div className="testimonial-card__result">
                    <strong>{testimonial.metric}</strong>
                    <span>{testimonial.metricDescription}</span>
                  </div>
                )}
                <blockquote>{testimonial.quote}</blockquote>
                <figcaption>
                  {portrait && <img src={portrait} alt="" loading="lazy" />}
                  <span>
                    <strong>{testimonial.name}</strong>
                    <small>{testimonial.role}</small>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      <section className="section section--faq" id="section-faq" data-reveal>
        <div className="faq-intro">
          <SectionHeading eyebrow="Questions about working with Avanzora" title="How can we help?" />
          <Link className="text-link" to="/contact-us">
            Talk with Avanzora <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="faq-list">
          {content.faqs.map((item) => (
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

      <ContactCallout />
    </>
  );
}
