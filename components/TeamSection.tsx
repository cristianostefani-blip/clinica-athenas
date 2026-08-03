"use client";

import { motion } from "framer-motion";
import { WhatsAppButton } from "@/components/WhatsAppButton";

// ==========================================
// A FÁBRICA: EQUIPE (WHITE FLAG & NÍTIDA)
// ==========================================
const TEAM_DATA = [
  {
    name: "Elena",
    role: "Terapia Sensorial",
    // Retrato nítido, fundo quente, olhar magnético (100% White Flag)
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop", 
  },
  {
    name: "Sofia",
    role: "Descompressão Profunda",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Isabella",
    role: "Reconexão Corporal",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop",
  }
];

export function TeamSection() {
  return (
    <section className="relative w-full py-24 bg-stone-950 overflow-hidden font-sans">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-serif text-orange-50 tracking-wide mb-4"
          >
            Nossas <span className="italic text-amber-600">Especialistas</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-stone-400 text-lg font-light"
          >
            Rostos que acolhem, mãos que renovam. Conheça as anfitriãs da sua próxima experiência.
          </motion.p>
        </div>

        {/* Grid de Profissionais Nítido */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_DATA.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative rounded-[2rem] overflow-hidden bg-stone-900 border border-stone-800 hover:border-amber-600/50 transition-all duration-500 shadow-xl"
            >
              {/* O Segredo da Conversão: Imagem limpa e sem overlay escuro no rosto */}
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Gradiente apenas na base para ler o texto, deixando o rosto 100% nítido */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent z-10" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex flex-col items-center text-center">
                  <h3 className="text-3xl font-serif text-orange-50 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-amber-500 text-sm font-light tracking-wide mb-6">
                    {member.role}
                  </p>
                  
                  {/* Botão de Agendamento Harmonizado */}
                  <div className="w-full">
                    <WhatsAppButton 
                      buttonLocation={`card_terapeuta_${member.name.toLowerCase()}`}
                      label="Agendar com Ela"
                      className="w-full py-3 text-sm !bg-stone-800/80 backdrop-blur-md hover:!bg-amber-700 !text-orange-50 border border-stone-700 hover:border-amber-600 transition-colors"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}