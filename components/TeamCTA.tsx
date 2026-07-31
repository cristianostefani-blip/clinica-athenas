"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { Montserrat } from "next/font/google";
import { WhatsAppButton } from "@/components/WhatsAppButton"; // 1. Importamos o Super Botão

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "700", "800"] });

export const TeamCTA = () => {
  return (
    <section id="especialistas" className={`relative py-16 md:py-24 overflow-hidden border-y border-[#d4af37]/30 ${montserrat.className}`}>
      
      {/* 1. FUNDO OURO PURO (Gold Gradient) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37] via-[#e5c76b] to-[#b8860b]" />
      
      {/* 2. CAMADA DE BRILHO (Shimmer Animation - reflexo no ouro) */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.6)_50%,transparent_75%)] bg-[length:250%_100%] opacity-50"
        style={{ animation: "shimmer 3s linear infinite" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Bloco de Textos (Alto Contraste) */}
        <div className="text-center md:text-left flex-1">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <Sparkles className="text-[#0a0806] h-5 w-5 animate-pulse" />
            <span className="text-[#0a0806] font-bold tracking-widest text-xs uppercase">Atendimento Premium</span>
          </div>
          
          {/* Título Preto Ônix para máxima leitura no Ouro */}
          <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#0a0806] mb-4 font-extrabold tracking-tight drop-shadow-sm">
            Equipe altamente selecionada.
          </h3>
          
          <p className="text-[#1a1510] font-medium text-base md:text-lg max-w-lg leading-relaxed mx-auto md:mx-0">
            Nossa equipe é formada por especialistas. Segurança, técnica apurada e acolhimento absoluto em cada sessão.
          </p>
        </div>

        {/* 2. O SUPER BOTÃO EM AÇÃO (Sem gambiarras de URL) */}
        <div className="shrink-0">
          <WhatsAppButton 
            location="cta_ouro_ver_terapeutas"
            baseMessage="Olá! Gostaria de ver as especialistas disponíveis hoje."
            className="inline-flex items-center justify-center rounded-full px-10 py-5 bg-[#0a0806] text-[#d4af37] hover:bg-[#12100d] hover:scale-105 transition-all duration-300 shadow-2xl uppercase tracking-widest text-xs font-bold border border-[#d4af37]/30 group"
          >
            Ver Terapeutas 
            <ArrowRight className="ml-3 h-5 w-5 text-[#d4af37] group-hover:translate-x-1 transition-transform duration-300" />
          </WhatsAppButton>
        </div>

      </div>
    </section>
  );
};