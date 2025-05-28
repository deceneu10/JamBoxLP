import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";

export default function TermsOfService() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Header with navigation */}
      <header className="bg-background border-b border-gray-800 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src="/logo.png" alt="JamBox Logo" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">JamBox</span>
            </div>
          </Link>

          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <Link href="/">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                {t("terms.backToHome")}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Terms of Service Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-card border border-gray-800 rounded-xl p-8">
          <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            {t("terms.title")}
          </h1>

          <div className="prose prose-invert max-w-none">
            {/* Section 1: Acceptance of Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("terms.section1.title")}</h2>
              <p className="text-gray-300 leading-relaxed">{t("terms.section1.content")}</p>
            </section>

            {/* Section 2: Description of Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("terms.section2.title")}</h2>
              <p className="text-gray-300 leading-relaxed">{t("terms.section2.content")}</p>
            </section>

            {/* Section 3: Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("terms.section3.title")}</h2>
              <p className="text-gray-300 leading-relaxed">{t("terms.section3.content")}</p>
            </section>

            {/* Section 4: Rights to Website Content */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("terms.section4.title")}</h2>
              <div className="text-gray-300 leading-relaxed whitespace-pre-line space-y-4">
                <p>{t("terms.section4.paragraph1")}</p>
                <p>{t("terms.section4.paragraph2")}</p>
                <p>{t("terms.section4.paragraph3")}</p>
              </div>
            </section>

            {/* Section 5: Disclaimer of Liability */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("terms.section5.title")}</h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>{t("terms.section5.intro")}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("terms.section5.list1")}</li>
                  <li>{t("terms.section5.list2")}</li>
                  <li>{t("terms.section5.list3")}</li>
                </ul>
                <p>{t("terms.section5.paragraph1")}</p>
                <p>{t("terms.section5.paragraph2")}</p>
                <p>{t("terms.section5.paragraph3")}</p>
              </div>
            </section>

            {/* Section 6: Purpose of Site Content */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("terms.section6.title")}</h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>{t("terms.section6.paragraph1")}</p>
                <p>{t("terms.section6.paragraph2")}</p>
                <p>{t("terms.section6.paragraph3")}</p>
              </div>
            </section>

            {/* Section 7: Personal Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("terms.section7.title")}</h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>{t("terms.section7.paragraph1")}</p>
                <p>{t("terms.section7.paragraph2")}</p>
                <p>{t("terms.section7.paragraph3")}</p>
              </div>
            </section>

            {/* Section 8: Links to Other Sites */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("terms.section8.title")}</h2>
              <p className="text-gray-300 leading-relaxed">{t("terms.section8.content")}</p>
            </section>

            {/* Section 9: Information Provided Through the Site */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("terms.section9.title")}</h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>{t("terms.section9.intro")}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("terms.section9.list1")}</li>
                  <li>{t("terms.section9.list2")}</li>
                  <li>{t("terms.section9.list3")}</li>
                  <li>{t("terms.section9.list4")}</li>
                </ul>
                <p>{t("terms.section9.paragraph1")}</p>
                <p>{t("terms.section9.paragraph2")}</p>
              </div>
            </section>
          </div>

          {/* Back to home button at the bottom */}
          <div className="text-center mt-12 pt-8 border-t border-gray-800">
            <Link href="/">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full">
                {t("terms.backToHome")}
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}