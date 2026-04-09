import ServicePage from "../../components/ServicePage";

const sections = [
  {
    icon: "🔍",
    title: "Conseil & cadrage ERP",
    items: [
      "Analyse des besoins métiers et des processus existants",
      "Audit fonctionnel et technique",
      "Définition de la solution ERP et de l'architecture cible",
      "Assistance au choix des modules et des technologies",
    ],
  },
  {
    icon: "🏗️",
    title: "Conception & intégration ERP",
    items: [
      "Conception d'ERP sur mesure",
      "Paramétrage et personnalisation des progiciels",
      "Intégration avec les systèmes existants (CRM, SI, outils métiers)",
      "Migration et sécurisation des données",
    ],
  },
  {
    icon: "⚙️",
    title: "Modules fonctionnels ERP",
    items: [
      "Gestion de la production",
      "Gestion de la supply chain",
      "Gestion commerciale (ventes)",
      "Gestion et suivi des stocks",
    ],
  },
  {
    icon: "🚀",
    title: "Déploiement & mise en production",
    items: [
      "Tests fonctionnels et techniques",
      "Recette et validation utilisateur",
      "Mise en production progressive ou globale",
      "Accompagnement au démarrage",
    ],
  },
  {
    icon: "🔧",
    title: "Maintenance & évolution ERP",
    items: [
      "Maintenance corrective et préventive",
      "Maintenance évolutive et ajout de nouvelles fonctionnalités",
      "Support technique et fonctionnel",
      "Optimisation continue des performances",
    ],
  },
  {
    icon: "🤝",
    title: "Externalisation & accompagnement",
    items: [
      "Renfort d'équipes ERP",
      "Support applicatif remote / nearshore / offshore",
      "Accompagnement long terme et TMA",
    ],
  },
];

export default function ERP() {
  return (
    <ServicePage
      icon="🏭"
      tag="Progiciel ERP"
      title={<>Développement de logiciels <em>ERP</em></>}
      color="#8b5cf6"
      intro={
        <>
          <p>
            Nos ERP sur mesure sont conçus pour s'aligner parfaitement avec vos besoins métiers et optimiser
            la gestion de vos processus internes. En renforçant la <strong>productivité, la visibilité et la coordination</strong> de
            vos opérations, ils deviennent de véritables leviers de performance et de compétitivité.
          </p>
          <p>
            Grâce à nos équipes disponibles en <strong>remote, nearshore et offshore</strong>, nous vous offrons une capacité
            d'accompagnement flexible, réactive et économiquement avantageuse, tout en garantissant un haut niveau
            d'expertise sur chaque étape de votre projet ERP.
          </p>
        </>
      }
      sections={sections}
    />
  );
}
