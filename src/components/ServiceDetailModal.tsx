import React from 'react';
import { ServiceItem, Language } from '../types';
import { X, CheckCircle2, AlertTriangle, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/content';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  lang: Language;
  onClose: () => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  lang,
  onClose,
  onRequestQuote,
}) => {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
    >
      <div className="relative w-full max-w-3xl bg-[#FBFBF9] rounded-lg border border-[#E7E2D8] shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-[#E7E2D8] bg-[#F8F7F4]">
          <div>
            <span className="text-xs font-semibold tracking-wider text-[#8C3A18] uppercase">
              {lang === 'ca' ? 'Especialitat tècnica SELLATS JAM' : 'Especialidad técnica SELLATS JAM'}
            </span>
            <h2 id="modal-service-title" className="text-xl sm:text-2xl font-bold text-[#1C1917] mt-1">
              {service.title[lang]}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#78716C] hover:text-[#1C1917] hover:bg-[#EFECE6] rounded-full transition-colors cursor-pointer"
            aria-label="Tancar finestra"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-8">
          {/* Main Visual & Intro */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-5 rounded-lg overflow-hidden border border-[#E7E2D8] bg-[#EFECE6]">
              <img
                src={service.image}
                alt={service.imageAlt[lang]}
                className="w-full h-48 md:h-56 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-2 text-right bg-[#EFECE6] border-t border-[#E7E2D8]">
                <span className="text-[10px] text-[#78716C]">
                  {lang === 'ca' ? 'Fotografia de referència d’acabat' : 'Fotografía de referencia de acabado'}
                </span>
              </div>
            </div>

            <div className="md:col-span-7 flex flex-col justify-between">
              <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
                {service.fullDescription[lang]}
              </p>

              {/* Technical appraisal note */}
              <div className="mt-4 p-3.5 bg-[#F5F2EB] border-l-2 border-[#8C3A18] rounded-r text-xs text-[#57534E]">
                <span className="font-semibold text-[#1C1917] block mb-1">
                  {lang === 'ca' ? 'Nota tècnica de materials:' : 'Nota técnica de materiales:'}
                </span>
                {service.materialsNote[lang]}
              </div>
            </div>
          </div>

          {/* Section: Problems solved */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#1C1917] mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#8C3A18]" />
              <span>
                {lang === 'ca' ? 'Problemes habituals que resol' : 'Problemas habituales que resuelve'}
              </span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.problemsSolved[lang].map((problem, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded bg-[#F8F7F4] border border-[#E7E2D8] text-xs text-[#44403C]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C3A18] mt-1.5 shrink-0" />
                  <span>{problem}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Professional Process */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#1C1917] mb-3">
              {lang === 'ca' ? 'Procés d’execució professional' : 'Proceso de ejecución profesional'}
            </h3>
            <ol className="space-y-2.5">
              {service.processSteps[lang].map((step, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-3 bg-white rounded border border-[#E7E2D8] text-xs text-[#44403C]"
                >
                  <span className="font-bold text-[#8C3A18] tabular-nums shrink-0">
                    0{idx + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Section: Key benefits */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#1C1917] mb-3">
              {lang === 'ca' ? 'Beneficis d’una aplicació experta' : 'Beneficios de una aplicación experta'}
            </h3>
            <div className="space-y-2">
              {service.benefits[lang].map((benefit, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#44403C]">
                  <CheckCircle2 className="w-4 h-4 text-[#8C3A18] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service specific FAQs if present */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="pt-4 border-t border-[#E7E2D8]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#1C1917] mb-3">
                {lang === 'ca' ? 'Preguntes sobre aquest servei' : 'Preguntas sobre este servicio'}
              </h3>
              <div className="space-y-3">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="p-3.5 bg-[#F8F7F4] rounded border border-[#E7E2D8]">
                    <p className="text-xs font-semibold text-[#1C1917] mb-1">
                      {faq.q[lang]}
                    </p>
                    <p className="text-xs text-[#57534E] leading-relaxed">
                      {faq.a[lang]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Direct Actions */}
        <div className="p-6 bg-[#F8F7F4] border-t border-[#E7E2D8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#78716C] text-center sm:text-left">
            <span>
              {lang === 'ca'
                ? 'Treballs a tota Mallorca · Assessorament sense compromís'
                : 'Trabajos en toda Mallorca · Asesoramiento sin compromiso'}
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                lang === 'ca'
                  ? `Hola SELLATS JAM, voldria consultar sobre el servei: ${service.title.ca}`
                  : `Hola SELLATS JAM, quisiera consultar sobre el servicio: ${service.title.es}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-medium text-[#1C1917] bg-[#EFECE6] hover:bg-[#E5E0D5] border border-[#DDD8CE] rounded transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#1C1917]" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onRequestQuote(service.title[lang]);
                onClose();
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-[#1C1917] hover:bg-[#2E2A27] rounded transition-colors cursor-pointer"
            >
              <span>{lang === 'ca' ? 'Demanau valoració' : 'Solicitar valoración'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
