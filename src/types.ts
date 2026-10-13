export type Language = 'ca' | 'es';

export interface ServiceItem {
  id: string;
  slug: {
    ca: string;
    es: string;
  };
  title: {
    ca: string;
    es: string;
  };
  shortDescription: {
    ca: string;
    es: string;
  };
  fullDescription: {
    ca: string;
    es: string;
  };
  problemsSolved: {
    ca: string[];
    es: string[];
  };
  processSteps: {
    ca: string[];
    es: string[];
  };
  benefits: {
    ca: string[];
    es: string[];
  };
  materialsNote: {
    ca: string;
    es: string;
  };
  faqs: {
    q: { ca: string; es: string };
    a: { ca: string; es: string };
  }[];
  image: string;
  imageAlt: {
    ca: string;
    es: string;
  };
  isRenewal?: boolean;
}

export interface FaqItem {
  id: string;
  question: {
    ca: string;
    es: string;
  };
  answer: {
    ca: string;
    es: string;
  };
}

export interface ContactFormData {
  name: string;
  contact: string; // phone or email
  clientType: 'particular' | 'fuster_vidrier' | 'reforma_constructora' | 'altres';
  service: string;
  municipality: string;
  message: string;
  consent: boolean;
}

export type ViewState = 'home' | 'services' | 'professionals' | 'about' | 'contact';
