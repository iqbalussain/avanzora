import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import ContactCallout from "../components/ContactCallout";
import SectionHeading from "../components/SectionHeading";
import { blogPostsFallback } from "../data/blog";
import { useSanityContent } from "../hooks/useSanityContent";
import { blogPostQuery, blogPostsQuery } from "../lib/sanity";
import { imageUrl, type BlogPost } from "../types/content";

const blogCategories = [
  "All",
  "Tutorials",
  "Technology",
  "Business Strategy",
  "Motion Design",
  "Productivity",
  "product-development",
  "Marketing",
  "Design",
];

function formatDate(date?: string) {
  if (!date) return null;
  return new Date(date).toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogCard({ post }: { post: BlogPost }) {
  const coverUrl = imageUrl(post.coverUrl);
  const formattedDate = formatDate(post.publishedAt);

  return (
    <article className="blog-card" data-reveal>
      <Link
        className="blog-card__image"
        to={`/blog/${post.slug}`}
        aria-label={`Read ${post.title}`}
      >
        {coverUrl && <img src={coverUrl} alt="" loading="lazy" />}
      </Link>
      <div className="blog-card__meta">
        {post.author && <span>{post.author}</span>}
        {formattedDate && <time dateTime={post.publishedAt}>{formattedDate}</time>}
        {post.readingTime && <span>{post.readingTime}</span>}
      </div>
      <h2>
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <p>{post.excerpt}</p>
      {post.categories && (
        <ul className="tag-list" aria-label="Article categories">
          {post.categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      )}
      <Link className="text-link" to={`/blog/${post.slug}`}>
        Read article <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}

function ArticlePage({ slug }: { slug: string }) {
  const query = blogPostQuery.replace("$slug", JSON.stringify(slug));
  const sourcePost = blogPostsFallback.find((item) => item.slug === slug) ?? null;
  const fetchedPost = useSanityContent<BlogPost | null>(query, sourcePost);
  const post = fetchedPost ? { ...(sourcePost ?? {}), ...fetchedPost } : sourcePost;

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

  const coverUrl = imageUrl(post.coverUrl);
  const formattedDate = formatDate(post.publishedAt);

  const relatedPosts = blogPostsFallback.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <>
      <article className="article-page">
        <header className="article-heading">
          <Link className="text-link" to="/blog">
            ← All articles
          </Link>
          <h1 data-reveal>{post.title}</h1>
          <p data-reveal>{post.excerpt}</p>
          <div className="article-meta">
            {post.author && <span>{post.author}</span>}
            {formattedDate && <time dateTime={post.publishedAt}>{formattedDate}</time>}
            {post.readingTime && <span>{post.readingTime}</span>}
          </div>
          {post.categories && (
            <ul className="tag-list" aria-label="Article categories">
              {post.categories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          )}
        </header>
        {coverUrl && <img className="article-cover" src={coverUrl} alt="" data-reveal="image" />}
        {post.body?.length ? (
          <div className="article-body">
            <PortableText value={post.body} />
          </div>
        ) : (
          post.bodyText && (
            <div className="article-body">
              {post.bodyText.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )
        )}
        <div className="article-cta">
          <p>
            Book a free discovery call to discuss strategy, set goals, and see how we can help you
            grow.
          </p>
          <Link className="button button--primary" to="/contact-us">
            Book a call <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </article>
      <section className="section article-related">
        <SectionHeading eyebrow="More insights" title="from our team." align="center" />
        <div className="blog-grid">
          {relatedPosts.map((relatedPost) => (
            <BlogCard key={relatedPost.slug} post={relatedPost} />
          ))}
        </div>
      </section>
      <ContactCallout />
    </>
  );
}

export default function BlogPage() {
  const { slug } = useParams();
  const fetchedPosts = useSanityContent<BlogPost[]>(blogPostsQuery, blogPostsFallback);
  const posts = useMemo(() => {
    if (fetchedPosts.length === 0) return blogPostsFallback;
    return fetchedPosts.map((post) => {
      const sourcePost = blogPostsFallback.find((item) => item.slug === post.slug);
      return { ...(sourcePost ?? {}), ...post };
    });
  }, [fetchedPosts]);
  const [activeCategory, setActiveCategory] = useState("All");

  const visiblePosts = posts.filter(
    (post) => activeCategory === "All" || post.categories?.includes(activeCategory),
  );

  if (slug) return <ArticlePage slug={slug} />;

  return (
    <>
      <section className="page-hero page-hero--projects">
        <p className="eyebrow">AVANZORA SOLUTION</p>
        <h1 data-reveal>Fresh insights &amp; ideas from the team.</h1>
        <p className="page-hero__subtitle" data-reveal>
          Stay ahead with strategies uniting design, technology, and marketing to deliver measurable
          growth.
        </p>
      </section>
      <section className="section blog-list">
        <div className="blog-filters" aria-label="Filter articles">
          {blogCategories.map((category) => (
            <button
              aria-pressed={activeCategory === category}
              className={activeCategory === category ? "is-active" : ""}
              key={category}
              onClick={() => setActiveCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
        {visiblePosts.length > 0 ? (
          <div className="blog-grid">
            {visiblePosts.map((post) => {
              return <BlogCard key={post.slug} post={post} />;
            })}
          </div>
        ) : (
          <div className="empty-state empty-state--large">
            <SectionHeading
              eyebrow="Blog"
              title="No articles in this category."
              description="Choose another category to see more from the team."
              align="center"
            />
          </div>
        )}
      </section>
      <ContactCallout />
    </>
  );
}
