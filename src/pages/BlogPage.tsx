import { Link, useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import ContactCallout from "../components/ContactCallout";
import SectionHeading from "../components/SectionHeading";
import { useSanityContent } from "../hooks/useSanityContent";
import { blogPostQuery, blogPostsQuery } from "../lib/sanity";
import type { BlogPost } from "../types/content";

function ArticlePage({ slug }: { slug: string }) {
  const query = blogPostQuery.replace("$slug", JSON.stringify(slug));
  const post = useSanityContent<BlogPost | null>(query, null);

  if (!post) {
    return (
      <section className="empty-page">
        <p className="eyebrow">Blog</p>
        <h1>Article not found.</h1>
        <Link className="text-link" to="/blog">
          Back to the blog <span aria-hidden="true">↗</span>
        </Link>
      </section>
    );
  }

  return (
    <article className="article-page">
      <header className="article-heading">
        <Link className="text-link" to="/blog">
          ← All articles
        </Link>
        <h1>{post.title}</h1>
        <p>{post.excerpt}</p>
        <time dateTime={post.publishedAt}>
          {new Date(post.publishedAt).toLocaleDateString("en", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </header>
      {post.coverUrl && (
        <img className="article-cover" src={post.coverUrl} alt="" />
      )}
      {post.body && (
        <div className="article-body">
          <PortableText value={post.body} />
        </div>
      )}
    </article>
  );
}

export default function BlogPage() {
  const { slug } = useParams();
  const posts = useSanityContent<BlogPost[]>(blogPostsQuery, []);

  if (slug) return <ArticlePage slug={slug} />;

  return (
    <>
      <section className="page-hero page-hero--projects">
        <p className="eyebrow">AVANZORA SOLUTION</p>
        <h1>Blog</h1>
        <p className="page-hero__subtitle">
          Stay ahead with strategies uniting design, technology, and marketing
          to deliver measurable growth.
        </p>
      </section>
      <section className="section blog-list">
        {posts.length > 0 ? (
          <div className="blog-grid">
            {posts.map((post) => (
              <article className="blog-card" key={post.slug}>
                {post.coverUrl && <img src={post.coverUrl} alt="" loading="lazy" />}
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p>{post.excerpt}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state empty-state--large">
            <SectionHeading
              eyebrow="Blog"
              title="No articles published yet."
              description="Blog page content was not present in the static export. Add a published blog post in Sanity Studio to display it here."
              align="center"
            />
          </div>
        )}
      </section>
      <ContactCallout />
    </>
  );
}
