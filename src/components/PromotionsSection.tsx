import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Gift, 
  Clock, 
  Zap, 
  Crown, 
  Star,
  ArrowRight,
  Timer
} from "lucide-react";

const PromotionsSection = () => {
  const promotions = [
    {
      title: "Welcome Bonus",
      subtitle: "Up to ₱10,000",
      description: "Get 100% match bonus on your first deposit plus 200 free spins",
      badge: "NEW PLAYER",
      icon: Gift,
      gradient: "bg-gradient-primary",
      validUntil: "Limited Time",
      code: "WELCOME100"
    },
    {
      title: "Midnight Bonus", 
      subtitle: "10% Every Night",
      description: "Special bonus every night from 1AM to 5AM - the house always pays!",
      badge: "DAILY",
      icon: Clock,
      gradient: "bg-gradient-gold",
      validUntil: "1AM - 5AM Daily",
      code: "MIDNIGHT10"
    },
    {
      title: "VIP Cashback",
      subtitle: "Up to 15%", 
      description: "Exclusive cashback rewards for our premium VIP members",
      badge: "VIP ONLY",
      icon: Crown,
      gradient: "bg-gradient-neon",
      validUntil: "Ongoing",
      code: "VIP15"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Instant Deposits",
      description: "Fund your account in seconds with multiple payment options"
    },
    {
      icon: Star,
      title: "24/7 Support", 
      description: "Our expert team is always ready to help you win big"
    },
    {
      icon: Timer,
      title: "Fast Withdrawals",
      description: "Get your winnings quickly with our rapid payout system"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Exclusive </span>
            <span className="text-gradient">Promotions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Boost your winning potential with our incredible bonus offers
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {promotions.map((promo, index) => (
            <Card 
              key={promo.title}
              className="group relative overflow-hidden hover:card-hover transition-all duration-500 border-border hover:border-primary/50 hover-glow"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className={`absolute top-0 right-0 w-32 h-32 ${promo.gradient} rounded-full transform translate-x-16 -translate-y-16`} />
                <div className={`absolute bottom-0 left-0 w-24 h-24 ${promo.gradient} rounded-full transform -translate-x-12 translate-y-12`} />
              </div>

              <div className="relative p-6 z-10">
                {/* Badge */}
                <Badge 
                  className={`${promo.gradient} text-white mb-4 hover:animate-pulse-neon`}
                >
                  {promo.badge}
                </Badge>

                {/* Icon */}
                <div className={`w-16 h-16 ${promo.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:animate-spin-glow`}>
                  <promo.icon size={28} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {promo.title}
                </h3>
                <p className="text-3xl font-bold text-accent mb-3 glow-gold">
                  {promo.subtitle}
                </p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {promo.description}
                </p>

                {/* Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Valid:</span>
                    <span className="text-success font-medium">{promo.validUntil}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Code:</span>
                    <span className="text-accent font-mono font-bold">{promo.code}</span>
                  </div>
                </div>

                {/* Action Button */}
                <a href="https://www.pots888.vip" rel="noopener noreferrer">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group-hover:glow-primary"
                  >
                    <span>Claim Bonus</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">
            Why Choose ROLLEM Casino?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-neon">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;