"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

const navLinks = [
  { name: "Início", href: "#" },
  { name: "Terapias", href: "#terapias" },
  { name: "O Refúgio", href: "#sobre" },
  { name: "Especialistas", href: "#terapeutas" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efeito para detectar o scroll da página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
<header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${montserrat.className} ${
          isScrolled 
            ? "bg-[#0a0806] border-b border-[#d4af37]/20 h-12 shadow-lg" 
            : "bg-transparent h-16"
        }`}
      >
        {/* Usamos h-full aqui para que os itens fiquem sempre centralizados na nova altura */}
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-full">
          
          {/* Logo - Ajustamos ligeiramente para garantir que cabe na barra fina */}
          <a href="#" className="relative z-50 flex items-center">
            <Image 
              src="/enjoy-logo.png"
              alt="Enjoy Spa" 
              width={90} 
              height={36} 
              className="rounded object-cover"
            />
          </a>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[#a89f91] hover:text-[#d4af37] text-xs tracking-widest uppercase transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Desktop & Mobile Toggle */}
          <div className="flex items-center gap-4 z-50">
            <WhatsAppButton
            location="navbar_btn_agendar" 
            baseMessage="Olá! Estou no site da Enjoy Spa e gostaria de informações sobre agendamento."
            className="hidden md:flex items-center gap-2 px-5 py-1.5 bg-linear-to-r from-[#d4af37] to-[#b8860b] text-[#0a0806] rounded-full hover:scale-105 transition-all duration-300 shadow-md"
            >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="font-bold text-[10px] tracking-wider uppercase">Agendar</span>
            </WhatsAppButton>

            {/* Hamburger Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1 text-[#e5c76b]"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Menu Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 z-40 bg-[#0a0806] flex flex-col items-center justify-center space-y-8 ${montserrat.className}`}
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-light text-white hover:text-[#d4af37] transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <a 
              href="https://wa.me/5511999999999?text=Ol%C3%A1%21%20Estou%20no%20site%20da%20Enjoy%20Spa%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20agendamento." 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-8 py-4 mt-8 bg-[#d4af37] text-[#0a0806] rounded-xl font-bold tracking-widest uppercase"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar Horário
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}