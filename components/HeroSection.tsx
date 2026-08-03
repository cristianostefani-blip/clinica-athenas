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
  title_bold: "Descompressão", 
  description: "Um ambiente preparado para o seu deleite visual e corporal. Permita-se vivenciar protocolos exclusivos.",
  // Retrato humano, nítido e seguro.
  bg_image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop", 
};

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col overflow-hidden bg-stone-950 font-sans">
      
      {/* 1. Imagem de Fundo (Shift de Foco para o Rosto) */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_CONTENT.bg_image}
          alt="Experiência Athenas"
          // object-[50%_25%] empurra a imagem para baixo, garantindo o rosto no topo
          className="w-full h-full object-cover object-[50%_25%] md:object-center opacity-80 md:opacity-100"
        />
        
        {/* Gradiente Mobile: Protege a base, libera o topo */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent md:hidden" />
        
        {/* Gradiente Desktop: Escurece a esquerda (texto) e libera a direita (imagem) */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/70 to-transparent w-3/4" />
      </div>

      {/* 2. Container (Mobile: Bottom Sheet | Desktop: Alinhado à Esquerda) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-end md:justify-center px-0 md:px-6 lg:px-8 pb-0 md:pb-12">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // Classes md: reconfiguram o alinhamento para a esquerda em telas grandes
          className="w-full md:max-w-2xl pt-8 pb-10 px-6 md:p-12 
                     rounded-t-[2.5rem] md:rounded-[2.5rem] 
                     backdrop-blur-xl bg-stone-950/60 md:bg-stone-950/40 
                     border-t md:border border-amber-900/40 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.7)] md:shadow-2xl 
                     flex flex-col items-center md:items-start text-center md:text-left mt-auto md:mt-0"
        >
          
          {/* Puxador (Drag Handle) - Apenas Mobile */}
          <div className="w-12 h-1.5 bg-stone-500/50 rounded-full mb-6 md:hidden" />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-amber-950/60 border border-amber-700/40 text-amber-200 text-xs md:text-sm font-medium tracking-wide uppercase shadow-[0_0_15px_rgba(180,83,9,0.3)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{HERO_CONTENT.badge}</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-orange-50 mb-4 md:mb-6 font-serif drop-shadow-lg leading-tight">
            {HERO_CONTENT.title_light} <br className="hidden md:block" />
            <span className="italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">
              {HERO_CONTENT.title_bold}
            </span>
          </h1>

          <p className="text-base md:text-xl text-stone-200 font-light max-w-xl mb-8 md:mb-10 leading-relaxed tracking-wide drop-shadow-md">
            {HERO_CONTENT.description}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="w-full md:w-auto"
          >
            <WhatsAppButton 
              buttonLocation="hero_section" 
              label="Agendar Horário"
              className="w-full md:w-auto !bg-amber-700 hover:!bg-amber-600 !shadow-[0_0_40px_-5px_rgba(180,83,9,0.6)] !text-stone-950 px-8 md:px-10 py-4 md:py-5 text-base md:text-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}