import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GameCategories from "@/components/GameCategories";
import PromotionsSection from "@/components/PromotionsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <GameCategories />
      <PromotionsSection />
      <Footer />
    </div>
  );
};

export default Index;
