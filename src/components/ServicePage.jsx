import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./ServicePage.css";

/**
 * ServicePage — reusable layout for all service pages.
 *
 * Props:
 *  icon        — emoji icon for the hero
 *  tag         — small label above the title (e.g. "Service")
 *  title       — main heading
 *  intro       — intro paragraph(s) as JSX
 *  sections    — array of { title, icon, items: string[] }
 *  color       — accent hex (optional, defaults to var(--a))
 */
export default function ServicePage({ icon, tag, title, intro, sections, color = "#e8a020" }) {
  return (
    <>
      {/* ── HERO BANNER ── */}
      <section className="svc-hero" style={{ "--accent": color }}>
        <div className="svc-hero-inner">
          <div className="svc-hero-icon">{icon}</div>
          <div className="svc-hero-tag">{tag || "Service"}</div>
          <h1 className="svc-hero-title">{title}</h1>
        </div>
        <div className="svc-hero-wave">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#fff"/>
          </svg>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="svc-intro">
        <div className="svc-intro-inner">
          {intro}
        </div>
      </section>

      {/* ── SECTIONS GRID ── */}
      <section className="svc-sections">
        <div className="svc-sections-inner">
          {sections.map((sec, i) => (
            <div className="svc-section-card" key={i} style={{ "--accent": color }}>
              <div className="svc-section-header">
                <span className="svc-section-icon">{sec.icon}</span>
                <h3 className="svc-section-title">{sec.title}</h3>
              </div>
              <ul className="svc-section-items">
                {sec.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="svc-cta">
        <div className="svc-cta-inner">
          <h2>Conçu pour les entreprises</h2>
          <p>
            Nous sommes une équipe de passionnés dont la mission est d'améliorer la performance des entreprises
            grâce à des solutions technologiques innovantes. Nos services sont conçus pour les petites et moyennes
            entreprises souhaitant optimiser leurs processus, accélérer leur croissance et réussir leur transformation digitale.
          </p>
          <Link to="/#footer" className="svc-cta-btn">Entrer en contact</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
