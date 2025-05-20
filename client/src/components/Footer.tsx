import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-background text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-background flex items-center justify-center mr-2">
                <svg width="32" height="32" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="512" height="512" fill="#10101E" />
                  <path d="M256 105C207.4 105 168 144.4 168 193V319C168 367.6 207.4 407 256 407C304.6 407 344 367.6 344 319V193C344 144.4 304.6 105 256 105Z" stroke="#FF00FF" strokeWidth="12"/>
                  <path d="M256 147C230.6 147 210 167.6 210 193V319C210 344.4 230.6 365 256 365C281.4 365 302 344.4 302 319V193C302 167.6 281.4 147 256 147Z" stroke="#00FFFF" strokeWidth="12"/>
                  <path d="M256 256L226 226M256 256L286 226" stroke="#FFA500" strokeWidth="12"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">JamBox</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Transformăm modul în care oamenii experimentează muzica în localuri din întreaga lume.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-primary/80 transition">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-secondary hover:text-secondary/80 transition">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-accent hover:text-accent/80 transition">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>
          
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-lg font-bold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-300 hover:text-secondary transition">Home</a></li>
              <li><a href="#for-users" className="text-gray-300 hover:text-primary transition">For Users</a></li>
              <li><a href="#for-businesses" className="text-gray-300 hover:text-accent transition">For Businesses</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-secondary transition">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition">Blog</a></li>
            </ul>
          </div>
          
          <div className="md:w-1/3">
            <h4 className="text-lg font-bold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt mt-1 text-accent"></i>
                <span className="text-gray-300">Bulevardul Doina Cornea 4E, 1st floor</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-envelope text-primary"></i>
                <a href="mailto:jambox.vibe@gmail.com" className="text-gray-300 hover:text-primary transition">jambox.vibe@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-phone text-secondary"></i>
                <a href="tel:+40727934162" className="text-gray-300 hover:text-secondary transition">+40 727 934 162</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} JamBox. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-secondary transition">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-accent transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
