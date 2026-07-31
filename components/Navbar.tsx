"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b ${
        isScrolled 
          ? "bg-zinc-950/80 backdrop-blur-xl border-white/10 py-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]" 
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        {/* Identidade Visual Zen */}
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-emerald-900/30 border border-emerald-500/20">
            <Leaf className="w-5 h-5 text-emerald-400" />
          </div>
          <span className="text-xl font-medium text-white tracking-wide">
            Clínica Athenas
          </span>
        </div>

        {/* CTA Desktop & Integração Segura do WhatsAppButton */}
        <div className="flex items-center gap-4 z-50">
          <WhatsAppButton
            buttonLocation="navbar_btn_agendar"
            label="Agendar Sessão"
            className="hidden md:flex py-2.5 px-6 text-sm"
          />
        </div>
        
      </div>
    </motion.nav>
  );
}