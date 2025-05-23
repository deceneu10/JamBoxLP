import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-background text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 flex items-center justify-center mr-2">
                <img src="/logo.png" alt="JamBox Logo" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">JamBox</h3>
            </div>
            <p className="text-gray-300 mb-4">
              {t("footer.description")}
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
            <h4 className="text-lg font-bold mb-4 text-foreground">{t("footer.links.title")}</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-300 hover:text-secondary transition">{t("footer.links.home")}</a></li>
              <li><a href="#for-users" className="text-gray-300 hover:text-primary transition">{t("footer.links.users")}</a></li>
              <li><a href="#for-businesses" className="text-gray-300 hover:text-accent transition">{t("footer.links.businesses")}</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-secondary transition">{t("footer.links.about")}</a></li>
              <li><a href="#contact-section" className="text-gray-300 hover:text-primary transition">{t("footer.links.contact")}</a></li>
            </ul>
          </div>
          
          <div className="md:w-1/3">
            <h4 className="text-lg font-bold mb-4 text-foreground">{t("footer.contact.title")}</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt mt-1 text-accent"></i>
                <span className="text-gray-300">{t("footer.contact.address")}</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-envelope text-primary"></i>
                <a href="mailto:jambox.vibe@gmail.com" className="text-gray-300 hover:text-primary transition">{t("footer.contact.email")}</a>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-phone text-secondary"></i>
                <a href="tel:+40727934162" className="text-gray-300 hover:text-secondary transition">{t("footer.contact.phone")}</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} JamBox. {t("footer.copyright")}</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary transition">{t("footer.privacy")}</a>
            <a href="#" className="text-gray-400 hover:text-secondary transition">{t("footer.terms")}</a>
            <a href="#" className="text-gray-400 hover:text-accent transition">{t("footer.cookies")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
