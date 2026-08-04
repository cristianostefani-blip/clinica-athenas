"use client";

import { motion } from "framer-motion";
import { Droplets, Sparkles, Flame } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

// ==========================================
// A FÁBRICA: DADOS DOS SERVIÇOS (WHITE FLAG)
// ==========================================
const MENU_CONTENT = [
  {
    id: "artemis",
    title: "Ártemis",
    price: "R$ 280",
    duration: "60 min",
    description: "Massagem relaxante com bambu e pedras quentes. Técnicas que promovem o alívio das tensões e uma experiência de bem-estar.",
    icon: Droplets,
    // Apontando direto para a pasta public
    safeImage: "/artemis.jpg" 
  },
  {
    id: "afrodite",
    title: "Afrodite",
    price: "R$ 350",
    duration: "90 min",
    description: "Um protocolo imersivo com óleos essenciais aquecidos e manobras profundas para desconexão total da mente.",
    icon: Flame,
    safeImage: "/afrodite.jpg"
  },
  {
    id: "athenas",
    title: "Experiência Athenas",
    price: "R$ 450",
    duration: "120 min",
    description: "A nossa assinatura máxima. Uma jornada sensorial completa combinando todas as técnicas da casa em um ambiente preparado exclusivamente para você.",
    icon: Sparkles,
    safeImage: "/athenas.jpg"
  }
];

export function ServicesBento() {
  return (
    <section className="relative w-full py-24 bg-stone-950 font-sans" id="experiencias">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-serif text-orange-50 tracking-wide mb-4"
          >
            Menu de <span className="italic text-amber-600">Experiências</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-stone-400 text-lg font-light"
          >
            Escolha o seu nível de imersão. Cada protocolo é conduzido com discrição e técnica absoluta.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {MENU_CONTENT.map((item, index) => {
            const Icon = item.icon;
            // O primeiro item ganha destaque ocupando mais colunas no desktop
            const isFeatured = index === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`group relative overflow-hidden rounded-[2rem] border border-amber-900/30 shadow-2xl flex flex-col justify-end min-h-[450px] ${
                  isFeatured ? "md:col-span-12 lg:col-span-8" : "md:col-span-6 lg:col-span-4"
                }`}
              >
                {/* 1. IMAGEM 100% NÍTIDA */}
                <img 
                  src={item.safeImage} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out z-0"
                />

                {/* 2. PROTEÇÃO DE TEXTO INTELIGENTE (SMART GRADIENT)
                    Aqui estava o erro: troquei o escurecimento global por um gradiente 
                    que é escuro só embaixo e totalmente transparente em cima. */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent opacity-90 z-10" />

                {/* 3. CONTEÚDO DO CARD */}
                <div className="relative z-20 p-8 flex flex-col h-full justify-end">
                  
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900/50 border border-amber-700/30 backdrop-blur-md">
                      <Icon className="w-4 h-4 text-amber-500" />
                      <span className="text-xs font-medium text-amber-200 tracking-wider uppercase">
                        {item.duration}
                      </span>
                    </div>
                    <span className="text-xl md:text-2xl font-serif text-amber-500">
                      {item.price}
                    </span>
                  </div>

                  <h3 className="text-3xl font-serif text-orange-50 mb-3 drop-shadow-md">
                    {item.title}
                  </h3>
                  
                  <p className="text-stone-300 font-light leading-relaxed mb-6 drop-shadow-sm max-w-lg">
                    {item.description}
                  </p>

                  <WhatsAppButton 
                    buttonLocation={`servico_${item.id}`} 
                    label="Reservar Experiência"
                    className="w-full sm:w-auto py-3.5 text-sm !bg-amber-700 hover:!bg-amber-600 !text-stone-950 !shadow-[0_0_20px_-5px_rgba(180,83,9,0.5)] transition-all"
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