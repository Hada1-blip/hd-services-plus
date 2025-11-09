import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import logo from '../assets/logo.png'
import CookieConsent from "@/pages/CookieConsent";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "À Propos", href: "/about" },
    { name: "Nos services", href: "/services" },
    { name: "Notre vision", href: "/projects" },
    // { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="flex items-center justify-center ">
                <img
                  src={logo}
                  alt="HD Services"
                  className="w-32"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium px-3 py-2 rounded-md transition-colors 
  ${isActive(item.href)
                      ? "bg-white text-primary"
                      : "text-white hover:bg-white hover:text-primary"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center text-sm text-white">
                <Button variant="default" size="sm" className="bg-gradient-primary text-white hover:shadow-elegant">
                <Link to="/estimate">  Devis</Link>
                </Button>
              </div>
              <Button variant="default" size="sm" className="bg-white text-primary hover:bg-gradient-primary hover:text-white">
                <Link to="/contact"> Contact</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-border">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${isActive(item.href) ? "text-primary" : "text-muted-foreground"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-3 border-t border-border">
                  <Button variant="default" size="sm" className="w-full bg-gradient-primary mb-3">
                    <Link to="/estimate">  Devis</Link>
                  </Button>
                  <Button variant="default" size="sm" className="w-full bg-gradient-primary">
                   <Link to="/contact"> Contact</Link>
                  </Button>
                    
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
     <footer className="bg-gradient-primary text-white border-t border-border">
  <div className="container mx-auto px-4 py-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      
      {/* Company Info */}
      <div className="space-y-4">
        <div className="flex items-start space-x-2">
          <img src={logo} alt="HD Services" className="w-20" />
          <span className="text-lg font-bold text-white self-center">HD Services</span>
        </div>
        <p className="text-white text-sm">
          Votre partenaire de confiance pour tous vos projets de rénovation et de construction.
        </p>
      </div>

      {/* Company */}
      <div>
        <h3 className="font-semibold text-white mb-4 text-center ">Entreprise</h3>
        <ul className="space-y-2 text-sm text-center ">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À Propos</Link></li>
          <li><Link to="/services">Nos Services</Link></li>
          <li><Link to="/projects">Notre vision</Link></li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="font-semibold text-white mb-4 text-center ">Information</h3>
        <ul className="space-y-3 text-sm text-center ">
          <li><Link to="/estiamte">Devis</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/legal-mentions">Legal</Link></li>
        </ul>
      </div>

    </div>

    <div className="border-t border-border mt-8 pt-8 text-center text-sm text-white">
      <p>&copy; 2025 HD Services Plus – Tous droits réservés |<Link to="/legal-mentions"> Mentions légales</Link> </p>
    </div>
  </div>
</footer>
 <CookieConsent/>


    </div>
  );
};

export default Layout;