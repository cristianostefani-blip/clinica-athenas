import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesBento } from "@/components/ServicesBento";
import { Features } from "@/components/Features";
import { Infrastructure } from "@/components/Infrastructure";
import { TeamCTA } from "@/components/TeamCTA";
import { Footer } from "@/components/Footer";
import { AgeGate } from "@/components/AgeGate";

export default function PreviewDoisPage() {
  return (
    <main className="min-h-screen bg-[#0a0806] text-stone-200">
      <AgeGate />
      <Navbar />
      <HeroSection />
      <ServicesBento />
      <Features />
      <Infrastructure />
      <TeamCTA />
      <Footer />
    </main>
  );
}