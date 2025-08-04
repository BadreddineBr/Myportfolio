import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-6">
          {/* Back to Top Button */}
          <div>
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>

          {/* Name */}
          <div>
            <h3 className="text-xl font-bold gradient-text">Badr-Eddine Briki</h3>
            <p className="text-muted-foreground mt-2">
              Mobile Developer | Web Developer | Video Editor
            </p>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground flex items-center justify-center">
              © {currentYear} Made with 
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
              and and many late nights :)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;