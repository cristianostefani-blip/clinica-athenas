"use client";

import Image from "next/image"; // 1. IMPORTAÇÃO DO MOTOR DE IMAGEM
import { motion } from "framer-motion";
import { Droplets, Sparkles, Flame, Waves, HeartHandshake } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

// ==========================================
// A FÁBRICA: DADOS DOS SERVIÇOS (WHITE FLAG)
// ==========================================
const MENU_CONTENT = [
  {
    id: "athenas",
    title: "Athenas",
    price: "R$ 240",
    duration: "60 min",
    description: "Nossa assinatura exclusiva. Uma imersão que combina manobras fluidas e envolventes para proporcionar relaxamento intenso e desconexão total da rotina.",
    icon: Sparkles,
    safeImage: "/athenas.jpg"
  },
  {
    id: "mix",
    title: "Mix",
    price: "R$ 180",
    duration: "60 min",
    description: "Protocolo corporal desenvolvido para aliviar tensões crônicas, promover relaxamento muscular profundo e restaurar o equilíbrio absoluto entre corpo e mente.",
    icon: Waves,
    safeImage: "/mix.jpg"
  },
  {
    id: "dionisio",
    title: "Dionísio",
    price: "R$ 340",
    duration: "60 min",
    description: "Direcionado ao alívio de tensões profundas. Utiliza técnicas específicas para promover conforto máximo, restaurar a vitalidade e proporcionar relaxamento extremo.",
    icon: Flame,
    safeImage: "/dionisio.jpg"
  },
  {
    id: "four-hands",
    title: "Four Hands",
    price: "R$ 480",
    duration: "60 min",
    description: "Sincronia perfeita. Terapia executada a quatro mãos que amplia exponencialmente a descompressão sensorial, guiando o corpo a um estado meditativo.",
    icon: HeartHandshake,
    safeImage: "/four-hands.jpg"
  },
  {
    id: "artemis",
    title: "Ártemis",
    price: "R$ 280",
    duration: "60 min",
    description: "Experiência terapêutica com pedras aquecidas e ventosaterapia. Estimula a circulação, dissolve nódulos de tensão e entrega um relaxamento revigorante.",
    icon: Droplets,
    safeImage: "/artemis.jpg"
  }
];

export function ServicesBento() {
  return (
    <section id="experiencias" className="relative w-full py-24 bg-[#160B08] font-sans">
      
      {/* Glow de fundo em tom de cobre para dar profundidade */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-orange-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-serif text-orange-50 tracking-wide mb-4"
          >
            Menu de <span className="italic text-orange-600">Experiências</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-orange-200/60 text-lg font-light"
          >
            Escolha o seu nível de imersão.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {MENU_CONTENT.map((item, index) => {
            const Icon = item.icon;
            const isFeatured = index === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-[2rem] border border-orange-900/30 shadow-2xl flex flex-col justify-end min-h-[450px] ${
                  isFeatured ? "md:col-span-12 lg:col-span-12" : "md:col-span-6 lg:col-span-6"
                }`}
              >
                {/* 
                  2. APLICAÇÃO DO NEXT/IMAGE COM FILL E SIZES
                  Aqui está a mágica da otimização para Grids Fluidos. 
                */}
                <Image 
                  src={item.safeImage} 
                  alt={item.title}
                  fill
                  sizes={isFeatured ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out z-0"
                />

                {/* PROTEÇÃO DE TEXTO INTELIGENTE (Terracotta Gradient) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#160B08] via-[#160B08]/80 to-transparent opacity-95 z-10" />

                {/* CONTEÚDO DO CARD */}
                <div className="relative z-20 p-8 flex flex-col h-full justify-end">
                  
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-950/50 border border-orange-700/30 backdrop-blur-md">
                      <Icon className="w-4 h-4 text-orange-500" />
                      <span className="text-xs font-medium text-orange-200 tracking-wider uppercase">
                        {item.duration}
                      </span>
                    </div>
                    <span className="text-xl md:text-2xl font-serif text-orange-500 drop-shadow-md">
                      {item.price}
                    </span>
                  </div>

                  <h3 className={`font-serif text-orange-50 mb-3 drop-shadow-md ${isFeatured ? 'text-4xl md:text-5xl' : 'text-3xl'}`}>
                    {item.title}
                  </h3>
                  
                  <p className="text-orange-100/70 font-light leading-relaxed mb-6 drop-shadow-sm max-w-xl">
                    {item.description}
                  </p>

                  <WhatsAppButton 
                    buttonLocation={`servico_${item.id}`} 
                    label="Reservar Experiência"
                    className="w-full sm:w-auto py-3.5 text-sm !bg-orange-700 hover:!bg-orange-600 !text-orange-50 !shadow-[0_0_20px_-5px_rgba(194,65,12,0.5)] transition-all"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}