"use client";

import { motion } from "framer-motion";
import { Sparkles, Flame, Droplets } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

// ==========================================
// A FÁBRICA: MENU SANITIZADO (WHITE FLAG)
// ==========================================
// NOTA DA LANDY: Os nomes são mantidos, mas as descrições foram blindadas para Ads.
const MENU_CONTENT = [
  {
    id: "artemis",
    title: "Ártemis",
    price: "R$ 280",
    duration: "60 min",
    description: "Massagem relaxante com bambu e pedras quentes. Técnicas que promovem o alívio das tensões e uma experiência de bem-estar.",
    icon: Droplets,
    safeImage: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "afrodite",
    title: "Afrodite",
    price: "R$ 360",
    duration: "60 min",
    description: "Nossa experiência sensorial mais procurada. Foco na reconexão corporal com toques fluidos, óleos aquecidos e relaxamento imersivo.",
    icon: Flame,
    safeImage: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "athenas",
    title: "Athenas",
    price: "R$ 240",
    duration: "60 min",
    description: "Protocolo assinatura que une terapias de descompressão intensas a uma vivência aquática renovadora (inclui banho).",
    icon: Sparkles,
    safeImage: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop"
  }
];

export function ServicesBento() {
  return (
    // Fundo alterado para Stone escuro (marrom/cinza quente)
    <section className="relative w-full py-24 bg-stone-950 overflow-hidden font-sans">
      
      {/* Luzes de Fundo (Glow Quente) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-900/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // Fonte Serifada para elegância (necessita ter uma fonte serifada configurada no Tailwind, ex: font-serif)
            className="text-4xl md:text-5xl font-serif text-orange-50 tracking-wide mb-4"
          >
            Nossas <span className="italic text-amber-600">Experiências</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-stone-400 text-lg font-light tracking-wide"
          >
            Escolha sua jornada. Um ambiente preparado para o seu deleite visual e corporal.
          </motion.p>
        </div>

        {/* Grid de Serviços Elegante */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MENU_CONTENT.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative rounded-[2rem] overflow-hidden bg-stone-900/40 border border-amber-900/30 hover:border-amber-600/50 transition-all duration-500 flex flex-col"
            >
              {/* Imagem de Fundo com Overlay Quente */}
              <div className="absolute inset-0 z-0 h-2/3">
                <img 
                  src={item.safeImage} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-stone-950/10 via-stone-950/80 to-stone-950" />
              </div>
              
              {/* Conteúdo do Card */}
              <div className="relative z-10 p-8 flex flex-col h-full justify-end mt-32">
                <div className="flex justify-between items-end mb-4 border-b border-amber-900/30 pb-4">
                  <div>
                    <h3 className="text-3xl font-serif text-orange-100">{item.title}</h3>
                    <span className="text-amber-700 text-sm tracking-widest uppercase">{item.duration}</span>
                  </div>
                  <div className="text-2xl font-light text-amber-500">{item.price}</div>
                </div>
                
                <p className="text-stone-300 font-light leading-relaxed mb-8 min-h-[80px]">
                  {item.description}
                </p>
                
                {/* Botão Integrado */}
                <WhatsAppButton 
                  buttonLocation={`menu_${item.id}`} 
                  label="Reservar Experiência" 
                  className="w-full !bg-amber-700 hover:!bg-amber-600 !shadow-[0_0_30px_-5px_rgba(180,83,9,0.5)] !text-stone-950"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

