"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

// Array centralizado com as 8 fotos da casa
const galleryImages = [
  "/infra-enjoy-1.jpg",
  "/infra-enjoy-2.jpg",
  "/infra-enjoy-3.jpg",
  "/infra-enjoy-4.jpg",
  "/infra-enjoy-5.jpg",
  "/infra-enjoy-6.jpg",
  "/infra-enjoy-7.jpg",
  "/infra-enjoy-8.jpg",
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
    <section id="sobre" className={`relative w-full py-24 bg-[#0a0806] overflow-hidden ${montserrat.className}`}>
      
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* AJUSTE 1: Voltamos para max-w-6xl para alinhar milimetricamente com a Navbar */}
      <div className="max-w-6xl mx-auto px-6">
        
        {/* AJUSTE 2: Mudamos para grid-cols-2 (50% para cada lado em Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* =========================================
              COLUNA ESQUERDA (Texto)
              ========================================= */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[#d4af37] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                O Refúgio
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
                Privacidade absoluta em <br className="hidden sm:block lg:hidden"/>
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#e5c76b]">cada detalhe.</span>
              </h3>
              
              <p className="text-[#a89f91] text-base md:text-lg font-normal leading-relaxed mb-10">
                Desenhado para ser o seu santuário urbano. Nossa infraestrutura combina design sensorial, acústica impecável e iluminação intimista para garantir que sua única preocupação seja relaxar e se desconectar do mundo exterior.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck className="w-5 h-5 text-[#d4af37]" />
                    <h4 className="text-white font-medium text-sm tracking-wide">Sigilo Garantido</h4>
                  </div>
                  <p className="text-[#a89f91] text-sm font-normal leading-relaxed">
                    Atendimento discreto do início ao fim da sua jornada.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="w-5 h-5 text-[#d4af37]" />
                    <h4 className="text-white font-medium text-sm tracking-wide">Alto Padrão</h4>
                  </div>
                  <p className="text-[#a89f91] text-sm font-normal leading-relaxed">
                    Duchas privativas, toalhas premium e climatização.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* =========================================
              COLUNA DIREITA (Slider)
              ========================================= */}
          {/* AJUSTE 3: lg:justify-end vai empurrar o container inteiro para o limite direito da tela */}
          <div className="relative w-full mt-8 lg:mt-0 flex justify-center lg:justify-end">
            
            <div className="relative w-full max-w-[400px] lg:max-w-[480px] group rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.8)]">
              
              {canScrollLeft && (
                <button
                  onClick={() => scroll("left")}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 text-[#d4af37] hover:text-[#ffe58f] hover:scale-110 transition-all duration-300 drop-shadow-[0_2px_12px_rgba(212,175,55,0.8)] outline-none"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="w-10 h-10 stroke-[1.5]" />
                </button>
              )}

              {canScrollRight && (
                <button
                  onClick={() => scroll("right")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 text-[#d4af37] hover:text-[#ffe58f] hover:scale-110 transition-all duration-300 drop-shadow-[0_2px_12px_rgba(212,175,55,0.8)] outline-none"
                  aria-label="Próxima foto"
                >
                  <ChevronRight className="w-10 h-10 stroke-[1.5]" />
                </button>
              )}

              <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar w-full rounded-2xl bg-[#12100d] border border-white/5"
              >
                {galleryImages.map((src, index) => (
                  <div
                    key={index}
                    className="relative w-full aspect-[4/5] shrink-0 snap-center"
                  >
                    <Image
                      src={src}
                      alt={`Ambiente Enjoy Spa - Foto ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806]/80 via-transparent to-transparent pointer-events-none" />
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