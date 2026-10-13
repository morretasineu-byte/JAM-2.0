import React, { useState } from 'react';
import { Language, ViewState } from '../types';
import { BUSINESS_CONFIG } from '../data/content';
import { Logo } from './Logo';
import { Phone, MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  activeView: ViewState;
  onNavigate: (view: ViewState, sectionId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onLanguageChange,
  activeView,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'inici', view: 'home' as ViewState, label: { ca: 'Inici', es: 'Inicio' } },
    { id: 'serveis', view: 'services' as ViewState, label: { ca: 'Serveis', es: 'Servicios' } },
    { id: 'professionals', view: 'professionals' as ViewState, label: { ca: 'Professionals', es: 'Profesionales' } },
    { id: 'quisom', view: 'about' as ViewState, label: { ca: 'Qui som', es: 'Quiénes somos' } },
    { id: 'contacte', view: 'contact' as ViewState, label: { ca: 'Contacte', es: 'Contacto' } },
  ];

  const handleNavClick = (view: ViewState, sectionId?: string) => {
    onNavigate(view, sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBFBF9]/95 backdrop-blur-md border-b border-[#E7E2D8] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Brand Logo (Left navbar, balanced size, clickable to home) */}
        <button
          onClick={() => handleNavClick('home', 'inici')}
          className="text-left group cursor-pointer focus:outline-none py-1 -ml-1 transition-opacity hover:opacity-90 flex items-center"
          aria-label="SELLATS JAM - Inici"
        >
          <Logo variant="header" className="h-11 sm:h-12 md:h-13" descriptorLang={lang} />
        </button>

        {/* Zone 2: 4-5 Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeView === item.view;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.view, item.id)}
                className={`text-sm font-medium transition-colors relative py-1 cursor-pointer ${
                  isActive
                    ? 'text-[#1C1917] font-semibold'
                    : 'text-[#57534E] hover:text-[#1C1917]'
                }`}
              >
                {item.label[lang]}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#8C3A18]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Language Selector & Primary Action */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Bilingual Switcher: Segmented, clean typography */}
          <div
            className="flex items-center bg-[#EFECE6] p-0.5 rounded border border-[#DDD8CE] text-xs font-medium"
            role="group"
            aria-label="Selector d'idioma"
          >
            <button
              onClick={() => onLanguageChange('ca')}
              className={`px-2.5 py-1 rounded-sm transition-all cursor-pointer whitespace-nowrap ${
                lang === 'ca'
                  ? 'bg-white text-[#1C1917] font-semibold shadow-xs'
                  : 'text-[#78716C] hover:text-[#1C1917]'
              }`}
              aria-pressed={lang === 'ca'}
            >
              CA
            </button>
            <button
              onClick={() => onLanguageChange('es')}
              className={`px-2.5 py-1 rounded-sm transition-all cursor-pointer whitespace-nowrap ${
                lang === 'es'
                  ? 'bg-white text-[#1C1917] font-semibold shadow-xs'
                  : 'text-[#78716C] hover:text-[#1C1917]'
              }`}
              aria-pressed={lang === 'es'}
            >
              ES
            </button>
          </div>

          {/* Quick WhatsApp button for instant lead capture */}
          <a
            href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
              lang === 'ca'
                ? 'Hola SELLATS JAM, m’agradaria consultar sobre un servei de segellat a Mallorca.'
                : 'Hola SELLATS JAM, me gustaría consultar sobre un servicio de sellado en Mallorca.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#1C1917] bg-[#EFECE6] hover:bg-[#E5E0D5] border border-[#DDD8CE] rounded transition-colors whitespace-nowrap"
            title="WhatsApp directe"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#1C1917]" />
            <span>WhatsApp</span>
          </a>

          {/* Primary Action Button */}
          <button
            onClick={() => handleNavClick('contact', 'contacte')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide text-white bg-[#1C1917] hover:bg-[#2E2A27] rounded transition-all shadow-xs cursor-pointer whitespace-nowrap"
          >
            <span>{lang === 'ca' ? 'Contactau amb nosaltres' : 'Contacte con nosotros'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1C1917] hover:bg-[#EFECE6] rounded transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Tanca el menú' : 'Obre el menú'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation (respecting <15% sticky constraint by being an explicit full drawer on demand) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBFBF9] border-b border-[#E7E2D8] px-6 py-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4 mb-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.view, item.id)}
                className="text-left text-base font-medium text-[#1C1917] hover:text-[#8C3A18] py-2 border-b border-[#F0ECE1] transition-colors"
              >
                {item.label[lang]}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <button
              onClick={() => handleNavClick('contact', 'contacte')}
              className="w-full py-3 px-4 text-center text-sm font-semibold text-white bg-[#1C1917] hover:bg-[#2E2A27] rounded transition-colors"
            >
              {lang === 'ca' ? 'Contactau amb nosaltres' : 'Contacte con nosotros'}
            </button>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-medium bg-[#EFECE6] hover:bg-[#E5E0D5] text-[#1C1917] rounded border border-[#DDD8CE]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Telefonar</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  lang === 'ca'
                    ? 'Hola SELLATS JAM, m’agradaria consultar sobre un servei de segellat.'
                    : 'Hola SELLATS JAM, me gustaría consultar sobre un servicio de sellado.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-medium bg-[#EFECE6] hover:bg-[#E5E0D5] text-[#1C1917] rounded border border-[#DDD8CE]"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
