"use client";

import { motion } from "framer-motion";
import { WhatsAppButton } from "@/components/WhatsAppButton";

// ==========================================
// A FÁBRICA: DADOS DA EQUIPE (WHITE FLAG)
// ==========================================
const TEAM_DATA = [
  {
    name: "Elena",
    role: "Especialista em Terapias Integrativas",
    // DICA WHITE HAT: Use fotos profissionais em ambiente clean ou headshots corporativos.
    image: "https://images.unsplash.com/photo-1594824436968-3014f31316f7?q=80&w=800&auto=format&fit=crop", 
  },
  {
    name: "Sofia",
    role: "Especialista em Relaxamento Profundo",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Isabella",
    role: "Terapeuta em Pedras Quentes",
    image: "https://images.unsplash.com/photo-1604604994033-6685b8fae407?q=80&w=800&auto=format&fit=crop",
  }
];

export function TeamSection() {
  return (
    <section className="relative w-full py-24 bg-zinc-950 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-light text-white tracking-tight mb-4"
          >
            Nossas <span className="font-semibold text-emerald-400">Especialistas</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-400 text-lg"
          >
            Profissionais rigorosamente selecionadas para entregar o mais alto nível de excelência em relaxamento e reequilíbrio corporal.
          </motion.p>
        </div>

        {/* Grid de Profissionais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_DATA.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative rounded-3xl overflow-hidden bg-zinc-900/50 border border-zinc-800/50 hover:border-emerald-500/30 transition-all duration-300"
            >
              {/* Efeito Card Interno */}
              <div className="aspect-[4/5] relative overflow-hidden">
                {/* Overlay de Gradiente para garantir leitura do texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10" />
                
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex flex-col items-center text-center">
                  <h3 className="text-2xl font-medium text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-emerald-400 text-sm mb-6">
                    {member.role}
                  </p>
                  
                  {/* COMPONENTE WHATSAPP COM TIPAGEM CORRIGIDA */}
                  <div className="w-full">
                    <WhatsAppButton 
                      buttonLocation={`card_terapeuta_${member.name.toLowerCase()}`}
                      label="Agendar Horário"
                      className="w-full py-3 text-sm"
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