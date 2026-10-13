import React, { useState, useEffect } from 'react';
import { Language } from '../types';

interface CookieBannerProps {
  lang: Language;
  onOpenCookiesPolicy?: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  lang,
  onOpenCookiesPolicy,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('sellats_cookie_consent');
    if (!consent) {
      // Show banner after brief delay
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('sellats_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('sellats_cookie_consent', 'essential_only');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#1C1917] text-white p-4 shadow-xl border-t border-stone-800 animate-in slide-in-from-bottom duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-stone-300 leading-relaxed text-center md:text-left">
          {lang === 'ca' ? (
            <>
              Utilitzam galetes tècniques necessàries per al funcionament d’aquest lloc web i la selecció d’idioma. Podeu consultar la nostra{' '}
              <a
                href="https://jamlegals.vercel.app/ca/avis-legal"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white cursor-pointer"
              >
                política de cookies
              </a>
              .
            </>
          ) : (
            <>
              Utilizamos cookies técnicas necesarias para el funcionamiento de este sitio web y la selección de idioma. Puede consultar nuestra{' '}
              <a
                href="https://jamlegals.vercel.app/ca/avis-legal"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white cursor-pointer"
              >
                política de cookies
              </a>
              .
            </>
          )}
        </p>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={handleReject}
            className="px-3 py-1.5 text-xs text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 rounded transition-colors cursor-pointer"
          >
            {lang === 'ca' ? 'Només necessàries' : 'Solo necesarias'}
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-1.5 text-xs font-semibold text-[#1C1917] bg-[#EFECE6] hover:bg-white rounded transition-colors cursor-pointer"
          >
            {lang === 'ca' ? 'Acceptar totes' : 'Aceptar todas'}
          </button>
        </div>
      </div>
    </div>
  );
};
