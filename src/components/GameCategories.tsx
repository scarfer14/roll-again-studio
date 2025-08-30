import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Gamepad2, 
  Zap, 
  Trophy, 
  Target, 
  Crown, 
  Dice1,
  ArrowRight,
  Star
} from "lucide-react";

const GameCategories = () => {
  const categories = [
    {
      title: "Slot Games",
      description: "Spin to win with over 1000+ premium slot machines",
      icon: Gamepad2,
      gradient: "bg-gradient-primary",
      games: "1,200+ Games",
      jackpot: "₱50M+ Jackpot",
    },
    {
      title: "Live Casino",
      description: "Real dealers, real action, real time excitement", 
      icon: Crown,
      gradient: "bg-gradient-gold",
      games: "50+ Tables",
      jackpot: "24/7 Live",
    },
    {
      title: "Sports Betting",
      description: "Bet on your favorite teams and athletes",
      icon: Trophy,
      gradient: "bg-gradient-neon",
      games: "100+ Sports",
      jackpot: "Live Odds",
    },
    {
      title: "Fishing Games",
      description: "Catch the biggest fish and the biggest rewards",
      icon: Target,
      gradient: "bg-gradient-primary", 
      games: "20+ Games",
      jackpot: "₱5M+ Prizes",
    },
    {
      title: "Arcade Games",
      description: "Classic games with modern casino twists",
      icon: Zap,
      gradient: "bg-gradient-gold",
      games: "80+ Games", 
      jackpot: "Instant Win",
    },
    {
      title: "Table Games",
      description: "Blackjack, poker, roulette and more classics",
      icon: Dice1,
      gradient: "bg-gradient-neon",
      games: "30+ Tables",
      jackpot: "High Stakes",
    },
  ];

  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Choose Your</span>
            <span className="text-foreground"> Game</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our premium collection of games designed for winners like you
          </p>
        </div>

        {/* Game Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <Card 
              key={category.title}
              className="group relative overflow-hidden hover:card-hover transition-all duration-500 border-border hover:border-primary/50 hover-glow cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-24 h-24 ${category.gradient} opacity-10 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500`} />
              
              <div className="relative p-6 z-10">
                {/* Icon */}
                <div className={`w-16 h-16 ${category.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:animate-pulse-neon`}>
                  <category.icon size={28} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {category.description}
                </p>

                {/* Stats */}
                <div className="flex justify-between items-center mb-4 text-sm">
                  <span className="flex items-center space-x-1 text-accent">
                    <Star size={12} />
                    <span>{category.games}</span>
                  </span>
                  <span className="text-success font-semibold">
                    {category.jackpot}
                  </span>
                </div>

                {/* Action */}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="group-hover:text-primary group-hover:glow-primary w-full justify-between"
                >
                  <span>Play Now</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button 
            variant="casino" 
            size="lg" 
            className="px-8 py-4 text-lg glow-gold hover:scale-105 transition-all duration-300"
          >
            <Crown size={20} className="mr-3" />
            Explore All Games
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GameCategories;