import ServicePage from "../../components/ServicePage";

const sections = [
  {
    icon: "🗺️",
    title: "Stratégie Social Media",
    items: [
      "Élaboration de stratégies sur mesure",
      "Définition de lignes éditoriales et planning de contenu",
      "Identification des cibles et objectifs d'engagement",
    ],
  },
  {
    icon: "✏️",
    title: "Création de Contenus",
    items: [
      "Conception de visuels, vidéos et textes attractifs",
      "Création de contenus adaptés aux différents réseaux sociaux",
      "Optimisation pour l'engagement et la viralité",
    ],
  },
  {
    icon: "💬",
    title: "Animation & Modération",
    items: [
      "Animation quotidienne des communautés",
      "Modération proactive et gestion des interactions",
      "Réponse aux commentaires et messages privés",
    ],
  },
  {
    icon: "📊",
    title: "Veille & Analyse",
    items: [
      "Suivi de l'activité de vos concurrents et tendances du marché",
      "Analyse des performances et KPI des actions menées",
      "Recommandations pour améliorer l'impact et l'engagement",
    ],
  },
  {
    icon: "📣",
    title: "Campagnes Publicitaires",
    items: [
      "Gestion de campagnes payantes (Facebook Ads, Instagram Ads, LinkedIn Ads, TikTok Ads…)",
      "Ciblage, optimisation et suivi des performances",
      "Retours sur investissement et reporting détaillé",
    ],
  },
];

export default function CommunityManagement() {
  return (
    <ServicePage
      icon="💬"
      tag="Community Management"
      title={<>Community <em>Management</em></>}
      color="#ec4899"
      intro={
        <>
          <p>
            Boostez votre présence en ligne grâce à nos services de <strong>community management</strong>. Nous créons,
            animons et développons vos communautés sur tous vos réseaux sociaux afin d'augmenter votre visibilité,
            renforcer votre image de marque et générer un engagement authentique avec votre audience.
          </p>
          <p>
            Nos équipes <strong>remote, nearshore et offshore</strong> vous accompagnent avec flexibilité et réactivité,
            offrant une présence continue, une gestion proactive de vos plateformes et une production de contenus
            à forte valeur ajoutée.
          </p>
        </>
      }
      sections={sections}
    />
  );
}
