"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react"; // Ícone Zen/Natureza
import { WhatsAppButton } from "@/components/WhatsAppButton";

// ==========================================
// A FÁBRICA: COPY SEGURA PARA ADS (WHITE FLAG)
// ==========================================
const HERO_CONTENT = {
  badge: "Terapia & Relaxamento",
  title_light: "Reequilíbrio e",
  title_bold: "Alívio Profundo",
  description: "Desconecte-se da rotina. Um ambiente exclusivo projetado para terapias de relaxamento, alívio de tensões e renovação da sua energia vital.",
  // Imagem segura de ambiente zen/pedras quentes
  bg_image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop", 
};

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-zinc-950">
      
      {/* 1. Imagem de Fundo com Overlay Escuro */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_CONTENT.bg_image}
          alt="Ambiente Zen da Clínica Athenas"
          className="w-full h-full object-cover opacity-40 md:opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent" />
      </div>

      {/* 2. Container Principal (Mobile-First) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center text-center mt-12 md:mt-24">
        
        {/* Glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl p-8 md:p-12 rounded-3xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] flex flex-col items-center"
        >
          {/* Badge Zen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-emerald-900/30 border border-emerald-500/20 text-emerald-100 text-sm font-medium tracking-wide"
          >
            <Leaf className="w-4 h-4 text-emerald-400" />
            <span>{HERO_CONTENT.badge}</span>
          </motion.div>

          {/* Tipografia de Alto Impacto */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6">
            {HERO_CONTENT.title_light} <br className="hidden md:block" />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-600">
              {HERO_CONTENT.title_bold}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-300 font-light max-w-2xl mb-10 leading-relaxed">
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
              label="Agendar Sessão" 
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Efeito de Profundidade Base */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent z-10 pointer-events-none" />
    </section>
  );
}