import React from 'react';
import { Language } from '../types';
import { X, AlertCircle } from 'lucide-react';

export type LegalType = 'avis-legal' | 'privacitat' | 'cookies';

interface LegalModalProps {
  type: LegalType | null;
  lang: Language;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, lang, onClose }) => {
  if (!type) return null;

  const content = {
    'avis-legal': {
      title: { ca: 'Avís Legal', es: 'Aviso Legal' },
      body: {
        ca: (
          <div className="space-y-4 text-xs sm:text-sm text-[#44403C] leading-relaxed">
            <div className="p-3 bg-[#F5F2EB] border-l-2 border-[#8C3A18] rounded-r text-xs text-[#78716C]">
              <span className="font-semibold text-[#1C1917] block mb-0.5">Nota de configuració:</span>
              Aquest document conté els espais preparats per inserir les dades fiscals definitives del titular un cop completat el registre mercantil o censal.
            </div>
            <h4 className="font-bold text-[#1C1917] text-sm">1. Dades identificatives del titular</h4>
            <p>
              En compliment de l’article 10 de la Llei 34/2002, d’11 de juliol, de serveis de la societat de la informació i de comerç electrònic (LSSI-CE), s’informa que aquest lloc web és titularitat de:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Nom comercial:</strong> SELLATS JAM</li>
              <li><strong>Titular:</strong> [Nom i Cognoms del professional titular / Pendent d’omplir]</li>
              <li><strong>NIF / NIE / CIF:</strong> [Pendent d’incorporar]</li>
              <li><strong>Domicili d’activitat:</strong> Mallorca, Illes Balears (Espanya)</li>
              <li><strong>Telèfon:</strong> +34 678 748 445</li>
              <li><strong>Correu electrònic:</strong> sellatsjam@gmail.com</li>
            </ul>
            <h4 className="font-bold text-[#1C1917] text-sm">2. Objecte i condicions d’ús</h4>
            <p>
              El present lloc web té com a finalitat donar a conèixer els serveis professionals de juntes i segellats que ofereix SELLATS JAM a Mallorca. L’accés i ús del lloc web atribueix la condició d’usuari i implica l’acceptació plena de les presents condicions.
            </p>
            <h4 className="font-bold text-[#1C1917] text-sm">3. Propietat intel·lectual</h4>
            <p>
              Tots els continguts del lloc web (textos, logotips, disseny gràfic i estructures) són propietat de SELLATS JAM o de tercers que n’han autoritzat l’ús. Les fotografies utilitzades actualment són de caràcter referencial d’acabats i seran substituïdes progressivament per documentació d’obres pròpies.
            </p>
          </div>
        ),
        es: (
          <div className="space-y-4 text-xs sm:text-sm text-[#44403C] leading-relaxed">
            <div className="p-3 bg-[#F5F2EB] border-l-2 border-[#8C3A18] rounded-r text-xs text-[#78716C]">
              <span className="font-semibold text-[#1C1917] block mb-0.5">Nota de configuración:</span>
              Este documento contiene los campos preparados para insertar los datos fiscales definitivos del titular una vez completado el registro censal.
            </div>
            <h4 className="font-bold text-[#1C1917] text-sm">1. Datos identificativos del titular</h4>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se informa de que este sitio web es titularidad de:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Nombre comercial:</strong> SELLATS JAM</li>
              <li><strong>Titular:</strong> [Nombre y Apellidos del profesional titular / Pendiente de completar]</li>
              <li><strong>NIF / NIE / CIF:</strong> [Pendiente de incorporar]</li>
              <li><strong>Domicilio de actividad:</strong> Mallorca, Islas Baleares (España)</li>
              <li><strong>Teléfono:</strong> +34 678 748 445</li>
              <li><strong>Correo electrónico:</strong> sellatsjam@gmail.com</li>
            </ul>
            <h4 className="font-bold text-[#1C1917] text-sm">2. Objeto y condiciones de uso</h4>
            <p>
              El presente sitio web tiene por finalidad dar a conocer los servicios profesionales de juntas y sellados que presta SELLATS JAM en Mallorca. El acceso y uso del sitio web atribuye la condición de usuario e implica la aceptación de estas condiciones.
            </p>
            <h4 className="font-bold text-[#1C1917] text-sm">3. Propiedad intelectual</h4>
            <p>
              Todos los contenidos del sitio web (textos, logotipos, diseño gráfico y estructuras) son propiedad de SELLATS JAM o de terceros que han autorizado su uso. Las fotografías actuales tienen carácter referencial y se actualizarán progresivamente con trabajos propios.
            </p>
          </div>
        ),
      },
    },
    privacitat: {
      title: { ca: 'Política de Privacitat', es: 'Política de Privacidad' },
      body: {
        ca: (
          <div className="space-y-4 text-xs sm:text-sm text-[#44403C] leading-relaxed">
            <h4 className="font-bold text-[#1C1917] text-sm">1. Responsable del tractament</h4>
            <p>
              El responsable del tractament de les dades recollides mitjançant els formularis d’aquest lloc web és SELLATS JAM, amb activitat a Mallorca, Illes Balears.
            </p>
            <h4 className="font-bold text-[#1C1917] text-sm">2. Finalitat del tractament</h4>
            <p>
              Les dades personals facilitades (nom, telèfon, correu electrònic, municipi i detalls de la feina) s’utilitzen exclusivament per atendre consultes tècniques, coordinar valoracions i elaborar pressupostos sol·licitats per l’usuari. No s’utilitzen per a l’enviament de publicitat no desitjada ni es comercialitzen amb tercers.
            </p>
            <h4 className="font-bold text-[#1C1917] text-sm">3. Legitimació</h4>
            <p>
              La base legal per al tractament de les vostres dades és el consentiment exprés atorgat en marcar la casella de verificació corresponent abans de trametre el formulari de contacte.
            </p>
            <h4 className="font-bold text-[#1C1917] text-sm">4. Conservació de les dades</h4>
            <p>
              Les dades es conservaran durant el temps estrictament necessari per gestionar la sol·licitud o mentre es mantingui la relació professional derivada del servei de segellat.
            </p>
            <h4 className="font-bold text-[#1C1917] text-sm">5. Drets de l’usuari</h4>
            <p>
              Podeu exercir els vostres drets d’accés, rectificació, supressió, limitació i oposició escrivint a sellatsjam@gmail.com, adjuntant còpia del vostre document d’identitat.
            </p>
          </div>
        ),
        es: (
          <div className="space-y-4 text-xs sm:text-sm text-[#44403C] leading-relaxed">
            <h4 className="font-bold text-[#1C1917] text-sm">1. Responsable del tratamiento</h4>
            <p>
              El responsable del tratamiento de los datos recabados en este sitio web es SELLATS JAM, con ámbito de actividad en Mallorca, Islas Baleares.
            </p>
            <h4 className="font-bold text-[#1C1917] text-sm">2. Finalidad del tratamiento</h4>
            <p>
              Los datos facilitados (nombre, teléfono, correo electrónico, municipio y descripción de los trabajos) se utilizan exclusivamente para resolver consultas técnicas, coordinar valoraciones y elaborar presupuestos solicitados. No se ceden a terceros ni se usan con fines comerciales masivos.
            </p>
            <h4 className="font-bold text-[#1C1917] text-sm">3. Legitimación</h4>
            <p>
              La base jurídica para el tratamiento es el consentimiento expreso del usuario manifestado mediante la casilla de verificación previa al envío del formulario.
            </p>
            <h4 className="font-bold text-[#1C1917] text-sm">4. Conservación</h4>
            <p>
              Los datos se conservarán durante el tiempo necesario para atender la consulta o durante la vigencia de la relación profesional derivada de los trabajos de sellado.
            </p>
            <h4 className="font-bold text-[#1C1917] text-sm">5. Derechos del usuario</h4>
            <p>
              Puede ejercer sus derechos de acceso, rectificación, supresión y oposición escribiendo a sellatsjam@gmail.com.
            </p>
          </div>
        ),
      },
    },
    cookies: {
      title: { ca: 'Política de Cookies', es: 'Política de Cookies' },
      body: {
        ca: (
          <div className="space-y-4 text-xs sm:text-sm text-[#44403C] leading-relaxed">
            <h4 className="font-bold text-[#1C1917] text-sm">1. Què és una galeta (cookie)?</h4>
            <p>
              Una galeta és un petit fitxer de text que s’emmagatzema al vostre navegador en visitar determinades pàgines web per recordar preferències bàsiques com l’idioma triat o el consentiment de navegació.
            </p>
            <h4 className="font-bold text-[#1C1917] text-sm">2. Galetes utilitzades en aquesta web</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Galetes tècniques i necessàries:</strong> Imprescindibles per al funcionament bàsic de la web, la selecció d’idioma (Català / Castellà) i la gestió del formulari.</li>
              <li><strong>Galetes de preferències:</strong> Emmagatzemen l’estat de consentiment del bàner legal.</li>
            </ul>
            <p>
              Aquest lloc web no utilitza galetes publicitàries de seguiment comercial invasiu.
            </p>
            <h4 className="font-bold text-[#1C1917] text-sm">3. Com configurar o desactivar les galetes</h4>
            <p>
              Podeu permetre, bloquejar o eliminar les galetes instal·lades en el vostre dispositiu mitjançant la configuració de les opcions del vostre navegador d’Internet (Chrome, Safari, Firefox, Edge).
            </p>
          </div>
        ),
        es: (
          <div className="space-y-4 text-xs sm:text-sm text-[#44403C] leading-relaxed">
            <h4 className="font-bold text-[#1C1917] text-sm">1. ¿Qué es una cookie?</h4>
            <p>
              Una cookie es un pequeño archivo de texto almacenado en su navegador para recordar preferencias técnicas como el idioma seleccionado o el consentimiento de privacidad.
            </p>
            <h4 className="font-bold text-[#1C1917] text-sm">2. Cookies empleadas en este sitio</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Cookies técnicas necesarias:</strong> Esenciales para la navegación, el cambio de idioma (Catalán / Castellano) y el envío seguro del formulario.</li>
              <li><strong>Cookies de preferencias:</strong> Recuerdan la aceptación del aviso legal.</li>
            </ul>
            <p>
              Este sitio no utiliza cookies de seguimiento publicitario invasivo ni de elaboración de perfiles comerciales.
            </p>
            <h4 className="font-bold text-[#1C1917] text-sm">3. Configuración y desactivación</h4>
            <p>
              Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones de su navegador web (Chrome, Safari, Firefox, Edge).
            </p>
          </div>
        ),
      },
    },
  };

  const current = content[type];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl bg-[#FBFBF9] rounded-lg border border-[#E7E2D8] shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-6 border-b border-[#E7E2D8] bg-[#F8F7F4]">
          <h3 className="text-lg font-bold text-[#1C1917]">
            {current.title[lang]}
          </h3>
          <button
            onClick={onClose}
            className="p-2 text-[#78716C] hover:text-[#1C1917] hover:bg-[#EFECE6] rounded-full transition-colors cursor-pointer"
            aria-label="Tancar finestra"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
          {current.body[lang]}
        </div>

        <div className="p-4 bg-[#F8F7F4] border-t border-[#E7E2D8] flex items-center justify-between gap-4">
          <a
            href="https://jamlegals.vercel.app/ca/avis-legal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#8C3A18] hover:underline font-semibold"
          >
            {lang === 'ca' ? 'Veure documentació legal a jamlegals.vercel.app →' : 'Ver documentación legal en jamlegals.vercel.app →'}
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#1C1917] bg-[#EFECE6] hover:bg-[#DDD8CE] rounded transition-colors cursor-pointer"
          >
            {lang === 'ca' ? 'Tancar' : 'Cerrar'}
          </button>
        </div>
      </div>
    </div>
  );
};
