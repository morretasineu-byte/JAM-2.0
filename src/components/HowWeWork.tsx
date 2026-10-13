import React from 'react';
import { Language } from '../types';

interface HowWeWorkProps {
  lang: Language;
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({ lang }) => {
  const steps = [
    {
      step: '01',
      title: {
        ca: 'Escoltam què necessitau',
        es: 'Escuchamos lo que necesita',
      },
      desc: {
        ca: 'Ens explicau el tipus d’espai o suport (habitatge, piscina o embarcació), si es tracta d’obra nova o renovació, i quins problemes voleu resoldre.',
        es: 'Nos describe el tipo de espacio o soporte (vivienda, piscina o embarcación), si se trata de obra nueva o renovación, y qué problemas desea solucionar.',
      },
    },
    {
      step: '02',
      title: {
        ca: 'Valoram el tipus de treball i superfícies',
        es: 'Valoramos el tipo de trabajo y superficies',
      },
      desc: {
        ca: 'Analitzam els materials de suport per triar la formulació exacta. Molts treballs es poden estimar inicialment per foto; altres requereixen revisió sobre terreny.',
        es: 'Analizamos los materiales para elegir la formulación exacta. Muchos casos pueden estimarse inicialmente con fotos; otros requieren revisión sobre el terreno.',
      },
    },
    {
      step: '03',
      title: {
        ca: 'Preparam les juntes i executam el segellat',
        es: 'Preparamos las juntas y ejecutamos el sellado',
      },
      desc: {
        ca: 'Retiram el material antic si és necessari, netejam en profunditat i aplicam el segellador amb precisió mil·limètrica i traç continu.',
        es: 'Retiramos el material antiguo si es necesario, limpiamos a fondo y aplicamos el sellador con precisión milimétrica y trazo continuo.',
      },
    },
    {
      step: '04',
      title: {
        ca: 'Revisam l’acabat final',
        es: 'Revisamos el acabado final',
      },
      desc: {
        ca: 'Comprovam la regularitat del cordó, l’estanqueïtat i deixam la zona de treball completament neta i lliure de qualsevol residu.',
        es: 'Comprobamos la regularidad del cordón, la estanqueidad y dejamos la zona de trabajo completamente limpia y libre de cualquier residuo.',
      },
    },
  ];

  return (
    <section className="py-20 bg-[#FBFBF9] border-b border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-[#8C3A18] uppercase mb-2">
            {lang === 'ca' ? 'Metodologia de treball' : 'Metodología de trabajo'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917] mb-4">
            {lang === 'ca' ? 'Com treballam, pas a pas' : 'Cómo trabajamos, paso a paso'}
          </h2>
          <p className="text-base text-[#57534E] leading-relaxed">
            {lang === 'ca'
              ? 'Un procés clar i transparent, des de la primera consulta fins al darrer detall d’inspecció.'
              : 'Un proceso claro y transparente, desde la primera consulta hasta el último detalle de inspección.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative p-6 bg-[#F8F7F4] rounded-lg border border-[#E7E2D8] flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-bold text-[#8C3A18]/70 tabular-nums block mb-4">
                  {item.step}
                </span>
                <h3 className="text-base font-bold text-[#1C1917] mb-3">
                  {item.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {item.desc[lang]}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E7E2D8] text-[11px] text-[#78716C]">
                {idx === 0 && (lang === 'ca' ? 'Contacte directe' : 'Contacto directo')}
                {idx === 1 && (lang === 'ca' ? 'Assessorament tècnic honest' : 'Asesoramiento técnico honesto')}
                {idx === 2 && (lang === 'ca' ? 'Execució meticulosa' : 'Ejecución meticulosa')}
                {idx === 3 && (lang === 'ca' ? 'Control de qualitat' : 'Control de calidad')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
