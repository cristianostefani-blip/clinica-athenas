"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Suspense } from "react";

// ==========================================
// A FÁBRICA: DADOS DA CLÍNICA ATHENAS
// ==========================================
const WHATSAPP_NUMBER = "5511913247472"; // Substitua pelo número real
const BASE_MESSAGE = "Olá! Gostaria de agendar uma sessão na Clínica Athenas."; // Sem UTMs aqui!

interface WhatsAppButtonProps {
  buttonLocation: string;
  className?: string;
  label?: string;
}

function WhatsAppButtonContent({ buttonLocation, className, label = "Agendar Horário" }: WhatsAppButtonProps) {
  const searchParams = useSearchParams();

  const handleClick = () => {
    // 1. Silent Tracking: Captura UTMs da URL sem poluir a mensagem
    const utm_source = searchParams.get("utm_source") || "direct";
    const utm_campaign = searchParams.get("utm_campaign") || "none";
    const utm_medium = searchParams.get("utm_medium") || "none";

    // 2. Disparo para o DataLayer (Google Tag Manager)
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "whatsapp_click",
        utm_source,
        utm_campaign,
        utm_medium,
        button_location: buttonLocation,
      });
    }
  };

  const encodedMessage = encodeURIComponent(BASE_MESSAGE);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative inline-flex items-center justify-center gap-2 px-8 py-4 
        font-semibold text-white transition-all duration-300 
        bg-emerald-600 rounded-full shadow-[0_0_40px_-10px_rgba(5,150,105,0.5)]
        hover:bg-emerald-500 hover:shadow-[0_0_60px_-15px_rgba(5,150,105,0.7)]
        overflow-hidden group ${className}
      `}
    >
      {/* Efeito Shimmer Premium */}
      <span className="absolute inset-0 w-full h-full -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
      <MessageCircle className="w-5 h-5" />
      <span>{label}</span>
    </motion.a>
  );
}

// OBRIGATÓRIO: Suspense para não quebrar a compilação estática do Next.js
export function WhatsAppButton(props: WhatsAppButtonProps) {
  return (
    <Suspense fallback={<div className="h-14 w-48 bg-emerald-600/50 animate-pulse rounded-full" />}>
      <WhatsAppButtonContent {...props} />
    </Suspense>
  );
}