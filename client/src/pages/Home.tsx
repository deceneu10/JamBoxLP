import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DemoCallToAction from "@/components/DemoCallToAction";
import ForUsers from "@/components/ForUsers";
import ForBusinesses from "@/components/ForBusinesses";
import OnboardingFlow from "@/components/OnboardingFlow";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <DemoCallToAction />
      <ForBusinesses />
      <OnboardingFlow />
      
      {/* Contact Section */}
      <section id="contact-section" className="py-20 bg-background border-t border-gray-800">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>
      
      <ForUsers />
      <About />
      
      <Footer />
    </div>
  );
}
