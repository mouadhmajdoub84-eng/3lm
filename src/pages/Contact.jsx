import { useState } from "react";
import Footer from "../components/Footer";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    nom: "", email: "", telephone: "", sujet: "", question: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.nom,
          email: form.email,
          message: `Sujet: ${form.sujet}\n\n${form.question}${form.telephone ? `\n\nTéléphone: ${form.telephone}` : ""}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Erreur lors de l'envoi du message");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur lors de l'envoi du message");
    }
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <div className="contact-hero-icon">✉️</div>
          <div className="contact-hero-tag">Contactez-nous</div>
          <h1>Contactez-<em>nous</em></h1>
          <p>
            Contactez-nous pour tout ce qui concerne notre entreprise ou nos services.<br />
            Nous ferons de notre mieux pour vous répondre dans les plus brefs délais.
          </p>
        </div>
        <div className="contact-hero-wave">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#fff" />
          </svg>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="contact-body">
        <div className="contact-body-inner">

          {/* FORM */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success">
                <span className="success-icon">✅</span>
                <h2>Message envoyé !</h2>
                <p>Merci de nous avoir contactés. Nous vous répondrons dans les meilleurs délais.</p>
                <button className="btn-reset" onClick={() => { setSubmitted(false); setForm({ nom:"", email:"", telephone:"", sujet:"", question:"" }); }}>
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label>Nom <span className="req">*</span></label>
                    <input name="nom" value={form.nom} onChange={handleChange} placeholder="Votre nom complet" required />
                  </div>
                  <div className="form-field">
                    <label>E-mail <span className="req">*</span></label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="votre@email.com" required />
                  </div>
                </div>
                <div className="form-field">
                  <label>Numéro de téléphone</label>
                  <input name="telephone" value={form.telephone} onChange={handleChange} placeholder="+216 XX XXX XXX" />
                </div>
                <div className="form-field">
                  <label>Sujet <span className="req">*</span></label>
                  <input name="sujet" value={form.sujet} onChange={handleChange} placeholder="Objet de votre message" required />
                </div>
                <div className="form-field">
                  <label>Question <span className="req">*</span></label>
                  <textarea name="question" value={form.question} onChange={handleChange} rows={6} placeholder="Décrivez votre besoin en détail…" required />
                </div>
                <button type="submit" className="btn-submit">Soumettre</button>
              </form>
            )}
          </div>

          {/* INFO */}
          <div className="contact-info">
            <div className="info-card">
              <h3>Ma société</h3>
              <div className="info-item">📍 <span>Ariana, Tunisie</span></div>
              <div className="info-item">📞 <a href="tel:+21654507574">+216 54 507 574</a></div>
              <div className="info-item">✉️ <a href="mailto:contact@3lmsolutions.net">contact@3lmsolutions.net</a></div>
            </div>

            <div className="info-card info-card--cta">
              <h3>Conçu pour les entreprises</h3>
              <p>
                Nous sommes une équipe de passionnés dont la mission est d'améliorer la performance des entreprises
                grâce à des solutions technologiques innovantes.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
