import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
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
            <div className="w-10 h-10 rounded-full overflow-hidden bg-background flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="512" height="512" fill="#10101E" />
                <path d="M256 105C207.4 105 168 144.4 168 193V319C168 367.6 207.4 407 256 407C304.6 407 344 367.6 344 319V193C344 144.4 304.6 105 256 105Z" stroke="#FF00FF" strokeWidth="12"/>
                <path d="M256 147C230.6 147 210 167.6 210 193V319C210 344.4 230.6 365 256 365C281.4 365 302 344.4 302 319V193C302 167.6 281.4 147 256 147Z" stroke="#00FFFF" strokeWidth="12"/>
                <path d="M256 256L226 226M256 256L286 226" stroke="#FFA500" strokeWidth="12"/>
              </svg>
            </div>
            <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">JamBox</span>
          </div>
        </Link>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.title} 
              href={link.href} 
              className="font-medium text-foreground hover:text-primary transition"
            >
              {link.title}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="https://tally.so/r/waox6W" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full">Sign Up</Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
