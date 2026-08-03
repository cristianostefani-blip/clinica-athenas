"use client";

import { Sparkles } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-stone-950 border-t border-amber-900/20 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* Logo e Branding */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-950/30 border border-amber-800/30">
              <Sparkles className="w-4 h-4 text-amber-500" />
            </div>
            <span className="text-2xl font-serif text-orange-50 tracking-wider">
              Athenas
            </span>
          </div>

          {/* Links Essenciais */}
          <div className="flex gap-6 text-sm text-stone-400 font-light">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Termos</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Contato</a>
          </div>
        </div>

        <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500 font-light">
          <p>
            © {currentYear} Clínica Athenas. Um oásis urbano de alto padrão. Todos os direitos reservados.
          </p>
          <p>
            Atendimento exclusivo para maiores de 18 anos.
          </p>
        </div>

      </div>
    </footer>
  );
}