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
  description: "Um ambiente preparado para o seu deleite visual e corporal. Permita-se vivenciar protocolos exclusivos de alto padrão.",
  bg_image: "/hero.jpg", 
};

export function HeroSection() {
  return (
    <section className="relative w-full font-sans">
      
      {/* 1. O EFEITO CORTINA: Imagem 100% Fixa no fundo do navegador */}
      <div className="fixed inset-0 w-full h-[100dvh] z-0 pointer-events-none">
        <img
          src={HERO_CONTENT.bg_image}
          alt="Experiência Athenas"
          className="w-full h-full object-cover object-[50%_25%] md:object-center opacity-90 md:opacity-100"
        />
        
        {/* Gradientes Protetores */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent md:hidden" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/70 to-transparent w-3/4" />
      </div>

      {/* 2. CONTEÚDO ROLÁVEL: Sobrepõe a imagem fixa */}
      <div className="relative z-10 w-full flex flex-col justify-end min-h-[100dvh]">
        
        {/* Espaçador: Mantido em 82dvh no mobile para esconder o texto e mostrar o rosto da modelo */}
        <div className="h-[82dvh] md:h-[65dvh] w-full pointer-events-none" />

        {/* O Card (A Borda da Cortina) */}
        <div className="w-full max-w-7xl mx-auto px-0 md:px-6 lg:px-8 pb-0 md:pb-12 flex justify-center md:justify-start">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:max-w-2xl pt-6 pb-16 px-5 md:p-12 
                       rounded-t-[2.5rem] md:rounded-[2.5rem] 
                       backdrop-blur-2xl bg-stone-950/80 md:bg-stone-950/60 
                       border-t md:border border-amber-900/40 shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.8)] md:shadow-2xl 
                       flex flex-col items-center md:items-start text-center md:text-left"
          >
            
            {/* Puxador Visual Mobile */}
            <div className="w-12 h-1.5 bg-stone-500/60 rounded-full mb-6 md:hidden" />

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6 rounded-full bg-amber-950/60 border border-amber-700/40 text-amber-200 text-[0.7rem] md:text-sm font-medium tracking-wide uppercase shadow-[0_0_15px_rgba(180,83,9,0.3)]"
            >
              <Sparkles className="w-3 h-3 md:w-3.5 md:h-3.5 text-amber-400" />
              <span>{HERO_CONTENT.badge}</span>
            </motion.div>

            {/* Tipografia */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-orange-50 mb-3 md:mb-6 font-serif drop-shadow-lg leading-tight md:leading-tight">
              {HERO_CONTENT.title_light} <br className="hidden md:block" />
              <span className="italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600 block mt-1 md:inline md:mt-0">
                {HERO_CONTENT.title_bold}
              </span>
            </h1>

            <p className="text-base md:text-xl text-stone-200 font-light max-w-xl mb-8 md:mb-10 leading-relaxed md:leading-relaxed tracking-wide drop-shadow-md">
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
                className="w-full md:w-auto !bg-amber-700 hover:!bg-amber-600 !shadow-[0_0_30px_-5px_rgba(180,83,9,0.6)] !text-stone-950 px-6 md:px-10 py-4 md:py-5 text-base md:text-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}