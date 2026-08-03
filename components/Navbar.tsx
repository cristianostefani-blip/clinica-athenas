"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Efeito elegante: O Navbar fica transparente no topo e ganha Glassmorphism ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b font-sans ${
        isScrolled 
          ? "bg-stone-950/80 backdrop-blur-xl border-amber-900/20 py-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]" 
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        {/* Identidade Visual Luxuosa */}
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-950/50 border border-amber-700/30">
            <Sparkles className="w-5 h-5 text-amber-400" />
          </div>
          <span className="text-2xl font-serif font-medium text-orange-50 tracking-wide">
            Athenas
          </span>
        </div>

        {/* CTA Desktop & Integração Segura do WhatsAppButton */}
        <div className="hidden md:block z-50">
          <WhatsAppButton
            buttonLocation="navbar_btn_agendar"
            label="Agendar Sessão"
            className="py-2.5 px-6 text-sm !bg-amber-700 hover:!bg-amber-600 !text-stone-950"
          />
        </div>
        
      </div>
    </motion.nav>
  );
}