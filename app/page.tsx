import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Features } from "@/components/Features";
import { Infrastructure } from "@/components/Infrastructure"; // NOVO CARROSSEL
import { ServicesBento } from "@/components/ServicesBento";
import { TeamSection } from "@/components/TeamSection";
import { TeamCTA } from "@/components/TeamCTA";
import { Footer } from "@/components/Footer"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-orange-50 selection:bg-amber-600/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Features />
      <Infrastructure />
      <ServicesBento />
      <TeamSection />
      <TeamCTA />
      <Footer />
    </main>
  );
}