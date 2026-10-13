import React from 'react';
import { Language } from '../types';
import { Eraser, Beaker, Check, AlertCircle } from 'lucide-react';

interface WhyItMattersProps {
  lang: Language;
}

export const WhyItMatters: React.FC<WhyItMattersProps> = ({ lang }) => {
  return (
    <section className="py-20 bg-[#F8F7F4] border-b border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-[#8C3A18] uppercase mb-2">
            {lang === 'ca' ? 'Rigor i mètode tècnic' : 'Rigor y método técnico'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917] mb-4 text-balance">
            {lang === 'ca'
              ? 'Un bon acabat comença abans d’aplicar el segellador.'
              : 'Un buen acabado comienza antes de aplicar el sellador.'}
          </h2>
          <p className="text-base text-[#57534E] leading-relaxed">
            {lang === 'ca'
              ? 'Moltes fallades en les juntes no són culpa del producte, sinó d’una preparació superficial deficient o d’una elecció equivocada del material. Un resultat durador i net requereix seguir tres principis fonamentals.'
              : 'Muchos fallos en las juntas no se deben al producto, sino a una preparación deficiente o una elección equivocada del material. Un resultado duradero y limpio exige cumplir tres principios fundamentales.'}
          </p>
        </div>

        {/* 3 Steps breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Box 1 */}
          <div className="bg-[#FBFBF9] p-8 rounded-lg border border-[#E7E2D8] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded bg-[#EFECE6] text-[#8C3A18] flex items-center justify-center mb-6">
                <Eraser className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#8C3A18] tracking-widest uppercase block mb-1">
                {lang === 'ca' ? 'Fase 01' : 'Fase 01'}
              </span>
              <h3 className="text-lg font-bold text-[#1C1917] mb-3">
                {lang === 'ca' ? 'Sanejament profund del suport' : 'Saneamiento profundo del soporte'}
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                {lang === 'ca'
                  ? 'Retiram el segellador vell al 100%. Eliminam pols, restes grasses i tractam químicament les espores de floridura perquè el nou cordó s’adhereixi sobre matèria sana.'
                  : 'Retiramos el sellador viejo al 100%. Eliminamos polvo, grasas y tratamos químicamente las esporas de moho para que el nuevo cordón asiente sobre soporte sano.'}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F0ECE1] text-[11px] text-[#78716C]">
              {lang === 'ca'
                ? 'Evita que el nou segellador es desprengui al cap de pocs mesos.'
                : 'Evita que el nuevo sellador se desprenda a los pocos meses.'}
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-[#FBFBF9] p-8 rounded-lg border border-[#E7E2D8] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded bg-[#EFECE6] text-[#8C3A18] flex items-center justify-center mb-6">
                <Beaker className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#8C3A18] tracking-widest uppercase block mb-1">
                {lang === 'ca' ? 'Fase 02' : 'Fase 02'}
              </span>
              <h3 className="text-lg font-bold text-[#1C1917] mb-3">
                {lang === 'ca' ? 'Química i compatibilitat' : 'Química y compatibilidad'}
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                {lang === 'ca'
                  ? 'No tota la silicona serveix per a tot. La pedra natural mallorquina o el marbre requereixen fórmules sense plastificants per no deixar taques; la fusta i façana demanen polímers d’alta elasticitat.'
                  : 'No cualquier silicona vale para todo. La piedra natural mallorquina o el mármol precisan fórmulas libres de plastificantes para no manchar; madera y fachada requieren polímeros elásticos.'}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F0ECE1] text-[11px] text-[#78716C]">
              {lang === 'ca'
                ? 'Respecte absolut pels materials nobles i sense migració d’olis.'
                : 'Respeto absoluto por los materiales nobles y sin migración de aceites.'}
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-[#FBFBF9] p-8 rounded-lg border border-[#E7E2D8] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded bg-[#EFECE6] text-[#8C3A18] flex items-center justify-center mb-6">
                <Check className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#8C3A18] tracking-widest uppercase block mb-1">
                {lang === 'ca' ? 'Fase 03' : 'Fase 03'}
              </span>
              <h3 className="text-lg font-bold text-[#1C1917] mb-3">
                {lang === 'ca' ? 'Perfilat manual precís' : 'Perfilado manual preciso'}
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                {lang === 'ca'
                  ? 'Un cordó recte, continu i sense rebaves. L’allisat es fa amb la pressió justa perquè la junta quedi còncava o plana segons el desguàs d’aigua necessari.'
                  : 'Un cordón recto, continuo y sin rebabas. El alisado se realiza con la presión justa para que la junta quede cóncava o plana según el drenaje requerido.'}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F0ECE1] text-[11px] text-[#78716C]">
              {lang === 'ca'
                ? 'Acabat que llueix a la vista i no acumula aigua ni brutícia.'
                : 'Acabado que luce a la vista y no retiene agua ni suciedad.'}
            </div>
          </div>
        </div>

        {/* Technical Callout */}
        <div className="mt-10 p-4 bg-[#EFECE6] rounded-lg border border-[#DDD8CE] flex items-center gap-3 text-xs text-[#57534E]">
          <AlertCircle className="w-4 h-4 text-[#8C3A18] shrink-0" />
          <span>
            {lang === 'ca'
              ? 'Consell professional: Si un operari us proposa posar silicona directament damunt de la junta antiga sense retirar-la prèviament, esteu pagant per un problema que tornarà a sortir en poques setmanes.'
              : 'Consejo profesional: Si alguien le propone aplicar silicona directamente encima de la junta vieja sin retirarla previamente, está pagando por un problema que reaparecerá en pocas semanas.'}
          </span>
        </div>
      </div>
    </section>
  );
};
