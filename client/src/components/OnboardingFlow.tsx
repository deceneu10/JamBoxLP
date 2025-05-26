import { useLanguage } from "@/lib/LanguageContext";

interface OnboardingStep {
  number: number;
  icon: string;
  title: string;
  description: string;
}

export default function OnboardingFlow() {
  const { t } = useLanguage();

  const steps: OnboardingStep[] = [
    {
      number: 1,
      icon: "fas fa-user-plus",
      title: t("onboarding.step1.title"),
      description: t("onboarding.step1.description")
    },
    {
      number: 2,
      icon: "fab fa-spotify",
      title: t("onboarding.step2.title"),
      description: t("onboarding.step2.description")
    },
    {
      number: 3,
      icon: "fas fa-music",
      title: t("onboarding.step3.title"),
      description: t("onboarding.step3.description")
    },
    {
      number: 4,
      icon: "fas fa-cogs",
      title: t("onboarding.step4.title"),
      description: t("onboarding.step4.description")
    },
    {
      number: 5,
      icon: "fas fa-qrcode",
      title: t("onboarding.step5.title"),
      description: t("onboarding.step5.description")
    },
    {
      number: 6,
      icon: "fas fa-users",
      title: t("onboarding.step6.title"),
      description: t("onboarding.step6.description")
    },
    {
      number: 7,
      icon: "fas fa-heart",
      title: t("onboarding.step7.title"),
      description: t("onboarding.step7.description")
    }
  ];

  return (
    <section className="py-20 bg-background border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
            {t("onboarding.title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("onboarding.subtitle")}
          </p>
        </div>

        {/* Horizontal Scrollable Container */}
        <div className="overflow-x-auto pb-6">
          <div className="flex gap-6 min-w-max px-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex-shrink-0 w-80 md:w-72 bg-card border border-gray-800 rounded-xl p-6 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
              >
                {/* Step Number and Icon */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {step.number}
                  </div>
                  <i className={`${step.icon} text-2xl text-accent`}></i>
                </div>

                {/* Step Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>

                {/* Connection Arrow (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <i className="fas fa-arrow-right text-accent text-xl"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator for mobile */}
        <div className="md:hidden text-center mt-4">
          <p className="text-sm text-gray-400">
            <i className="fas fa-arrow-right mr-2"></i>
            {t("onboarding.scrollHint")}
          </p>
        </div>
      </div>
    </section>
  );
}