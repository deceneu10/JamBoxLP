import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ForUsers from "@/components/ForUsers";
import ForBusinesses from "@/components/ForBusinesses";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ForUsers />
      <ForBusinesses />
      <About />
      <Footer />
    </div>
  );
}
