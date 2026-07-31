"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ShieldCheck } from "lucide-react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const AgeGate = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Verifica a chave exclusiva da Enjoy Spa
    const hasVerified = localStorage.getItem("enjoyspa-age-verified");
    if (!hasVerified) {
      setIsVisible(true);
    }
    // Mantemos sem a trava de scroll para o usuário poder rolar e ver o site embaçado no fundo!
  }, []);

  const handleAccept = () => {
    localStorage.setItem("enjoyspa-age-verified", "true");
    setIsVisible(false);
  };

  const handleReject = () => {
    window.location.href = "https://www.google.com";
  };

  if (!mounted || !isVisible) return null;

  return createPortal(
    <div 
      className={`fixed inset-0 flex items-center justify-center px-4 bg-black/80 backdrop-blur-md transition-opacity duration-500 ease-in-out ${montserrat.className}`}
      style={{ zIndex: 2147483647 }} /* O VALOR MÁXIMO DA WEB: Esmaga qualquer outra camada */
    >
      
      {/* O Card Premium */}
      <div 
        className="relative bg-[#12100d] border border-[#d4af37]/20 p-8 md:p-10 rounded-2xl max-w-md w-full text-center shadow-[0_0_50px_rgba(0,0,0,0.8)] animate-[pulse_0.5s_ease-out_1]"
      >
        {/* Ícone */}
        <div className="mx-auto w-16 h-16 bg-[#d4af37]/10 rounded-full flex items-center justify-center mb-6 border border-[#d4af37]/20 shadow-[inset_0_0_15px_rgba(212,175,55,0.1)]">
            <ShieldCheck className="text-[#d4af37] h-8 w-8" />
        </div>

        <h2 className="text-2xl font-bold text-white mb-3 tracking-wide">
          Acesso Restrito
        </h2>
        
        <p className="text-[#a89f91] text-sm mb-8 leading-relaxed">
          Este site contém conteúdo destinado a adultos. <br className="hidden sm:block" />
          Você confirma ter mais de <strong className="text-[#d4af37] font-semibold">18 anos</strong>?
        </p>

        <div className="flex flex-col gap-4">
          <button 
            onClick={handleAccept}
            className="w-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#0a0806] rounded-full py-4 text-xs uppercase tracking-widest font-bold hover:scale-[1.02] transition-transform duration-300 shadow-[0_4px_15px_rgba(212,175,55,0.2)] outline-none"
          >
            Sim, tenho mais de 18 anos
          </button>
          
          <button 
            onClick={handleReject}
            className="text-[#a89f91] hover:text-white text-xs tracking-wider uppercase transition-colors outline-none py-2"
          >
            Não, sair do site
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};