import ServicePage from "../../components/ServicePage";

const sections = [
  {
    icon: "🏥",
    title: "Santé & IoT Médical",
    items: [
      "Dispositifs de monitoring à distance",
      "Collecte de données biométriques en temps réel",
      "Alertes intelligentes et détection d'anomalies",
      "Tableaux de bord pour établissements de santé",
      "Intégration avec systèmes hospitaliers",
    ],
  },
  {
    icon: "🌾",
    title: "Agriculture Intelligente",
    items: [
      "Surveillance de l'humidité et de la qualité des sols",
      "Optimisation de l'irrigation",
      "Suivi climatique en temps réel",
      "Automatisation des exploitations",
      "Analyse prédictive des rendements",
    ],
  },
  {
    icon: "⚡",
    title: "Énergie & Optimisation Durable",
    items: [
      "Monitoring de consommation énergétique",
      "Détection de pertes et d'anomalies",
      "Gestion intelligente des bâtiments",
      "Optimisation des réseaux électriques",
      "Pilotage énergétique en temps réel",
    ],
  },
  {
    icon: "👴",
    title: "Sécurité des Personnes Âgées",
    items: [
      "Détection de chute",
      "Boutons d'alerte connectés",
      "Géolocalisation sécurisée",
      "Surveillance intelligente à domicile",
      "Alertes automatiques vers proches ou services d'assistance",
    ],
  },
  {
    icon: "🏢",
    title: "Sécurité des Bâtiments Intelligents",
    items: [
      "Contrôle d'accès intelligent",
      "Vidéosurveillance augmentée par IA",
      "Détection d'intrusions et d'anomalies",
      "Capteurs connectés (fumée, gaz, température, ouverture)",
      "Supervision multi-sites et alertes en temps réel",
    ],
  },
];

export default function IoT() {
  return (
    <ServicePage
      icon="📡"
      tag="Internet des Objets"
      title={<>Nos solutions <em>IoT</em></>}
      color="#06b6d4"
      intro={
        <>
          <p>
            Chez <strong>3LM Solutions</strong>, nous développons des écosystèmes IoT intelligents conçus pour répondre
            aux enjeux critiques de la santé, de l'agriculture, de l'énergie et de la protection des personnes vulnérables.
          </p>
          <p>
            Notre mission : transformer les données terrain en <strong>décisions stratégiques, fiables et sécurisées</strong> —
            connecter la technologie au service du vivant.
          </p>
        </>
      }
      sections={sections}
    />
  );
}
