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
  bg_image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop", 
};

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col overflow-hidden bg-stone-950 font-sans">
      
      {/* 1. Imagem de Fundo (Foco forçado no topo para mobile) */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_CONTENT.bg_image}
          alt="Experiência Athenas"
          className="w-full h-full object-cover object-top md:object-center opacity-80 md:opacity-100"
        />
        
        {/* Gradiente Mobile mais contido para liberar o rosto */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent md:hidden" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/70 to-transparent w-3/4" />
      </div>

      {/* 2. Container Principal */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-end md:justify-center px-0 md:px-6 lg:px-8 pb-0 md:pb-12 md:pt-32">
        
        {/* Card em Glassmorphism - Comprimido no Mobile, Posicionado no Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:max-w-2xl pt-6 pb-6 px-5 md:p-12 
                     rounded-t-[2rem] md:rounded-[2.5rem] 
                     backdrop-blur-xl bg-stone-950/70 md:bg-stone-950/40 
                     border-t md:border border-amber-900/40 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.7)] md:shadow-2xl 
                     flex flex-col items-center md:items-start text-center md:text-left mt-auto md:mt-0"
        >
          
          <div className="w-10 h-1 bg-stone-500/50 rounded-full mb-5 md:hidden" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6 rounded-full bg-amber-950/60 border border-amber-700/40 text-amber-200 text-[0.7rem] md:text-sm font-medium tracking-wide uppercase shadow-[0_0_15px_rgba(180,83,9,0.3)]"
          >
            <Sparkles className="w-3 h-3 md:w-3.5 md:h-3.5 text-amber-400" />
            <span>{HERO_CONTENT.badge}</span>
          </motion.div>

          <h1 className="text-3xl md:text-6xl lg:text-7xl font-light tracking-tight text-orange-50 mb-3 md:mb-6 font-serif drop-shadow-lg leading-tight md:leading-tight">
            {HERO_CONTENT.title_light} <br className="hidden md:block" />
            <span className="italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600 block mt-1 md:inline md:mt-0">
              {HERO_CONTENT.title_bold}
            </span>
          </h1>

          <p className="text-sm md:text-xl text-stone-200 font-light max-w-xl mb-6 md:mb-10 leading-relaxed md:leading-relaxed tracking-wide drop-shadow-md">
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
              className="w-full md:w-auto !bg-amber-700 hover:!bg-amber-600 !shadow-[0_0_30px_-5px_rgba(180,83,9,0.6)] !text-stone-950 px-6 md:px-10 py-3.5 md:py-5 text-sm md:text-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}