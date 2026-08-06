"use client";

import Image from "next/image"; // 1. IMPORTAÇÃO DO MOTOR
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
  description: "Um ambiente preparado para o seu deleite visual e corporal. Permita-se vivenciar protocolos exclusivos de bem estar e relaxamento.",
  bg_image: "/hero.jpg", 
};

export function HeroSection() {
  return (
    <section className="relative w-full font-sans">
      
      {/* 1. O EFEITO CORTINA: O Container PAI precisa ser fixed ou relative para o "fill" funcionar */}
      <div className="fixed inset-0 w-full h-[100dvh] z-0 pointer-events-none">
        
        {/* 2. APLICAÇÃO DO FILL COM PRIORITY PARA DESTRUIR O LCP */}
        <Image
          src={HERO_CONTENT.bg_image}
          alt="Experiência Athenas"
          fill
          priority // OBRIGATÓRIO NA PRIMEIRA DOBRA: ignora o lazy loading e carrega instantaneamente
          sizes="100vw" // Diz ao Next.js que a imagem vai ocupar 100% da tela
          className="object-cover object-[40%_40%] md:object-center opacity-95 md:opacity-100 transition-all duration-700"
        />
        
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#160B08] via-[#160B08]/40 to-transparent md:hidden" />
        <div className="hidden md:block absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#160B08] via-[#160B08]/40 to-transparent" />
      </div>

      {/* 2. CONTEÚDO ROLÁVEL: Sobrepõe a imagem fixa */}
      <div className="relative z-10 w-full flex flex-col justify-end min-h-[100dvh]">
        
        <div className="h-[82dvh] md:h-[65dvh] w-full pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-0 md:px-6 lg:px-8 pb-0 md:pb-12 flex justify-center md:justify-start">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:max-w-2xl pt-6 pb-16 px-5 md:p-12 
                       rounded-t-[2.5rem] md:rounded-[2.5rem] 
                       backdrop-blur-2xl bg-[#160B08]/80 md:bg-[#160B08]/60 
                       border-t md:border border-orange-900/40 shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.8)] md:shadow-2xl 
                       flex flex-col items-center md:items-start text-center md:text-left"
          >
            
            <div className="w-12 h-1.5 bg-orange-900/60 rounded-full mb-6 md:hidden" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6 rounded-full bg-orange-950/60 border border-orange-700/40 text-orange-200 text-[0.7rem] md:text-sm font-medium tracking-wide uppercase shadow-[0_0_15px_rgba(154,52,18,0.3)]"
            >
              <Sparkles className="w-3 h-3 md:w-3.5 md:h-3.5 text-orange-400" />
              <span>{HERO_CONTENT.badge}</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-orange-50 mb-3 md:mb-6 font-serif drop-shadow-lg leading-tight md:leading-tight">
              {HERO_CONTENT.title_light} <br className="hidden md:block" />
              <span className="italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-700 block mt-1 md:inline md:mt-0">
                {HERO_CONTENT.title_bold}
              </span>
            </h1>

            <p className="text-base md:text-xl text-orange-100/70 font-light max-w-xl mb-8 md:mb-10 leading-relaxed md:leading-relaxed tracking-wide drop-shadow-md">
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
                className="w-full md:w-auto !bg-orange-700 hover:!bg-orange-600 !shadow-[0_0_30px_-5px_rgba(194,65,12,0.6)] !text-orange-50 px-6 md:px-10 py-4 md:py-5 text-base md:text-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}