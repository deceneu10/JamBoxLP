import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { title: "Home", href: "#hero" },
  { title: "For Users", href: "#for-users" },
  { title: "For Businesses", href: "#for-businesses" },
  { title: "About", href: "#about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full bg-white bg-opacity-95 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'py-3'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center space-x-2">
            <span className="text-primary text-2xl font-bold">JamBox</span>
          </a>
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
          <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full">Sign Up</Button>
        </div>

        <button 
          className="md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-white w-full pb-4 px-4 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.title} 
              href={link.href} 
              className="font-medium text-foreground hover:text-primary transition py-2"
              onClick={closeMenu}
            >
              {link.title}
            </a>
          ))}
          <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full w-full">Sign Up</Button>
        </div>
      </div>
    </nav>
  );
}
