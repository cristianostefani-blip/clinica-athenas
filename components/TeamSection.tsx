"use client";

import { motion } from "framer-motion";
import { WhatsAppButton } from "@/components/WhatsAppButton";

// ==========================================
// A FÁBRICA: EQUIPE SEM FOTOS (WHITE FLAG)
// ==========================================
const TEAM_DATA = [
  {
    name: "Elena",
    role: "Terapia Sensorial",
    description: "Especialista em toques sutis e descompressão de alta intensidade.",
  },
  {
    name: "Sofia",
    role: "Relaxamento Profundo",
    description: "Foco absoluto em alívio muscular e realinhamento energético.",
  },
  {
    name: "Isabella",
    role: "Reconexão Corporal",
    description: "Domínio completo de protocolos assinados para o bem-estar mental.",
  }
];

export function TeamSection() {
  return (
    <section className="relative w-full py-24 bg-stone-950 overflow-hidden font-sans border-t border-amber-900/10">
      
      {/* Luz Central */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-amber-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-serif text-orange-50 tracking-wide mb-4"
          >
            Conheça nossas <span className="italic text-amber-600">Especialistas</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-stone-400 text-lg font-light"
          >
            Mãos habilidosas prontas para guiar você em uma jornada de descompressão absoluta.
          </motion.p>
        </div>

        {/* Grid de Cards (Apenas Texto e CTA) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_DATA.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative p-8 rounded-[2rem] bg-stone-900/30 border border-stone-800 hover:border-amber-700/40 transition-all duration-500 shadow-xl flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="text-3xl font-serif text-orange-50 mb-2">
                  {member.name}
                </h3>
                <p className="text-amber-600 text-sm font-medium tracking-widest uppercase mb-6">
                  {member.role}
                </p>
                <p className="text-stone-400 font-light leading-relaxed mb-8">
                  "{member.description}"
                </p>
              </div>
              
              <div className="w-full mt-auto">
                <WhatsAppButton 
                  buttonLocation={`card_terapeuta_${member.name.toLowerCase()}`}
                  label="Agendar Horário"
                  className="w-full py-3.5 text-sm !bg-transparent hover:!bg-amber-900/20 !text-amber-500 border border-amber-900/50 hover:border-amber-600 transition-colors"
                />
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}