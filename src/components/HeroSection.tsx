import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Rocket, Zap, ChevronDown } from "lucide-react";
import badr from "@/assets/badr.png";
import { useSpring, animated } from '@react-spring/web';

// Typewriter component
const words = ["Mobile Developer", "Web Developer", "Video Editor"];
const Typewriter = ({ words, speed = 100, pause = 1500 }) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (wordIndex >= words.length) setWordIndex(0);

    if (!deleting && subIndex === words[wordIndex].length) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    setText(words[wordIndex].substring(0, subIndex + 1));
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, wordIndex, words, pause, speed]);

  return <span className="border-r-2 border-primary pr-1">{text}</span>;
};

// AnimatedCounter component
const AnimatedCounter = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const value = Math.floor(percentage * endValue);
      setCount(value);
      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [inView, endValue, duration]);

  return <span ref={ref} className="font-bold text-primary">{count}+</span>;
};

// Starfield component
const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let stars = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = createStars();
    };

    const createStars = () => {
      const numStars = 100;
      const newStars = [];
      for (let i = 0; i < numStars; i++) {
        newStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          speed: Math.random() * 0.5,
        });
      }
      return newStars;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-20" />;
};

// Main HeroSection component
const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const [springProps, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const calc = (x, y) => {
    if (!cardRef.current) return [0, 0, 1];
    const rect = cardRef.current.getBoundingClientRect();
    const nx = x - rect.left - rect.width / 2;
    const ny = y - rect.top - rect.height / 2;
    const tiltX = ny / 20;
    const tiltY = -nx / 20;
    return [tiltX, tiltY, 1.1];
  };

  const trans = (x, y, s) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const contentAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)' },
    delay: 200,
  });

  const buttonAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)' },
    delay: 600,
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <Starfield />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full animate-bounce"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + i * 0.5}s`,
          }}
        ></div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto text-center space-y-12">
        <animated.div style={contentAnimation} className="flex justify-center relative">
          <animated.div
            ref={cardRef}
            className="relative group transition-transform duration-500"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: springProps.xys.to(trans) }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-primary-glow rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>

            <div className="relative w-56 h-56 sm:w-64 sm:h-64">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl backdrop-blur-sm group-hover:scale-105 transition-transform duration-500">
                <img src={badr} alt="Badr-Eddine Briki" className="w-full h-full object-cover" />
              </div>

              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center shadow-lg floating-animation">
                <Code className="w-8 h-8 text-primary-foreground" />
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-primary to-primary-glow  rounded-full flex items-center justify-center shadow-lg floating-animation"
                style={{ animationDelay: "1s" }}
              >
                <Smartphone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div
                className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-r from-primary to-primary-glow  rounded-full flex items-center justify-center shadow-lg floating-animation"
                style={{ animationDelay: "2s" }}
              >
                <Rocket className="w-4 h-4 text-white" />
              </div>
            </div>
          </animated.div>
        </animated.div>

        <animated.div
          style={contentAnimation}
          className="inline-flex items-center px-6 py-3 rounded-full bg-success/10 border border-success/20 text-success text-sm font-medium backdrop-blur-sm mt-6 mx-auto max-w-max"
        >
          <div className="w-2 h-2 bg-success rounded-full mr-3 animate-pulse"></div>
          <Zap className="w-4 h-4 mr-2" />
          Available for Work
        </animated.div>

        <animated.div style={contentAnimation} className="space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black leading-tight">
              <span className="block bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent animate-pulse">
                <Typewriter words={words} />
              </span>
            </h1>

            <div className="flex flex-wrap justify-center gap-4 text-lg sm:text-xl font-medium">
              <span className="px-4 py-2 bg-background-card/80 backdrop-blur-sm rounded-full border border-border">THINK</span>
              <span className="px-4 py-2 bg-background-card/80 backdrop-blur-sm rounded-full border border-border">BUILD</span>
              <span className="px-4 py-2 bg-background-card/80 backdrop-blur-sm rounded-full border border-border">CREATE</span>
            </div>
          </div>

          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Transforming ideas into reality by combining{" "}
            <span className="text-primary font-medium">innovation, technology, and creativity </span> to create experiences that inspire and engage.
          </p>

          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-4">
            <div className="text-center">
              <div className="text-3xl">
                <AnimatedCounter endValue={10} />
              </div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl">
                <AnimatedCounter endValue={3} />
              </div>
              <div className="text-sm text-muted-foreground">Years Exp</div>
            </div>
            <div className="text-center">
              <div className="text-3xl">
                <AnimatedCounter endValue={100} />%
              </div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </animated.div>

        <animated.div style={buttonAnimation} className="space-y-6 pt-8">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              variant="hero"
              size="hero"
              onClick={() => scrollToSection("#portfolio")}
              className="group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                View My Work
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Button>

            <Button
              variant="outline"
              size="hero"
              onClick={() => scrollToSection("#contact")}
              className="group backdrop-blur-sm"
            >
              <Smartphone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Let's Talk
            </Button>
          </div>

          <div className="flex justify-center pt-12">
            <button
              onClick={() => scrollToSection("#about")}
              className="group flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm font-medium">Discover More</span>
              <div className="w-8 h-8 border border-current rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <ChevronDown className="w-4 h-4 animate-bounce" />
              </div>
            </button>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default HeroSection;
