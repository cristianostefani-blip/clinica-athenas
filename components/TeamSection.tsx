"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { WhatsAppButton } from "@/components/WhatsAppButton"; // Importamos o Super Botão

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

// Removida a lógica manual de waLink, agora o componente resolve isso.
const team = [
  { id: 1, name: "Sophia", description: "Especialista em relaxamento profundo e terapias sensoriais." },
  { id: 2, name: "Isabella", description: "Foco em revitalização muscular e alívio de tensões." },
  { id: 3, name: "Aurora", description: "Mestra em toques sutis e compassados para acalmar a mente." },
  { id: 4, name: "Maya", description: "Especialista no ritual Enjoy Signature com pedras quentes." },
  { id: 5, name: "Luna", description: "Terapia imersiva com óleos essenciais e desconexão." },
  { id: 6, name: "Stella", description: "Massagem revigorante focada em alta performance." },
  { id: 7, name: "Chloe", description: "Atendimento focado no reequilíbrio energético corporal." },
  { id: 8, name: "Olivia", description: "Toques clássicos para um relaxamento tradicional e eficaz." },
  { id: 9, name: "Emma", description: "Especialista em descompressão da rotina corporativa." },
  { id: 10, name: "Mia", description: "Jornada sensorial focada no silêncio e na paz interior." },
].map((t) => ({
  ...t,
  image: `/terapeuta-${t.id}.jpg`,
}));

export function TeamSection() {
  return (
    <section id="especialistas" className={`relative w-full py-24 bg-[#0a0806] ${montserrat.className}`}>
      
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Cabeçalho */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center lg:text-left"
        >
          <h2 className="text-[#d4af37] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Nossas Especialistas
          </h2>
          <h3 className="text-3xl md:text-5xl font-light text-white leading-tight">
            Excelência em <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#e5c76b]">cada toque.</span>
          </h3>
        </motion.div>

        {/* Grid de Especialistas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {team.map((terapeuta, index) => (
            <motion.div
              key={terapeuta.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className="group relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#12100d] border border-white/5 flex flex-col justify-end shadow-lg"
            >
              {/* Imagem */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={terapeuta.image}
                  alt={terapeuta.name}
                  fill
                  className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806] via-[#0a0806]/40 to-transparent" />
              </div>

              {/* Conteúdo do Card */}
              <div className="relative z-10 p-5 flex flex-col h-full justify-end">
                <h4 className="text-2xl font-semibold text-[#e5c76b] tracking-wide mb-1">
                  {terapeuta.name}
                </h4>
                
                <p className="text-[#a89f91] text-xs font-normal leading-relaxed mb-5 line-clamp-2">
                  {terapeuta.description}
                </p>

                {/* SUPER BOTÃO: Agora com rastreamento invisível de UTM e GTM */}
                <WhatsAppButton 
                  location={`card_terapeuta_${terapeuta.name}`}
                  baseMessage={`Olá! Gostaria de agendar um horário com a ${terapeuta.name}.`}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#0a0806] rounded-xl font-bold text-xs tracking-widest uppercase hover:scale-[1.02] hover:shadow-[0_4px_15px_rgba(212,175,55,0.3)] transition-all duration-300 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  Agendar
                </WhatsAppButton>
              </div>

            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}