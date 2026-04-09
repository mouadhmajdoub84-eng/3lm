import ServicePage from "../../components/ServicePage";

const sections = [
  {
    icon: "🌐",
    title: "Création et évolution de sites web",
    items: [
      "Création de sites vitrines, institutionnels et e-commerce",
      "Refonte et modernisation de sites existants",
      "Renforcement fonctionnel et technique des plateformes web",
    ],
  },
  {
    icon: "🎨",
    title: "Ergonomie & Design",
    items: [
      "Conception UX/UI centrée utilisateur",
      "Design graphique et identité visuelle web",
      "Optimisation des parcours utilisateurs et taux de conversion",
    ],
  },
  {
    icon: "🖥️",
    title: "Hébergement & Infrastructure web",
    items: [
      "Hébergement web sécurisé et scalable",
      "Gestion des serveurs et noms de domaine",
      "Sauvegardes, disponibilité et sécurité",
    ],
  },
  {
    icon: "🤝",
    title: "Sous-traitance & Externalisation web",
    items: [
      "Développement web en sous-traitance",
      "Renfort d'équipes techniques",
      "Prestations remote / nearshore adaptées à vos besoins",
    ],
  },
  {
    icon: "📣",
    title: "Web marketing & acquisition digitale",
    items: [
      "Marketing digital direct",
      "Campagnes web et stratégies d'acquisition",
      "Optimisation de la visibilité et de la conversion",
    ],
  },
  {
    icon: "🔧",
    title: "Maintenance & Support web",
    items: [
      "Maintenance corrective, évolutive et préventive",
      "Support technique et mises à jour continues",
      "Surveillance et optimisation des performances",
    ],
  },
  {
    icon: "🔍",
    title: "Référencement & visibilité",
    items: [
      "Référencement naturel (SEO)",
      "Optimisation technique et éditoriale",
      "Suivi des performances et reporting",
    ],
  },
];

export default function DeveloppementWeb() {
  return (
    <ServicePage
      icon="🌐"
      tag="Développement Web"
      title={<>Développement <em>Web</em></>}
      color="#0ea5e9"
      intro={
        <>
          <p>
            Nous accompagnons les entreprises dans la création, l'optimisation et le développement de leur présence digitale
            à travers des solutions web <strong>performantes, sécurisées et évolutives</strong>, alignées avec leurs objectifs business.
          </p>
          <p>
            Grâce à nos équipes <strong>remote</strong> et <strong>nearshore</strong>, nous vous offrons une organisation de travail flexible,
            une grande réactivité et une collaboration fluide, tout en garantissant proximité, qualité et maîtrise des délais.
          </p>
        </>
      }
      sections={sections}
    />
  );
}
