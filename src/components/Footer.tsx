import React from 'react';
import { Language, ViewState } from '../types';
import { BUSINESS_CONFIG } from '../data/content';
import { Logo } from './Logo';
import { LegalType } from './LegalModal';
import { MapPin, Phone, MessageSquare, Shield, Mail } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onNavigate: (view: ViewState, sectionId?: string) => void;
  onOpenLegal?: (type: LegalType) => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onLanguageChange,
  onNavigate,
  onOpenLegal,
}) => {
  return (
    <footer className="bg-[#1C1917] text-[#DDD8CE] pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Info (4 cols) with dark theme Logo */}
          <div className="lg:col-span-4 space-y-4">
            <div className="mb-2">
              <Logo variant="header" theme="dark" className="h-11" descriptorLang={lang} />
            </div>
            <p className="text-xs text-stone-300 leading-relaxed max-w-sm pt-1">
              {lang === 'ca'
                ? 'Especialistes en juntes i segellats per al sector residencial, piscines i nàutica a Mallorca. Més de 20 anys d’experiència en l’ofici del segellat tècnic.'
                : 'Especialistas en juntas y sellados para el sector residencial, piscinas y náutica en Mallorca. Más de 20 años de experiencia en el oficio del sellado técnico.'}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-stone-400">
              <MapPin className="w-3.5 h-3.5 text-[#C25E38]" />
              <span>Mallorca · Pla, Raiguer, Llevant i tota l’illa</span>
            </div>
          </div>

          {/* Nav links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {lang === 'ca' ? 'Navegació' : 'Navegación'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home', 'inici')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'ca' ? 'Inici' : 'Inicio'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services', 'serveis')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'ca' ? 'Serveis' : 'Servicios'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('professionals', 'professionals')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'ca' ? 'Professionals' : 'Profesionales'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about', 'quisom')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'ca' ? 'Qui som' : 'Quiénes somos'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact', 'contacte')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'ca' ? 'Contacte' : 'Contacto'}
                </button>
              </li>
            </ul>
          </div>

          {/* Specialties (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {lang === 'ca' ? 'Especialitats' : 'Especialidades'}
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>{lang === 'ca' ? 'Segellat de banys i dutxes' : 'Sellado de baños y duchas'}</li>
              <li>{lang === 'ca' ? 'Segellat de cuines i taulells' : 'Sellado de cocinas y encimeras'}</li>
              <li>{lang === 'ca' ? 'Finestres i fusteries' : 'Ventanas y carpinterías'}</li>
              <li>{lang === 'ca' ? 'Sellats de tarimes flotants' : 'Sellados de tarimas flotantes'}</li>
              <li>{lang === 'ca' ? 'Vidres i mampares' : 'Vidrios y mamparas'}</li>
              <li>{lang === 'ca' ? 'Façanes arquitectòniques' : 'Fachadas arquitectónicas'}</li>
              <li>{lang === 'ca' ? 'Segellat de piscines' : 'Sellado de piscinas'}</li>
              <li>{lang === 'ca' ? 'Tarimes d’embarcacions' : 'Tarimas de embarcaciones'}</li>
              <li>{lang === 'ca' ? 'Renovació de juntes deteriorades' : 'Renovación de juntas deterioradas'}</li>
            </ul>
          </div>

          {/* Contact and Language (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {lang === 'ca' ? 'Contacte directe' : 'Contacto directo'}
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-stone-400" />
                <span>{BUSINESS_CONFIG.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-stone-400" />
                <span>WhatsApp ({BUSINESS_CONFIG.phoneDisplay})</span>
              </a>
              <a
                href={`mailto:${BUSINESS_CONFIG.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-stone-400" />
                <span>{BUSINESS_CONFIG.email}</span>
              </a>
              <p className="text-stone-400 pt-1 text-[11px]">
                {lang === 'ca'
                  ? 'Atenció de dilluns a divendres (8:00 - 19:00)'
                  : 'Atención de lunes a viernes (8:00 - 19:00)'}
              </p>
            </div>

            {/* Language switch */}
            <div className="pt-2">
              <span className="text-[11px] text-stone-400 block mb-1.5">
                {lang === 'ca' ? 'Llengua:' : 'Idioma:'}
              </span>
              <div className="inline-flex rounded border border-stone-700 p-0.5 bg-stone-900 text-xs">
                <button
                  onClick={() => onLanguageChange('ca')}
                  className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    lang === 'ca' ? 'bg-stone-800 text-white font-semibold' : 'text-stone-400 hover:text-white'
                  }`}
                >
                  Català
                </button>
                <button
                  onClick={() => onLanguageChange('es')}
                  className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    lang === 'es' ? 'bg-stone-800 text-white font-semibold' : 'text-stone-400 hover:text-white'
                  }`}
                >
                  Castellano
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Attribution */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-stone-400">
          <div>
            <span>© {new Date().getFullYear()} SELLATS JAM. </span>
            <span>
              {lang === 'ca'
                ? 'Tots els drets reservats. Especialistes en juntes i segellats a Mallorca.'
                : 'Todos los derechos reservados. Especialistas en juntas y sellados en Mallorca.'}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://jamlegals.vercel.app/ca/avis-legal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-300 transition-colors cursor-pointer"
            >
              {lang === 'ca' ? 'Avís legal' : 'Aviso legal'}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://jamlegals.vercel.app/ca/avis-legal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-300 transition-colors cursor-pointer"
            >
              {lang === 'ca' ? 'Política de privacitat' : 'Política de privacidad'}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://jamlegals.vercel.app/ca/avis-legal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-300 transition-colors cursor-pointer"
            >
              {lang === 'ca' ? 'Política de cookies' : 'Política de cookies'}
            </a>
          </div>
        </div>

        {/* Technical audit note regarding placeholder information */}
        <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between text-[10px] text-stone-400">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3 h-3 text-stone-400" />
            <span>
              {lang === 'ca'
                ? 'Estat de la web: Dades de contacte i galeria en mode provisional llest per a dades definitives de SELLATS JAM.'
                : 'Estado de la web: Datos de contacto y galería en modo provisional listos para datos definitivos de SELLATS JAM.'}
            </span>
          </div>
          <span>Mallorca, Illes Balears</span>
        </div>
      </div>
    </footer>
  );
};
