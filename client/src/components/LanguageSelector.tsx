import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/button";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ro' : 'en');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="text-white border-primary hover:bg-primary/20"
    >
      {language === 'en' ? 'RO' : 'EN'}
    </Button>
  );
}