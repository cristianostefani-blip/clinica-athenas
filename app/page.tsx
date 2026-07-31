import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Features } from "@/components/Features";
import { ServicesBento } from "@/components/ServicesBento";
import { TeamSection } from "@/components/TeamSection";
import { TeamCTA } from "@/components/TeamCTA";
// Importe o Footer que já existe na sua pasta (vamos atualizá-lo em breve se necessário)
import { Footer } from "@/components/Footer"; 

export default function Home() {
  return (
    // selection:bg-emerald-500/30 garante que se o usuário selecionar um texto, a cor de fundo combine com a marca
    <main className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-emerald-500/30 selection:text-white">
      <Navbar />
      <HeroSection />
      <Features />
      <ServicesBento />
      <TeamSection />
      <TeamCTA />
      <Footer />
    </main>
  );
}