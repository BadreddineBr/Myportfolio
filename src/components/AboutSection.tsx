import { GraduationCap, Award as Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I’m Badr-Eddine Briki, a developer who brings ideas to life by creating digital experiences that inspire and engage.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6 fade-in-up">
            <h3 className="text-2xl font-semibold text-foreground">
              Building Technology to Improve Experiences
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I’m a passionate mobile developer, web developer, and video editor with strong skills in Android and Flutter. 
                I turn ideas into useful apps and videos by combining clean code, visual creativity, and real problem-solving.
              </p>
              <p>
                My background mixes strong academic learning with hands-on experience. I focus on building smooth, user-friendly experiences that work well and look great. Whether it’s a mobile app, a website, or a video project, I aim for quality and impact.
              </p>
              <p>
                I also enjoy working with teams, learning from others, and sharing what I know. For me, every project is a chance to grow, create something meaningful, and help others through technology
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-background-card p-6 rounded-lg border border-border">
              <blockquote className="text-lg italic text-primary font-medium">
                "Every project is a chance to say something that matters — through design, code, or cut"
              </blockquote>
            </div>
          </div>

          {/* Animated Image Section */}
          <div className="flex justify-center fade-in-up">
            <div className="group relative flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:rotate-2">
              <img
                src="https://i.postimg.cc/g2BqgMnN/merond.png"
                alt="Badr Eddine Briki"
                className="rounded-lg shadow-md"
              />
              <h4
                className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-md py-2 px-4 rounded-t-md text-xl font-semibold text-foreground opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
              >
                Badr-Eddine Briki
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
