import { Code, Cpu, Palette, BarChart3, Clapperboard 
 } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: Code,
      skills: [
        { name: "Android (Kotlin)", level: 90 },
        { name: "Flutter / Dart", level: 85 },
        { name: "Mobile App Optimization", level: 80 },
        { name: "Cross-platform Development", level: 85 },
      ],
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      title: "Web Development",
      icon: Cpu,
      skills: [
        { name: "HTML / CSS", level: 90 },
        { name: "PHP / Laravel", level: 82 },
        { name: "JavaScript", level: 90 },
        { name: "MySQL", level: 75 },
      ],
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      title: "Design",
      icon: Palette,
      skills: [
        { name: "Multimedia Content Creation", level: 85 },
        { name: "Figma", level: 80 },
        { name: "UI / UX Principles", level: 78 },
        { name: "Visual Storytelling", level: 82 },
      ],
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
    },
    {
  title: "Editing & Media",
  icon: Clapperboard,
  skills: [
    { name: "Video Editing", level: 85 },
    { name: "Content Creation", level: 90 },
    { name: "Social Media Management", level: 88 },
    { name: "Reels & Shorts Editing", level: 90 }
  ],
  color: "text-primary",
  bgColor: "bg-primary/10",
}

  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set spanning development, robotics, design, and analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="bg-background-card p-6 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <IconComponent className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;