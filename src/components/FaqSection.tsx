import React, { useState } from 'react';
import { Language } from '../types';
import { GENERAL_FAQS } from '../data/content';
import { ChevronDown } from 'lucide-react';

interface FaqSectionProps {
  lang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const [openIds, setOpenIds] = useState<string[]>(['tipus-segellats', 'retirada-antiga']);

  const toggleAccordion = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section className="py-20 bg-[#F8F7F4] border-b border-[#E7E2D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold tracking-wider text-[#8C3A18] uppercase mb-2">
            {lang === 'ca' ? 'Dubtes habituals' : 'Dudas habituales'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917] mb-3">
            {lang === 'ca' ? 'Preguntes freqüents' : 'Preguntas frecuentes'}
          </h2>
          <p className="text-sm sm:text-base text-[#57534E]">
            {lang === 'ca'
              ? 'Respostes clares i prudents sobre la nostra feina, materials i funcionament a Mallorca.'
              : 'Respuestas claras y prudentes sobre nuestro trabajo, materiales y funcionamiento en Mallorca.'}
          </p>
        </div>

        <div className="space-y-3">
          {GENERAL_FAQS.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-[#FBFBF9] rounded-lg border border-[#E7E2D8] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#1C1917]">
                    {faq.question[lang]}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#78716C] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#8C3A18]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#57534E] leading-relaxed border-t border-[#F0ECE1] animate-in fade-in duration-150">
                    {faq.answer[lang]}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
