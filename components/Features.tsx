"use client";

import { Droplets, Heart, Lock, Gem } from "lucide-react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

const features = [
  {
    icon: Droplets,
    title: "Óleos Importados",
    description: "Essências premium para relaxamento total"
  },
  {
    icon: Heart,
    title: "Atendimento Exclusivo",
    description: "Terapeutas selecionadas rigorosamente"
  },
  {
    icon: Lock,
    title: "Ambiente Discreto",
    description: "Sigilo e privacidade garantidos"
  },
  {
    icon: Gem,
    title: "Alto Padrão",
    description: "Infraestrutura de luxo em Moema"
  }
];

export const Features = () => {
  return (
    <section className={`bg-[#0a0806] py-20 border-b border-white/5 ${montserrat.className}`}>
      
      {/* max-w-6xl garante o alinhamento com a Navbar e demais seções */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group cursor-default">
              
              {/* O ANEL DA JOIA (Banhado a Ouro) */}
              <div className="relative mb-6 p-5 rounded-full transition-all duration-500 group-hover:-translate-y-2">
                
                {/* 1. O Brilho de Fundo (Glow Pulsante Dourado) */}
                <div className="absolute inset-0 rounded-full bg-[#d4af37]/5 blur-md animate-pulse group-hover:bg-[#d4af37]/20 transition-colors duration-500" />
                
                {/* 2. A Borda Metálica (O Aro de Ouro) */}
                <div className="absolute inset-0 rounded-full border border-[#d4af37]/20 group-hover:border-[#d4af37]/60 shadow-[inset_0_0_15px_rgba(212,175,55,0.05)] transition-colors duration-500" />

                {/* 3. O Ícone (A Pedra Preciosa) */}
                <item.icon className="relative h-8 w-8 text-[#d4af37] group-hover:text-[#ffe58f] group-hover:drop-shadow-[0_0_12px_rgba(212,175,55,0.8)] transition-all duration-500" />
              
              </div>

              {/* Título e Descrição */}
              <h3 className="text-white font-semibold text-lg mb-2 tracking-wide group-hover:text-[#e5c76b] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-[#a89f91] text-sm max-w-[150px] leading-relaxed group-hover:text-white transition-colors duration-300">
                {item.description}
              </p>
              
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};