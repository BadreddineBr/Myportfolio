import { Smartphone, MonitorSmartphone, Palette, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "Mobile Application Development",
      description:
        "Custom Android and Flutter applications tailored to your needs with clean code, smooth UI/UX, and high performance.",
      icon: Smartphone,
      features: [
        "Android (Kotlin) Native Apps",
        "Cross-platform Flutter Apps",
        "App UI/UX Optimization",
        "App Store & Play Store Deployment",
        "Maintenance & Upgrades",
      ],
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20",
    },
    {
      title: "Web Development",
      description:
        "Responsive, modern websites and web apps built using HTML, CSS, JS, PHP/Laravel, and MySQL — focused on functionality.",
      icon: MonitorSmartphone,
      features: [
        "Full-Stack Web Development",
        "Custom Website Design",
        "PHP/Laravel Backend",
        "Database Integration",
        "Performance & SEO Optimization",
      ],
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/20",
    },
    {
      title: "Editing & Media Creation",
      description:
        "High-quality content creation services: video editing, storytelling, brand visuals, and content strategies for digital platforms.",
      icon: Palette,
      features: [
        "Video Editing & Storytelling",
        "Short-Form Social Content",
        "Brand Identity & Visuals",
        "Thumbnail & Post Design",
        "Platform Optimization (YT, IG, FB)",
      ],
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/20",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Creative and technical solutions for mobile, web, and content creation — built to make impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`bg-background-card p-8 rounded-lg border ${service.borderColor} hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105 group`}
              >
                <div
                  className={`w-16 h-16 ${service.bgColor} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className={`w-8 h-8 ${service.color}`} />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Button variant="outline" className="w-full group" onClick={scrollToContact}>
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-background-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how we can bring your ideas to life with impactful design and technology.
            </p>
            <Button variant="hero" size="lg" onClick={scrollToContact}>
              Start a Conversation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
