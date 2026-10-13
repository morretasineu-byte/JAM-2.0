import React from 'react';
import { Language, ViewState } from '../types';
import { BUSINESS_CONFIG } from '../data/content';
import { Hammer, Eye, Wrench, Compass, Waves, Anchor, ArrowRight, MessageSquare, CheckCircle } from 'lucide-react';

interface ProfessionalsSectionProps {
  lang: Language;
  onNavigate: (view: ViewState, sectionId?: string) => void;
  onSelectProfessionalQuote: (role: string) => void;
}

export const ProfessionalsSection: React.FC<ProfessionalsSectionProps> = ({
  lang,
  onNavigate,
  onSelectProfessionalQuote,
}) => {
  const professionalCategories = [
    {
      icon: Hammer,
      title: {
        ca: 'Fusters i empreses de fusteria',
        es: 'Carpinteros y empresas de carpintería',
      },
      desc: {
        ca: 'Segellat de finestres, marcs, portes, tarimes flotants i parquet, amb acabats fins i elasticitat permanent.',
        es: 'Sellado de ventanas, cercos, puertas, tarimas flotantes y parquet, con acabados finos y elasticidad permanente.',
      },
      roleKey: 'Fusteria',
    },
    {
      icon: Eye,
      title: {
        ca: 'Vidriers i instal·ladors de vidre',
        es: 'Vidrieros e instaladores de vidrio',
      },
      desc: {
        ca: 'Juntes transparents i estètiques en mampares de bany, baranes i divisòries fixes de vidre sense bombolles ni rebaves.',
        es: 'Juntas transparentes y estéticas en mamparas, barandillas y divisorias fijas de vidrio sin burbujas ni rebabas.',
      },
      roleKey: 'Vidreria',
    },
    {
      icon: Waves,
      title: {
        ca: 'Instal·ladors i manteniment de piscines',
        es: 'Instaladores y mantenimiento de piscinas',
      },
      desc: {
        ca: 'Segellat de coronaments de pedra, juntes perimetrals i renovació d’estanqueïtat amb segelladors resistents al clor i la salmorra.',
        es: 'Sellado de coronaciones de piedra, juntas perimetrales y renovación de estanqueidad con selladores resistentes al cloro y salinidad.',
      },
      roleKey: 'Piscines',
    },
    {
      icon: Anchor,
      title: {
        ca: 'Nàutica i manteniment d’embarcacions',
        es: 'Náutica y mantenimiento de embarcaciones',
      },
      desc: {
        ca: 'Segellat i renovació de juntes en tarimes de teca per a tallers nàutics, varadors i armadors que cerquen acabats impecables.',
        es: 'Sellado y renovación de juntas en tarimas de teca para talleres náuticos, varaderos y armadores que buscan acabados impecables.',
      },
      roleKey: 'Nàutica',
    },
    {
      icon: Wrench,
      title: {
        ca: 'Empreses de reformes i caps d’obra',
        es: 'Empresas de reformas y jefes de obra',
      },
      desc: {
        ca: 'Execució concentrada del segellat de banys, cuines i tancaments per lliurar l’obra amb un nivell d’acabat superior.',
        es: 'Ejecución concentrada del sellado de baños, cocinas y cerramientos para entregar la obra con acabado impecable.',
      },
      roleKey: 'Reformes',
    },
    {
      icon: Compass,
      title: {
        ca: 'Arquitectes i interioristes',
        es: 'Arquitectos e interioristas',
      },
      desc: {
        ca: 'Assessorament en colors, textures i compatibilitat química de segelladors sobre marbres, fusta natural i microciments.',
        es: 'Asesoramiento en tonos, texturas y compatibilidad química de selladores sobre mármoles, madera y microcemento.',
      },
      roleKey: 'Arquitectura',
    },
  ];

  return (
    <section id="professionals" className="py-20 bg-[#F4F1EA] border-b border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Value Proposition (5 cols) */}
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold tracking-wider text-[#8C3A18] uppercase mb-2">
              {lang === 'ca' ? 'Col·laboracions professionals' : 'Colaboraciones profesionales'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917] mb-6 text-balance">
              {lang === 'ca'
                ? 'Un especialista en segellats per als teus projectes.'
                : 'Un especialista en sellados para sus proyectos.'}
            </h2>
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed mb-6">
              {lang === 'ca'
                ? 'Col·laboram amb fusters, vidriers, empreses de reformes, instal·ladors de piscines i professionals del sector nàutic que valoren la precisió, la puntualitat i uns acabats ben resolts. Contactau amb nosaltres per explicar-nos el vostre projecte i valorar possibles col·laboracions a Mallorca.'
                : 'Colaboramos con carpinteros, vidrieros, empresas de reformas, instaladores de piscinas y profesionales del sector náutico que valoran la precisión, la puntualidad y los acabados bien resueltos. Contacte con nosotros para explicarnos su proyecto y valorar posibles colaboraciones en Mallorca.'}
            </p>

            {/* Core B2B differentiators */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#44403C]">
                <CheckCircle className="w-4 h-4 text-[#8C3A18] shrink-0 mt-0.5" />
                <span>
                  {lang === 'ca'
                    ? 'Delegau el segellat final sense distreure el vostre personal d’altres tasques.'
                    : 'Delegue el sellado final sin distraer a su equipo de otras tareas clave.'}
                </span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#44403C]">
                <CheckCircle className="w-4 h-4 text-[#8C3A18] shrink-0 mt-0.5" />
                <span>
                  {lang === 'ca'
                    ? 'Puntualitat estricta i coordinació segons el vostre calendari d’entrega.'
                    : 'Puntualidad estricta y coordinación según su calendario de entrega.'}
                </span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#44403C]">
                <CheckCircle className="w-4 h-4 text-[#8C3A18] shrink-0 mt-0.5" />
                <span>
                  {lang === 'ca'
                    ? 'Més de 20 anys d’experiència professional garantint feina neta.'
                    : 'Más de 20 años de experiencia profesional garantizando trabajo limpio.'}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onNavigate('contact', 'contacte')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#1C1917] hover:bg-[#2E2A27] rounded transition-colors cursor-pointer shadow-xs whitespace-nowrap"
              >
                <span>{lang === 'ca' ? 'Parlem del teu projecte' : 'Hablemos de su proyecto'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  lang === 'ca'
                    ? 'Hola SELLATS JAM, som un professional de Mallorca (fusteria/vidreria/reformes/piscines/nàutica) i m’agradaria valorar una col·laboració.'
                    : 'Hola SELLATS JAM, soy profesional en Mallorca (carpintería/cristalería/reformas/piscinas/náutica) y me gustaría valorar una colaboración.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-medium text-[#1C1917] bg-white hover:bg-[#FBFBF9] border border-[#DDD8CE] rounded transition-colors whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 text-[#1C1917]" />
                <span>WhatsApp directe</span>
              </a>
            </div>
          </div>

          {/* Right Column: 6 Trade Categories Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {professionalCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 bg-[#FBFBF9] rounded-lg border border-[#E7E2D8] hover:border-[#DDD8CE] flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="w-10 h-10 rounded bg-[#EFECE6] text-[#8C3A18] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#1C1917] mb-2">
                      {cat.title[lang]}
                    </h3>
                    <p className="text-xs text-[#57534E] leading-relaxed mb-4">
                      {cat.desc[lang]}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      onSelectProfessionalQuote(cat.roleKey);
                      onNavigate('contact', 'contacte');
                    }}
                    className="text-xs font-semibold text-[#8C3A18] hover:text-[#702E13] inline-flex items-center gap-1 cursor-pointer pt-2 border-t border-[#F0ECE1]"
                  >
                    <span>{lang === 'ca' ? 'Consultar col·laboració' : 'Consultar colaboración'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
