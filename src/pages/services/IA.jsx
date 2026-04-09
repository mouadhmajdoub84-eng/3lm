import ServicePage from "../../components/ServicePage";

const sections = [
  {
    icon: "🧠",
    title: "Conseil en IA (nearshore & offshore)",
    items: ["Stratégie IA", "Architecture de solutions IA", "Intégration et déploiement"],
  },
  {
    icon: "🤖",
    title: "Développement d'agents / serveurs MCP",
    items: [
      "Agents autonomes",
      "Serveurs MCP (Modular, Multi-Agent, Compute Pipelines)",
      "Intégration avec des systèmes existants",
      "Automatisation intelligente",
    ],
  },
  {
    icon: "📊",
    title: "Intelligence des données (Data Intelligence)",
    items: [
      "Data engineering",
      "Data analytics",
      "Traitement et transformation de données",
      "Gouvernance et qualité des données",
    ],
  },
  {
    icon: "⚡",
    title: "Solutions de Machine Learning avancées",
    items: [
      "Modèles prédictifs",
      "Deep learning",
      "Optimisation et entraînement de modèles",
      "MLOps et industrialisation IA",
    ],
  },
];

export default function IA() {
  return (
    <ServicePage
      icon="🤖"
      tag="Intelligence Artificielle"
      title={<>Intelligence artificielle <em>IA</em></>}
      color="#6c63ff"
      intro={
        <>
          <p>
            Notre service de conseil <strong>remote, nearshore et offshore</strong> met l'intelligence artificielle au service de votre croissance.
            Nous concevons des agents et serveurs MCP sur mesure, exploitons vos données avec précision et développons
            des solutions de machine learning avancées pour transformer vos projets digitaux en véritables leviers de performance et d'innovation.
          </p>
        </>
      }
      sections={sections}
    />
  );
}
