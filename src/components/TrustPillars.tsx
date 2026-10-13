import React from 'react';
import { Language } from '../types';
import { BUSINESS_CONFIG } from '../data/content';
import { Award, Layers, ShieldCheck, Clock } from 'lucide-react';

interface TrustPillarsProps {
  lang: Language;
}

export const TrustPillars: React.FC<TrustPillarsProps> = ({ lang }) => {
  const pillars = [
    {
      icon: Award,
      title: {
        ca: `Més de ${BUSINESS_CONFIG.experienceYears} anys d’experiència`,
        es: `Más de ${BUSINESS_CONFIG.experienceYears} años de experiencia`,
      },
      description: {
        ca: 'Domini acumulat en l’aplicació i renovació de juntes tècniques en espais residencials, piscines i embarcacions a Mallorca.',
        es: 'Dominio acumulado en la aplicación y renovación de juntas técnicas en espacios residenciales, piscinas y embarcaciones en Mallorca.',
      },
    },
    {
      icon: Layers,
      title: {
        ca: 'Especialització exclusiva',
        es: 'Especialización exclusiva',
      },
      description: {
        ca: 'No feim obres generals. Concentram el nostre ofici exclusivament en l’art de segellar amb rectitud, netedat i perfecció visual.',
        es: 'No realizamos obras generales. Concentramos nuestro oficio exclusivamente en el arte de sellar con rectitud, limpieza y perfección visual.',
      },
    },
    {
      icon: ShieldCheck,
      title: {
        ca: 'Materials de primera gamma',
        es: 'Materiales de primera gama',
      },
      description: {
        ca: 'Selecció estricta de segelladors neutres sanitaris, polímers d’alta elasticitat, màstics per a intempèrie i compostos de grau marí.',
        es: 'Selección rigurosa de selladores neutros sanitarios, polímeros de alta elasticidad, masillas para intemperie y compuestos de grado marino.',
      },
    },
    {
      icon: Clock,
      title: {
        ca: 'Puntualitat i tracte personal',
        es: 'Puntualidad y trato personal',
      },
      description: {
        ca: 'Coordinació directa amb particulars, fusters, instal·ladors i caps d’obra. Compliment escrupolós dels terminis acordats i feina neta.',
        es: 'Coordinación directa con particulares, carpinteros, instaladores y jefes de obra. Cumplimiento riguroso de los plazos acordados y trabajo limpio.',
      },
    },
  ];

  return (
    <section className="py-16 bg-[#F8F7F4] border-b border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="flex flex-col p-6 bg-[#FBFBF9] rounded-lg border border-[#E7E2D8] hover:border-[#DDD8CE] transition-all"
              >
                <div className="w-10 h-10 rounded bg-[#EFECE6] flex items-center justify-center text-[#8C3A18] mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-[#1C1917] mb-2">
                  {pillar.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {pillar.description[lang]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
