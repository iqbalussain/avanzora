import { lazy, Suspense, useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ScrollReveal from "./components/ScrollReveal";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const CareerPage = lazy(() => import("./pages/CareerPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const LegalPage = lazy(() => import("./pages/LegalPage"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const StudioPage = lazy(() => import("./pages/StudioPage"));

function PageLoading() {
  return (
    <div className="route-loading" role="status">
      Loading page…
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function MissingPage() {
  return (
    <main className="empty-page">
      <p className="eyebrow">404</p>
      <h1>Page not found.</h1>
      <Link className="text-link" to="/">
        Back to home <span aria-hidden="true">↗</span>
      </Link>
    </main>
  );
}

function SiteLayout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/career/:slug" element={<CareerPage />} />
            <Route path="/legal-pages/:slug" element={<LegalPage />} />
            <Route path="*" element={<MissingPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const { pathname } = useLocation();
  const isStudio = pathname.startsWith("/studio");

  return (
    <>
      <ScrollToTop />
      <ScrollReveal />
      {isStudio ? (
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/studio/*" element={<StudioPage />} />
          </Routes>
        </Suspense>
      ) : (
        <SiteLayout />
      )}
    </>
  );
}
