import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Trophy, Gamepad2, Zap } from "lucide-react";
import rollemLogo from "@/assets/rollem-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#", icon: Trophy },
    { name: "Slot Games", href: "#", icon: Gamepad2 },
    { name: "Live Casino", href: "#", icon: Zap },
    { name: "Sports Betting", href: "#", icon: Trophy },
    { name: "Promotions", href: "#", icon: Zap },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={rollemLogo} alt="ROLLEM" className="h-10 w-auto" />
            <span className="text-2xl font-bold text-gradient">ROLLEM</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-all duration-300 hover:glow-primary rounded-lg px-3 py-2"
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hover:glow-primary">
              <User size={16} className="mr-2" />
              Login
            </Button>
            <Button variant="casino" size="sm" className="glow-gold">
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-6 pb-6 border-t border-border">
            <div className="flex flex-col space-y-4 pt-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors py-2"
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <Button variant="ghost" size="sm">
                  <User size={16} className="mr-2" />
                  Login
                </Button>
                <Button variant="casino" size="sm">
                  Register
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;