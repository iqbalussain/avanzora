import { Link, useParams } from "react-router-dom";
import { legalDocuments } from "../data/legal";

export default function LegalPage() {
  const { slug = "" } = useParams();
  const document = legalDocuments[slug];

  if (!document) {
    return (
      <main className="empty-page">
        <p className="eyebrow">Legal</p>
        <h1>Page not found.</h1>
        <Link className="text-link" to="/">
          Back to home <span aria-hidden="true">↗</span>
        </Link>
      </main>
    );
  }

  return (
    <article className="legal-page">
      <header className="legal-page__heading">
        <Link className="text-link" to="/">
          ← Go Home
        </Link>
        <h1 data-reveal>{document.title}</h1>
        <time>{document.updatedAt}</time>
      </header>
      <div className="legal-page__body">
        {document.sections.map((section, index) => (
          <section data-reveal key={section.title}>
            <span className="legal-page__number">{index + 1}</span>
            <div>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul>
                  {section.bullets.map((item) => (
                    <li key={item}>
                      {item.includes("@") ? <a href={`mailto:${item}`}>{item}</a> : item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
