import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Smartphone, Cloud, Clock, X } from "lucide-react";

const PortfolioSection = () => {
  const [showSnrtDemo, setShowSnrtDemo] = useState(false);
  const [showTastyDemo, setShowTastyDemo] = useState(false);
  const [showKhadamatDemo, setShowKhadamatDemo] = useState(false);

  const projects = [
    {
      title: "SNRTCall",
      description:
        "Internal mobile application for SNRT employees allowing call management via the SIP protocol with an Asterisk server.",
      role: "Mobile VoIP App",
      tools: ["Android", "Kotlin", "SIP", "Asterisk", "Liblinphone SDK"],
      features: [
        "SIP authentication",
        "Internal VoIP calls",
        "Call history tracking",
        "Intuitive interface",
      ],
      image: "https://i.postimg.cc/5yVyVk4B/2.png",
      icon: Smartphone,
    },
    {
      title: "TastyRecipy",
      description:
        "Mobile cooking app to explore, save, and easily follow detailed recipes illustrated with YouTube videos.",
      role: "Cooking App",
      tools: ["Kotlin", "MealDB API", "Room", "lottiefiles"],
      features: [
        "Recipe search",
        "Recipes with videos",
        "Save favorite recipes",
        "Smooth interface",
      ],
      image: "https://i.postimg.cc/Qx4v4dH2/tasty.png",
      icon: Cloud,
    },
    {
      title: "Khadamat Culture",
      description:
        "Mobile app designed for PDA devices, allowing agents to efficiently validate tickets at historical sites and monuments with offline functionality.",
      role: "Mobile Ticketing App",
      tools: ["Android", "Kotlin", "Room DB", "Bluetooth Printing"],
      features: [
        "Ticket sales",
        "Entry validation",
        "Offline control",
        "Instant printing",
      ],
      image: "https://i.postimg.cc/NMTFZwcG/1.png",
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
                <div
                  className={`h-48 bg-gradient-to-br p-8 flex items-center justify-center relative overflow-hidden`}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} logo`}
                      className="w-40 h-auto z-10 opacity-90"
                    />
                  ) : (
                    <IconComponent className="w-20 h-20 text-white opacity-90" />
                  )}
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

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

                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      Technologies Used:
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

                  <div className="flex gap-2 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => {
                        if (project.title === "SNRTCall") setShowSnrtDemo(true);
                        else if (project.title === "TastyRecipy") setShowTastyDemo(true);
                        else if (project.title === "Khadamat Culture") setShowKhadamatDemo(true);
                      }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* SNRTCall Demo Modal */}
        {showSnrtDemo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-background-card rounded-lg shadow-lg p-6 relative max-w-xl w-full">
              <button
                className="absolute top-3 right-3 text-muted-foreground hover:text-primary"
                onClick={() => setShowSnrtDemo(false)}
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/W5vTYv3cDg4"
                  title="SNRTCall Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        )}

        {/* TastyRecipy Demo Modal */}
        {showTastyDemo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-background-card rounded-lg shadow-lg p-6 relative max-w-xl w-full">
              <button
                className="absolute top-3 right-3 text-muted-foreground hover:text-primary"
                onClick={() => setShowTastyDemo(false)}
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/eKDVpsMGoic"
                  title="TastyRecipy Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        )}

        {/* Khadamat Culture Demo Modal */}
        {showKhadamatDemo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-background-card rounded-lg shadow-lg p-6 relative max-w-xl w-full">
              <button
                className="absolute top-3 right-3 text-muted-foreground hover:text-primary"
                onClick={() => setShowKhadamatDemo(false)}
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/ji_A6ZzSbXg"
                  title="Khadamat Culture Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        )}

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
