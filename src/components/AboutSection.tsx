import React from 'react';
import { Language, ViewState } from '../types';
import { BUSINESS_CONFIG } from '../data/content';
import { Logo } from './Logo';
import heroImg from '../assets/images/hero_sealant_joint_1791291619034.jpg';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
  onNavigate: (view: ViewState, sectionId?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang, onNavigate }) => {
  return (
    <section id="quisom" className="py-20 bg-[#FBFBF9] border-b border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Column 1: Story & Rigorous Craftsmanship (7 cols) */}
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold tracking-wider text-[#8C3A18] uppercase mb-2">
              {lang === 'ca' ? 'Sobre SELLATS JAM' : 'Sobre SELLATS JAM'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917] mb-6 text-balance">
              {lang === 'ca'
                ? 'L’ofici de la precisió, l’experiència i el respecte pel detall.'
                : 'El oficio de la precisión, la experiencia y el respeto por el detalle.'}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#57534E] leading-relaxed mb-8">
              <p>
                {lang === 'ca'
                  ? 'A SELLATS JAM entenem que les juntes i segellats no són un tràmit secundari de l’obra, sinó el remat que determina si un espai llueix impecable o si patirà problemes d’humitat i floridura en el futur.'
                  : 'En SELLATS JAM entendemos que las juntas y sellados no son un trámite secundario de la obra, sino el remate que determina si un espacio luce impecable o si sufrirá problemas de humedad y moho en el futuro.'}
              </p>
              <p>
                {lang === 'ca'
                  ? 'El professional responsable dels treballs compta amb més de 20 anys d’experiència en l’execució de juntes tècniques en espais residencials, piscines i embarcacions. Aquesta trajectòria permet reconèixer immediatament com reaccionarà cada superfície —sigui fusta de teca a bord, pedra de coronament de piscina, marbre, vidre o metall— i aplicar exactament el producte químic i la pressió de perfilat que requereix.'
                  : 'El profesional responsable de los trabajos cuenta con más de 20 años de experiencia en la ejecución de juntas técnicas en espacios residenciales, piscinas y embarcaciones. Esta trayectoria permite reconocer al instante cómo reaccionará cada superficie —sea madera de teca a bordo, piedra de coronación de piscina, mármol, vidrio o metal— y aplicar exactamente el producto y la presión de perfilado que requiere.'}
              </p>
              <p>
                {lang === 'ca'
                  ? 'No som una empresa generalista ni subcontractam a tercers: garantim tracte directe, puntualitat rigorosa i l’atenció meticulosa que mereixen els vostres espais o els projectes dels vostres clients.'
                  : 'No somos una empresa generalista ni subcontratamos a terceros: garantizamos trato directo, puntualidad rigurosa y la atención meticulosa que merecen sus espacios o los proyectos de sus clientes.'}
              </p>
            </div>

            {/* Checklist of honest commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2 text-xs text-[#1C1917]">
                <CheckCircle2 className="w-4 h-4 text-[#8C3A18] shrink-0" />
                <span>
                  {lang === 'ca' ? '+20 anys d’experiència en l’ofici' : '+20 años de experiencia en el oficio'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#1C1917]">
                <CheckCircle2 className="w-4 h-4 text-[#8C3A18] shrink-0" />
                <span>
                  {lang === 'ca' ? 'Retirada neta de silicona antiga' : 'Retirada limpia de silicona antigua'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#1C1917]">
                <CheckCircle2 className="w-4 h-4 text-[#8C3A18] shrink-0" />
                <span>
                  {lang === 'ca' ? 'Materials professionals seleccionats' : 'Materiales profesionales seleccionados'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#1C1917]">
                <CheckCircle2 className="w-4 h-4 text-[#8C3A18] shrink-0" />
                <span>
                  {lang === 'ca' ? 'Cobertura a tota l’illa de Mallorca' : 'Cobertura en toda la isla de Mallorca'}
                </span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('contact', 'contacte')}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#1C1917] hover:bg-[#2E2A27] rounded transition-colors cursor-pointer shadow-xs"
            >
              <span>{lang === 'ca' ? 'Sol·licitau assessorament' : 'Solicite asesoramiento'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Column 2: Visual Anchor (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-lg bg-[#F8F7F4] border border-[#DDD8CE]">
              <div className="relative rounded overflow-hidden mb-6 aspect-[4/3] bg-[#EFECE6] border border-[#E7E2D8]">
                <img
                  src={heroImg}
                  alt={
                    lang === 'ca'
                      ? 'Treball artesanal de segellat professional a Mallorca'
                      : 'Trabajo artesanal de sellado profesional en Mallorca'
                  }
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-4">
                <div className="border-b border-[#E7E2D8] pb-4">
                  <Logo variant="header" className="h-12 mb-3" descriptorLang={lang} />
                  <span className="text-xs uppercase tracking-wider text-[#78716C] block">
                    {lang === 'ca' ? 'Principi clau' : 'Principio clave'}
                  </span>
                  <p className="text-base font-bold text-[#1C1917] mt-1">
                    {BUSINESS_CONFIG.tagline[lang]}
                  </p>
                </div>
                <div className="text-xs text-[#57534E] space-y-1">
                  <p>
                    <strong>{lang === 'ca' ? 'Àmbit d’actuació:' : 'Ámbito de actuación:'}</strong>{' '}
                    Mallorca (Pla de Mallorca, Raiguer, Llevant, Palma i municipis de l’illa).
                  </p>
                  <p>
                    <strong>{lang === 'ca' ? 'Especialitat:' : 'Especialidad:'}</strong>{' '}
                    {lang === 'ca'
                      ? 'Juntes i segellats d’alta precisió per a espais residencials (incloent tarimes flotants i parquet), piscines i tarimes d’embarcacions a Mallorca.'
                      : 'Juntas y sellados de alta precisión para espacios residenciales (incluyendo tarimas flotantes y parquet), piscinas y tarimas de embarcaciones en Mallorca.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
