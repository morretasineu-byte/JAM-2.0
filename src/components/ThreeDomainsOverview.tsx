import React from 'react';
import { Language } from '../types';
import { THREE_DOMAINS } from '../data/content';
import { Home, Waves, Anchor, ArrowRight } from 'lucide-react';

interface ThreeDomainsOverviewProps {
  lang: Language;
  onSelectDomain: (filterKey: string) => void;
}

export const ThreeDomainsOverview: React.FC<ThreeDomainsOverviewProps> = ({
  lang,
  onSelectDomain,
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'residencial':
        return Home;
      case 'piscines':
        return Waves;
      case 'nautica':
        return Anchor;
      default:
        return Home;
    }
  };

  return (
    <section className="py-12 bg-[#FBFBF9] border-b border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold tracking-wider text-[#8C3A18] uppercase mb-1">
              {lang === 'ca' ? 'Àmbits d’especialització' : 'Ámbitos de especialización'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917]">
              {lang === 'ca' ? 'Residencial · Piscines · Nàutica' : 'Residencial · Piscinas · Náutica'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#78716C] max-w-md">
            {lang === 'ca'
              ? 'L’art del segellat tècnic i la precisió artesanal aplicats amb rigor a cada entorn a Mallorca.'
              : 'El arte del sellado técnico y la precisión artesanal aplicados con rigor a cada entorno en Mallorca.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {THREE_DOMAINS.map((domain) => {
            const Icon = getIcon(domain.id);
            const isPool = domain.id === 'piscines';
            const isNautical = domain.id === 'nautica';

            return (
              <div
                key={domain.id}
                onClick={() => onSelectDomain(domain.serviceFilter)}
                className={`group p-6 rounded-lg border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isPool
                    ? 'bg-[#F9F7F2] border-[#8C3A18]/30 hover:border-[#8C3A18] hover:shadow-xs'
                    : isNautical
                    ? 'bg-[#F8F7F4] border-[#DDD8CE] hover:border-[#1C1917] hover:shadow-xs'
                    : 'bg-[#F8F7F4] border-[#E7E2D8] hover:border-[#DDD8CE]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded bg-[#EFECE6] flex items-center justify-center text-[#8C3A18]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#78716C] group-hover:text-[#8C3A18] transition-colors">
                      {domain.title[lang]}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#1C1917] mb-2 leading-snug">
                    {domain.headline[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                    {domain.description[lang]}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E7E2D8] flex items-center justify-between text-xs font-semibold text-[#1C1917] group-hover:text-[#8C3A18] transition-colors">
                  <span>{lang === 'ca' ? 'Veure especialitats' : 'Ver especialidades'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
