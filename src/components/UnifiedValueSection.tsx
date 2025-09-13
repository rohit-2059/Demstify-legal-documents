import dashboardMockup from "../assets/dashboard-mockup.jpg";

const UnifiedValueSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-mono-heading mb-6 leading-tight">
                All-in-One <br />
                <span className="text-electric-blue">Legal Platform</span>
              </h2>
              <p className="text-xl text-muted-foreground font-inter leading-relaxed">
                Access everything from one dashboard—no need to switch between tools.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-6">
              {[
                { feature: "Smart Document Analysis", status: "Real-time" },
                { feature: "Risk Assessment Engine", status: "AI-Powered" },
                { feature: "Legal Guidance System", status: "24/7 Available" },
                { feature: "Comparison Analytics", status: "Instant Results" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="w-2 h-2 bg-neon-green rounded-full group-hover:shadow-glow transition-all duration-300" />
                  <span className="text-foreground font-inter">{item.feature}</span>
                  <span className="text-sm text-electric-blue font-mono ml-auto">{item.status}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-mono font-bold text-neon-green mb-1">Single</div>
                <div className="text-muted-foreground text-sm">Interface</div>
              </div>
              <div>
                <div className="text-3xl font-mono font-bold text-electric-blue mb-1">4-in-1</div>
                <div className="text-muted-foreground text-sm">Solution</div>
              </div>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-electric-blue/30 shadow-card hover:shadow-glow transition-all duration-500 group">
              <img 
                src={dashboardMockup} 
                alt="Unified Legal AI Dashboard showing all features in one interface"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay Elements */}
              <div className="absolute top-4 left-4 bg-card/80 backdrop-blur-sm border border-electric-blue/30 rounded-lg px-3 py-1">
                <span className="text-xs font-mono text-electric-blue">LIVE ANALYSIS</span>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-card/80 backdrop-blur-sm border border-neon-green/30 rounded-lg px-3 py-1">
                <span className="text-xs font-mono text-neon-green">Accurate</span>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-electric-blue/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating UI Elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse">
              <span className="text-xs font-mono text-primary-foreground">AI</span>
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-2 border-neon-green rounded-full animate-ping" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnifiedValueSection;