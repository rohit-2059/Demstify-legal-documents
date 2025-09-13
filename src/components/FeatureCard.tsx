import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  delay?: number;
  url?: string;
}

const FeatureCard = ({ icon: Icon, title, description, gradient, delay = 0, url }: FeatureCardProps) => {
  const handleExploreClick = () => {
    if (url) {
      window.location.href = url;
    }
  };
  return (
    <Card className={`group relative p-8 bg-gradient-card border-border/50 hover-lift hover:border-electric-blue/50 transition-all duration-500 overflow-hidden`}
          style={{ animationDelay: `${delay}ms` }}>
      
      {/* Background Glow Effect */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${gradient}`} />
      
      {/* Icon */}
      <div className="relative z-10 mb-6">
        <div className="w-16 h-16 rounded-lg bg-electric-blue/10 border border-electric-blue/30 flex items-center justify-center group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
          <Icon className="w-8 h-8 text-electric-blue" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-4">
        <h3 className="text-xl font-mono-heading text-foreground group-hover:text-electric-blue transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed font-inter">
          {description}
        </p>

        <Button 
          variant="feature" 
          size="sm"
          className="mt-6 group-hover:bg-electric-blue/20"
          onClick={handleExploreClick}
          disabled={!url}
        >
          Explore
          <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
            →
          </span>
        </Button>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-electric-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Card>
  );
};

export default FeatureCard;