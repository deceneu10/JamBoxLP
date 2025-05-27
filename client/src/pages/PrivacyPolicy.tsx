import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";

export default function PrivacyPolicy() {
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
                {t("privacy.backToHome")}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-card border border-gray-800 rounded-xl p-8">
          <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            {t("privacy.title")}
          </h1>

          <div className="prose prose-invert max-w-none">
            {/* Section 1: Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("privacy.section1.title")}</h2>
              <p className="text-gray-300 leading-relaxed">{t("privacy.section1.content")}</p>
            </section>

            {/* Section 2: What Are Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("privacy.section2.title")}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{t("privacy.section2.paragraph1")}</p>
              <p className="text-gray-300 leading-relaxed mb-4">{t("privacy.section2.paragraph2")}</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>{t("privacy.section2.list1")}</li>
                <li>{t("privacy.section2.list2")}</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">{t("privacy.section2.paragraph3")}</p>
            </section>

            {/* Section 3: Why We Use Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("privacy.section3.title")}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{t("privacy.section3.paragraph1")}</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>{t("privacy.section3.list1")}</li>
                <li>{t("privacy.section3.list2")}</li>
                <li>{t("privacy.section3.list3")}</li>
                <li>{t("privacy.section3.list4")}</li>
                <li>{t("privacy.section3.list5")}</li>
              </ul>
            </section>

            {/* Section 4: Cookie Lifespan */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("privacy.section4.title")}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{t("privacy.section4.paragraph1")}</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>{t("privacy.section4.list1")}</li>
                <li>{t("privacy.section4.list2")}</li>
              </ul>
            </section>

            {/* Section 5: What Cookies We Use */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("privacy.section5.title")}</h2>
              <ul className="list-none space-y-3 text-gray-300">
                <li><strong>a)</strong> {t("privacy.section5.list1")}</li>
                <li><strong>b)</strong> {t("privacy.section5.list2")}</li>
                <li><strong>c)</strong> {t("privacy.section5.list3")}</li>
                <li><strong>d)</strong> {t("privacy.section5.list4")}</li>
              </ul>
            </section>
          </div>

          {/* Back to home button at the bottom */}
          <div className="text-center mt-12 pt-8 border-t border-gray-800">
            <Link href="/">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full">
                {t("privacy.backToHome")}
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}