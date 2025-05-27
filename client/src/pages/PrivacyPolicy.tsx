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
            {/* Section 1: Contact Details */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("privacy.section1.title")}</h2>
              <div className="text-gray-300 leading-relaxed whitespace-pre-line">{t("privacy.section1.content")}</div>
            </section>

            {/* Section 2: General Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("privacy.section2.title")}</h2>
              <p className="text-gray-300 leading-relaxed">{t("privacy.section2.content")}</p>
            </section>

            {/* Section 3: What Information We Collect */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("privacy.section3.title")}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{t("privacy.section3.intro")}</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>{t("privacy.section3.list1")}</li>
                <li>{t("privacy.section3.list2")}</li>
                <li>{t("privacy.section3.list3")}</li>
              </ul>
              <div className="space-y-4">
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">{t("privacy.section3.subsection1")}</div>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">{t("privacy.section3.subsection2")}</div>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">{t("privacy.section3.subsection3")}</div>
              </div>
            </section>

            {/* Section 4: How and When Your Data is Used */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("privacy.section4.title")}</h2>
              <div className="space-y-4">
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">{t("privacy.section4.subsection1")}</div>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">{t("privacy.section4.subsection2")}</div>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">{t("privacy.section4.subsection3")}</div>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">{t("privacy.section4.subsection4")}</div>
              </div>
            </section>

            {/* Section 5: How We Protect Your Data */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("privacy.section5.title")}</h2>
              <p className="text-gray-300 leading-relaxed">{t("privacy.section5.content")}</p>
            </section>

            {/* Section 6: Who Has Access to Your Data */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("privacy.section6.title")}</h2>
              <p className="text-gray-300 leading-relaxed">{t("privacy.section6.content")}</p>
            </section>

            {/* Section 7: Third-Party Disclosure */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("privacy.section7.title")}</h2>
              <p className="text-gray-300 leading-relaxed">{t("privacy.section7.content")}</p>
            </section>

            {/* Section 8: Your Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("privacy.section8.title")}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{t("privacy.section8.intro")}</p>
              <ul className="list-none space-y-3 text-gray-300">
                <li>{t("privacy.section8.list1")}</li>
                <li>{t("privacy.section8.list2")}</li>
                <li>{t("privacy.section8.list3")}</li>
                <li>{t("privacy.section8.list4")}</li>
                <li>{t("privacy.section8.list5")}</li>
                <li>{t("privacy.section8.list6")}</li>
                <li>{t("privacy.section8.list7")}</li>
              </ul>
            </section>

            {/* Section 9: Contact Us */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("privacy.section9.title")}</h2>
              <p className="text-gray-300 leading-relaxed">{t("privacy.section9.content")}</p>
            </section>

            {/* Cookie Policy Section */}
            <div className="border-t border-gray-700 pt-8 mt-12">
              <h1 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
                {t("privacy.cookieTitle")}
              </h1>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("privacy.cookie1.title")}</h2>
                <p className="text-gray-300 leading-relaxed">{t("privacy.cookie1.content")}</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("privacy.cookie2.title")}</h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">{t("privacy.cookie2.content")}</div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("privacy.cookie3.title")}</h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">{t("privacy.cookie3.content")}</div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("privacy.cookie4.title")}</h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">{t("privacy.cookie4.content")}</div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("privacy.cookie5.title")}</h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">{t("privacy.cookie5.content")}</div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("privacy.cookie6.title")}</h2>
                <p className="text-gray-300 leading-relaxed">{t("privacy.cookie6.content")}</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("privacy.cookie7.title")}</h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">{t("privacy.cookie7.content")}</div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("privacy.cookie8.title")}</h2>
                <p className="text-gray-300 leading-relaxed">{t("privacy.cookie8.content")}</p>
              </section>
            </div>
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