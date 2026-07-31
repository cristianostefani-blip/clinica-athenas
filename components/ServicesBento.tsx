"use client";

import { motion } from "framer-motion";
import { Sparkles, Flower2, Waves } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

// ==========================================
// A FÁBRICA: SERVIÇOS (WHITE FLAG)
// ==========================================
const BENTO_CONTENT = {
  title: "Nossas Especialidades",
  subtitle: "Protocolos exclusivos para restaurar sua harmonia e vitalidade.",
};

export function ServicesBento() {
  return (
    <section className="relative w-full py-24 bg-zinc-950 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-light text-white tracking-tight mb-4"
          >
            {BENTO_CONTENT.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg"
          >
            {BENTO_CONTENT.subtitle}
          </motion.p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          
          {/* Card 1: Destaque Principal (Ocupa 2 colunas no Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 relative rounded-3xl overflow-hidden group bg-zinc-900 border border-zinc-800/50 hover:border-emerald-500/30 transition-all"
          >
            <img 
              src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1000&auto=format&fit=crop" 
              alt="Terapia com Pedras Quentes" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
              <Flower2 className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-2xl font-medium text-white mb-2">Terapia com Pedras Quentes</h3>
              <p className="text-zinc-300 mb-6 max-w-md">Alívio de tensões profundas através da termoterapia e movimentos precisos de relaxamento.</p>
              <div className="w-fit">
                 <WhatsAppButton buttonLocation="bento_pedras" label="Saber Mais" className="py-2.5 px-6 text-sm" />
              </div>
            </div>
          </motion.div>

          {/* Card 2: Secundário */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden group bg-zinc-900 border border-zinc-800/50 hover:border-emerald-500/30 transition-all p-8 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-900/20 blur-[50px] rounded-full pointer-events-none" />
            <div>
              <Waves className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-medium text-white mb-2">Drenagem Linfática</h3>
              <p className="text-zinc-400 text-sm">Técnica suave que estimula o sistema linfático, reduzindo inchaços e promovendo leveza.</p>
            </div>
            <div className="w-full mt-6">
                <WhatsAppButton buttonLocation="bento_drenagem" label="Consultar" className="w-full py-2.5 text-sm" />
            </div>
          </motion.div>

          {/* Card 3: Secundário */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden group bg-zinc-900 border border-zinc-800/50 hover:border-emerald-500/30 transition-all p-8 flex flex-col justify-between"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-900/20 blur-[50px] rounded-full pointer-events-none" />
            <div>
              <Sparkles className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-medium text-white mb-2">Reflexologia Podal</h3>
              <p className="text-zinc-400 text-sm">Estímulo de pontos vitais nos pés que reequilibram a energia de todo o corpo.</p>
            </div>
            <div className="w-full mt-6">
                <WhatsAppButton buttonLocation="bento_reflexologia" label="Consultar" className="w-full py-2.5 text-sm" />
            </div>
          </motion.div>

           {/* Card 4: Destaque Menor (Ocupa 2 colunas no Desktop) */}
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 relative rounded-3xl overflow-hidden group bg-zinc-900 border border-zinc-800/50 hover:border-emerald-500/30 transition-all flex items-center p-8"
          >
            <div className="z-10 flex-1">
              <h3 className="text-2xl font-medium text-white mb-2">Massagem Relaxante Clássica</h3>
              <p className="text-zinc-300 mb-6 max-w-md">O protocolo definitivo para desconectar a mente e aliviar a carga de estresse do dia a dia.</p>
              <div className="w-fit">
                 <WhatsAppButton buttonLocation="bento_classica" label="Agendar Sessão" className="py-2.5 px-6 text-sm" />
              </div>
            </div>
             <div className="hidden md:block flex-1 h-full relative ml-8 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop" 
                  alt="Massagem Clássica" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}