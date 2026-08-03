"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

// ==========================================
// A FÁBRICA: COPY SEGURA PARA ADS (WHITE FLAG)
// ==========================================
const HERO_CONTENT = {
  badge: "Experiências Sensoriais",
  title_light: "Reconexão e",
  title_bold: "Descompressão Profunda",
  description: "Um ambiente preparado para o seu deleite visual e corporal. Fuja do óbvio e permita-se vivenciar protocolos exclusivos de relaxamento.",
  
  // DICA LANDY: Retrato nítido, foco nos olhos/rosto. Altíssimo magnetismo sem violar o Ads.
  bg_image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop", 
};

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden bg-stone-950 font-sans">
      
      {/* 1. Imagem de Fundo NÍtida - Sem Blur Global */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_CONTENT.bg_image}
          alt="Experiência Athenas"
          className="w-full h-full object-cover object-center opacity-70 md:opacity-80"
        />
        
        {/* Gradiente estratégico: Escuro embaixo para ler o texto, transparente no topo/meio para ver o rosto */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/10" />
      </div>

      {/* 2. Container Principal (Mobile-First) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center text-center mt-24">
        
        {/* Glassmorphism Ultra-Clear (Mais translúcido para não tampar a modelo) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl p-8 md:p-12 rounded-[2.5rem] backdrop-blur-md bg-stone-950/20 border border-amber-900/20 shadow-2xl flex flex-col items-center mt-32 md:mt-48"
        >
          {/* Badge Elegante */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-amber-950/60 border border-amber-700/40 text-amber-200 text-sm font-medium tracking-wide uppercase shadow-[0_0_15px_rgba(180,83,9,0.3)]"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{HERO_CONTENT.badge}</span>
          </motion.div>

          {/* Tipografia Serifada de Alto Impacto */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-orange-50 mb-6 font-serif drop-shadow-lg">
            {HERO_CONTENT.title_light} <br className="hidden md:block" />
            <span className="italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">
              {HERO_CONTENT.title_bold}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-stone-200 font-light max-w-2xl mb-10 leading-relaxed tracking-wide drop-shadow-md">
            {HERO_CONTENT.description}
          </p>

          {/* 3. CTA Integrado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <WhatsAppButton 
              buttonLocation="hero_section" 
              label="Agendar Horário"
              className="!bg-amber-700 hover:!bg-amber-600 !shadow-[0_0_40px_-5px_rgba(180,83,9,0.6)] !text-stone-950 px-10 py-5 text-lg"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Efeito de Profundidade Base */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-stone-950 to-transparent z-10 pointer-events-none" />
    </section>
  );
}