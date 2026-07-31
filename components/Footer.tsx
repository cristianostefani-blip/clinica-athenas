"use client";

import { useState, useEffect } from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { MapPin, Clock, ChevronDown } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500"] });

// 1. O "CRACHÁ" DO TYPESCRIPT (Isso mata os erros vermelhos)
type Schedule = {
  day: number;
  label: string;
  open: string;
  close: string;
};

// Avisamos ao TS que esse array segue rigorosamente o modelo Schedule
const businessHours: Schedule[] = [
  { day: 0, label: "Domingo", open: "Fechado", close: "Fechado" },
  { day: 1, label: "Segunda-feira", open: "11:00", close: "22:00" },
  { day: 2, label: "Terça-feira", open: "11:00", close: "22:00" },
  { day: 3, label: "Quarta-feira", open: "11:00", close: "22:00" },
  { day: 4, label: "Quinta-feira", open: "11:00", close: "22:00" },
  { day: 5, label: "Sexta-feira", open: "11:00", close: "23:00" },
  { day: 6, label: "Sábado", open: "11:00", close: "23:00" },
];

export function Footer() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // Explicitamos para o TS que currentDayInfo é do tipo Schedule
  const [currentDayInfo, setCurrentDayInfo] = useState<Schedule>(businessHours[0]);
  const [showAllHours, setShowAllHours] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const checkStatus = () => {
      const now = new Date();
      const currentDay = now.getDay();
      
      // Forçamos o TS a entender a busca com o 'as Schedule'
      const todaySchedule = businessHours.find((h) => h.day === currentDay) as Schedule || businessHours;
      
      setCurrentDayInfo(todaySchedule);

      if (todaySchedule.open === "Fechado") {
        setIsOpen(false);
        return;
      }

      const currentMinutes = now.getHours() * 60 + now.getMinutes();
      const [openH, openM] = todaySchedule.open.split(":").map(Number);
      const [closeH, closeM] = todaySchedule.close.split(":").map(Number);
      
      const openMinutes = openH * 60 + openM;
      const closeMinutes = closeH * 60 + closeM;

      setIsOpen(currentMinutes >= openMinutes && currentMinutes < closeMinutes);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className={`bg-[#050403] border-t border-white/5 pt-16 pb-8 px-6 ${montserrat.className}`}>
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Logo Centralizada */}
        <div className="mb-10 opacity-70 hover:opacity-100 transition-opacity duration-300">
          <Image 
            src="/enjoy-logo.png" 
            alt="Enjoy Spa Logo" 
            width={160} 
            height={160} 
            className="rounded-lg object-cover"
          />
        </div>

        {/* Informações Fiscais / Localização / Horários */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-2xl mb-16 text-center md:text-left">
          
          {/* BLOCO 1: LOCALIZAÇÃO */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h4 className="text-[#d4af37] text-sm font-medium tracking-widest uppercase mb-1">Localização</h4>
            <div className="flex items-start gap-2 text-[#a89f91] font-light text-sm">
              <MapPin className="w-4 h-4 shrink-0 text-[#d4af37]/70 mt-1" />
              <span className="leading-relaxed">Rua Condessa do Pinhal 279, Campo Belo<br/>São Paulo - SP, 04610-060</span>
            </div>
          </div>

          {/* BLOCO 2: ATENDIMENTO INTELIGENTE */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h4 className="text-[#d4af37] text-sm font-medium tracking-widest uppercase mb-1">Atendimento</h4>
            
            {mounted ? (
              <div className="flex flex-col items-center md:items-start w-full">
                
                {/* Status Hoje */}
                <button 
                  onClick={() => setShowAllHours(!showAllHours)}
                  className="flex items-start gap-2 group outline-none"
                >
                  <Clock className="w-4 h-4 shrink-0 text-[#d4af37]/70 mt-[2px]" />
                  <div className="flex flex-col items-start text-left">
                    
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-2 h-2 rounded-full ${isOpen ? "bg-green-500 animate-pulse" : "bg-red-500"}`} />
                      <span className={`text-xs font-medium uppercase tracking-wider ${isOpen ? "text-green-500" : "text-red-500"}`}>
                        {isOpen ? "Aberto Agora" : "Fechado Agora"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[#a89f91] font-light text-sm group-hover:text-white transition-colors">
                      <span>
                        {currentDayInfo.label} • {currentDayInfo.open === "Fechado" ? "Fechado" : `das ${currentDayInfo.open} às ${currentDayInfo.close}`}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-[#d4af37]/50 transition-transform duration-300 ${showAllHours ? "rotate-180" : ""}`} />
                    </div>
                  </div>
                </button>

                {/* Dropdown com a grade */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out w-full ${showAllHours ? "max-h-[300px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="flex flex-col gap-2 p-4 bg-[#12100d] rounded-xl border border-white/5 text-xs text-[#a89f91] font-light w-full max-w-[280px]">
                    {businessHours.map((schedule) => (
                      <div key={schedule.day} className={`flex justify-between ${schedule.day === new Date().getDay() ? "text-[#d4af37] font-medium" : ""}`}>
                        <span>{schedule.label}</span>
                        <span>{schedule.open === "Fechado" ? "Fechado" : `${schedule.open} - ${schedule.close}`}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ) : (
              <div className="w-32 h-8 bg-white/5 animate-pulse rounded" />
            )}
          </div>

        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        <div className="flex flex-col items-center space-y-4 text-center w-full">
          
          <p className="text-[10px] md:text-xs text-[#a89f91] font-light tracking-wider">
            © {new Date().getFullYear()} Enjoy Spa. Todos os direitos reservados.
          </p>
          
          <p className="text-[10px] md:text-xs text-[#a89f91] tracking-[0.3em] font-light transition-colors duration-500">
            <a 
              href="https://cstefani-desenvolvedor.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Acessar o site do desenvolvedor C.Stefani"
              className="hover:text-white transition-colors duration-300 group"
            >
              <span className="text-white font-medium group-hover:underline underline-offset-4">
                C.Stefani
              </span> - Especialista em Soluções WEB
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
}