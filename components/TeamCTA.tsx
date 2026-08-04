"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

// ==========================================
// A FÁBRICA: COPY SEGURA PARA ADS (WHITE FLAG)
// ==========================================
const CTA_CONTENT = {
  title: "Conheça Nossas Especialistas",
  description: "Profissionais altamente qualificadas, dedicadas a proporcionar a melhor experiência de relaxamento e renovação para o seu corpo e mente.",
};

export function TeamCTA() {
  return (
    <section id="especialistas" className="relative w-full py-24 bg-stone-950 overflow-hidden flex items-center justify-center font-sans">
      
      {/* Efeito de Fundo - Glow Quente Subtil */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-amber-900/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8">
        
        {/* Card Premium em Glassmorphism com Efeito de Brilho */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative p-8 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-stone-900/90 to-stone-950/90 backdrop-blur-xl border border-amber-900/40 shadow-[0_0_50px_-15px_rgba(180,83,9,0.4)] flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden group"
        >
          {/* 1. LUZ PULSANTE: Brilho interno que ilumina o card */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-32 -left-32 w-96 h-96 bg-amber-600/20 blur-[100px] rounded-full pointer-events-none"
          />

          {/* 2. SHIMMER EFFECT: Feixe de luz passando (mantido e adaptado para Dourado) */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none" />

          <div className="flex-1 text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-950/50 border border-amber-800/50 text-amber-300 text-xs font-medium uppercase tracking-wider mb-6 shadow-[0_0_15px_rgba(180,83,9,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Atendimento Exclusivo</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-orange-50 tracking-wide mb-4">
              {CTA_CONTENT.title}
            </h2>
            
            <p className="text-stone-300 text-lg font-light leading-relaxed max-w-xl">
              {CTA_CONTENT.description}
            </p>
          </div>

          {/* CTA - Botão Harmonizado com a Paleta Quente */}
          <div className="shrink-0 w-full md:w-auto relative z-10">
            <WhatsAppButton 
              buttonLocation="cta_ouro_ver_terapeutas" 
              label="Ver Disponibilidade" 
              className="w-full md:w-auto px-10 py-5 text-lg !bg-amber-700 hover:!bg-amber-600 !shadow-[0_0_40px_-5px_rgba(180,83,9,0.5)] !text-stone-950"
            />
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}