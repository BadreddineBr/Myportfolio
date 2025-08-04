import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          controls.start("visible");
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls, hasAnimated]);

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate={controls}
        variants={container}
      >
        {/* Title + Subtitle */}
        <motion.div className="text-center mb-16" variants={fadeUp}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I’m Badr-Eddine Briki, a developer who brings ideas to life by creating digital experiences that inspire and engage.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div className="space-y-6" variants={container}>
            <motion.h3 className="text-2xl font-semibold text-foreground" variants={fadeUp}>
              Building Technology to Improve Experiences
            </motion.h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <motion.p variants={fadeUp}>
                I’m a passionate mobile developer, web developer, and video editor with strong skills in Android and Flutter. 
                I turn ideas into useful apps and videos by combining clean code, visual creativity, and real problem-solving.
              </motion.p>
              <motion.p variants={fadeUp}>
                My background mixes strong academic learning with hands-on experience. I focus on building smooth, user-friendly experiences that work well and look great. Whether it’s a mobile app, a website, or a video project, I aim for quality and impact.
              </motion.p>
              <motion.p variants={fadeUp}>
                I also enjoy working with teams, learning from others, and sharing what I know. For me, every project is a chance to grow, create something meaningful, and help others through technology.
              </motion.p>
            </div>

            {/* Mission Statement with glass shine effect */}
            <motion.div
              className="quote-glass"
              variants={fadeUp}
            >
              <blockquote>
                " Every project is an opportunity to learn, to figure out problems and challenges, to invent and reinvent."
              </blockquote>
            </motion.div>
          </motion.div>

<motion.div
  className="flex justify-center"
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  exit="hidden"
>
  <div
    className="
      group relative flex cursor-pointer overflow-hidden
      rounded-xl shadow-xl
      transition-transform duration-500 ease-in-out
      hover:scale-110 hover:rotate-3
      max-w-xl   /* bigger max width */
      w-full
      h-auto
    "
  >
    <img
      src="https://i.postimg.cc/g2BqgMnN/merond.png"
      alt="Badr Eddine Briki"
      className="rounded-xl object-cover w-full h-full"
      loading="lazy"
      draggable={false}
      style={{ userSelect: "none" }}
    />
  <div
  className="
    absolute inset-0 flex flex-col items-center justify-start
    bg-gradient-to-t from-black/70 to-transparent
    text-white text-center p-8 pt-18 pb-8
    opacity-0 translate-y-8
    transition-all duration-400
    group-hover:opacity-100 group-hover:translate-y-0
    pointer-events-none
  "
>
  <h4 className="text-3xl font-bold tracking-wide drop-shadow-lg">
    Badr-Eddine Briki
  </h4>
</div>

  </div>
</motion.div>







        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
