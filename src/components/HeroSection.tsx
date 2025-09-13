import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import heroImage from "../assets/ai-legal-hero.jpg";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Demystify Legal Documents with AI";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden neural-bg">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI Legal Assistant - Futuristic Technology"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-electric-blue rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-neon-green rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-32 left-20 w-1 h-1 bg-cyber-purple rounded-full animate-pulse delay-500" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-mono-heading mb-6 leading-tight">
            <span className="inline-block min-h-[1.2em]">
              {displayText}
              <span className="inline-block w-1 h-16 md:h-20 bg-electric-blue ml-2 animate-blink-caret" />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-inter font-light leading-relaxed">
            Simplifying contracts, policies, and terms so you can make{" "}
            <span className="text-electric-blue font-medium">smarter</span>,{" "}
            <span className="text-neon-green font-medium">safer</span> decisions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            variant="hero" 
            size="xl"
            className="group relative overflow-hidden"
            onClick={scrollToFeatures}
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-cyber-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          
          <Button 
            variant="heroSecondary" 
            size="xl"
            className="group"
            onClick={scrollToFeatures}
          >
            <span>Explore Features</span>
            <div className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</div>
          </Button>
        </div>

        {/* Stats or Trust Indicators */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-2xl font-mono font-bold text-electric-blue">99.9%</div>
            <div className="text-sm text-muted-foreground">Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-mono font-bold text-neon-green">100+</div>
            <div className="text-sm text-muted-foreground">Documents</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-mono font-bold text-cyber-purple">24/7</div>
            <div className="text-sm text-muted-foreground">Available</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-electric-blue/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-electric-blue rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;