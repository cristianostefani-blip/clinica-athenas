"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b font-sans ${
          isScrolled 
            ? "bg-[#160B08]/90 backdrop-blur-xl border-orange-900/20 py-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]" 
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          
          <div className="flex items-center z-50">
            <img 
              src="/logo-athenas.png" 
              alt="Clínica Athenas" 
              // Glow calibrado para o tom Cobre/Laranja
              className="h-12 md:h-[3.5rem] w-auto object-contain drop-shadow-[0_0_15px_rgba(194,65,12,0.5)] transition-all duration-300"
            />
          </div>

          <div className="flex md:hidden items-center z-50">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-orange-100 hover:text-orange-500 transition-colors focus:outline-none"
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>

          <div className="hidden md:block z-50">
            <WhatsAppButton
              buttonLocation="navbar_btn_agendar"
              label="Agendar Sessão"
              className="py-2.5 px-6 text-sm !bg-orange-700 hover:!bg-orange-600 !text-orange-50"
            />
          </div>
          
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[999] bg-[#160B08]/95 backdrop-blur-3xl flex flex-col items-center justify-center font-sans"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-6 p-2 text-orange-200/60 hover:text-orange-500 transition-colors"
            >
              <X className="w-10 h-10" />
            </button>

            <div className="flex flex-col items-center gap-12">
              <img src="/logo-athenas.png" alt="Clínica Athenas" className="h-16 w-auto drop-shadow-[0_0_20px_rgba(194,65,12,0.6)]" />
              
              <div className="flex flex-col items-center gap-6 text-xl font-light text-orange-100/80">
                <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-orange-500 transition-colors">A Clínica</a>
                <a href="#experiencias" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-orange-500 transition-colors">Experiências</a>
                <a href="#especialistas" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-orange-500 transition-colors">Especialistas</a>
              </div>

              <WhatsAppButton
                buttonLocation="mobile_menu_agendar"
                label="Agendar Agora"
                className="mt-8 px-10 py-4 !bg-orange-700 !text-orange-50 text-lg hover:!bg-orange-600 transition-all"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}