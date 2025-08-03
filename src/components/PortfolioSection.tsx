import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Smartphone, Cloud, Clock } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "SNRTCall",
      description:
        "Application mobile interne pour les employés de la SNRT permettant la gestion des appels via le protocole SIP avec serveur Asterisk.",
      role: "Android Developer",
      tools: ["Android", "Kotlin", "SIP", "Asterisk", "Material Design"],
      features: [
        "Authentification SIP",
        "Appels internes VoIP",
        "Suivi de l’historique",
        "Interface intuitive",
      ],
      image: "https://i.postimg.cc/5yVyVk4B/2.png",
      icon: Smartphone,
    },
    {
      title: "Météo App",
      description:
        "Application météo complète avec une interface élégante, des prévisions précises et des animations interactives.",
      role: "Full Stack Developer",
      tools: ["Flutter", "Weather API", "Dart", "Custom Animations"],
      features: [
        "Prévisions sur 7 jours",
        "Cartes météo",
        "Notifications push",
        "Localisation automatique",
      ],
      image:"https://i.postimg.cc/7hn6YMhp/3.png",
      icon: Cloud,
    },
    {
      title: "Khadamat Culture",
      description:
        "Application mobile utilisée par les agents sur PDA pour la gestion des billets dans les sites et monuments historiques.",
      role: "Mobile Developer",
      tools: ["Android", "Kotlin", "Room DB", "Bluetooth Printing"],
      features: [
        "Vente de billets",
        "Validation à l'entrée",
        "Contrôle hors ligne",
        "Impression instantanée",
      ],
      image:"https://i.postimg.cc/NMTFZwcG/1.png",
      icon: Clock,
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative mobile applications that solve real-world problems
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="bg-background-card rounded-lg border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                {/* Project Header */}
                <div
                  className={`h-48 bg-gradient-to-br p-8 flex items-center justify-center relative overflow-hidden`}
                >
                  {project.image ? (
                    <img src={project.image} alt={`${project.title} logo`} className="w-40 h-auto z-10 opacity-90" />
                  ) : (
                    <IconComponent className="w-20 h-20 text-white opacity-90" />
                  )}
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {project.role}
                    </span>
                  </div>

                  {/* Tools Used */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      Tools Used:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      Key Features:
                    </h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/BadreddineBr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
              View All Projects
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
