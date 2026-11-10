import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <span className="brand__mark" aria-hidden="true">
              //
            </span>
            <span>AVANZORA</span>
          </Link>
          <p>
            Avanzora helps businesses build, operate, and improve the technology they rely on, from
            digital products and software to infrastructure and IT support.
          </p>
        </div>
        <div className="footer-links">
          <span className="eyebrow">Explore</span>
          <Link to="/projects">Projects</Link>
          <Link to="/about-us">About us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/career">Careers</Link>
          <Link to="/contact-us">Contact us</Link>
        </div>
        <div className="footer-links">
          <span className="eyebrow">Get in touch</span>
          <a href="mailto:iqbalussain@gmail.com">iqbalussain@gmail.com</a>
          <a href="https://wa.me/96878301334">WhatsApp: +968 78301334</a>
          <Link to="/studio">Content studio</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Avanzora. All rights reserved.</p>
        <p>Technology. Built for Business.</p>
        <div className="footer-legal">
          <Link to="/legal-pages/privacy-policy">Privacy policy</Link>
          <Link to="/legal-pages/terms-of-service">Terms of service</Link>
        </div>
      </div>
    </footer>
  );
}
