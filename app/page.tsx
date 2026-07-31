"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Great_Vibes, Montserrat } from "next/font/google";

// Configuração das fontes
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "600"] });
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

export default function ComingSoon() {
  return (
    <main className={`min-h-screen bg-[#0a0806] flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden ${montserrat.className}`}>
      
      {/* Luz de Fundo (Glow Effect) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-[#d4af37]/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md md:max-w-lg"
      >
        
        {/* O "Card" Principal com o Filete Dourado */}
        <div className="relative p-[1px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#d4af37] via-[#856d22]/40 to-[#2a220a] shadow-[0_0_50px_rgba(212,175,55,0.15)] group">
          
          {/* Efeito Shimmer (Luz passando pela borda do card inteiro) */}
          <motion.div
            animate={{ x: ["-150%", "250%"] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="absolute inset-0 z-0 w-1/2 h-full bg-white/20 skew-x-12 blur-[10px]"
          />
          
          {/* Fundo interno do Card (Dark Glass) */}
          <div className="relative z-10 bg-[#0a0806]/95 backdrop-blur-md px-6 py-10 md:p-12 rounded-[23px] flex flex-col items-center text-center space-y-10">
            
            {/* Logo */}
            <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px]">
              <Image 
                src="/enjoy-spa-logo.jpg" 
                alt="Enjoy Spa" 
                fill
                className="rounded-2xl object-cover shadow-2xl opacity-95 transition-opacity duration-500 hover:opacity-100"
                priority
              />
            </div>

            {/* Textos */}
            <div className="space-y-4 w-full">
              <h1 className={`${greatVibes.className} text-4xl md:text-5xl text-[#e5c76b] leading-tight tracking-wide drop-shadow-md`}>
                Estamos preparando um Portal incrível para você.
              </h1>
              <p className="text-[#a89f91] text-xs md:text-sm font-light tracking-[0.3em] uppercase">
                Aguarde
              </p>
            </div>

            {/* CTA Seguro (WhatsApp) */}
            <a 
              href="https://wa.me/5511912847938?text=Oi.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20massagens%20(id:site)"
              target="_blank" 
              rel="noopener noreferrer" 
              className="group/btn relative flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#0a0806] rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.2)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.4)]"
            >
              <MessageCircle className="w-5 h-5 text-[#0a0806]" />
              <span className="font-bold text-sm tracking-widest uppercase">Falar com Atendimento</span>
            </a>

          </div>
        </div>

      </motion.div>
    </main>
  );
}