import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const services = [
  { icon: "🤖", label: "Intelligence Artificielle IA", path: "/ia" },
  { icon: "📊", label: "Analyses des données", path: "/analyse-des-donnees" },
  { icon: "📡", label: "IoT", path: "/iot" },
  { icon: "⚙️", label: "Devops", path: "/devops" },
  { icon: "🌐", label: "Développement Web", path: "/developpement-web" },
  { icon: "📱", label: "Développement Mobile", path: "/developpement-mobile" },
  { icon: "🏭", label: "Développement de logiciels ERP", path: "/erp" },
  { icon: "💬", label: "Community management", path: "/community-management" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobServicesOpen, setMobServicesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobServicesOpen(false);
    setDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".drop-wrap")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header id="navbar" className={scrolled ? "scrolled" : ""}>
      <div className="nav-wrap">
        <Link to="/" className="logo">
          <div className="logo-box">3LM</div>
          <span className="logo-name">3LM <span>Solutions</span></span>
        </Link>

        {/* ── DESKTOP NAV ── */}
        <ul className="nav-group-main">
          <li>
            <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>Accueil</Link>
          </li>

          {/* Services dropdown */}
          <li className="drop-wrap">
            <span 
              className="nav-link has-drop" 
              data-open={dropdownOpen}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              role="button"
              tabIndex="0"
            >
              Services
            </span>
            <div className="dropdown" data-open={dropdownOpen}>
              {services.map((s) => (
                <Link 
                  to={s.path} 
                  key={s.path} 
                  className="drop-item"
                  onClick={() => setDropdownOpen(false)}
                >
                  <span className="drop-icon">{s.icon}</span>{s.label}
                </Link>
              ))}
            </div>
          </li>

          <li><a href="#" className="nav-link">Actualités</a></li>
          <li><a href="#" className="nav-link">À propos</a></li>
          {/* Contactez-nous is a standalone nav link, NOT inside Services */}
          <li>
            <Link to="/contactus" className={`nav-link ${isActive("/contactus") ? "active" : ""}`}>
              Contactez-nous
            </Link>
          </li>
        </ul>

        {/* ── ACTION BUTTONS ── */}
        <ul className="nav-group-actions">
          <li><Link to="/se-connecter" className="btn-login">Se connecter</Link></li>
          <li><Link to="/contactus" className="btn-contact">Contactez-nous</Link></li>
        </ul>

        <button className="hamburger" onClick={() => setMobileOpen(o => !o)} aria-label="Menu">
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* ── MOBILE MENU ── */}
      {mobileOpen && (
        <nav className="mobile-menu">
          <Link to="/" className="mob-link">Accueil</Link>

          <div>
            <div className="mob-link" onClick={() => setMobServicesOpen(o => !o)}>
              Services <span>{mobServicesOpen ? "▴" : "▾"}</span>
            </div>
            {mobServicesOpen && (
              <ul className="mob-sub">
                {services.map((s) => (
                  <li key={s.path}>
                    <Link to={s.path}>{s.icon} {s.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <a href="#" className="mob-link">Actualités</a>
          <a href="#" className="mob-link">À propos</a>
          <Link to="/contactus" className="mob-link">Contactez-nous</Link>

          <div className="mob-actions">
            <Link to="/se-connecter" className="btn-login">Se connecter</Link>
            <Link to="/contactus" className="btn-contact">Contactez-nous</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
