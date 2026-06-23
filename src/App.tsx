import React from 'react';
import { MapPin, Star, Wrench, ShieldCheck, Clock, ArrowRight } from 'lucide-react';

export default function App() {
  const whatsappNumber = "5548991245878";
  const whatsappMessage = encodeURIComponent("Olá! Vim pelo site e gostaria de solicitar um orçamento/atendimento.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 font-sans text-slate-900">
      
      {/* Main Card */}
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        
        {/* Header/Cover Area */}
        <div className="bg-blue-600 px-6 py-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-4 text-blue-600">
              <Wrench size={32} strokeWidth={2.5} />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Versailles Refrigeração
            </h1>
            <p className="text-blue-100 mt-1 font-medium text-sm">
              Assistência Técnica Especializada
            </p>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8 flex flex-col items-center text-center">
          
          {/* Google Reviews Badge */}
          <div className="flex items-center space-x-1 mb-6 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
            <span className="font-bold text-slate-800 text-sm mr-1">4,6</span>
            <div className="flex text-yellow-400">
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" className="opacity-50" />
            </div>
            <span className="text-slate-500 text-xs ml-1 font-medium">(82 avaliações no Google)</span>
          </div>

          <p className="text-slate-600 mb-8 text-sm leading-relaxed">
            Precisa de conserto para seus eletrodomésticos? Fale diretamente com nossa equipe técnica de forma rápida e segura.
          </p>

          {/* WhatsApp Button */}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-[#25D366] font-sans rounded-xl hover:bg-[#22bf5b] hover:shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
          >
            {/* WhatsApp SVG Icon */}
            <svg 
              className="w-6 h-6 mr-2" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            <span>Iniciar Conversa no WhatsApp</span>
            <ArrowRight size={18} className="ml-2 opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 absolute right-6" />
          </a>
          
          <p className="mt-4 text-xs text-slate-400 font-medium tracking-wide">
            RESPOSTA RÁPIDA GARANTIDA
          </p>
        </div>

        {/* Info Footer */}
        <div className="bg-slate-50 border-t border-slate-100 p-6 flex flex-col space-y-3">
          <div className="flex items-center text-slate-600 text-sm">
            <MapPin size={16} className="text-blue-500 mr-3 flex-shrink-0" />
            <span>São José, Santa Catarina</span>
          </div>
          <div className="flex items-center text-slate-600 text-sm">
            <Clock size={16} className="text-blue-500 mr-3 flex-shrink-0" />
            <span>Atendimento Rápido e Especializado</span>
          </div>
          <div className="flex items-center text-slate-600 text-sm">
            <ShieldCheck size={16} className="text-blue-500 mr-3 flex-shrink-0" />
            <span>Garantia de Qualidade</span>
          </div>
        </div>
      </div>

      {/* Page Footer */}
      <footer className="mt-8 text-center text-slate-400 text-xs">
        <p>© {new Date().getFullYear()} Versailles Refrigeração.</p>
        <p className="mt-1">Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
