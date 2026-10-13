import React from 'react';
import { Language, ViewState } from '../types';
import { BUSINESS_CONFIG } from '../data/content';
import heroImg from '../assets/images/hero_sealant_joint_1791291619034.jpg';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onNavigate: (view: ViewState, sectionId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onNavigate }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 bg-[#FBFBF9] border-b border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Column 1: Copy & Value Proposition (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Location anchor & professional descriptor without pill badges */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] mb-4 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-[#8C3A18]" />
              <span>
                {lang === 'ca'
                  ? 'Especialistes en juntes i segellats · Mallorca'
                  : 'Especialistas en juntas y sellados · Mallorca'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917] leading-[1.08] mb-6 max-w-2xl text-balance">
              {lang === 'ca'
                ? 'El detall que marca la diferència.'
                : 'El detalle que marca la diferencia.'}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#57534E] leading-relaxed mb-8 max-w-xl">
              {lang === 'ca'
                ? 'Som especialistes en juntes i segellats professionals per a espais residencials, piscines i embarcacions. Treballam amb precisió, materials de qualitat i cura per cada acabat a Mallorca.'
                : 'Somos especialistas en juntas y sellados profesionales para espacios residenciales, piscinas y embarcaciones. Trabajamos con precisión, materiales de calidad y cuidado por cada acabado en Mallorca.'}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10">
              <button
                onClick={() => onNavigate('contact', 'contacte')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#1C1917] hover:bg-[#2E2A27] rounded transition-all shadow-sm cursor-pointer whitespace-nowrap"
              >
                <span>{lang === 'ca' ? 'Contactau amb nosaltres' : 'Contacte con nosotros'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('services', 'serveis')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#1C1917] bg-[#EFECE6] hover:bg-[#E5E0D5] border border-[#DDD8CE] rounded transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>{lang === 'ca' ? 'Descobriu els serveis' : 'Descubra los servicios'}</span>
              </button>
            </div>

            {/* Key honest proof elements in clean unboxed typography */}
            <div className="pt-6 border-t border-[#E7E2D8] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#57534E]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8C3A18] shrink-0" />
                <span>
                  <strong>+{BUSINESS_CONFIG.experienceYears} anys d’experiència</strong>{' '}
                  {lang === 'ca' ? 'professional en l’ofici' : 'profesional en el oficio'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8C3A18] shrink-0" />
                <span>
                  {lang === 'ca'
                    ? 'Pla, Raiguer, Llevant i tota Mallorca'
                    : 'Pla, Raiguer, Llevant y toda Mallorca'}
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Architectural Precision Visual Carrier (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-[#E7E2D8] bg-[#EFECE6] shadow-sm">
              <img
                src={heroImg}
                alt={
                  lang === 'ca'
                    ? 'Detall de precisió de junta de segellat professional entre pedra i fusta a Mallorca'
                    : 'Detalle de precisión de junta de sellado profesional entre piedra y madera en Mallorca'
                }
                className="w-full h-auto aspect-[4/3] lg:aspect-[1/1] object-cover hover:scale-[1.02] transition-transform duration-700"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 text-white p-3 bg-black/40 backdrop-blur-md rounded border border-white/10">
                <p className="text-xs font-semibold tracking-wide uppercase text-[#E7E2D8]">
                  {lang === 'ca' ? 'Precisió mil·limètrica' : 'Precisión milimétrica'}
                </p>
                <p className="text-xs text-stone-200 mt-0.5">
                  {lang === 'ca'
                    ? 'Transicions netes entre materials nobles, ceràmica i fusteria.'
                    : 'Transiciones limpias entre materiales nobles, cerámica y carpintería.'}
                </p>
              </div>
            </div>

            {/* Swappable photography architecture note */}
            <div className="mt-2 text-right">
              <span className="text-[11px] text-[#A8A29E] tracking-tight">
                {lang === 'ca' ? 'Fotografia d’acabat de referència' : 'Fotografía de acabado de referencia'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
