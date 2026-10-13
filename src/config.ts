export const LEGAL_BASE_URL = 'https://jamlegals.vercel.app';

export const LEGAL_LINKS = {
  ca: {
    notice: `${LEGAL_BASE_URL}/ca/avis-legal`,
    privacy: `${LEGAL_BASE_URL}/ca/politica-de-privacitat`,
    cookies: `${LEGAL_BASE_URL}/ca/politica-de-galetes`,
  },
  es: {
    notice: `${LEGAL_BASE_URL}/es/aviso-legal`,
    privacy: `${LEGAL_BASE_URL}/es/politica-de-privacidad`,
    cookies: `${LEGAL_BASE_URL}/es/politica-de-cookies`,
  },
} as const;
