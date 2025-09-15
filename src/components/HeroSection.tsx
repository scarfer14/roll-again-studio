import { Button } from "@/components/ui/button";
import { Play, Star, Trophy, Zap } from "lucide-react";
import casinoHeroBg from "@/assets/casino-hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${casinoHeroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-pulse-neon">
        <div className="w-16 h-16 bg-gradient-primary rounded-full glow-primary opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-spin-glow">
        <Star className="w-8 h-8 text-accent" />
      </div>
      <div className="absolute bottom-32 left-20 float-animation">
        <Trophy className="w-12 h-12 text-accent-glow" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-primary px-6 py-2 rounded-full text-sm font-medium mb-8 bounce-in glow-primary">
            <Zap size={16} />
            <span>🎰 Welcome Bonus Up To ₱10,000!</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Break It Down</span>
            <br />
            <span className="text-foreground">& Win Big at</span>
            <br />
            <span className="text-accent glow-gold">ROLLEM</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Experience premium online gaming with massive slot jackpots, 
            live dealer action, and sports betting excitement.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
            <div className="flex items-center space-x-2 text-success">
              <Star size={16} />
              <span>Licensed & Secure</span>
            </div>
            <div className="flex items-center space-x-2 text-accent">
              <Trophy size={16} />
              <span>24/7 Live Support</span>
            </div>
            <div className="flex items-center space-x-2 text-primary">
              <Zap size={16} />
              <span>Instant Payouts</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://www.pots888.vip/client/signup/?referral=pp81614" rel="noopener noreferrer">
              <Button 
                variant="casino" 
                size="lg" 
                className="text-lg px-8 py-6 glow-gold hover:scale-105 transition-all duration-300"
              >
                <Play size={20} className="mr-3" />
                Play Now - Get ₱500 Bonus
              </Button>
            </a>
            <a href="https://www.pots888.vip/client/signup/?referral=pp81614" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:glow-primary transition-all duration-300"
              >
                Download App
              </Button>
            </a>
          </div>

          {/* Promo Text */}
          <p className="text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
            🎉 <span className="text-accent font-semibold">10% Midnight Bonus Every 1AM-5AM!</span> 
            Plus exclusive rewards and tournaments. Join thousands of winners today.
          </p>
        </div>
      </div>

      {/* Gradient Overlay Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;