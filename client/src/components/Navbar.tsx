import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/lib/LanguageContext";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { key: "navbar.users", href: "#for-users" },
    { key: "navbar.businesses", href: "#for-businesses" },
    { key: "navbar.about", href: "#about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full bg-background z-50 transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'py-3'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src="/attached_assets/Logo_site-min.png" alt="JamBox Logo" className="w-10 h-10 object-contain" />
            </div>
            <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">JamBox</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.key} 
              href={link.href} 
              className="font-medium text-foreground hover:text-primary transition"
            >
              {t(link.key)}
            </a>
          ))}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <LanguageSelector />
          
          <a 
            href="#contact-section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full">
              {t("navbar.contact")}
            </Button>
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <LanguageSelector />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground hover:text-primary transition"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-gray-800 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.key} 
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                }}
                className="font-medium text-foreground hover:text-primary transition py-2"
              >
                {t(link.key)}
              </a>
            ))}
            <a 
              href="#contact-section"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
              className="inline-block"
            >
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full w-full">
                {t("navbar.contact")}
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
