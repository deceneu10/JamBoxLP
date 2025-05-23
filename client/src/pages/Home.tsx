import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ForUsers from "@/components/ForUsers";
import ForBusinesses from "@/components/ForBusinesses";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ForUsers />
      <ForBusinesses />
      
      {/* Mobile: Contact Form appears before About */}
      <div className="flex flex-col">
        {/* Contact Section */}
        <section id="contact-section" className="py-20 bg-background border-t border-gray-800 order-2 md:order-1">
          <div className="container mx-auto px-4">
            <ContactForm />
          </div>
        </section>
        
        {/* About Section */}
        <div className="order-1 md:order-2">
          <About />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
