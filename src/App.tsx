/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, ViewState } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustPillars } from './components/TrustPillars';
import { ServicesSection } from './components/ServicesSection';
import { WhyItMatters } from './components/WhyItMatters';
import { HowWeWork } from './components/HowWeWork';
import { ProfessionalsSection } from './components/ProfessionalsSection';
import { DetailGallery } from './components/DetailGallery';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { AboutSection } from './components/AboutSection';
import { ThreeDomainsOverview } from './components/ThreeDomainsOverview';
import { Footer } from './components/Footer';

export default function App() {
  // 1. Language state: Catalan default, can toggle to Spanish
  const [lang, setLang] = useState<Language>(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang === 'es' || urlLang === 'ca') return urlLang;
    const saved = localStorage.getItem('sellats_jam_lang') || localStorage.getItem('sellats_jamm_lang');
    if (saved === 'es' || saved === 'ca') return saved;
    return 'ca';
  });

  // 2. Active view / section state
  const [activeView, setActiveView] = useState<ViewState>('home');
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [preselectedClientRole, setPreselectedClientRole] = useState<string>('');
  const [servicesFilter, setServicesFilter] = useState<string>('all');

  // Sync document title, html lang, and URL search param
  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('sellats_jam_lang', lang);

    if (lang === 'ca') {
      document.title = 'SELLATS JAM — Especialistes en juntes i segellats a Mallorca';
    } else {
      document.title = 'SELLATS JAM — Especialistas en juntas y sellados en Mallorca';
    }

    // Update query param without reloading
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('lang', lang);
    window.history.replaceState({}, '', currentUrl.toString());
  }, [lang]);

  // Handle language switch
  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
  };

  // Handle navigation
  const handleNavigate = (view: ViewState, sectionId?: string) => {
    setActiveView(view);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handle service quote selection
  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    handleNavigate('contact', 'contacte');
  };

  // Handle trade collaboration request
  const handleSelectProfessionalQuote = (role: string) => {
    setPreselectedClientRole(role);
    handleNavigate('contact', 'contacte');
  };

  const handleSelectDomain = (filterKey: string) => {
    setServicesFilter(filterKey);
    setTimeout(() => {
      document.getElementById('serveis')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#1C1917] flex flex-col font-sans selection:bg-[#E7E2D8] selection:text-[#1C1917]">
      {/* 3-Zone Header */}
      <Header
        lang={lang}
        onLanguageChange={handleLanguageChange}
        activeView={activeView}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Render Home Flow or Dedicated Specific Page View */}
        {activeView === 'home' && (
          <>
            <Hero lang={lang} onNavigate={handleNavigate} />
            <TrustPillars lang={lang} />
            <ThreeDomainsOverview
              lang={lang}
              onSelectDomain={handleSelectDomain}
            />
            <ServicesSection
              lang={lang}
              selectedFilter={servicesFilter}
              onSelectServiceForQuote={handleSelectServiceForQuote}
            />
            <WhyItMatters lang={lang} />
            <HowWeWork lang={lang} />
            <ProfessionalsSection
              lang={lang}
              onNavigate={handleNavigate}
              onSelectProfessionalQuote={handleSelectProfessionalQuote}
            />
            <DetailGallery lang={lang} />
            <AboutSection lang={lang} onNavigate={handleNavigate} />
            <FaqSection lang={lang} />
            <ContactSection
              lang={lang}
              preselectedService={preselectedService}
              preselectedClientRole={preselectedClientRole}
            />
          </>
        )}

        {/* Dedicated View: Services Catalog */}
        {activeView === 'services' && (
          <div className="animate-in fade-in duration-200">
            <div className="py-12 bg-[#F8F7F4] border-b border-[#E7E2D8]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <span className="text-xs font-semibold tracking-wider text-[#8C3A18] uppercase">
                  {lang === 'ca' ? 'Catàleg tècnic' : 'Catálogo técnico'}
                </span>
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1C1917] mt-2 mb-3">
                  {lang === 'ca'
                    ? 'Serveis de juntes i segellats a Mallorca'
                    : 'Servicios de juntas y sellados en Mallorca'}
                </h1>
                <p className="text-base text-[#57534E] max-w-2xl">
                  {lang === 'ca'
                    ? 'Coneixeu les nostres especialitats en espais residencials, piscines, tarimes d’embarcacions i renovació integral de juntes a Mallorca.'
                    : 'Conozca nuestras especialidades en espacios residenciales, piscinas, tarimas de embarcaciones y renovación integral de juntas en Mallorca.'}
                </p>
              </div>
            </div>
            <ServicesSection
              lang={lang}
              selectedFilter={servicesFilter}
              onSelectServiceForQuote={handleSelectServiceForQuote}
            />
            <WhyItMatters lang={lang} />
            <ContactSection
              lang={lang}
              preselectedService={preselectedService}
              preselectedClientRole={preselectedClientRole}
            />
          </div>
        )}

        {/* Dedicated View: Professionals & Contractors */}
        {activeView === 'professionals' && (
          <div className="animate-in fade-in duration-200">
            <div className="py-12 bg-[#F4F1EA] border-b border-[#E7E2D8]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <span className="text-xs font-semibold tracking-wider text-[#8C3A18] uppercase">
                  {lang === 'ca' ? 'Aliança professional B2B' : 'Alianza profesional B2B'}
                </span>
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1C1917] mt-2 mb-3">
                  {lang === 'ca'
                    ? 'Serveis per a professionals i col·laboradors'
                    : 'Servicios para profesionales y colaboradores'}
                </h1>
                <p className="text-base text-[#57534E] max-w-2xl">
                  {lang === 'ca'
                    ? 'Delegau el segellat final a un especialista de confiança amb més de 20 anys d’experiència. Fusteries, vidre, reformes, piscines i manteniment nàutic a Mallorca.'
                    : 'Delegue el sellado final en un especialista de confianza con más de 20 años de experiencia. Carpinterías, vidrio, reformas, piscinas y mantenimiento náutico en Mallorca.'}
                </p>
              </div>
            </div>
            <ProfessionalsSection
              lang={lang}
              onNavigate={handleNavigate}
              onSelectProfessionalQuote={handleSelectProfessionalQuote}
            />
            <DetailGallery lang={lang} />
            <ContactSection
              lang={lang}
              preselectedService={preselectedService}
              preselectedClientRole={preselectedClientRole || 'fuster_vidrier'}
            />
          </div>
        )}

        {/* Dedicated View: Qui som */}
        {activeView === 'about' && (
          <div className="animate-in fade-in duration-200">
            <div className="py-12 bg-[#F8F7F4] border-b border-[#E7E2D8]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <span className="text-xs font-semibold tracking-wider text-[#8C3A18] uppercase">
                  {lang === 'ca' ? 'L’ofici i la marca' : 'El oficio y la marca'}
                </span>
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1C1917] mt-2 mb-3">
                  {lang === 'ca'
                    ? 'Qui som a SELLATS JAM'
                    : 'Quiénes somos en SELLATS JAM'}
                </h1>
                <p className="text-base text-[#57534E] max-w-2xl">
                  {lang === 'ca'
                    ? 'Més de dues dècades d’ofici perfeccionant la precisió del segellat tècnic en espais residencials, piscines i embarcacions a Mallorca.'
                    : 'Más de dos décadas de oficio perfeccionando la precisión del sellado técnico en espacios residenciales, piscinas y embarcaciones en Mallorca.'}
                </p>
              </div>
            </div>
            <AboutSection lang={lang} onNavigate={handleNavigate} />
            <TrustPillars lang={lang} />
            <HowWeWork lang={lang} />
            <ContactSection
              lang={lang}
              preselectedService={preselectedService}
              preselectedClientRole={preselectedClientRole}
            />
          </div>
        )}

        {/* Dedicated View: Contact */}
        {activeView === 'contact' && (
          <div className="animate-in fade-in duration-200">
            <div className="py-12 bg-[#F8F7F4] border-b border-[#E7E2D8]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <span className="text-xs font-semibold tracking-wider text-[#8C3A18] uppercase">
                  {lang === 'ca' ? 'Contacte i pressupost' : 'Contacto y presupuesto'}
                </span>
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1C1917] mt-2 mb-3">
                  {lang === 'ca'
                    ? 'Contactau amb SELLATS JAM'
                    : 'Contacte con SELLATS JAM'}
                </h1>
                <p className="text-base text-[#57534E] max-w-2xl">
                  {lang === 'ca'
                    ? 'WhatsApp, telèfon o formulari web. Resposta àgil i assessorament honest per al vostre projecte a Mallorca.'
                    : 'WhatsApp, teléfono o formulario web. Respuesta ágil y asesoramiento honesto para su proyecto en Mallorca.'}
                </p>
              </div>
            </div>
            <ContactSection
              lang={lang}
              preselectedService={preselectedService}
              preselectedClientRole={preselectedClientRole}
            />
            <FaqSection lang={lang} />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onLanguageChange={handleLanguageChange}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
