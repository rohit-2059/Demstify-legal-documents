import { Button } from "@/components/ui/button";

const CTASection = () => {
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
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 via-transparent to-neon-green/5" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-primary opacity-10 blur-3xl rounded-full" />
      
      {/* Animated Particles */}
      <div className="absolute top-20 left-20 w-1 h-1 bg-electric-blue rounded-full animate-pulse" />
      <div className="absolute top-40 right-32 w-2 h-2 bg-neon-green rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-cyber-purple rounded-full animate-pulse delay-500" />
      <div className="absolute bottom-20 right-20 w-1 h-1 bg-neural-orange rounded-full animate-pulse delay-700" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main CTA Content */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-mono-heading leading-tight">
            Take Control of Your <br />
            <span className="text-electric-blue">Legal Journey</span> Today
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter leading-relaxed">
            Join thousands of professionals who've simplified their legal processes with AI
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              variant="hero" 
              size="xl"
              className="group relative overflow-hidden min-w-[200px]"
              onClick={scrollToFeatures}
            >
              <span className="relative z-10 flex items-center">
                Start Free
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green to-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            
            <div className="text-sm text-muted-foreground font-mono">
              No credit card required • 7-day free trial
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-16 border-t border-border/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-sm font-mono text-electric-blue mb-1">Enterprise</div>
              <div className="text-xs text-muted-foreground">Security</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-mono text-neon-green mb-1">SOC2</div>
              <div className="text-xs text-muted-foreground">Certified</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-mono text-cyber-purple mb-1">GDPR</div>
              <div className="text-xs text-muted-foreground">Compliant</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-mono text-neural-orange mb-1">24/7</div>
              <div className="text-xs text-muted-foreground">Support</div>
            </div>
          </div>
        </div>

        {/* Footer Legal Note */}
        <div className="mt-12 text-xs text-muted-foreground font-mono opacity-50">
          &lt;/legal&gt; This AI assistant provides information only, not legal advice
        </div>
      </div>
    </section>
  );
};

export default CTASection;