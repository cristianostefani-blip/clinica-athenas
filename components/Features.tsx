"use client";

import { motion } from "framer-motion";
import { Eye, Shield, HandHeart } from "lucide-react";

// ==========================================
// A FÁBRICA: PILARES DA MARCA (WHITE FLAG)
// ==========================================
const FEATURES_DATA = [
  {
    title: "Deleite Visual",
    description: "Cada detalhe do nosso ambiente foi projetado para agradar aos olhos e iniciar o seu relaxamento antes mesmo do primeiro toque.",
    icon: Eye,
  },
  {
    title: "Privacidade Absoluta",
    description: "Seu momento é sagrado. Garantimos discrição total para que sua experiência seja vivida com tranquilidade.",
    icon: Shield,
  },
  {
    title: "Toque Humanizado",
    description: "Profissionais selecionadas não apenas pela técnica impecável, mas pela capacidade de criar conexões genuínas e acolhedoras.",
    icon: HandHeart,
  },
];

export function Features() {
  return (
    <section className="relative w-full py-24 bg-[#160B08] overflow-hidden font-sans">
      
      {/* Luzes de Fundo para Continuidade do Layout Quente */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-orange-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif text-orange-50 tracking-wide mb-4"
          >
            Nossos <span className="italic text-orange-600">Pilares</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-orange-200/60 text-lg font-light"
          >
            A fundação de um atendimento que transcende a massagem tradicional.
          </motion.p>
        </div>

        {/* Grid de Cards (Elegante e Clean) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES_DATA.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative p-8 rounded-[2rem] bg-[#1A0D0A]/60 backdrop-blur-sm border border-orange-900/30 hover:border-orange-700/50 transition-all duration-500 hover:shadow-[0_10px_40px_-15px_rgba(194,65,12,0.3)]"
              >
                {/* Ícone com Glow Interno adaptado para Terracota */}
                <div className="relative w-14 h-14 rounded-2xl bg-[#160B08] border border-orange-900/40 flex items-center justify-center mb-6 shadow-inner group-hover:border-orange-600/50 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>

                <h3 className="text-xl font-serif text-orange-50 mb-3">
                  {feature.title}
                </h3>
                <p className="text-orange-100/70 font-light leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}