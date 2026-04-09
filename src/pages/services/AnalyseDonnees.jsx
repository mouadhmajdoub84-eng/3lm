import ServicePage from "../../components/ServicePage";

const sections = [
  {
    icon: "🔧",
    title: "Data Engineering",
    items: [
      "Ingestion, transformation et pipelines de données (ETL/ELT)",
      "Automatisation et optimisation des flux de données",
      "Intégration avec les systèmes existants",
    ],
  },
  {
    icon: "🏗️",
    title: "Architecture Data",
    items: [
      "Data lakes, data warehouses et datamarts",
      "Optimisation de la structuration et de l'accès aux données",
      "Scalabilité et haute disponibilité",
    ],
  },
  {
    icon: "⚙️",
    title: "Traitement & Préparation",
    items: [
      "Nettoyage, enrichissement et normalisation des données",
      "Préparation pour analyses avancées et machine learning",
      "Gestion des volumes massifs de données",
    ],
  },
  {
    icon: "📈",
    title: "Analyse & Modélisation",
    items: [
      "Analyse descriptive, prédictive et prescriptive",
      "Développement de modèles Machine Learning & Deep Learning",
      "Simulation et scénarios décisionnels",
    ],
  },
  {
    icon: "📊",
    title: "Visualisation & Reporting",
    items: [
      "Création de tableaux de bord interactifs (Power BI, Tableau, Looker…)",
      "Reporting automatisé et suivi des KPI",
      "Support à la prise de décision opérationnelle et stratégique",
    ],
  },
  {
    icon: "🛡️",
    title: "Qualité, Gouvernance & Sécurité",
    items: [
      "Contrôle de qualité des données et validation",
      "Mise en place de politiques de gouvernance",
      "Sécurisation et confidentialité des données",
    ],
  },
  {
    icon: "🚀",
    title: "Optimisation & Performance",
    items: [
      "Optimisation des processus d'analyse",
      "Gestion efficace des volumes massifs",
      "Amélioration continue des performances",
    ],
  },
];

export default function AnalyseDonnees() {
  return (
    <ServicePage
      icon="📊"
      tag="Analyses de données"
      title={<>Analyses de <em>données</em></>}
      color="#10b981"
      intro={
        <>
          <p>
            Nos services d'analyse de données transforment vos informations brutes en <strong>insights exploitables</strong> et
            en <strong>modèles décisionnels performants</strong>. Nous intervenons sur l'ensemble du cycle de la donnée afin de
            garantir la <strong>qualité, la fiabilité et la valorisation</strong> de vos actifs data.
          </p>
          <p>
            Grâce à nos équipes <strong>remote, nearshore et offshore</strong>, nous vous offrons une capacité d'analyse
            continue, flexible et compétitive, soutenue par une solide expertise technique en ingénierie, traitement
            et exploitation des données à grande échelle.
          </p>
        </>
      }
      sections={sections}
    />
  );
}
