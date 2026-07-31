import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesBento } from "@/components/ServicesBento";
import { Infrastructure } from "@/components/Infrastructure";
import { TeamSection } from "@/components/TeamSection";
import { Footer } from "@/components/Footer";
import { AgeGate } from "@/components/AgeGate";

export default function PreviewPage() {
  return (
    <main className="min-h-screen bg-[#0a0806] text-stone-200">
      <AgeGate />
      <Navbar />
      <HeroSection />
      <ServicesBento />
      <Infrastructure />
      <TeamSection />
      <Footer />
    </main>
  );
}