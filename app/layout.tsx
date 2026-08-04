import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Configuração de SEO e Google Search Console
export const metadata: Metadata = {
  title: "Athenas Massagens | Permita-se vivenciar protocolos exclusivos",
  description: "Uma experiência sensorial de alto padrão, projetada para desconectar sua mente e revitalizar seu corpo.",
  verification: {
    google: "SUA_CHAVE_DE_VERIFICACAO_DO_SEARCH_CONSOLE_AQUI", // Ex: "1a2b3c4d5e6f7g8h9i0j"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      {/* O GTM pode ficar aqui, o Next.js injeta ele no <head> automaticamente */}
      <GoogleTagManager gtmId="GTM-M2HHB9BV" />
      
      {/* Injetamos as variáveis de fonte Geist para funcionarem no Tailwind */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0806]`}>
        
        {/* O restante do site */}
        {children}
        
      </body>
    </html>
  );
}