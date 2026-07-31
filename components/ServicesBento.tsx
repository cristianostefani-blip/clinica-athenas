"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

const services = [
  {
    id: 1,
    title: "Enjoy Signature",
    description: "Nossa jornada sensorial mais completa. Uma fusão exclusiva de técnicas de relaxamento, óleos essenciais aquecidos e pedras quentes para uma desconexão absoluta da mente.",
    image: "/service-signature.jpg",
    className: "col-span-2 row-span-2", // Classes para o grid Desktop
    duration: "90 min",
  },
  {
    id: 2,
    title: "Terapia Sensitiva",
    description: "Toques sutis e compassados projetados para acalmar o sistema nervoso e promover um estado profundo de paz interior.",
    image: "/service-sensitive.jpg",
    className: "col-span-1 row-span-1",
    duration: "60 min",
  },
  {
    id: 3,
    title: "Revitalização Muscular",
    description: "Foco na liberação de tensões acumuladas pela rotina corporativa. Restaure sua performance física e mental.",
    image: "/service-revitalize.jpg",
    className: "col-span-1 row-span-1",
    duration: "60 min",
  },
];

export function ServicesBento() {
  return (
    <section id="terapias" className={`relative w-full py-24 bg-[#0a0806] ${montserrat.className}`}>
      
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Cabeçalho da Seção */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-[#d4af37] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Menu de Experiências
            </h2>
            <h3 className="text-3xl md:text-5xl font-light text-white leading-tight">
              Rituais desenhados <br className="hidden sm:block" />
              <span className="font-medium">para o seu corpo.</span>
            </h3>
          </div>
        </motion.div>

        {/* =========================================
            DESKTOP VIEW: BENTO GRID (Com Efeito Hover)
            ========================================= */}
        <div className="hidden md:grid grid-cols-3 auto-rows-[280px] gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`group relative rounded-3xl overflow-hidden bg-[#12100d] border border-white/5 hover:border-[#d4af37]/30 transition-colors duration-500 flex flex-col justify-end ${service.className}`}
            >
              <div className="absolute inset-0 z-0">
                {/* No Desktop, mantemos o Grayscale que revela a cor no Hover. Ajustamos brilho. */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                {/* Gradiente sutil para leitura no Desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806] via-[#0a0806]/80 to-transparent" />
              </div>

              <div className="relative z-10 p-8 flex flex-col h-full justify-end">
                <div className="flex justify-between items-end mb-3">
                  <h4 className="text-2xl font-semibold text-[#e5c76b] tracking-wide">
                    {service.title}
                  </h4>
                  <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#d4af37] transition-colors duration-300">
                    <ArrowUpRight className="w-5 h-5 text-white group-hover:text-[#0a0806]" />
                  </div>
                </div>
                
                <p className="text-[#a89f91] text-base font-normal leading-relaxed mb-4 transition-all duration-300">
                  {service.description}
                </p>

                <div className="mt-auto inline-block">
                  <span className="px-3 py-1 rounded-full border border-[#d4af37]/30 text-[#d4af37] text-xs uppercase tracking-widest font-semibold">
                    {service.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

{/* =========================================
          NOVO MOBILE VIEW: NATIVE SCROLL SNAP 100%
          ========================================= */}
      {/* Container limpo, apenas com as classes nativas de scroll e snap */}
      <div className="md:hidden relative w-full px-6 overflow-x-auto snap-x snap-mandatory mt-8 scrollbar-hide flex gap-4 pb-4">
        
        {services.map((service) => (
          /* Trocamos <motion.div> por <div> nativa. 
             Isso garante zero interferência de JavaScript no toque do usuário. */
          <div
            key={service.id}
            className="relative w-[85vw] h-[400px] rounded-3xl overflow-hidden bg-[#12100d] border border-white/10 flex flex-col justify-end shrink-0 snap-center transition-transform active:scale-[0.98]"
          >
            <div className="absolute inset-0 z-0">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806]/95 via-[#0a0806]/30 to-transparent" />
            </div>

            <div className="relative z-10 p-6 flex flex-col h-full justify-end">
              <div className="flex justify-between items-end mb-3">
                <h4 className="text-2xl font-semibold text-[#e5c76b] tracking-wide">
                  {service.title}
                </h4>
                <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 backdrop-blur-sm flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-[#d4af37]" />
                </div>
              </div>
              
              <p className="text-[#a89f91] text-sm font-normal leading-relaxed mb-4">
                {service.description}
              </p>

              <div className="mt-auto inline-block">
                <span className="px-3 py-1 rounded-full border border-[#d4af37]/30 text-[#d4af37] text-xs uppercase tracking-widest font-semibold">
                  {service.duration}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Padding extra no final */}
        <div className="w-[8vw] shrink-0" />
      </div>

    </section>
  );
}