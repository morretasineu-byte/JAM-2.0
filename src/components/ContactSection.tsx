import React, { useState, useEffect } from 'react';
import { Language, ContactFormData } from '../types';
import { BUSINESS_CONFIG, MALLORCA_MUNICIPALITIES, SERVICES_DATA } from '../data/content';
import { LEGAL_LINKS } from '../config';
import { Phone, MessageSquare, Send, CheckCircle2, AlertCircle, Mail } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
  preselectedService?: string;
  preselectedClientRole?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  lang,
  preselectedService,
  preselectedClientRole,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    contact: '',
    clientType: 'particular',
    service: preselectedService || 'banys',
    municipality: 'Sineu',
    message: '',
    consent: false,
  });

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
    if (preselectedClientRole) {
      if (preselectedClientRole.includes('Fuster') || preselectedClientRole.includes('Vidr')) {
        setFormData((prev) => ({ ...prev, clientType: 'fuster_vidrier' }));
      } else if (preselectedClientRole.includes('Reform') || preselectedClientRole.includes('Obra')) {
        setFormData((prev) => ({ ...prev, clientType: 'reforma_constructora' }));
      }
    }
  }, [preselectedService, preselectedClientRole]);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Field validations
    if (!formData.name.trim()) {
      setErrorMessage(
        lang === 'ca' ? 'Si us plau, indicau el vostre nom.' : 'Por favor, indique su nombre.'
      );
      setStatus('error');
      return;
    }

    if (!formData.contact.trim() || formData.contact.length < 5) {
      setErrorMessage(
        lang === 'ca'
          ? 'Si us plau, facilitau un telèfon o correu electrònic vàlid per poder respondre-us.'
          : 'Por favor, facilite un teléfono o correo electrónico válido para responderle.'
      );
      setStatus('error');
      return;
    }

    if (!formData.consent) {
      setErrorMessage(
        lang === 'ca'
          ? 'Heu d’acceptar la política de privacitat per trametre la consulta.'
          : 'Debe aceptar la política de privacidad para enviar la consulta.'
      );
      setStatus('error');
      return;
    }

    setStatus('submitting');

    // Simulate sending to message reception handler (connected client dispatch)
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  return (
    <section id="contacte" className="py-20 bg-[#FBFBF9] border-b border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner CTA */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-[#8C3A18] uppercase mb-2">
            {lang === 'ca' ? 'Contacte directe' : 'Contacto directo'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917] mb-4">
            {lang === 'ca' ? 'Parlem del teu projecte.' : 'Hablemos de su proyecto.'}
          </h2>
          <p className="text-base text-[#57534E] leading-relaxed">
            {lang === 'ca'
              ? 'Explicau-nos què necessitau i valorarem la millor manera d’ajudar-vos. Atenem particulars, fusters, vidriers i empreses de reformes a tot Mallorca.'
              : 'Explíquenos qué necesita y valoraremos la mejor manera de ayudarle. Atendemos a particulares, carpinteros, vidrieros y reformistas en toda Mallorca.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Card */}
            <div className="p-6 bg-[#F8F7F4] rounded-lg border border-[#E7E2D8]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-[#EFECE6] flex items-center justify-center text-[#8C3A18]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1C1917]">
                    WhatsApp directe
                  </h3>
                  <span className="text-xs text-[#78716C]">
                    {lang === 'ca' ? 'La via més ràpida' : 'La vía más rápida'}
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#57534E] mb-4">
                {lang === 'ca'
                  ? 'Podeu enviar-nos fotos o vídeos de les juntes i les mesures aproximades per fer una primera estimació.'
                  : 'Puede enviarnos fotos o vídeos de las juntas y medidas aproximadas para hacer una primera estimación.'}
              </p>
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  lang === 'ca'
                    ? 'Hola SELLATS JAM, voldria demanar assessorament i pressupost per a unes juntes a Mallorca.'
                    : 'Hola SELLATS JAM, quisiera pedir asesoramiento y presupuesto para unas juntas en Mallorca.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white bg-[#1C1917] hover:bg-[#2E2A27] rounded transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>
                  {lang === 'ca' ? 'Obrir xat de WhatsApp' : 'Abrir chat de WhatsApp'}
                </span>
              </a>
              <div className="mt-2 text-right">
                <span className="text-[10px] text-[#A8A29E]">
                  {BUSINESS_CONFIG.phoneDisplay}
                </span>
              </div>
            </div>

            {/* Direct Call Card */}
            <div className="p-6 bg-[#F8F7F4] rounded-lg border border-[#E7E2D8]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-[#EFECE6] flex items-center justify-center text-[#8C3A18]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1C1917]">
                    {lang === 'ca' ? 'Atenció telefònica' : 'Atención telefónica'}
                  </h3>
                  <span className="text-xs text-[#78716C]">
                    {lang === 'ca' ? 'Tracte personal directe' : 'Trato personal directo'}
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#57534E] mb-4">
                {lang === 'ca'
                  ? 'Parlau directament amb el professional responsable dels treballs per resoldre qualsevol dubte tècnic.'
                  : 'Hable directamente con el profesional responsable de los trabajos para resolver cualquier duda técnica.'}
              </p>
              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-[#1C1917] bg-white hover:bg-[#FBFBF9] border border-[#DDD8CE] rounded transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>{BUSINESS_CONFIG.phoneDisplay}</span>
              </a>
            </div>

            {/* Direct Email Card */}
            <div className="p-6 bg-[#F8F7F4] rounded-lg border border-[#E7E2D8]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-[#EFECE6] flex items-center justify-center text-[#8C3A18]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1C1917]">
                    {lang === 'ca' ? 'Correu electrònic' : 'Correo electrónico'}
                  </h3>
                  <span className="text-xs text-[#78716C]">
                    {lang === 'ca' ? 'Consultes i projectes' : 'Consultas y proyectos'}
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#57534E] mb-4">
                {lang === 'ca'
                  ? 'Podeu escriure’ns directament per enviar plànols, amidaments o consultes tècniques.'
                  : 'Puede escribirnos directamente para enviar planos, mediciones o consultas técnicas.'}
              </p>
              <a
                href={`mailto:${BUSINESS_CONFIG.email}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-[#1C1917] bg-white hover:bg-[#FBFBF9] border border-[#DDD8CE] rounded transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>{BUSINESS_CONFIG.email}</span>
              </a>
            </div>

            {/* Geographic Coverage summary */}
            <div className="p-4 bg-[#EFECE6] rounded-lg border border-[#DDD8CE] text-xs text-[#57534E] space-y-1">
              <span className="font-semibold text-[#1C1917] block">
                {lang === 'ca' ? 'Àrea d’actuació:' : 'Área de actuación:'}
              </span>
              <p>
                {lang === 'ca'
                  ? 'Tota Mallorca. Especial atenció comercial al Pla de Mallorca, Raiguer i Llevant, a més de Palma i municipis costaners.'
                  : 'Toda Mallorca. Especial atención comercial en el Pla de Mallorca, Raiguer y Llevant, además de Palma y municipios costeros.'}
              </p>
              <p className="text-[11px] text-[#78716C] pt-1">
                {lang === 'ca'
                  ? '* Desplaçaments a altres illes només es valoren per a projectes concrets d’envergadura.'
                  : '* Desplazamientos a otras islas solo se valoran para proyectos concretos de envergadura.'}
              </p>
            </div>
          </div>

          {/* Right Column: Contact & Quote Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#F8F7F4] p-6 sm:p-8 rounded-lg border border-[#E7E2D8]">
            <h3 className="text-xl font-bold text-[#1C1917] mb-2">
              {lang === 'ca' ? 'Formulari de valoració' : 'Formulario de valoración'}
            </h3>
            <p className="text-xs text-[#78716C] mb-6">
              {lang === 'ca'
                ? 'Completau les dades per rebre una proposta o assessorament tècnic sense compromís.'
                : 'Complete los datos para recibir una propuesta o asesoramiento técnico sin compromiso.'}
            </p>

            {status === 'success' ? (
              <div className="p-8 text-center bg-white rounded-lg border border-[#E7E2D8] animate-in fade-in duration-300">
                <CheckCircle2 className="w-12 h-12 text-[#8C3A18] mx-auto mb-4" />
                <h4 className="text-lg font-bold text-[#1C1917] mb-2">
                  {lang === 'ca' ? 'Missatge rebut correctament' : 'Mensaje recibido correctamente'}
                </h4>
                <p className="text-xs sm:text-sm text-[#57534E] max-w-md mx-auto mb-6">
                  {lang === 'ca'
                    ? 'Gràcies per contactar amb SELLATS JAM. Revisarem la teva petició i ens posarem en contacte amb tu amb la màxima brevetat.'
                    : 'Gracias por contactar con SELLATS JAM. Revisaremos su petición y nos pondremos en contacto con usted a la mayor brevedad.'}
                </p>
                <button
                  onClick={() => {
                    setStatus('idle');
                    setFormData({
                      name: '',
                      contact: '',
                      clientType: 'particular',
                      service: 'banys',
                      municipality: 'Sineu',
                      message: '',
                      consent: false,
                    });
                  }}
                  className="px-4 py-2 text-xs font-semibold text-[#1C1917] bg-[#EFECE6] hover:bg-[#DDD8CE] rounded cursor-pointer"
                >
                  {lang === 'ca' ? 'Trametre una altra consulta' : 'Enviar otra consulta'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Client Profile Selector */}
                <div>
                  <label className="block text-xs font-medium text-[#1C1917] mb-1.5">
                    {lang === 'ca' ? 'Vostè és:' : 'Usted es:'}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'particular', label: { ca: 'Particular', es: 'Particular' } },
                      { id: 'fuster_vidrier', label: { ca: 'Fuster / Vidrier', es: 'Carpintero / Vidriero' } },
                      { id: 'reforma_constructora', label: { ca: 'Reformes / Piscines', es: 'Reformas / Piscinas' } },
                      { id: 'altres', label: { ca: 'Nàutica / Altres', es: 'Náutica / Otros' } },
                    ].map((type) => (
                      <button
                        type="button"
                        key={type.id}
                        onClick={() =>
                          setFormData({
                            ...formData,
                            clientType: type.id as ContactFormData['clientType'],
                          })
                        }
                        className={`py-2 px-2.5 text-xs text-center rounded border transition-colors cursor-pointer truncate ${
                          formData.clientType === type.id
                            ? 'bg-[#1C1917] text-white border-[#1C1917] font-semibold'
                            : 'bg-white text-[#57534E] border-[#DDD8CE] hover:border-[#1C1917]'
                        }`}
                      >
                        {type.label[lang]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="form-name" className="block text-xs font-medium text-[#1C1917] mb-1">
                    {lang === 'ca' ? 'Nom o empresa *' : 'Nombre o empresa *'}
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={lang === 'ca' ? 'Ex. Joan Mir o Fusteria Mallorca' : 'Ej. Juan Mir o Carpintería Mallorca'}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded border border-[#DDD8CE] focus:border-[#1C1917] focus:ring-1 focus:ring-[#1C1917] focus:outline-none transition-colors"
                  />
                </div>

                {/* Contact (Phone or email) */}
                <div>
                  <label htmlFor="form-contact" className="block text-xs font-medium text-[#1C1917] mb-1">
                    {lang === 'ca' ? 'Telèfon o correu electrònic *' : 'Teléfono o correo electrónico *'}
                  </label>
                  <input
                    type="text"
                    id="form-contact"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder={lang === 'ca' ? 'Telèfon (per trucar o WhatsApp) o email' : 'Teléfono (para llamada o WhatsApp) o email'}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded border border-[#DDD8CE] focus:border-[#1C1917] focus:ring-1 focus:ring-[#1C1917] focus:outline-none transition-colors"
                  />
                </div>

                {/* Service Selector & Municipality Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-service" className="block text-xs font-medium text-[#1C1917] mb-1">
                      {lang === 'ca' ? 'Tipus de servei' : 'Tipo de servicio'}
                    </label>
                    <select
                      id="form-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded border border-[#DDD8CE] focus:border-[#1C1917] focus:ring-1 focus:ring-[#1C1917] focus:outline-none transition-colors"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title[lang]}
                        </option>
                      ))}
                      <option value="altres">
                        {lang === 'ca' ? 'Altres treballs de segellat' : 'Otros trabajos de sellado'}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="form-municipality" className="block text-xs font-medium text-[#1C1917] mb-1">
                      {lang === 'ca' ? 'Municipi a Mallorca' : 'Municipio en Mallorca'}
                    </label>
                    <select
                      id="form-municipality"
                      value={formData.municipality}
                      onChange={(e) => setFormData({ ...formData, municipality: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded border border-[#DDD8CE] focus:border-[#1C1917] focus:ring-1 focus:ring-[#1C1917] focus:outline-none transition-colors"
                    >
                      {MALLORCA_MUNICIPALITIES.map((mun) => (
                        <option key={mun} value={mun}>
                          {mun}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="form-message" className="block text-xs font-medium text-[#1C1917] mb-1">
                    {lang === 'ca' ? 'Detalls de la consulta' : 'Detalles de la consulta'}
                  </label>
                  <textarea
                    id="form-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      lang === 'ca'
                        ? 'Ex. Canvi de silicona a 2 banys (dutxa i lavabo) amb floridura antiga...'
                        : 'Ej. Cambio de silicona en 2 baños (ducha y lavabo) con moho antiguo...'
                    }
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded border border-[#DDD8CE] focus:border-[#1C1917] focus:ring-1 focus:ring-[#1C1917] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Informació bàsica sobre protecció de dades */}
                <div className="p-3.5 bg-stone-100/70 rounded border border-[#DDD8CE] text-[11px] text-[#57534E] space-y-2">
                  <div className="font-semibold text-[#1C1917] tracking-tight text-[11px]">
                    {lang === 'ca'
                      ? 'Informació bàsica sobre protecció de dades'
                      : 'Información básica sobre protección de datos'}
                  </div>
                  <div className="space-y-1.5 leading-relaxed">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 border-b border-[#E7E2D8] pb-1.5">
                      <span className="sm:col-span-4 font-medium text-[#1C1917]">
                        {lang === 'ca' ? 'Responsable:' : 'Responsable:'}
                      </span>
                      <span className="sm:col-span-8 text-[#57534E]">
                        Joan Albert Moragues Medrano (SELLATS JAM)
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 border-b border-[#E7E2D8] pb-1.5">
                      <span className="sm:col-span-4 font-medium text-[#1C1917]">
                        {lang === 'ca' ? 'Finalitat:' : 'Finalidad:'}
                      </span>
                      <span className="sm:col-span-8 text-[#57534E]">
                        {lang === 'ca'
                          ? 'Respondre la vostra consulta i elaborar el pressupost sol·licitat'
                          : 'Responder a tu consulta y elaborar el presupuesto solicitado'}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 border-b border-[#E7E2D8] pb-1.5">
                      <span className="sm:col-span-4 font-medium text-[#1C1917]">
                        {lang === 'ca' ? 'Legitimació:' : 'Legitimación:'}
                      </span>
                      <span className="sm:col-span-8 text-[#57534E]">
                        {lang === 'ca'
                          ? 'Consentiment de la persona interessada'
                          : 'Consentimiento de la persona interesada'}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 border-b border-[#E7E2D8] pb-1.5">
                      <span className="sm:col-span-4 font-medium text-[#1C1917]">
                        {lang === 'ca' ? 'Destinataris:' : 'Destinatarios:'}
                      </span>
                      <span className="sm:col-span-8 text-[#57534E]">
                        {lang === 'ca'
                          ? 'Proveïdors tecnològics com a encarregats (CRM, correu, allotjament). Transferències als EUA amb garanties adequades'
                          : 'Proveedores tecnológicos como encargados (CRM, correo, alojamiento). Transferencias a EE. UU. con garantías adecuadas'}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 border-b border-[#E7E2D8] pb-1.5">
                      <span className="sm:col-span-4 font-medium text-[#1C1917]">
                        {lang === 'ca' ? 'Drets:' : 'Derechos:'}
                      </span>
                      <span className="sm:col-span-8 text-[#57534E]">
                        {lang === 'ca'
                          ? 'Accedir, rectificar i suprimir les dades, així com altres drets, com s’explica a la informació addicional'
                          : 'Acceder, rectificar y suprimir los datos, así como otros derechos, como se explica en la información adicional'}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 pt-0.5">
                      <span className="sm:col-span-4 font-medium text-[#1C1917]">
                        {lang === 'ca' ? 'Informació addicional:' : 'Información adicional:'}
                      </span>
                      <span className="sm:col-span-8 text-[#57534E]">
                        {lang === 'ca' ? (
                          <>
                            Consulteu la{' '}
                            <a
                              href={LEGAL_LINKS.ca.privacy}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline text-[#1C1917] hover:text-[#8C3A18] font-medium"
                            >
                              Política de privacitat
                            </a>
                          </>
                        ) : (
                          <>
                            Consulta la{' '}
                            <a
                              href={LEGAL_LINKS.es.privacy}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline text-[#1C1917] hover:text-[#8C3A18] font-medium"
                            >
                              Política de privacidad
                            </a>
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Privacy Consent Checkbox (unmarked by default) */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer text-[11px] text-[#57534E]">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 rounded border-[#DDD8CE] text-[#1C1917] focus:ring-0 focus:outline-none"
                    />
                    <span>
                      {lang === 'ca' ? (
                        <>
                          He llegit i accepto la{' '}
                          <a
                            href={LEGAL_LINKS.ca.privacy}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="underline text-[#1C1917] hover:text-[#8C3A18] font-medium"
                          >
                            Política de privacitat
                          </a>
                          .
                        </>
                      ) : (
                        <>
                          He leído y acepto la{' '}
                          <a
                            href={LEGAL_LINKS.es.privacy}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="underline text-[#1C1917] hover:text-[#8C3A18] font-medium"
                          >
                            Política de privacidad
                          </a>
                          .
                        </>
                      )}
                    </span>
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full mt-4 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#1C1917] hover:bg-[#2E2A27] disabled:bg-stone-400 rounded transition-colors shadow-xs cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <span>{lang === 'ca' ? 'Trametent petició...' : 'Enviando petición...'}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{lang === 'ca' ? 'Demanar valoració sense compromís' : 'Solicitar valoración sin compromiso'}</span>
                    </>
                  )}
                </button>

                <p className="text-[10px] text-[#A8A29E] text-center pt-2">
                  {lang === 'ca'
                    ? 'Protecció de dades: Les dades facilitades no es cedeixen a tercers ni s’utilitzen per a publicitat.'
                    : 'Protección de datos: Los datos facilitados no se ceden a terceros ni se usan para publicidad.'}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
