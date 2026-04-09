import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="footer-brand-name">3LM <span>Solutions</span></span>
            <p>Votre partenaire informatique fiable, rapide et efficace. Solutions informatiques professionnelles pour particuliers et entreprises.</p>
            <div className="socials">
              <a href="#" className="social">in</a>
              <a href="#" className="social">f</a>
              <a href="#" className="social">𝕏</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/ia">Intelligence Artificielle</Link></li>
              <li><Link to="/analyse-des-donnees">Analyses des données</Link></li>
              <li><Link to="/iot">IoT</Link></li>
              <li><Link to="/devops">Devops</Link></li>
              <li><Link to="/developpement-web">Développement Web</Link></li>
              <li><Link to="/developpement-mobile">Développement Mobile</Link></li>
              <li><Link to="/erp">ERP</Link></li>
              <li><Link to="/community-management">Community management</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Liens</h4>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#">Actualités</a></li>
              <li><a href="#footer">Contactez-nous</a></li>
              <li><a href="#">Se connecter</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <div className="footer-contact-item">📍 Ariana, Tunisie</div>
            <div className="footer-contact-item">📞 <a href="tel:+21654507574">+216 54 507 574</a></div>
            <div className="footer-contact-item">✉️ <a href="mailto:contact@3lmsolutions.net">contact@3lmsolutions.net</a></div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Copyright © 3LM Solutions</span>
          <span>Ariana, Tunisie</span>
        </div>
      </div>
    </footer>
  );
}
