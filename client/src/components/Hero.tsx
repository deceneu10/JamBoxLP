import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";
import MobileAppImage from "@assets/Mobile_vertical.png";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section id="hero" className="pt-24 pb-2 md:pt-32 md:pb-24 bg-background text-white relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              {t("hero.title")}
            </h1>
            <p className="text-xl mb-8 text-white">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
              <a href="#for-users">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-bold text-center w-full sm:w-auto">
                  {t("hero.forUsers")}
                </Button>
              </a>
              <a href="#for-businesses">
                <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full font-bold text-center w-full sm:w-auto">
                  {t("hero.forBusinesses")}
                </Button>
              </a>
            </div>

          </div>
          <div className="hidden md:flex md:w-1/2 relative justify-center">
            <div className="w-full max-w-md relative">
              <img 
                src={MobileAppImage} 
                alt="JamBox Mobile App Screenshot" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
