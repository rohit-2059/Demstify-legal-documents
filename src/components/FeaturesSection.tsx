import FeatureCard from "./FeatureCard";
import { FileText, FolderOpen, Scale, RefreshCw } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: "Summarise & Detect Risks",
      description: "AI summaries, risk detection, Q&A, and visuals to understand any document instantly.",
      gradient: "bg-gradient-to-br from-electric-blue/20 to-cyber-purple/20",
      delay: 0,
      url:"https://legallm.netlify.app/",
    },
    {
      icon: FolderOpen,
      title: "Documentation Pathway",
      description: "Step-by-step guidance on required documents for any legal case or process.",
      gradient: "bg-gradient-to-br from-neon-green/20 to-electric-blue/20",
      delay: 100,
        url: "https://legal-documents.onrender.com/",
    },
    {
      icon: Scale,
      title: "Law & Contract Guidance",
      description: "What to do if contracts aren't fulfilled plus insights from similar cases.",
      gradient: "bg-gradient-to-br from-cyber-purple/20 to-neural-orange/20",
      delay: 200,
      url :"https://law-guidance-app-frontend.vercel.app",
    },
    {
      icon: RefreshCw,
      title: "Document & Policy Comparison",
      description: "Compare old vs new documents, laws, and policies with AI-powered analysis.",
      gradient: "bg-gradient-to-br from-neural-orange/20 to-neon-green/20",
      delay: 300,
      url : "https://legal-document-comparison.onrender.com",
    },
  ];

  return (
    <section id="features" className="py-24 px-6 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-blue/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono-heading mb-6 leading-tight">
            Core <span className="text-electric-blue">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
            Four powerful AI tools designed to simplify your legal journey
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Integration Hint */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground font-mono">
            &lt;/&gt; All features seamlessly integrated into one platform
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;