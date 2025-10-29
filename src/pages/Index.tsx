import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import BrandCTA from "@/components/BrandCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Features />
      <BrandCTA />
      <Footer />
    </main>
  );
};

export default Index;
