import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  Shield,
  Award,
  Clock
} from "lucide-react";
import rollemLogo from "@/assets/rollem-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Slot Games", href: "#" },
    { name: "Live Casino", href: "#" }, 
    { name: "Sports Betting", href: "#" },
    { name: "Promotions", href: "#" },
    { name: "VIP Program", href: "#" },
    { name: "Tournaments", href: "#" }
  ];

  const support = [
    { name: "Help Center", href: "#" },
    { name: "Live Chat", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Payment Methods", href: "#" },
    { name: "Responsible Gaming", href: "#" },
    { name: "Terms & Conditions", href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-background-secondary border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src={rollemLogo} alt="ROLLEM" className="h-12 w-auto" />
              <span className="text-2xl font-bold text-gradient">ROLLEM</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The ultimate destination for premium online gaming. Licensed, secure, 
              and trusted by thousands of players worldwide.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center space-x-2 text-success text-sm">
                <Shield size={16} />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2 text-accent text-sm">
                <Award size={16} />
                <span>Licensed</span>
              </div>
              <div className="flex items-center space-x-2 text-primary text-sm">
                <Clock size={16} />
                <span>24/7 Support</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:glow-primary transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Support</h3>
            <ul className="space-y-3">
              {support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail size={16} className="text-primary mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Email Support</p>
                  <p className="text-sm text-foreground">support@rollem-ph.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={16} className="text-accent mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">24/7 Hotline</p>
                  <p className="text-sm text-foreground">+63 2 8123 4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-success mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Licensed in</p>
                  <p className="text-sm text-foreground">Philippines</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm text-muted-foreground mb-3">
                Subscribe for exclusive offers
              </p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Enter email"
                  className="flex-1 px-3 py-2 bg-card border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button size="sm" variant="casino" className="px-4">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-background">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>
              © 2024 ROLLEM Casino. All rights reserved. 
              <span className="text-accent ml-1">Play Responsibly.</span>
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Responsible Gaming</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;