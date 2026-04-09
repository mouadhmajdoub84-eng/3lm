import ServicePage from "../../components/ServicePage";

const sections = [
  {
    icon: "📱",
    title: "Développement d'applications mobiles",
    items: [
      "Applications iOS (Swift)",
      "Applications Android (Kotlin)",
      "Développement multiplateforme (Flutter, React Native)",
    ],
  },
  {
    icon: "🗺️",
    title: "Conception & stratégie mobile",
    items: [
      "Analyse des besoins métiers et fonctionnels",
      "Définition de l'architecture et des parcours utilisateurs",
      "Conseil technologique et choix des plateformes",
    ],
  },
  {
    icon: "🎨",
    title: "UX/UI & expérience utilisateur",
    items: [
      "Design mobile centré utilisateur",
      "Prototypage et maquettes interactives",
      "Optimisation de l'ergonomie et de la navigation",
    ],
  },
  {
    icon: "🔗",
    title: "Intégration & connectivité",
    items: [
      "Intégration d'API et services backend",
      "Synchronisation avec systèmes existants (ERP, CRM, SI)",
      "Fonctionnalités cloud et temps réel",
    ],
  },
  {
    icon: "🚀",
    title: "Tests, déploiement & publication",
    items: [
      "Tests fonctionnels, techniques et de performance",
      "Déploiement sur App Store et Google Play",
      "Conformité aux standards et bonnes pratiques",
    ],
  },
  {
    icon: "🔧",
    title: "Maintenance & évolution",
    items: [
      "Maintenance corrective et évolutive",
      "Mises à jour fonctionnelles et techniques",
      "Support et amélioration continue",
    ],
  },
];

export default function DeveloppementMobile() {
  return (
    <ServicePage
      icon="📱"
      tag="Développement Mobile"
      title={<>Développement <em>Mobile</em></>}
      color="#f59e0b"
      intro={
        <>
          <p>
            Nous concevons et développons des applications mobiles <strong>performantes, sécurisées et évolutives</strong>,
            adaptées aux usages actuels et aux besoins métiers de nos clients. De la conception à la mise en production,
            nous vous accompagnons à chaque étape pour garantir une expérience utilisateur optimale.
          </p>
          <p>
            Que ce soit via nos équipes <strong>nearshore, offshore ou remote</strong>, nous adaptons notre accompagnement
            à vos besoins et à votre organisation. Avec nous, vos projets digitaux se transforment en opportunités
            de croissance réelles et mesurables.
          </p>
        </>
      }
      sections={sections}
    />
  );
}
