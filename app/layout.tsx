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

// ==========================================
// A FÁBRICA: METADADOS, SEO E FAVICONS
// ==========================================
export const metadata: Metadata = {
  title: "Clínica Athenas | Permita-se vivenciar protocolos exclusivos",
  description: "Uma experiência sensorial de alto padrão, projetada para desconectar sua mente e revitalizar seu corpo.",
  verification: {
    google: "SUA_CHAVE_DE_VERIFICACAO_DO_SEARCH_CONSOLE_AQUI", // Ex: "1a2b3c4d5e6f7g8h9i0j"
  },
  
  // INJEÇÃO DOS ESTÁTICOS (Favicons e PWA)
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    // O apple-icon é injetado automaticamente pelo Next.js (App Router)
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      {/* O GTM injetado no Head automaticamente */}
      <GoogleTagManager gtmId="GTM-M2HHB9BV" />
      
      {/* 
        Injetamos as variáveis de fonte Geist para funcionarem no Tailwind.
        Fundo atualizado para a base Terracota Dark (#160B08)
      */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#160B08]`}>
        
        {children}
        
      </body>
    </html>
  );
}