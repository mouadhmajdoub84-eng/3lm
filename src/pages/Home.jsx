import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./Home.css";

const services = [
  { icon: "🤖", name: "Intelligence Artificielle", path: "/ia" },
  { icon: "📊", name: "Analyses des données", path: "/analyse-des-donnees" },
  { icon: "📡", name: "IoT", path: "/iot" },
  { icon: "⚙️", name: "DevOps", path: "/devops" },
  { icon: "🌐", name: "Développement Web", path: "/developpement-web" },
  { icon: "📱", name: "Développement Mobile", path: "/developpement-mobile" },
  { icon: "🏭", name: "ERP", path: "/erp" },
  { icon: "💬", name: "Community Management", path: "/community-management" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section id="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <h1><em>Votre partenaire informatique</em> fiable, rapide et efficace.</h1>
            <p>Solutions informatiques professionnelles pour particuliers et entreprises.</p>
            <a href="#footer" className="btn-hero">Commencez maintenant</a>
          </div>
          <div className="hero-visual">
            <div className="hero-visual-center">
              <div className="tech-icon">💻</div>
              <p>Solutions Informatiques Professionnelles</p>
            </div>
            <span className="badge b1">🤖 Intelligence Artificielle</span>
            <span className="badge b2">☁️ Cloud &amp; DevOps</span>
            <span className="badge b3">📱 Mobile Dev</span>
            <span className="badge b4">📊 Data Analytics</span>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about">
        <div className="about-inner">
          <div className="section-tag">Bienvenue chez 3LM Solutions</div>
          <h2 className="section-title">Découvrons qui nous sommes</h2>
          <p className="section-body">
            Bienvenue chez <strong>3LM Solutions</strong>, où l'excellence technologique rencontre l'innovation.
            Depuis notre création, nous concevons des solutions informatiques sur mesure capables de transformer
            et d'accélérer la croissance des entreprises.<br /><br />
            Notre équipe passionnée réunit savoir-faire, créativité et approche orientée client afin d'offrir
            des résultats qui dépassent les attentes. Toujours à l'affût des évolutions du secteur, nous nous
            engageons à proposer des technologies modernes, fiables et performantes.<br /><br />
            <strong>3LM Solutions</strong> accompagne ses clients vers un environnement numérique fluide, sécurisé et efficace.
          </p>
        </div>
      </section>

      {/* ── STATS ── */}
      <section id="stats">
        <div className="stats-inner">
          <div className="stat">
            <div className="stat-num">+30</div>
            <div className="stat-lbl">Clients à l'international</div>
          </div>
          <div className="stat">
            <div className="stat-num">+85</div>
            <div className="stat-lbl">Projets logiciels livrés</div>
          </div>
          <div className="stat">
            <div className="stat-num">7+</div>
            <div className="stat-lbl">Pays desservis</div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section id="cta">
        <div className="cta-inner">
          <h2>Nos services vous intéressent ?</h2>
          <p>Réfléchissons ensemble à la manière dont nous pouvons aider votre entreprise.</p>
          <a href="#footer" className="btn-cta">Programmer un appel</a>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section id="designed">
        <div className="designed-inner">
          <div className="service-grid" id="services">
            {services.map((s) => (
              <Link to={s.path} className="svc-card" key={s.path}>
                <div className="svc-card-icon">{s.icon}</div>
                <div className="svc-card-name">{s.name}</div>
              </Link>
            ))}
          </div>
          <div className="des-content">
            <div className="section-tag">Pour les entreprises</div>
            <h2>Conçu pour les entreprises</h2>
            <p>
              Nous sommes une équipe de passionnés dont la mission est d'améliorer la performance des entreprises
              grâce à des solutions technologiques innovantes. Nous créons des outils performants et sur mesure
              pour répondre à vos besoins métiers et résoudre vos défis opérationnels.
            </p>
            <p>
              Nos services sont conçus pour les petites et moyennes entreprises souhaitant optimiser leurs
              processus, accélérer leur croissance et réussir leur transformation digitale.
            </p>
            <Link to="/contactus" className="btn-reach">Entrer en contact</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
