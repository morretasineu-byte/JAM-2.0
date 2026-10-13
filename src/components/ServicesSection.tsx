import React, { useState } from 'react';
import { Language, ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/content';
import { ArrowUpRight, Sparkles, RefreshCw, Briefcase } from 'lucide-react';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  lang: Language;
  onSelectServiceForQuote: (serviceTitle: string) => void;
  selectedFilter?: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  onSelectServiceForQuote,
  selectedFilter,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [filter, setFilter] = useState<string>(selectedFilter || 'all');

  // Sync external filter if changed
  React.useEffect(() => {
    if (selectedFilter) {
      setFilter(selectedFilter);
    }
  }, [selectedFilter]);

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (filter === 'all') return true;
    if (filter === 'interior') return s.id === 'banys' || s.id === 'cuines';
    if (filter === 'fusteria') return s.id === 'finestres-fusteries' || s.id === 'tarimes-flotants' || s.id === 'vidres';
    if (filter === 'exterior') return s.id === 'facanes';
    if (filter === 'piscines') return s.id === 'piscines';
    if (filter === 'nautica') return s.id === 'tarimes-embarcacions';
    if (filter === 'renovacio') return s.id === 'renovacio' || s.id === 'reformes-professionals';
    return true;
  });

  return (
    <section id="serveis" className="py-20 bg-[#FBFBF9] border-b border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-[#8C3A18] uppercase mb-2">
            {lang === 'ca' ? 'Especialitats tècniques' : 'Especialidades técnicas'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917] mb-4">
            {lang === 'ca'
              ? 'Segellats d’alta precisió per a cada espai'
              : 'Sellados de alta precisión para cada espacio'}
          </h2>
          <p className="text-base text-[#57534E] leading-relaxed">
            {lang === 'ca'
              ? 'Especialistes en espais residencials, piscines i embarcacions a Mallorca. Treballam amb el sistema químic i segellador idoni per a cada suport.'
              : 'Especialistas en espacios residenciales, piscinas y embarcaciones en Mallorca. Trabajamos con el sistema químico y sellador idóneo para cada soporte.'}
          </p>

          {/* Interactive filter segmented control */}
          <div className="mt-8 flex flex-wrap items-center gap-1.5 p-1 bg-[#EFECE6] rounded-lg border border-[#DDD8CE] max-w-fit">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-white text-[#1C1917] font-semibold shadow-xs'
                  : 'text-[#78716C] hover:text-[#1C1917]'
              }`}
            >
              {lang === 'ca' ? 'Tots els serveis' : 'Todos los servicios'}
            </button>
            <button
              onClick={() => setFilter('interior')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'interior'
                  ? 'bg-white text-[#1C1917] font-semibold shadow-xs'
                  : 'text-[#78716C] hover:text-[#1C1917]'
              }`}
            >
              {lang === 'ca' ? 'Banys i cuines' : 'Baños y cocinas'}
            </button>
            <button
              onClick={() => setFilter('fusteria')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'fusteria'
                  ? 'bg-white text-[#1C1917] font-semibold shadow-xs'
                  : 'text-[#78716C] hover:text-[#1C1917]'
              }`}
            >
              {lang === 'ca' ? 'Fusteries i vidre' : 'Carpinterías y vidrio'}
            </button>
            <button
              onClick={() => setFilter('exterior')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'exterior'
                  ? 'bg-white text-[#1C1917] font-semibold shadow-xs'
                  : 'text-[#78716C] hover:text-[#1C1917]'
              }`}
            >
              {lang === 'ca' ? 'Façanes' : 'Fachadas'}
            </button>
            <button
              onClick={() => setFilter('piscines')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'piscines'
                  ? 'bg-white text-[#1C1917] font-semibold shadow-xs'
                  : 'text-[#78716C] hover:text-[#1C1917]'
              }`}
            >
              {lang === 'ca' ? 'Piscines' : 'Piscinas'}
            </button>
            <button
              onClick={() => setFilter('nautica')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'nautica'
                  ? 'bg-white text-[#1C1917] font-semibold shadow-xs'
                  : 'text-[#78716C] hover:text-[#1C1917]'
              }`}
            >
              {lang === 'ca' ? 'Tarimes d’embarcacions' : 'Tarimas de embarcaciones'}
            </button>
            <button
              onClick={() => setFilter('renovacio')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'renovacio'
                  ? 'bg-white text-[#1C1917] font-semibold shadow-xs'
                  : 'text-[#78716C] hover:text-[#1C1917]'
              }`}
            >
              {lang === 'ca' ? 'Renovació i reformes' : 'Renovación y reformas'}
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const isRenewal = service.id === 'renovacio';
            const isContractors = service.id === 'reformes-professionals';
            const isPool = service.id === 'piscines';
            const isNautical = service.id === 'tarimes-embarcacions';

            return (
              <div
                key={service.id}
                className={`group flex flex-col justify-between bg-white rounded-lg border transition-all duration-200 overflow-hidden ${
                  isPool
                    ? 'border-[#8C3A18]/40 hover:border-[#8C3A18] shadow-xs'
                    : isNautical
                    ? 'border-stone-300 hover:border-[#1C1917] shadow-xs'
                    : isRenewal
                    ? 'border-[#8C3A18]/30 hover:border-[#8C3A18] shadow-sm'
                    : 'border-[#E7E2D8] hover:border-[#DDD8CE]'
                }`}
              >
                {/* Service Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EFECE6]">
                  <img
                    src={service.image}
                    alt={service.imageAlt[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                  {/* Clean unboxed indicator */}
                  <div className="absolute top-3 left-3 text-[11px] font-medium text-white/90 bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded">
                    {isPool ? (
                      <span>06. PISCINES</span>
                    ) : isNautical ? (
                      <span>07. NÀUTICA</span>
                    ) : isRenewal ? (
                      <span className="flex items-center gap-1">
                        <RefreshCw className="w-3 h-3" />
                        <span>{lang === 'ca' ? 'Sanejament integral' : 'Saneamiento integral'}</span>
                      </span>
                    ) : isContractors ? (
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3 h-3" />
                        <span>{lang === 'ca' ? 'B2B & Obres' : 'B2B & Obras'}</span>
                      </span>
                    ) : (
                      <span>{`0${index + 1}. ${service.id.toUpperCase()}`}</span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#1C1917] mb-2 group-hover:text-[#8C3A18] transition-colors">
                      {service.title[lang]}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-4">
                      {service.shortDescription[lang]}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F0ECE1] flex items-center justify-between">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-semibold text-[#1C1917] hover:text-[#8C3A18] inline-flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>{lang === 'ca' ? 'Saber-ne més' : 'Ver detalles'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onSelectServiceForQuote(service.title[lang])}
                      className="text-xs text-[#78716C] hover:text-[#1C1917] transition-colors cursor-pointer"
                    >
                      {lang === 'ca' ? 'Demanar valoració' : 'Pedir valoración'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explicit Renewal Feature Spotlight Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-lg bg-[#F5F2EB] border border-[#DDD8CE] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white border border-[#DDD8CE] flex items-center justify-center text-[#8C3A18] shrink-0 mt-1">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#1C1917]">
                {lang === 'ca'
                  ? 'Teniu juntes de silicona enfosquides o que s’estan desenganxant?'
                  : '¿Tiene juntas de silicona oscurecidas o que se están despegando?'}
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] mt-1 max-w-2xl">
                {lang === 'ca'
                  ? 'Retirem el 100% del material antic, desinfectam contra la floridura i aplicam un nou segellador d’alta adherència. Sense obres ni destrosses.'
                  : 'Retiramos el 100% del material antiguo, desinfectamos contra el moho y aplicamos un nuevo sellador de alta adherencia. Sin obras ni molestias.'}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              const renewalService = SERVICES_DATA.find((s) => s.id === 'renovacio');
              if (renewalService) setSelectedService(renewalService);
            }}
            className="px-5 py-2.5 text-xs font-semibold text-[#1C1917] bg-white hover:bg-[#FBFBF9] border border-[#DDD8CE] rounded transition-colors whitespace-nowrap cursor-pointer shadow-xs"
          >
            {lang === 'ca' ? 'Com renovam les juntes' : 'Cómo renovamos las juntas'}
          </button>
        </div>
      </div>

      {/* Detail Modal Component */}
      <ServiceDetailModal
        service={selectedService}
        lang={lang}
        onClose={() => setSelectedService(null)}
        onRequestQuote={onSelectServiceForQuote}
      />
    </section>
  );
};
