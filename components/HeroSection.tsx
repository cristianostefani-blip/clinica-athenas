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
  // Imagem segura (White Flag): Luz quente indireta, ambiente luxuoso e neutro.
  bg_image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop", 
};

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-stone-950 font-sans">
      
      {/* 1. Imagem de Fundo com Overlay Quente */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_CONTENT.bg_image}
          alt="Ambiente Sofisticado"
          className="w-full h-full object-cover opacity-30 md:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-transparent" />
        
        {/* Luz Indireta Extra para Aumentar o "Calor" */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-orange-900/10 blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* 2. Container Principal (Mobile-First) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center text-center mt-12 md:mt-24">
        
        {/* Glassmorphism Card - Acabamento de Alto Luxo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl p-8 md:p-12 rounded-[2.5rem] backdrop-blur-xl bg-stone-900/30 border border-amber-900/30 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] flex flex-col items-center"
        >
          {/* Badge Elegante */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-amber-950/50 border border-amber-700/30 text-amber-200 text-sm font-medium tracking-wide uppercase"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{HERO_CONTENT.badge}</span>
          </motion.div>

          {/* Tipografia Serifada de Alto Impacto */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-orange-50 mb-6 font-serif">
            {HERO_CONTENT.title_light} <br className="hidden md:block" />
            <span className="italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">
              {HERO_CONTENT.title_bold}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-stone-300 font-light max-w-2xl mb-10 leading-relaxed tracking-wide">
            {HERO_CONTENT.description}
          </p>

          {/* 3. CTA Integrado com Override de Cor para o Âmbar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <WhatsAppButton 
              buttonLocation="hero_section" 
              label="Agendar Horário"
              className="!bg-amber-700 hover:!bg-amber-600 !shadow-[0_0_30px_-5px_rgba(180,83,9,0.5)] !text-stone-950"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Efeito de Profundidade Base */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-950 to-transparent z-10 pointer-events-none" />
    </section>
  );
}