import React, { useState } from 'react';
import { Language } from '../types';
import heroImg from '../assets/images/hero_sealant_joint_1791291619034.jpg';
import bathImg from '../assets/images/bathroom_shower_joint_1791291641497.jpg';
import kitchenImg from '../assets/images/kitchen_counter_joint_1791291652340.jpg';
import windowImg from '../assets/images/carpentry_window_joint_1791291674705.jpg';
import facadeImg from '../assets/images/facade_stone_joint_1791291684149.jpg';
import poolImg from '../assets/images/pool_joint_seal_1791361320674.jpg';
import boatImg from '../assets/images/boat_deck_caulking_1791361331901.jpg';
import { Info, Sliders, Maximize2, X } from 'lucide-react';

interface DetailGalleryProps {
  lang: Language;
}

export const DetailGallery: React.FC<DetailGalleryProps> = ({ lang }) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeZoomImage, setActiveZoomImage] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'residencial' | 'piscines' | 'nautica'>('all');

  const galleryItems = [
    {
      img: poolImg,
      category: 'piscines',
      material: {
        ca: 'Junta de coronament de piscina i pedra natural',
        es: 'Junta de coronación de piscina y piedra natural',
      },
      tag: { ca: 'Piscines', es: 'Piscinas' },
    },
    {
      img: boatImg,
      category: 'nautica',
      material: {
        ca: 'Segellat nàutic de regates en tarima de teca',
        es: 'Sellado náutico de ranuras en tarima de teca',
      },
      tag: { ca: 'Nàutica', es: 'Náutica' },
    },
    {
      img: heroImg,
      category: 'residencial',
      material: {
        ca: 'Junta entre pedra calcària i fusta natural',
        es: 'Junta entre piedra caliza y madera natural',
      },
      tag: { ca: 'Transició noble', es: 'Transición noble' },
    },
    {
      img: bathImg,
      category: 'residencial',
      material: {
        ca: 'Segellat sanitari transparent en mampara de vidre',
        es: 'Sellado sanitario transparente en mampara de vidrio',
      },
      tag: { ca: 'Vidre & Ceràmica', es: 'Vidrio & Cerámica' },
    },
    {
      img: kitchenImg,
      category: 'residencial',
      material: {
        ca: 'Junta de precisió en taulell de marbre i paret',
        es: 'Junta de precisión en encimera de mármol y pared',
      },
      tag: { ca: 'Cuines', es: 'Cocinas' },
    },
    {
      img: windowImg,
      category: 'residencial',
      material: {
        ca: 'Segellat perimetral fusteria de fusta i paredat',
        es: 'Sellado perimetral carpintería de madera y mampostería',
      },
      tag: { ca: 'Fusteries', es: 'Carpinterías' },
    },
    {
      img: facadeImg,
      category: 'residencial',
      material: {
        ca: 'Junta de moviment arquitectònica en façana exterior',
        es: 'Junta de movimiento arquitectónica en fachada exterior',
      },
      tag: { ca: 'Façana', es: 'Fachada' },
    },
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (categoryFilter === 'all') return true;
    return item.category === categoryFilter;
  });

  return (
    <section className="py-20 bg-[#FBFBF9] border-b border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider text-[#8C3A18] uppercase mb-2">
              {lang === 'ca' ? 'Galeria de precisió' : 'Galería de precisión'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917] mb-3">
              {lang === 'ca'
                ? 'El detall en primer pla'
                : 'El detalle en primer plano'}
            </h2>
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
              {lang === 'ca'
                ? 'Aprecieu la regularitat, la continuïtat del traç i la netedat en la trobada entre diferents materials: residencial, piscines i nàutica.'
                : 'Aprecie la regularidad, la continuidad del trazo y la limpieza en el encuentro entre diferentes materiales: residencial, piscinas y náutica.'}
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs text-[#78716C] bg-[#F8F7F4] p-2.5 rounded border border-[#E7E2D8]">
            <Info className="w-4 h-4 text-[#8C3A18] shrink-0" />
            <span>
              {lang === 'ca'
                ? 'Imatges de referència arquitectònica preparades per actualitzar amb feines pròpies de SELLATS JAM.'
                : 'Imágenes de referencia arquitectónica listas para actualizar con trabajos propios de SELLATS JAM.'}
            </span>
          </div>
        </div>

        {/* Category Filter for Gallery: Residencial, Piscines, Nàutica */}
        <div className="mb-8 flex flex-wrap items-center gap-1.5 p-1 bg-[#EFECE6] rounded-lg border border-[#DDD8CE] max-w-fit">
          <button
            onClick={() => setCategoryFilter('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer whitespace-nowrap ${
              categoryFilter === 'all'
                ? 'bg-white text-[#1C1917] font-semibold shadow-xs'
                : 'text-[#78716C] hover:text-[#1C1917]'
            }`}
          >
            {lang === 'ca' ? 'Totes les mostres' : 'Todas las muestras'}
          </button>
          <button
            onClick={() => setCategoryFilter('residencial')}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer whitespace-nowrap ${
              categoryFilter === 'residencial'
                ? 'bg-white text-[#1C1917] font-semibold shadow-xs'
                : 'text-[#78716C] hover:text-[#1C1917]'
            }`}
          >
            {lang === 'ca' ? 'Residencial' : 'Residencial'}
          </button>
          <button
            onClick={() => setCategoryFilter('piscines')}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer whitespace-nowrap ${
              categoryFilter === 'piscines'
                ? 'bg-white text-[#1C1917] font-semibold shadow-xs'
                : 'text-[#78716C] hover:text-[#1C1917]'
            }`}
          >
            {lang === 'ca' ? 'Piscines' : 'Piscinas'}
          </button>
          <button
            onClick={() => setCategoryFilter('nautica')}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer whitespace-nowrap ${
              categoryFilter === 'nautica'
                ? 'bg-white text-[#1C1917] font-semibold shadow-xs'
                : 'text-[#78716C] hover:text-[#1C1917]'
            }`}
          >
            {lang === 'ca' ? 'Nàutica' : 'Náutica'}
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-lg overflow-hidden border border-[#E7E2D8] bg-[#EFECE6] flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.material[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <button
                  onClick={() => setActiveZoomImage(item.img)}
                  className="absolute bottom-3 right-3 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  title="Ampliar imatge"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="p-4 bg-white border-t border-[#E7E2D8] flex items-center justify-between text-xs">
                <span className="font-medium text-[#1C1917] truncate mr-2">
                  {item.material[lang]}
                </span>
                <span className="text-[#8C3A18] text-[11px] font-semibold uppercase tracking-wider shrink-0">
                  {item.tag[lang]}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Before & After Architecture Showcase Module */}
        <div className="p-6 sm:p-8 rounded-lg bg-[#F8F7F4] border border-[#DDD8CE]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8C3A18] uppercase tracking-wider mb-1">
                <Sliders className="w-3.5 h-3.5" />
                <span>
                  {lang === 'ca'
                    ? 'Mòdul comparatiu: Abans i després de la renovació'
                    : 'Módulo comparativo: Antes y después de la renovación'}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1C1917]">
                {lang === 'ca'
                  ? 'La transformació d’una junta vella a un acabat professional'
                  : 'La transformación de una junta envejecida a un acabado profesional'}
              </h3>
            </div>
            <span className="text-xs text-[#78716C] bg-white px-3 py-1.5 rounded border border-[#DDD8CE]">
              {lang === 'ca'
                ? 'Feu lliscar el control per comparar'
                : 'Deslice el control para comparar'}
            </span>
          </div>

          {/* Interactive slider element */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[380px] rounded-lg overflow-hidden border border-[#E7E2D8] select-none bg-stone-900">
            {/* "After" pristine image */}
            <img
              src={bathImg}
              alt="Després: Junta neta i renovada"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 z-10 px-2.5 py-1 text-xs font-semibold text-white bg-black/70 backdrop-blur-xs rounded">
              {lang === 'ca' ? 'DESPRÉS: Segellat nou polit' : 'DESPUÉS: Sellado nuevo pulido'}
            </div>

            {/* "Before" overlay with clip path */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={bathImg}
                alt="Abans: Junta vella degradada"
                className="absolute inset-0 w-full h-full object-cover filter contrast-125 sepia-50 brightness-75 grayscale-25"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 z-10 px-2.5 py-1 text-xs font-semibold text-white bg-amber-950/80 backdrop-blur-xs rounded">
                {lang === 'ca' ? 'ABANS: Silicona vella deteriorada' : 'ANTES: Silicona vieja deteriorada'}
              </div>
            </div>

            {/* Drag Handle Bar */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-xl cursor-ew-resize flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-white text-[#1C1917] shadow-lg flex items-center justify-center text-xs font-bold border border-[#DDD8CE]">
                ↔
              </div>
            </div>

            {/* Native range slider for accessible interaction */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label={
                lang === 'ca'
                  ? 'Control lliscant comparatiu abans i després'
                  : 'Control deslizante comparativo antes y después'
              }
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            />
          </div>

          <p className="mt-4 text-xs text-[#78716C] text-center">
            {lang === 'ca'
              ? 'SELLATS JAM retira per complet el cordó anterior, desinfecta contra bacteris i floridura i perfila una nova junta impermeable d’aspecte impecable en banys, piscines i tarimes d’embarcacions.'
              : 'SELLATS JAM retira por completo el cordón anterior, desinfecta contra bacterias y moho y perfila una nueva junta estanca de aspecto impecable en baños, piscinas y tarimas de embarcaciones.'}
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeZoomImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-xs"
          onClick={() => setActiveZoomImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={activeZoomImage}
              alt="Detall ampliat"
              className="max-w-full max-h-[85vh] rounded object-contain"
            />
            <button
              onClick={() => setActiveZoomImage(null)}
              className="absolute top-3 right-3 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
