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
    <section className="relative w-full py-24 bg-zinc-950 overflow-hidden flex items-center justify-center">
      
      {/* Efeito de Fundo - Glow Subtil */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-emerald-900/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Card Premium em Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative p-8 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-md border border-zinc-800/50 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden"
        >
          {/* Shimmer Overlay no Card */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none" />

          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-xs font-medium uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Atendimento Exclusivo</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-4">
              {CTA_CONTENT.title}
            </h2>
            
            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
              {CTA_CONTENT.description}
            </p>
          </div>

          {/* O NOVO COMPONENTE WHATSAPP COM A API CORRETA */}
          <div className="shrink-0 w-full md:w-auto">
            <WhatsAppButton 
              buttonLocation="cta_ouro_ver_terapeutas" 
              label="Ver Disponibilidade" 
              className="w-full md:w-auto px-10 py-5 text-lg"
            />
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}