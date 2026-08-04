"use client";

import { useState, useEffect } from "react";
import { MapPin, Clock, ChevronDown } from "lucide-react";

// ==========================================
// A FÁBRICA: DADOS DO RODAPÉ
// ==========================================
type Schedule = {
  day: number;
  label: string;
  open: string;
  close: string;
};

// Ajuste os horários reais da Clínica Athenas aqui
const businessHours: Schedule[] = [
  { day: 0, label: "Domingo", open: "Fechado", close: "Fechado" },
  { day: 1, label: "Segunda-feira", open: "10:00", close: "20:00" },
  { day: 2, label: "Terça-feira", open: "10:00", close: "20:00" },
  { day: 3, label: "Quarta-feira", open: "10:00", close: "20:00" },
  { day: 4, label: "Quinta-feira", open: "10:00", close: "20:00" },
  { day: 5, label: "Sexta-feira", open: "10:00", close: "20:00" },
  { day: 6, label: "Sábado", open: "10:00", close: "18:00" },
];

export function Footer() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentDayInfo, setCurrentDayInfo] = useState<Schedule>(businessHours[0]);
  const [showAllHours, setShowAllHours] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const checkStatus = () => {
      const now = new Date();
      const currentDay = now.getDay();
      
      const todaySchedule = businessHours.find((h) => h.day === currentDay) as Schedule || businessHours[0];
      
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
    const interval = setInterval(checkStatus, 60000); // Atualiza a cada 1 minuto
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-stone-950 border-t border-amber-900/20 pt-16 pb-8 px-6 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Logo Centralizada */}
        <div className="mb-12 opacity-80 hover:opacity-100 transition-opacity duration-300">
          <img 
            src="/logo-athenas.png" 
            alt="Logo Clínica Athenas" 
            className="h-16 w-auto object-contain drop-shadow-lg"
          />
        </div>

        {/* Grade Principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl mb-16 text-center md:text-left">
          
          {/* BLOCO 1: SOBRE A ATHENAS */}
          <div className="flex flex-col items-center md:items-start space-y-3">
             <h3 className="text-orange-50 text-xl font-serif mb-2 tracking-wide">Clínica Athenas</h3>
             <p className="text-sm text-stone-400 font-light leading-relaxed max-w-xs">
               Um refúgio urbano desenhado para a sua reconexão. 
               Ambiente climatizado, privacidade absoluta e protocolos exclusivos de alto padrão.
             </p>
          </div>

          {/* BLOCO 2: LOCALIZAÇÃO */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h4 className="text-amber-600 text-sm font-medium tracking-widest uppercase mb-1">Localização</h4>
            <div className="flex items-start gap-3 text-stone-400 font-light text-sm">
              <MapPin className="w-4 h-4 shrink-0 text-amber-500 mt-1" />
              <span className="leading-relaxed">
                Rua Aurélia, 748 - Vila Romana (Lapa) <br/>
                São Paulo - SP
              </span>
            </div>
          </div>

          {/* BLOCO 3: ATENDIMENTO INTELIGENTE */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h4 className="text-amber-600 text-sm font-medium tracking-widest uppercase mb-1">Expediente</h4>
            
            {mounted ? (
              <div className="flex flex-col items-center md:items-start w-full">
                
                {/* Status Hoje */}
                <button 
                  onClick={() => setShowAllHours(!showAllHours)}
                  className="flex items-start gap-3 group outline-none"
                >
                  <Clock className="w-4 h-4 shrink-0 text-amber-500 mt-[2px]" />
                  <div className="flex flex-col items-start text-left">
                    
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-2 h-2 rounded-full ${isOpen ? "bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" : "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"}`} />
                      <span className={`text-xs font-medium uppercase tracking-wider ${isOpen ? "text-emerald-500" : "text-red-500"}`}>
                        {isOpen ? "Aberto Agora" : "Fechado Agora"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-stone-400 font-light text-sm group-hover:text-orange-50 transition-colors">
                      <span>
                        {currentDayInfo.label} • {currentDayInfo.open === "Fechado" ? "Fechado" : `das ${currentDayInfo.open} às ${currentDayInfo.close}`}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-amber-600/60 transition-transform duration-300 ${showAllHours ? "rotate-180" : ""}`} />
                    </div>
                  </div>
                </button>

                {/* Dropdown com a grade completa */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out w-full ${showAllHours ? "max-h-[300px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="flex flex-col gap-2 p-4 bg-stone-900/50 backdrop-blur-sm rounded-xl border border-amber-900/20 text-xs text-stone-400 font-light w-full max-w-[280px]">
                    {businessHours.map((schedule) => (
                      <div key={schedule.day} className={`flex justify-between ${schedule.day === new Date().getDay() ? "text-amber-500 font-medium" : ""}`}>
                        <span>{schedule.label}</span>
                        <span>{schedule.open === "Fechado" ? "Fechado" : `${schedule.open} - ${schedule.close}`}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ) : (
              <div className="w-32 h-8 bg-stone-800 animate-pulse rounded" />
            )}
          </div>

        </div>

        {/* Linha Divisória */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-900/30 to-transparent mb-8" />

        {/* Direitos Autorais e Assinatura */}
        <div className="flex flex-col items-center space-y-4 text-center w-full">
          <p className="text-[10px] md:text-xs text-stone-500 font-light tracking-wider uppercase">
            © {new Date().getFullYear()} Clínica Athenas. Todos os direitos reservados.
          </p>
          
          <p className="text-[10px] md:text-xs text-stone-500 tracking-[0.2em] font-light">
            <a 
              href="cstefani-desenvolvedor.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Acessar o site do desenvolvedor C.Stefani"
              className="hover:text-amber-500 transition-colors duration-300 group"
            >
              <span className="text-stone-400 font-medium group-hover:underline underline-offset-4">
                C.Stefani
              </span> - Especialista em Soluções WEB
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}