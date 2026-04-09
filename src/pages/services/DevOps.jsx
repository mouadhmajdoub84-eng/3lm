import ServicePage from "../../components/ServicePage";

const sections = [
  {
    icon: "🔄",
    title: "CI/CD & Automatisation",
    items: [
      "Conception et optimisation de pipelines CI/CD (GitLab CI, GitHub Actions, Jenkins…)",
      "Automatisation des builds, tests et déploiements",
      "Standardisation des workflows DevOps",
    ],
  },
  {
    icon: "📝",
    title: "Infrastructure as Code",
    items: [
      "Gestion de l'infrastructure via Terraform, Ansible, CloudFormation…",
      "Déploiement et configuration automatisés",
      "Réplication et scalabilité des environnements",
    ],
  },
  {
    icon: "🐳",
    title: "Conteneurisation & Orchestration",
    items: [
      "Docker, Kubernetes, Helm",
      "Gestion des clusters et microservices",
      "Orchestration et déploiement continu",
    ],
  },
  {
    icon: "☁️",
    title: "Cloud & Gestion des Environnements",
    items: [
      "Gestion des environnements cloud (AWS, Azure, GCP)",
      "Monitoring des ressources et optimisation des coûts",
      "Haute disponibilité et résilience des infrastructures",
    ],
  },
  {
    icon: "📡",
    title: "Monitoring & Observabilité",
    items: [
      "Collecte et gestion des logs (ELK, OpenTelemetry)",
      "Monitoring des applications et infrastructures (Prometheus, Grafana)",
      "Alerting et supervision proactive",
    ],
  },
  {
    icon: "🛡️",
    title: "DevSecOps & Sécurité",
    items: [
      "Intégration de la sécurité à chaque étape du pipeline",
      "Audits, tests et contrôles automatisés",
      "Conformité et bonnes pratiques DevSecOps",
    ],
  },
  {
    icon: "🏗️",
    title: "Architectures Haute Disponibilité",
    items: [
      "Mise en place d'architectures tolérantes aux pannes",
      "Redondance et plan de reprise d'activité",
      "Optimisation de la résilience globale",
    ],
  },
];

export default function DevOps() {
  return (
    <ServicePage
      icon="⚙️"
      tag="DevOps"
      title={<>Services <em>DevOps</em></>}
      color="#f97316"
      intro={
        <>
          <p>
            Nos services DevOps s'articulent autour de l'<strong>automatisation, de la standardisation et de l'industrialisation</strong> de
            vos environnements afin d'améliorer la <strong>rapidité, la stabilité et la qualité</strong> des mises en production.
            Nous intervenons sur l'ensemble de la chaîne technique pour sécuriser et optimiser vos workflows.
          </p>
          <p>
            Grâce à nos équipes <strong>remote, nearshore et offshore</strong>, nous vous offrons une expertise solide et une capacité
            d'intervention continue, facilitant la mise en place d'architectures robustes, scalables et adaptées à vos contraintes.
          </p>
        </>
      }
      sections={sections}
    />
  );
}
