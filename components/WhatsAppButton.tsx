"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { MessageCircle } from "lucide-react";

// ==========================================
// A FÁBRICA: DADOS DE CONTATO (WHITE FLAG)
// ==========================================
const WHATSAPP_CONFIG = {
  number: "5511913247472",
  defaultMessage: "Olá! Gostaria de agendar uma experiência na Clínica Athenas.",
};

interface WhatsAppButtonProps {
  buttonLocation: string; // Ex: 'hero_section', 'servico_athenas', 'footer'
  label?: string;
  className?: string;
}

// ==========================================
// LÓGICA INTERNA: RASTREAMENTO SILENCIOSO
// ==========================================
function ButtonLogic({ buttonLocation, label = "Agendar WhatsApp", className }: WhatsAppButtonProps) {
  const searchParams = useSearchParams();

  const handleWhatsAppClick = () => {
    // 1. Extração silenciosa das UTMs (Se existirem na URL)
    const source = searchParams.get("utm_source") || "organico";
    const campaign = searchParams.get("utm_campaign") || "none";

    // 2. Disparo do Evento para o GTM (Usando a tipagem nativa do pacote do Next)
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "whatsapp_click",
        button_location: buttonLocation,
        utm_source: source,
        utm_campaign: campaign,
      });
    }

    // 3. Montagem limpa e humana da mensagem de destino
    const encodedMessage = encodeURIComponent(WHATSAPP_CONFIG.defaultMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button 
      onClick={handleWhatsAppClick} 
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 outline-none focus:ring-2 focus:ring-orange-500/50 ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {label}
    </button>
  );
}

// ==========================================
// COMPONENTE EXPORTADO COM PROTEÇÃO SUSPENSE
// ==========================================
export function WhatsAppButton(props: WhatsAppButtonProps) {
  return (
    <Suspense 
      fallback={
        <button className={`inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide ${props.className}`}>
          <MessageCircle className="w-5 h-5" />
          {props.label || "Agendar WhatsApp"}
        </button>
      }
    >
      <ButtonLogic {...props} />
    </Suspense>
  );
}