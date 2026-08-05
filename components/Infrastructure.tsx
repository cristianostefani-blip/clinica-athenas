"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

// ==========================================
// A FÁBRICA: FOTOS DO AMBIENTE
// ==========================================
const galleryImages = [
  "/infra-1.jpg",
  "/infra-2.jpg",
  "/infra-3.jpg",
  "/infra-4.jpg",
  "/infra-5.jpg",
  "/infra-6.jpg",
];

export function Infrastructure() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    handleScroll();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="sobre" className="relative w-full py-24 bg-[#160B08] overflow-hidden font-sans">
      
      {/* Oculta a barra de rolagem mas mantém o scroll funcional */}
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* Luz de Fundo Cobre */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-orange-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* COLUNA ESQUERDA (Texto) */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-orange-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">
                O Refúgio
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-orange-50 leading-tight mb-6">
                Privacidade absoluta em <br className="hidden sm:block lg:hidden"/>
                <span className="italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-700">cada detalhe.</span>
              </h3>
              
              <p className="text-orange-100/70 text-base md:text-lg font-light leading-relaxed mb-10">
                Desenhado para ser o seu Spa urbano. Nossa infraestrutura combina design sensorial e iluminação intimista para garantir que sua única preocupação seja relaxar e se desconectar do mundo exterior.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck className="w-5 h-5 text-orange-500" />
                    <h4 className="text-orange-50 font-medium text-sm tracking-wide">Sigilo Garantido</h4>
                  </div>
                  <p className="text-orange-200/50 text-sm font-light leading-relaxed">
                    Atendimento discreto do início ao fim da sua jornada.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="w-5 h-5 text-orange-500" />
                    <h4 className="text-orange-50 font-medium text-sm tracking-wide">Alto Padrão</h4>
                  </div>
                  <p className="text-orange-200/50 text-sm font-light leading-relaxed">
                    Salas climatizadas, toalhas premium e conforto absoluto.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* COLUNA DIREITA (Slider) */}
          <div className="relative w-full mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] lg:max-w-[480px] group rounded-[2rem] shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-orange-900/30 overflow-hidden bg-[#1A0D0A]">
              
              {canScrollLeft && (
                <button
                  onClick={() => scroll("left")}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 text-orange-400 hover:text-orange-300 hover:scale-110 transition-all duration-300 drop-shadow-md outline-none"
                >
                  <ChevronLeft className="w-10 h-10 stroke-[1.5]" />
                </button>
              )}

              {canScrollRight && (
                <button
                  onClick={() => scroll("right")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 text-orange-400 hover:text-orange-300 hover:scale-110 transition-all duration-300 drop-shadow-md outline-none"
                >
                  <ChevronRight className="w-10 h-10 stroke-[1.5]" />
                </button>
              )}

              <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar w-full"
              >
                {galleryImages.map((src, index) => (
                  <div
                    key={index}
                    className="relative w-full aspect-[4/5] shrink-0 snap-center"
                  >
                    <img
                      src={src}
                      alt={`Ambiente Athenas ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#160B08]/80 via-transparent to-transparent pointer-events-none" />
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}