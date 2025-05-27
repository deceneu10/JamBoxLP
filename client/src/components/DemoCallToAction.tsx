import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

export default function DemoCallToAction() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-y border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">
            {t("demo.title")}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t("demo.subtitle")}
          </p>
          
          <a 
            href="https://play.jambox.top" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-12 py-6 rounded-full font-bold text-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <i className="fas fa-play mr-3 text-lg"></i>
              {t("demo.button")}
            </Button>
          </a>
          
          <p className="text-sm text-gray-400 mt-4">
            {t("demo.hint")}
          </p>
        </div>
      </div>
    </section>
  );
}