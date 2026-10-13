import { ServiceItem, FaqItem } from '../types';

// Asset references for easily swappable imagery
import heroImg from '../assets/images/hero_sealant_joint_1791291619034.jpg';
import bathImg from '../assets/images/bathroom_shower_joint_1791291641497.jpg';
import kitchenImg from '../assets/images/kitchen_counter_joint_1791291652340.jpg';
import windowImg from '../assets/images/carpentry_window_joint_1791291674705.jpg';
import facadeImg from '../assets/images/facade_stone_joint_1791291684149.jpg';
import poolImg from '../assets/images/pool_joint_seal_1791361320674.jpg';
import boatImg from '../assets/images/boat_deck_caulking_1791361331901.jpg';
import tarimaImg from '../assets/images/tarima_flotant_junta_1791479083994.jpg';

export const BUSINESS_CONFIG = {
  brandName: 'SELLATS JAM',
  descriptor: {
    ca: 'Especialistes en juntes i segellats per al sector residencial, piscines i nàutica',
    es: 'Especialistas en juntas y sellados para el sector residencial, piscinas y náutica',
  },
  tagline: {
    ca: 'El detall que marca la diferència.',
    es: 'El detalle que marca la diferencia.',
  },
  // Contact details
  phone: '+34 678 748 445',
  phoneDisplay: '+34 678 748 445',
  whatsappNumber: '34678748445', // Format sense espais per wa.me
  email: 'sellatsjam@gmail.com',
  locationRegion: 'Mallorca, Illes Balears',
  primaryZones: ['Pla de Mallorca', 'Raiguer', 'Llevant', 'Palma i tota l\'illa'],
  experienceYears: 20, // Més de 20 anys d'experiència professional
};

export const THREE_DOMAINS = [
  {
    id: 'residencial',
    title: { ca: 'Residencial', es: 'Residencial' },
    headline: {
      ca: 'Juntes i segellats per a espais residencials',
      es: 'Juntas y sellados para espacios residenciales',
    },
    description: {
      ca: 'Banys, cuines, finestres, tarimes flotants, vidres i façanes.',
      es: 'Baños, cocinas, ventanas, tarimas flotantes, vidrios y fachadas.',
    },
    serviceFilter: 'interior',
  },
  {
    id: 'piscines',
    title: { ca: 'Piscines', es: 'Piscinas' },
    headline: {
      ca: 'Segellats cuidats fins al darrer detall',
      es: 'Sellados cuidados hasta el último detalle',
    },
    description: {
      ca: 'Renovació i execució de juntes en piscines.',
      es: 'Renovación y ejecución de juntas en piscinas.',
    },
    serviceFilter: 'piscines',
  },
  {
    id: 'nautica',
    title: { ca: 'Nàutica', es: 'Náutica' },
    headline: {
      ca: 'Precisió en cada metre de tarima',
      es: 'Precisión en cada metro de tarima',
    },
    description: {
      ca: 'Segellat i renovació de juntes en tarimes d’embarcacions.',
      es: 'Sellado y renovación de juntas en tarimas de embarcaciones.',
    },
    serviceFilter: 'nautica',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'banys',
    slug: { ca: 'segellat-de-banys', es: 'sellado-de-banos' },
    title: {
      ca: 'Segellat de banys i zones humides',
      es: 'Sellado de baños y zonas húmedas',
    },
    shortDescription: {
      ca: 'Juntes de dutxes, banyeres, lavabos, sanitaris i zones exposades a l’aigua amb acabat estètic impecable i estanqueïtat garantida.',
      es: 'Juntas de duchas, bañeras, lavabos, sanitarios y zonas húmedas con acabado estético impecable y estanqueidad garantizada.',
    },
    fullDescription: {
      ca: 'Els banys exigeixen una precisió extrema. Una junta mal aplicada no només fa lleig amb floridura i brutícia, sinó que pot generar filtracions ocultes a les parets o al forjat. Treballam amb segelladors sanitaris professionals d’alta adherència i resistència al vapor d’aigua, garantint un cordó homogeni, recte i fàcil de netejar.',
      es: 'Los baños exigen máxima precisión. Una junta mal ejecutada no solo afea el espacio con moho y suciedad, sino que puede provocar filtraciones ocultas en muros y forjados. Trabajamos con selladores sanitarios profesionales de alta adherencia y resistencia a la humedad, logrando un cordón homogéneo, recto y fácil de mantener.',
    },
    problemsSolved: {
      ca: [
        'Filtracions d’aigua al voltant del plat de dutxa o banyera.',
        'Juntes enfosquides per fongs o despreses amb el pas del temps.',
        'Acabats irregulars que retenen calç i brutícia.',
        'Separació entre taulell del lavabo i enrajolat.',
      ],
      es: [
        'Filtraciones de agua alrededor del plato de ducha o bañera.',
        'Juntas ennegrecidas por moho o despegadas con el tiempo.',
        'Acabados irregulares que acumulan cal y suciedad.',
        'Separación entre encimera del lavabo y alicatado.',
      ],
    },
    processSteps: {
      ca: [
        'Eliminació completa del segellador anterior i neteja en profunditat dels residus.',
        'Desgreixatge i assecat tècnic de la superfície.',
        'Delimitació i aplicació del segellador sanitari professional adequat.',
        'Perfilat manual de precisió i revisió final de l’acabat.',
      ],
      es: [
        'Retirada completa del sellador anterior y limpieza profunda de residuos.',
        'Desengrasado y secado técnico de la superficie.',
        'Delimitación y aplicación del sellador sanitario profesional adecuado.',
        'Perfilado manual de precisión y revisión final del acabado.',
      ],
    },
    benefits: {
      ca: [
        'Cordó uniforme sense rugositats que evita l’acumulació de bacteris.',
        'Estanqueïtat fiable que protegeix l’estructura del bany.',
        'Acabat visualment polit que revalora l’estètica de la ceràmica.',
      ],
      es: [
        'Cordón uniforme sin rugosidades que previene la proliferación bacteriana.',
        'Estanqueidad fiable que protege la estructura del baño.',
        'Acabado visualmente pulido que realza la estética de la cerámica.',
      ],
    },
    materialsNote: {
      ca: 'Cal valorar el tipus de revestiment (porcellànic, pedra natural, microciment o resina) per triar la formulació química que no taqui ni danyi el material.',
      es: 'Es necesario valorar el tipo de revestimiento (porcelánico, piedra natural, microcemento o resina) para seleccionar la formulación química idónea que no manche ni degrade el soporte.',
    },
    faqs: [
      {
        q: {
          ca: 'Quant de temps he d’esperar per dutxar-me després del segellat?',
          es: '¿Cuánto tiempo hay que esperar para usar la ducha tras el sellado?',
        },
        a: {
          ca: 'Depèn del material emprat i de la ventilació del bany, però habitualment recomanam entre 24 i 48 hores per garantir un curat complet i durador.',
          es: 'Depende del producto aplicado y de la ventilación del baño, pero habitualmente recomendamos entre 24 y 48 horas para un curado completo y duradero.',
        },
      },
      {
        q: {
          ca: 'Podeu retirar la silicona negra amb floridura sense ratllar el plat de dutxa?',
          es: '¿Se puede retirar la silicona negra con moho sin rayar el plato de ducha?',
        },
        a: {
          ca: 'Sí. Utilitzam eines específiques i tècniques manuals que no fan malbé l’esmalt, la resina ni el marbre.',
          es: 'Sí. Utilizamos herramientas específicas y técnicas manuales que no dañan el esmalte, la resina ni el mármol.',
        },
      },
    ],
    image: bathImg,
    imageAlt: {
      ca: 'Detall de segellat professional entre mampara de vidre i rajola de bany a Mallorca',
      es: 'Detalle de sellado profesional entre mampara de vidrio y azulejo de baño en Mallorca',
    },
  },
  {
    id: 'cuines',
    slug: { ca: 'segellat-de-cuines', es: 'sellado-de-cocinas' },
    title: {
      ca: 'Segellat de cuines i taulells',
      es: 'Sellado de cocinas y encimeras',
    },
    shortDescription: {
      ca: 'Unions entre taulells, parets, frontals, piques i mobiliari amb acabats subtils i resistència al greix i la neteja diària.',
      es: 'Uniones entre encimeras, paredes, frontales, fregaderos y mobiliario con acabados sutiles y resistencia a la grasa y limpieza diaria.',
    },
    fullDescription: {
      ca: 'A la cuina, la trobada entre el taulell (marbre, granit, quars, fusta o porcellànic) i la paret o el mobiliari requereix una línia de segellat fina i exacta. Un segellat gruixut o mal rematat arruïna el disseny d’una bona cuina. Cuidam el to, la textura i la flexibilitat del segellador per harmonitzar amb els materials.',
      es: 'En la cocina, el encuentro entre la encimera (mármol, granito, cuarzo, madera o porcelánico) y la pared o mobiliario requiere una línea de sellado fina y exacta. Un sellado basto o mal rematado perjudica el diseño de una buena cocina. Cuidamos el tono, la textura y la elasticidad del producto para armonizar con los materiales.',
    },
    problemsSolved: {
      ca: [
        'Filtracions d’aigua darrere de la pica cap a l’interior del moble.',
        'Acumulació de restes d’aliments o greix a la junta del taulell.',
        'Separació de juntes per dilatacions tèrmiques o assentament de mobles.',
      ],
      es: [
        'Filtraciones de agua tras el fregadero hacia el interior del mueble.',
        'Acumulación de restos de alimentos o grasa en la junta de la encimera.',
        'Separación de juntas por dilatación térmica o asentamiento del mobiliario.',
      ],
    },
    processSteps: {
      ca: [
        'Avaluació del material del taulell (especial atenció a pedres poroses o fusta).',
        'Desengreixat químic neutre i eliminació de restes.',
        'Aplicació d’un cordó finíssim i continu.',
        'Acabat net que no sobresurt més del necessari per complir la funció.',
      ],
      es: [
        'Evaluación del material de encimera (especial atención a piedras porosas o madera).',
        'Desengrasado químico neutro y eliminación de restos.',
        'Aplicación de un cordón fino y continuo.',
        'Acabado limpio que no sobresale más de lo necesario para cumplir su función.',
      ],
    },
    benefits: {
      ca: [
        'Protecció del mobiliari davant de la humitat i inflaments.',
        'Línia de segellat discreta que manté la puresa de línies de la cuina.',
        'Fàcil neteja i manteniment diari.',
      ],
      es: [
        'Protección del mobiliario frente a humedades e hinchamientos.',
        'Línea de sellado discreta que preserva la pureza de líneas de la cocina.',
        'Fácil limpieza y mantenimiento diario.',
      ],
    },
    materialsNote: {
      ca: 'A pedres naturals com el marbre o la pedra calcària mallorquina, s’utilitzen segelladors lliures de plastificants per evitar taques d’oli en les vores.',
      es: 'En piedras naturales como el mármol o la caliza mallorquina, se utilizan selladores libres de plastificantes para evitar manchas de migración en los bordes.',
    },
    faqs: [
      {
        q: {
          ca: 'Es pot escollir el color del segellat per coincidir amb el taulell?',
          es: '¿Se puede elegir el color del sellado para que coincida con la encimera?',
        },
        a: {
          ca: 'Sí, disposem de diferents tons professionals (blancs, beixos, grisos, antracita o translúcid) per adaptar-nos a cada acabat.',
          es: 'Sí, disponemos de diversos tonos profesionales (blancos, beiges, grises, antracita o traslúcido) para adaptarnos a cada acabado.',
        },
      },
    ],
    image: kitchenImg,
    imageAlt: {
      ca: 'Detall de junta de segellat entre taulell de pedra i paret de cuina',
      es: 'Detalle de junta de sellado entre encimera de piedra y pared de cocina',
    },
  },
  {
    id: 'finestres-fusteries',
    slug: { ca: 'segellat-de-finestres-i-fusteries', es: 'sellado-de-ventanas-y-carpinterias' },
    title: {
      ca: 'Segellat de finestres i fusteries',
      es: 'Sellado de ventanas y carpinterías',
    },
    shortDescription: {
      ca: 'Juntes perimetrals entre fusteria i obra, portes, finestres d’alumini, PVC o fusta amb alta elasticitat i estanqueïtat.',
      es: 'Juntas perimetrales entre carpintería y obra, puertas, ventanas de aluminio, PVC o madera con alta elasticidad y estanqueidad.',
    },
    fullDescription: {
      ca: 'El perímetre entre el marc de la finestra i l’obertura d’obra és un punt crític d’aïllament tèrmic, acústic i d’estanqueïtat a l’aigua de pluja. Col·laboram habitualment amb fusters i instal·ladors per executar aquest tancament amb precisió, absorbint les dilatacions dels materials sense que la junta es trenqui ni es desenganxi.',
      es: 'El perímetro entre el cerco de la ventana y la pared es un punto crítico de aislamiento térmico, acústico y estanqueidad al agua de lluvia. Colaboramos habitualmente con carpinteros e instaladores para ejecutar este cierre con precisión, absorbiendo las dilataciones de los materiales sin fisuras ni desprendimientos.',
    },
    problemsSolved: {
      ca: [
        'Filtracions d’aigua de pluja impulsada pel vent a les façanes.',
        'Entrada d’aire i pèrdua d’eficiència tèrmica o acústica.',
        'Clivelles a la unió entre marc i paret produïdes pel moviment de dilatació.',
      ],
      es: [
        'Filtraciones de agua de lluvia impulsada por el viento en fachadas.',
        'Entrada de corrientes de aire y pérdida de confort térmico o acústico.',
        'Fisuras en el encuentro entre marco y obra por movimientos de dilatación.',
      ],
    },
    processSteps: {
      ca: [
        'Comprovació de l’amplada i profunditat de la junta perimetral.',
        'Col·locació de cordó de fons cel·lular si la geometria ho requereix.',
        'Emprimació o preparació segons el tipus de fusteria i suport.',
        'Injecció regular i allisat artesanal amb acabat ferm.',
      ],
      es: [
        'Comprobación de anchura y profundidad de la junta perimetral.',
        'Colocación de cordón de fondo celular si la geometría lo requiere.',
        'Imprimación o preparación según tipo de carpintería y soporte.',
        'Inyección regular y alisado artesanal con acabado firme.',
      ],
    },
    benefits: {
      ca: [
        'Comportament elàstic permanent en cicles d’estiu i hivern.',
        'Integració visual neta tant en fusta noble com en alumini o PVC.',
        'Millora de l’estabilitat i estanqueïtat de la instal·lació.',
      ],
      es: [
        'Comportamiento elástico permanente en ciclos de verano e invierno.',
        'Integración visual limpia tanto en madera noble como en aluminio o PVC.',
        'Mejora de la estabilidad y estanqueidad de la instalación.',
      ],
    },
    materialsNote: {
      ca: 'S’escullen polímers híbrids o silicones neutres d’alta gamma segons si la junta estarà pintada o exposada directament a la radiació solar.',
      es: 'Se eligen polímeros híbridos o siliconas neutras de alta gama según si la junta será pintada o permanecerá expuesta a la radiación solar.',
    },
    faqs: [
      {
        q: {
          ca: 'Es pot pintar a sobre del segellat?',
          es: '¿Se puede pintar encima del sellado?',
        },
        a: {
          ca: 'Només si s’utilitza un polímer o màstic pintable específic; les silicones tradicionals no admeten pintura. Per això valorem prèviament les necessitats del projecte.',
          es: 'Solo si se utiliza un polímero o masilla pintable específica; las siliconas tradicionales no admiten pintura. Por eso valoramos previamente las necesidades de la obra.',
        },
      },
    ],
    image: windowImg,
    imageAlt: {
      ca: 'Segellat perimetral de finestra de fusta amb paret de pedra a Mallorca',
      es: 'Sellado perimetral de ventana de madera con pared de piedra en Mallorca',
    },
  },
  {
    id: 'tarimes-flotants',
    slug: { ca: 'sellats-de-tarimes-flotants', es: 'sellados-de-tarimas-flotantes' },
    title: {
      ca: 'Sellats de tarimes flotants',
      es: 'Sellados de tarimas flotantes',
    },
    shortDescription: {
      ca: 'Realitzam segellats professionals en tarimes flotants i parquet, cuidant especialment les juntes, unions i acabats per aconseguir un resultat net, discret i durador.',
      es: 'Realizamos sellados profesionales en tarimas flotantes y parquet, cuidando especialmente las juntas, uniones y acabados para conseguir un resultado limpio, discreto y duradero.',
    },
    fullDescription: {
      ca: 'Realitzam segellats professionals en tarimes flotants i parquet, especialment en juntes, unions, perímetres, sòcols i trobades on sigui necessari aconseguir un acabat net, professional i durador. Entenem el comportament natural de dilatació de la fusta i dels paviments laminats o sintètics, aplicant solucions elàstiques que segellen amb màxima discreció estètica sense bloquejar els moviments necessaris del material.',
      es: 'Realizamos sellados profesionales en tarimas flotantes y parquet, especialmente en juntas, uniones, perímetros, rodapiés y encuentros donde sea necesario conseguir un remate limpio, profesional y duradero. Comprendemos el comportamiento natural de dilatación de la madera y de los pavimentos laminados o sintéticos, aplicando soluciones elásticas que sellan con máxima discreción estética sin bloquear los movimientos necesarios del material.',
    },
    problemsSolved: {
      ca: [
        'Separació visual antiestètica en unions i perímetres de tarima o sòcols.',
        'Entrada de brutícia, pols o humitat domèstica per juntes desprotegides.',
        'Acabats irregulars o cordons massa gruixuts que enlletgeixen el parquet.',
        'Necessitat de segellat elàstic compatible amb les dilatacions del paviment.',
      ],
      es: [
        'Separación visual antiestética en uniones y perímetros de tarima o rodapiés.',
        'Entrada de suciedad, polvo o humedad doméstica por juntas desprotegidas.',
        'Acabados irregulares o cordones excesivos que afean el suelo de madera.',
        'Necesidad de sellado elástico compatible con las dilataciones del pavimento.',
      ],
    },
    processSteps: {
      ca: [
        'Inspecció del tipus de tarima, fusta o laminat i toleràncies de dilatació.',
        'Neteja i desempolsat minuciós de les ranures i línies d’unió.',
        'Selecció del to i elasticitat del segellador adequat per a cada fusta.',
        'Aplicació mil·limètrica i perfilat discret per a un acabat net i uniforme.',
      ],
      es: [
        'Inspección del tipo de tarima, madera o laminado y tolerancias de dilatación.',
        'Limpieza y desempolvado minucioso de las ranuras y líneas de unión.',
        'Selección del tono y elasticidad del sellador adecuado a cada madera.',
        'Aplicación milimétrica y perfilado discreto para un acabado limpio y uniforme.',
      ],
    },
    benefits: {
      ca: [
        'Segellat de juntes i unions amb precisió i integració estètica total.',
        'Acabats nets, fins i discrets que respecten la noblesa del paviment.',
        'Solucions adaptades a cada tipus de tarima flotant o parquet.',
        'Treball precís i professional amb materials d’alta elasticitat i durabilitat.',
      ],
      es: [
        'Sellado de juntas y uniones con precisión e integración estética total.',
        'Acabados limpios, finos y discretos que respetan la nobleza del pavimento.',
        'Soluciones adaptadas a cada tipo de tarima flotante o parquet.',
        'Trabajo preciso y profesional con materiales de alta elasticidad y durabilidad.',
      ],
    },
    materialsNote: {
      ca: 'Treballam amb polímers d’alta elasticitat i segelladors específics per a fusta en tons coordinats (roure, faig, noguer, blanc o translúcid) que no esquincen el material ni deixen residus.',
      es: 'Trabajamos con polímeros de alta elasticidad y selladores específicos para madera en tonos coordinados (roble, haya, nogal, blanco o traslúcido) que no agrietan el material ni dejan residuos.',
    },
    faqs: [
      {
        q: {
          ca: 'El segellat permet el moviment natural de la tarima flotant?',
          es: '¿El sellado permite el movimiento natural de la tarima flotante?',
        },
        a: {
          ca: 'Sí. Utilitzam segelladors d’alta elasticitat específics que acompanyen les microdilatacions del parquet sense esquerdar-se ni desprendre’s.',
          es: 'Sí. Utilizamos selladores de alta elasticidad específicos que acompañan las microdilataciones del suelo sin agrietarse ni despegarse.',
        },
      },
      {
        q: {
          ca: 'Feis segellats en sòcols, marcs de portes i unions amb altres paviments?',
          es: '¿Realizáis sellados en rodapiés, marcos de puertas y uniones con otros pavimentos?',
        },
        a: {
          ca: 'Sí. És precisament en aquests punts de trobada on un segellat net i precís marca la diferència visual d’una instal·lació ben acabada.',
          es: 'Sí. Es precisamente en estos encuentros donde un sellado limpio y preciso marca la diferencia visual de una instalación bien rematada.',
        },
      },
    ],
    image: tarimaImg,
    imageAlt: {
      ca: 'Detall de segellat professional net i discret en junta de tarima flotant a Mallorca',
      es: 'Detalle de sellado profesional limpio y discreto en junta de tarima flotante en Mallorca',
    },
  },
  {
    id: 'vidres',
    slug: { ca: 'segellat-de-vidres', es: 'sellado-de-vidrios' },
    title: {
      ca: 'Segellat de vidres i mampares',
      es: 'Sellado de vidrios y mamparas',
    },
    shortDescription: {
      ca: 'Unions invisibles o delimitades de vidre amb vidre, perfileries metàl·liques i envidraments arquitectònics.',
      es: 'Uniones invisibles o delimitadas de vidrio con vidrio, perfilerías metálicas y acristalamientos arquitectónicos.',
    },
    fullDescription: {
      ca: 'El treball amb vidre és el test definitiu de la precisió d’un segellador. Qualsevol bombolla, rebliment o excés queda immediatament a la vista per la transparència del suport. Oferim suport tècnic especialitzat a vidriers i decoradors per a divisions fixes, baranes de vidre i mampares.',
      es: 'El trabajo con vidrio es la prueba definitiva de la precisión de un sellador. Cualquier burbuja, rebaba o exceso queda a la vista por la transparencia del material. Ofrecemos soporte técnico especializado a vidrieros e interioristas para divisiones fijas, barandillas de vidrio y mamparas.',
    },
    problemsSolved: {
      ca: [
        'Rebaves visibles que embruten la puresa d’envidraments interiors.',
        'Desadhesió del segellador sobre el vidre per neteja deficient.',
        'Gotejos a la base de mampares i separadors de bany.',
      ],
      es: [
        'Rebabas visibles que afean la pureza de cerramientos de vidrio.',
        'Falta de adherencia en el vidrio por preparación deficiente.',
        'Goteos en la base de mamparas y separadores de ducha.',
      ],
    },
    processSteps: {
      ca: [
        'Neteja i desengreixat de vidre amb productes que no deixin pel·lícula.',
        'Encintat de protecció de màxima precisió mil·limètrica.',
        'Injecció controlada sense bosses d’aire.',
        'Allisat d’un sol traç continu.',
      ],
      es: [
        'Limpieza y desengrasado de vidrio con limpiadores sin residuos.',
        'Enmascarado milimétrico de protección.',
        'Inyección controlada sin bolsas de aire.',
        'Alisado en un solo trazo continuo.',
      ],
    },
    benefits: {
      ca: [
        'Línies de segellat netes i rectes que respecten la lleugeresa del vidre.',
        'Total resistència al contacte amb detergents i aigua.',
        'Treball conjunt coordinat amb el calendari del vidrier.',
      ],
      es: [
        'Líneas de sellado limpias y rectas que respetan la ligereza del vidrio.',
        'Total resistencia al contacto con detergentes y agua.',
        'Trabajo coordinado con el calendario del instalador vidriero.',
      ],
    },
    materialsNote: {
      ca: 'Utilitzam silicones neutres d’alta claredat òptica i màxima adherència vidre-metall.',
      es: 'Utilizamos siliconas neutras de alta claridad óptica y máxima adherencia vidrio-metal.',
    },
    faqs: [
      {
        q: {
          ca: 'Feis treballs directament per a tallers de vidre a Mallorca?',
          es: '¿Realizáis trabajos directamente para cristalerías en Mallorca?',
        },
        a: {
          ca: 'Sí, col·laboram habitualment amb vidriers que prefereixen subcontractar l’acabat final de segellat per assegurar un resultat impecable.',
          es: 'Sí, colaboramos habitualmente con cristalerías que prefieren subcontratar el sellado final para garantizar un resultado impecable.',
        },
      },
    ],
    image: bathImg,
    imageAlt: {
      ca: 'Segellat de vidre i mampara amb precisió artesanal',
      es: 'Sellado de vidrio y mampara con precisión artesanal',
    },
  },
  {
    id: 'facanes',
    slug: { ca: 'segellat-de-facanes', es: 'sellado-de-fachadas' },
    title: {
      ca: 'Segellat de façanes i juntes constructives',
      es: 'Sellado de fachadas y juntas constructivas',
    },
    shortDescription: {
      ca: 'Juntes de dilatació, elements prefabricats, coronaments i unions exteriors tractades amb sistemes resistents a la intempèrie.',
      es: 'Juntas de dilatación, elementos prefabricados, coronaciones y uniones exteriores tratadas con sistemas resistentes a la intemperie.',
    },
    fullDescription: {
      ca: 'A Mallorca, el sol intens i la salinitat marítima sotmeten les juntes de façana a un desgast extrem. Executam el segellat de juntes de moviment i unions arquitectòniques emprant materials d’alta resistència als raigs UV i amb capacitat d’acompanyar les dilatacions estructurals.',
      es: 'En Mallorca, el sol intenso y la salinidad ambiental someten las juntas de fachada a una exigencia extrema. Ejecutamos el sellado de juntas de movimiento y encuentros arquitectónicos empleando materiales de alta resistencia UV y capacidad elástica frente a dilataciones estructurales.',
    },
    problemsSolved: {
      ca: [
        'Esquerdes en juntes de dilatació de façana.',
        'Filtracions d’aigua cap a l’aïllament tèrmic exterior.',
        'Degradació del material per la radiació solar i salnitre.',
      ],
      es: [
        'Agrietamiento en juntas de dilatación de fachada.',
        'Entrada de agua hacia el aislamiento o la cámara de aire.',
        'Degradación prematura del sellante por radiación solar y salinidad.',
      ],
    },
    processSteps: {
      ca: [
        'Inspecció del parament i comprovació de l’amplada de junta.',
        'Neteja mecànica de vores i eliminació de pols.',
        'Instal·lació de fons de junta per evitar adherència a tres cares.',
        'Aplicació del màstic de poliuretà o polímer i acabat texturat si escau.',
      ],
      es: [
        'Inspección del soporte y comprobación de anchura de junta.',
        'Limpieza mecánica de bordes y eliminación de polvo.',
        'Instalación de fondo de junta para evitar adherencia a tres caras.',
        'Aplicación de masilla de poliuretano o polímero y acabado adecuado.',
      ],
    },
    benefits: {
      ca: [
        'Resistència a la intempèrie i a la radiació solar de les Balears.',
        'Comportament elàstic homologat per a moviments estructurals.',
        'Protecció duradora de l’envolupant de l’edifici.',
      ],
      es: [
        'Resistencia al clima balear y a la intensa radiación solar.',
        'Comportamiento elástico homologado para movimientos estructurales.',
        'Protección duradera de la envolvente del edificio.',
      ],
    },
    materialsNote: {
      ca: 'S’avalua cada cas segons l’alçada, l’accés i la compatibilitat amb el morter, la pedra o el revestiment de la façana.',
      es: 'Se evalúa cada proyecto según accesibilidad, altura y compatibilidad con el mortero, la piedra o el revestimiento de fachada.',
    },
    faqs: [
      {
        q: {
          ca: 'Feis segellat de façanes a tota l’illa?',
          es: '¿Realizáis sellado de fachadas en toda la isla?',
        },
        a: {
          ca: 'Sí, ens desplacem a qualsevol municipi de Mallorca prèvia valoració de l’abast i mitjans necessaris.',
          es: 'Sí, nos desplazamos a cualquier municipio de Mallorca previa valoración del alcance y medios necesarios.',
        },
      },
    ],
    image: facadeImg,
    imageAlt: {
      ca: 'Detall de junta de façana arquitectònica a Mallorca',
      es: 'Detalle de junta de fachada arquitectónica en Mallorca',
    },
  },
  {
    id: 'piscines',
    slug: { ca: 'sellat-de-piscines', es: 'sellado-de-piscinas' },
    title: {
      ca: 'Sellat de piscines',
      es: 'Sellado de piscinas',
    },
    shortDescription: {
      ca: 'Segellat perimetral, coronaments, juntes de rajola i renovació d’unions en piscines amb sistemes resistents a l’aigua, clor i sal.',
      es: 'Sellado perimetral, coronaciones, juntas de gresite y renovación de uniones en piscinas con sistemas resistentes al agua, cloro y sal.',
    },
    fullDescription: {
      ca: 'El segellat de piscines és una especialitat que ens agrada especialment i en la qual cuidam molt el resultat final: un bon segellat és part d’un bon acabat. Treballam en la renovació i execució de juntes i segellats de piscines a Mallorca, cuidant especialment la preparació de les superfícies i l’acabat final. No afirmam que qualsevol problema d’una piscina es resolgui amb un segellat: valoram cada cas segons els materials, l’estat del suport i el tipus d’unió per aplicar el sistema idoni.',
      es: 'El sellado de piscinas es una especialidad que nos gusta especialmente y en la que cuidamos con esmero el resultado final: un buen sellado es parte de un buen acabado. Trabajamos en la renovación y ejecución de juntas y sellados de piscinas en Mallorca, cuidando especialmente la preparación de las superficies y el acabado final. No afirmamos que cualquier problema de una piscina se resuelva con un sellado: valoramos cada caso según los materiales, el estado del soporte y el tipo de unión para aplicar el sistema idóneo.',
    },
    problemsSolved: {
      ca: [
        'Juntes de coronament esquerdades o despreses pel moviment tèrmic.',
        'Pèrdua de material de segellat entre la pedra de coronació i la platja de piscina.',
        'Filtracions en unions i trobades que es poden tractar mitjançant segellat tècnic.',
        'Degradació del segellador antic per l’acció continuada del clor, la salmorra o els UV.',
      ],
      es: [
        'Juntas de coronación agrietadas o desprendidas por dilatación térmica.',
        'Pérdida de material de sellado entre la piedra de coronación y la playa de la piscina.',
        'Filtraciones en uniones y encuentros tratables mediante sellado técnico.',
        'Degradación del sellador antiguo por la acción continuada del cloro, la sal o los rayos UV.',
      ],
    },
    processSteps: {
      ca: [
        'Valoració de l’estat de les juntes i de les condicions del suport.',
        'Retirada del material deteriorat, quan sigui necessari.',
        'Neteja i preparació exhaustiva de les superfícies.',
        'Aplicació del sistema de segellat adequat resistent a químics i immersió.',
        'Revisió i acabat final polit i uniforme.',
      ],
      es: [
        'Valoración del estado de las juntas y de las condiciones del soporte.',
        'Retirada del material deteriorado, cuando sea necesario.',
        'Limpieza y preparación exhaustiva de las superficies.',
        'Aplicación del sistema de sellado adecuado resistente a químicos e inmersión.',
        'Revisión y acabado final pulido y uniforme.',
      ],
    },
    benefits: {
      ca: [
        'Línia de segellat neta, homogènia i suau al tacte descalç.',
        'Resistència certificada a la radiació solar intensa i als tractaments de clor o cloració salina a Mallorca.',
        'Protecció duradora de les pedres de coronament i materials circumdants.',
      ],
      es: [
        'Línea de sellado limpia, homogénea y suave al tacto descalzo.',
        'Resistencia certificada a la radiación solar intensa y a los tratamientos de cloro o salinos en Mallorca.',
        'Protección duradera de las piedras de coronación y pavimentos perimetrales.',
      ],
    },
    materialsNote: {
      ca: 'Cada piscina i cada junta s’han de valorar segons els materials (pedra de Santanyí, porcellànic, mosaic vítric o formigó), l’estat de la superfície i el sistema de tractament de l’aigua.',
      es: 'Cada piscina y cada junta se deben valorar según los materiales (piedra natural, porcelánico, gresite u hormigón), el estado de la superficie y el sistema de tratamiento del agua.',
    },
    faqs: [
      {
        q: {
          ca: 'Feis segellats de piscines?',
          es: '¿Realizáis sellados de piscinas?',
        },
        a: {
          ca: 'Sí. Realitzam treballs de segellat i renovació de juntes en piscines. Valoram cada cas per determinar l’estat de les superfícies i el sistema de segellat més adequat.',
          es: 'Sí. Realizamos trabajos de sellado y renovación de juntas en piscinas. Valoramos cada caso para determinar el estado de las superficies y el sistema de sellado más adecuado.',
        },
      },
      {
        q: {
          ca: 'Podeu retirar el segellat antic d’una piscina?',
          es: '¿Podéis retirar el sellado antiguo de una piscina?',
        },
        a: {
          ca: 'Sí. Quan sigui necessari, retiram el material deteriorat, preparam la superfície i aplicam el nou segellat.',
          es: 'Sí. Cuando sea necesario, retiramos el material deteriorado, preparamos la superficie y aplicamos el nuevo sellado.',
        },
      },
      {
        q: {
          ca: 'Qualsevol filtració d’una piscina es pot solucionar amb un nou segellat?',
          es: '¿Cualquier filtración de una piscina se puede solucionar con un nuevo sellado?',
        },
        a: {
          ca: 'No necessàriament. Cada cas s’ha de valorar. Una filtració pot tenir diferents causes i un segellat només és una solució adequada quan el problema es troba en una junta o unió que es pugui tractar mitjançant aquest sistema.',
          es: 'No necesariamente. Cada caso se debe valorar. Una filtración puede tener diferentes causas y un sellado solo es una solución adecuada cuando el problema se encuentra en una junta o unión que se pueda tratar mediante este sistema.',
        },
      },
    ],
    image: poolImg,
    imageAlt: {
      ca: 'Segellat de coronament i juntes de piscina d’alta qualitat a Mallorca',
      es: 'Sellado de coronación y juntas de piscina de alta calidad en Mallorca',
    },
  },
  {
    id: 'tarimes-embarcacions',
    slug: { ca: 'tarimes-dembarcacions', es: 'tarimas-de-embarcaciones' },
    title: {
      ca: 'Tarimes d’embarcacions',
      es: 'Tarimas de embarcaciones',
    },
    shortDescription: {
      ca: 'Segellat i renovació de juntes en tarimes de teca i cobertes d’embarcacions amb precisió mil·limètrica i materials de grau marí.',
      es: 'Sellado y renovación de juntas en tarimas de teca y cubiertas de embarcaciones con precisión milimétrica y materiales de grado marino.',
    },
    fullDescription: {
      ca: 'Precisió i acabats nets, també a bord. SELLATS JAM està especialitzat en el segellat i acabat de tarimes d’embarcacions a Mallorca, especialment en treballs on la precisió, la netedat i la resistència del segellat són prioritàries. No som un taller de reparació integral d’embarcacions ni de fusteria estructural: la nostra especialitat és exclusivament el segellat, les juntes i els acabats nets. Retiram el material de segellat antic quan cal, netejam i preparam les regates i aplicam nous sistemes elàstics d’alta resistència al medi marí.',
      es: 'Precisión y acabados limpios, también a bordo. SELLATS JAM está especializado en el sellado y acabado de tarimas de embarcaciones en Mallorca, especialmente en trabajos donde la precisión, la limpieza y la resistencia del sellado son prioritarias. No somos un taller de reparación integral de embarcaciones ni carpintería estructural: nuestra especialidad es exclusivamente el sellado, las juntas y los acabados impecables. Retiramos el material de sellado antiguo cuando es necesario, limpiamos y preparamos las ranuras y aplicamos nuevos sistemas elásticos de alta resistencia al medio marino.',
    },
    problemsSolved: {
      ca: [
        'Juntes de tarima de teca resseques, despreses o que sobresurten del pla.',
        'Pèrdua d’estanqueïtat i filtració d’humitat sota la fusta de la coberta.',
        'Cordons de calafatament deteriorats per la sal i el sol que embruten la coberta.',
        'Necessitat de renovació neta de juntes sense danyar la fusta circumdant.',
      ],
      es: [
        'Juntas de tarima de teca resecas, despegadas o que sobresalen del nivel.',
        'Pérdida de estanqueidad y filtración de humedad bajo la madera de la cubierta.',
        'Cordones de calafateo deteriorados por la sal y el sol que afean la cubierta.',
        'Necesidad de renovación limpia de juntas sin dañar la madera contigua.',
      ],
    },
    processSteps: {
      ca: [
        'Valoració individualitzada de les tarimes i estat de les juntes.',
        'Retirada metòdica del segellat deteriorat.',
        'Preparació i neteja en profunditat de la ranura de fusta.',
        'Aplicació del nou segellador elàstic de grau marí.',
        'Acabat i revisió final d’alta precisió.',
      ],
      es: [
        'Valoración individualizada de las tarimas y estado de las juntas.',
        'Retirada metódica del sellado deteriorado.',
        'Preparación y limpieza en profundidad de la ranura de madera.',
        'Aplicación del nuevo sellador elástico de grado marino.',
        'Acabado y revisión final de alta precisión.',
      ],
    },
    benefits: {
      ca: [
        'Línies de junta negres o blanques completament uniformes i rectes.',
        'Elasticitat permanent adaptada als moviments i dilatacions a bord.',
        'Materials resistents a la salinitat extrema, netejadors nàutics i radiació solar.',
      ],
      es: [
        'Líneas de junta negras o blancas completamente uniformes y rectas.',
        'Elasticidad permanente adaptada a los movimientos y dilataciones a bordo.',
        'Materiales resistentes a la salinidad extrema, limpiadores náuticos y radiación solar.',
      ],
    },
    materialsNote: {
      ca: 'Emprenem polímers i màstics nàutics professionals d’adherència demostrada en fusta de teca que no s’estoven amb la calor ni deixen taques en el rentat.',
      es: 'Empleamos polímeros y masillas náuticas profesionales de adherencia demostrada en madera de teca que no se ablandan con el calor ni manchan durante el lavado.',
    },
    faqs: [
      {
        q: {
          ca: 'Feis segellat de tarimes d’embarcacions?',
          es: '¿Realizáis sellado de tarimas de embarcaciones?',
        },
        a: {
          ca: 'Sí. Estam especialitzats en el segellat i la renovació de juntes de tarimes d’embarcacions, cuidant especialment la preparació de la superfície i l’acabat final.',
          es: 'Sí. Estamos especializados en el sellado y la renovación de juntas de tarimas de embarcaciones, cuidando especialmente la preparación de la superficie y el acabado final.',
        },
      },
      {
        q: {
          ca: 'Retirau el segellat antic de les tarimes?',
          es: '¿Retiráis el sellado antiguo de las tarimas?',
        },
        a: {
          ca: 'Sí. Quan el treball ho requereix, retiram el material antic, preparam la superfície i executam el nou segellat.',
          es: 'Sí. Cuando el trabajo lo requiere, retiramos el material antiguo, preparamos la superficie y ejecutamos el nuevo sellado.',
        },
      },
      {
        q: {
          ca: 'Treballau en qualsevol tipus d’embarcació?',
          es: '¿Trabajáis en cualquier tipo de embarcación?',
        },
        a: {
          ca: 'Valoram cada treball individualment segons el tipus d’embarcació, les superfícies, els materials i l’estat de les juntes.',
          es: 'Valoramos cada trabajo individualmente según el tipo de embarcación, las superficies, los materiales y el estado de las juntas.',
        },
      },
    ],
    image: boatImg,
    imageAlt: {
      ca: 'Segellat artesanal de juntes en tarima d’embarcació a Mallorca',
      es: 'Sellado artesanal de juntas en tarima de embarcación en Mallorca',
    },
  },
  {
    id: 'renovacio',
    slug: { ca: 'renovacio-de-juntes-deteriorades', es: 'renovacion-de-juntas-deterioradas' },
    title: {
      ca: 'Renovació de juntes deteriorades',
      es: 'Renovación de juntas deterioradas',
    },
    shortDescription: {
      ca: 'Retirada rigorosa del material antic, sanejament profund de superfícies i aplicació del nou segellador d’alta qualitat.',
      es: 'Retirada rigurosa del material antiguo, saneamiento profundo de superficies y aplicación del nuevo sellador de alta calidad.',
    },
    fullDescription: {
      ca: 'Posar silicona a sobre d’una junta vella o bruta és el pitjor error: es desenganxarà ràpidament i la floridura o humitat continuarà viva a sota. El nostre servei de renovació es basa en un procediment metòdic: retirem el 100% del segellador deteriorat, sanejem i desinfectem el suport abans d’aplicar el nou cordó professional, tant en habitatges com en piscines o tarimes nàutiques.',
      es: 'Aplicar silicona sobre una junta vieja o sucia es el peor error: se desprenderá enseguida y el moho o humedad seguirá viva debajo. Nuestro servicio de renovación sigue un procedimiento riguroso: retiramos el 100% del sellador deteriorado, saneamos y desinfectamos el soporte antes de aplicar el nuevo cordón profesional, tanto en viviendas como en piscinas o tarimas náuticas.',
    },
    problemsSolved: {
      ca: [
        'Silicona vella groguenca, esquerdada o despresa.',
        'Olors a humitat o floridura incrustada que no marxa amb neteja convencional.',
        'Juntes fetes de manera matussera que cal refer amb nivell professional.',
      ],
      es: [
        'Silicona vieja amarillenta, agrietada o desprendida.',
        'Olores a humedad o moho incrustado que no sale con la limpieza habitual.',
        'Juntas ejecutadas de forma descuidada que requieren corrección profesional.',
      ],
    },
    processSteps: {
      ca: [
        'Tall i extracció manual metòdica del segellador antic.',
        'Tractament químic per dissoldre les pel·lícules residuals.',
        'Desinfecció i sanejament de la junta.',
        'Assecat complet i aplicació del nou segellador professional d’alta qualitat.',
      ],
      es: [
        'Corte y extracción manual metódica del sellador antiguo.',
        'Tratamiento químico para disolver películas residuales.',
        'Desinfección y saneamiento de la junta.',
        'Secado completo y aplicación del nuevo sellador profesional de alta calidad.',
      ],
    },
    benefits: {
      ca: [
        'Aspecte totalment renovat sense necessitat de fer obres molestes.',
        'Eliminació de floridura i brutícia acumulada.',
        'Adherència impecable i durabilitat recuperada.',
      ],
      es: [
        'Aspecto completamente renovado sin necesidad de obras molestas.',
        'Eliminación de moho y suciedad acumulada.',
        'Adherencia impecable y durabilidad restablecida.',
      ],
    },
    materialsNote: {
      ca: 'Cada suport requereix raspadors i dissolvents compatibles que no matisen el vidre ni ratllin les superfícies esmaltades, fusta noble o polides.',
      es: 'Cada soporte requiere rasquetas y disolventes compatibles que no maticen el vidrio ni rayen superficies esmaltadas, madera noble o pulidas.',
    },
    faqs: [
      {
        q: {
          ca: 'Per què no serveix aplicar una capa nova a sobre de la silicona vella?',
          es: '¿Por qué no sirve poner una capa nueva encima de la silicona vieja?',
        },
        a: {
          ca: 'Perquè el segellador nou no s’adhereix correctament sobre material degradat i la humitat atrapada a sota continua danyant el suport. Retirar l’antiga és l’únic camí durador.',
          es: 'Porque el sellador nuevo no se adhiere correctamente sobre material degradado y la humedad atrapada debajo continúa afectando el soporte. Retirar la anterior es la única solución duradera.',
        },
      },
    ],
    image: heroImg,
    imageAlt: {
      ca: 'Procés meticulós de retirada i renovació de juntes de segellat a Mallorca',
      es: 'Proceso meticuloso de retirada y renovación de juntas de sellado en Mallorca',
    },
    isRenewal: true,
  },
  {
    id: 'reformes-professionals',
    slug: { ca: 'segellats-reformes-projectes-professionals', es: 'sellados-reformas-proyectos-profesionales' },
    title: {
      ca: 'Segellats per a reformes i projectes professionals',
      es: 'Sellados para reformas y proyectos profesionales',
    },
    shortDescription: {
      ca: 'Servei especialitzat per a reformistes, contractistes, instal·ladors i caps d’obra que volen un acabat final impecable abans de l’entrega.',
      es: 'Servicio especializado para reformistas, contratistas, instaladores y jefes de obra que exigen un remate final impecable antes de la entrega.',
    },
    fullDescription: {
      ca: 'En la fase final d’una reforma, construcció o posada a punt d’alta qualitat, els detalls de segellat marquen la percepció del client sobre tot el treball. Oferim un servei coordinat i puntual per a empreses de reformes, instal·ladors de piscines, tallers nàutics i caps d’obra que necessiten delegar el segellat d’espais complets a un especialista de confiança.',
      es: 'En la fase final de una reforma, construcción o puesta a punto de calidad, los detalles de sellado determinan la percepción del cliente sobre todo el trabajo. Ofrecemos un servicio coordinado y puntual para empresas de reformas, instaladores de piscinas, talleres náuticos y jefes de obra que prefieren delegar el sellado de espacios completos en un especialista de confianza.',
    },
    problemsSolved: {
      ca: [
        'Descoordinació de temps a l’entrega final d’obra o projecte.',
        'Acabats irregulars fets amb presses per altres oficis no especialitzats.',
        'Incidències postvenda per petites fuites d’aigua o segelladors desenganxats.',
      ],
      es: [
        'Falta de tiempo en el remate final antes de la entrega de obra o proyecto.',
        'Acabados irregulares ejecutados con prisas por gremios no especializados.',
        'Incidencias postventa por filtraciones o cordones desprendidos.',
      ],
    },
    processSteps: {
      ca: [
        'Planificació coordinada amb la data de tancament o entrega.',
        'Inspecció prèvia de tots els punts de segellat.',
        'Execució en bloc dels espais i juntes convingudes.',
        'Lliurament net sense residus llest per a la neteja final.',
      ],
      es: [
        'Planificación coordinada con la fecha de cierre o entrega.',
        'Inspección previa de todos los puntos de sellado.',
        'Ejecución en bloque de los espacios y juntas convenidas.',
        'Entrega limpia sin residuos lista para la limpieza final.',
      ],
    },
    benefits: {
      ca: [
        'Estalvi de temps per als equips professionals.',
        'Reducció total d’incidències i retocs posteriors.',
        'Acabats d’alt nivell que prestigien el projecte davant del client final.',
      ],
      es: [
        'Ahorro de tiempo para los equipos profesionales.',
        'Reducción drástica de repasos e incidencias posteriores.',
        'Acabados de alto nivel que prestigian la obra ante el cliente final.',
      ],
    },
    materialsNote: {
      ca: 'Coordinació tècnica prèvia per seleccionar la gamma de colors i característiques que coincideixin amb la memòria del projecte.',
      es: 'Coordinación técnica previa para seleccionar la gama de colores y características que coincidan con la memoria del proyecto.',
    },
    faqs: [
      {
        q: {
          ca: 'Com es planifiquen els terminis en obres amb dates límit?',
          es: '¿Cómo se planifican los plazos en obras con fechas límite?',
        },
        a: {
          ca: 'Agendam la intervenció amb antelació per acudir en la fase exacta on les superfícies estiguin preparades abans de la neteja final.',
          es: 'Agendamos la intervención con antelación para acudir en la fase exacta en que las superficies estén listas antes de la limpieza final.',
        },
      },
    ],
    image: heroImg,
    imageAlt: {
      ca: 'Projecte de reforma a Mallorca amb segellats professionals d’alta precisió',
      es: 'Proyecto de reforma en Mallorca con sellados profesionales de alta precisión',
    },
  },
];

export const GENERAL_FAQS: FaqItem[] = [
  {
    id: 'tipus-segellats',
    question: {
      ca: 'Quins tipus de segellats feim?',
      es: '¿Qué tipos de sellados realizamos?',
    },
    answer: {
      ca: 'Ens especialitzam en tres grans àmbits a Mallorca: residencial (banys, cuines, finestres, fusteries, tarimes flotants i parquet, vidres i façanes), piscines (segellat perimetral, coronaments i renovació d’unions) i nàutica (segellat i renovació de juntes en tarimes d’embarcacions). A més, realitzam la renovació integral de juntes deteriorades.',
      es: 'Nos especializamos en tres grandes ámbitos en Mallorca: residencial (baños, cocinas, ventanas, carpinterías, tarimas flotantes y parquet, vidrios y fachadas), piscinas (sellado perimetral, coronaciones y renovación de uniones) y náutica (sellado y renovación de juntas en tarimas de embarcaciones). Además, realizamos la renovación integral de juntas deterioradas.',
    },
  },
  {
    id: 'piscines-servei',
    question: {
      ca: 'Feis segellats de piscines?',
      es: '¿Realizáis sellados de piscinas?',
    },
    answer: {
      ca: 'Sí. Realitzam treballs de segellat i renovació de juntes en piscines. Valoram cada cas per determinar l’estat de les superfícies i el sistema de segellat més adequat.',
      es: 'Sí. Realizamos trabajos de sellado y renovación de juntas en piscinas. Valoramos cada caso para determinar el estado de las superficies y el sistema de sellado más adecuado.',
    },
  },
  {
    id: 'piscines-retirada',
    question: {
      ca: 'Podeu retirar el segellat antic d’una piscina?',
      es: '¿Podéis retirar el sellado antiguo de una piscina?',
    },
    answer: {
      ca: 'Sí. Quan sigui necessari, retiram el material deteriorat, preparam la superfície i aplicam el nou segellat.',
      es: 'Sí. Cuando sea necesario, retiramos el material deteriorado, preparamos la superficie y aplicamos el nuevo sellado.',
    },
  },
  {
    id: 'piscines-filtracio',
    question: {
      ca: 'Qualsevol filtració d’una piscina es pot solucionar amb un nou segellat?',
      es: '¿Cualquier filtración de una piscina se puede solucionar con un nuevo sellado?',
    },
    answer: {
      ca: 'No necessàriament. Cada cas s’ha de valorar. Una filtració pot tenir diferents causes i un segellat només és una solució adequada quan el problema es troba en una junta o unió que es pugui tractar mitjançant aquest sistema.',
      es: 'No necesariamente. Cada caso se debe valorar. Una filtración puede tener diferentes causas y un sellado solo es una solución adecuada cuando el problema se encuentra en una junta o unión que se pueda tratar mediante este sistema.',
    },
  },
  {
    id: 'nautica-servei',
    question: {
      ca: 'Feis segellat de tarimes d’embarcacions?',
      es: '¿Realizáis sellado de tarimas de embarcaciones?',
    },
    answer: {
      ca: 'Sí. Estam especialitzats en el segellat i la renovació de juntes de tarimes d’embarcacions, cuidant especialment la preparació de la superfície i l’acabat final.',
      es: 'Sí. Estamos especializados en el sellado y la renovación de juntas de tarimas de embarcaciones, cuidando especialmente la preparación de la superficie y el acabado final.',
    },
  },
  {
    id: 'nautica-retirada',
    question: {
      ca: 'Retirau el segellat antic de les tarimes?',
      es: '¿Retiráis el sellado antiguo de las tarimas?',
    },
    answer: {
      ca: 'Sí. Quan el treball ho requereix, retiram el material antic, preparam la superfície i executam el nou segellat.',
      es: 'Sí. Cuando el trabajo lo requiere, retiramos el material antiguo, preparamos la superficie y ejecutamos el nuevo sellado.',
    },
  },
  {
    id: 'nautica-tipus',
    question: {
      ca: 'Treballau en qualsevol tipus d’embarcació?',
      es: '¿Trabajáis en cualquier tipo de embarcación?',
    },
    answer: {
      ca: 'Valoram cada treball individualment segons el tipus d’embarcació, les superfícies, els materials i l’estat de les juntes.',
      es: 'Valoramos cada trabajo individualmente según el tipo de embarcación, las superficies, los materiales y el estado de las juntas.',
    },
  },
  {
    id: 'quan-renovar',
    question: {
      ca: 'Quan convé renovar una junta de silicona o segellador?',
      es: '¿Cuándo conviene renovar una junta de silicona o sellador?',
    },
    answer: {
      ca: 'Quan s’observa floridura negra que no surt amb la neteja, quan el cordó s’ha endurit o esquerdat, quan comença a separar-se del suport o davant de qualsevol indici de filtració d’aigua o humitat.',
      es: 'Cuando se observa moho negro incrustado que no desaparece al limpiar, cuando el cordón se ha endurecido o agrietado, cuando comienza a despegarse del soporte o ante cualquier indicio de filtración de agua o humedad.',
    },
  },
  {
    id: 'retirada-antiga',
    question: {
      ca: 'Retirau el segellador antic abans de posar-ne de nou?',
      es: '¿Retiráis el sellador antiguo antes de aplicar el nuevo?',
    },
    answer: {
      ca: 'Sempre. És un principi fonamental de la nostra feina. Mai apliquem segellador sobre material vell perquè no s’adhereix de manera fiable i amagaria fongs i humitat. El procés inclou retirada completa, desgreixatge i sanejament.',
      es: 'Siempre. Es un principio innegociable de nuestro trabajo. Nunca aplicamos sellador sobre material viejo porque carece de adherencia fiable y atraparía hongos y humedad. El proceso incluye retirada completa, desengrasado y saneamiento.',
    },
  },
  {
    id: 'materials-utilitzats',
    question: {
      ca: 'Quins materials utilitzau?',
      es: '¿Qué materiales utilizáis?',
    },
    answer: {
      ca: 'Treballam exclusivament amb segelladors professionals de primera qualitat (silicones neutres sanitàries, polímers híbrids d’alta elasticitat, màstics per a intempèrie i sistemes nàutics de grau marí), seleccionats rigorosament segons el material de suport de cada feina.',
      es: 'Trabajamos exclusivamente con selladores profesionales de primera calidad (siliconas neutras sanitarias, polímeros híbridos de alta elasticidad, masillas para intemperie y sistemas náuticos de grado marino), seleccionados según el material de soporte de cada trabajo.',
    },
  },
  {
    id: 'fusters-vidriers',
    question: {
      ca: 'Treballau amb professionals del sector?',
      es: '¿Trabajáis con profesionales del sector?',
    },
    answer: {
      ca: 'Sí, és una de les nostres prioritats de col·laboració. Oferim a fusters, vidriers, empreses de reformes, instal·ladors de piscines i professionals nàutics la tranquil·litat de delegar el segellat final a un especialista amb màxima puntualitat i acabat impecable.',
      es: 'Sí, es una de nuestras prioridades de colaboración. Ofrecemos a carpinteros, vidrieros, empresas de reformas, instaladores de piscinas y profesionales náuticos la tranquilidad de delegar el sellado final en un especialista con máxima puntualidad y acabado impecable.',
    },
  },
  {
    id: 'zones-mallorca',
    question: {
      ca: 'A quines zones de Mallorca arribau?',
      es: '¿A qué zonas de Mallorca dais servicio?',
    },
    answer: {
      ca: 'Donam cobertura a tota l’illa de Mallorca, amb especial presència comercial al Pla de Mallorca, el Raiguer i el Llevant, a més de Palma, ports esportius i la resta de municipis. El desplaçament a altres illes només es valora si resulta viable per al projecte.',
      es: 'Damos cobertura a toda la isla de Mallorca, con especial presencia comercial en el Pla de Mallorca, el Raiguer y el Llevant, además de Palma, puertos deportivos y el resto de municipios. El desplazamiento a otras islas solo se valora si resulta viable para el proyecto.',
    },
  },
  {
    id: 'demanar-pressupost',
    question: {
      ca: 'Com puc demanar pressupost?',
      es: '¿Cómo puedo pedir presupuesto?',
    },
    answer: {
      ca: 'Podeu escriure’ns per WhatsApp amb algunes fotografies de les juntes i les mides aproximades, telefonar-nos o omplir el formulari web. Us donarem una resposta clara i assessorament honest.',
      es: 'Puede escribirnos por WhatsApp adjuntando fotografías de las juntas y las medidas aproximadas, llamarnos por teléfono o completar el formulario web. Le daremos una respuesta clara y asesoramiento honesto.',
    },
  },
  {
    id: 'visita-previa',
    question: {
      ca: 'Cal fer una visita abans de valorar el treball?',
      es: '¿Es necesario realizar una visita antes de valorar el trabajo?',
    },
    answer: {
      ca: 'En molts casos és possible fer una primera estimació amb bones fotografies i la descripció del suport. En feines de piscines, façanes, cobertes d’embarcació o reformes completes, cal valorar les condicions in situ.',
      es: 'En muchos casos es posible realizar una primera estimación con fotografías claras y la descripción de los materiales. En piscinas, fachadas, cubiertas de embarcación o reformas integrales, se valoran las condiciones in situ.',
    },
  },
];

export const MALLORCA_MUNICIPALITIES = [
  'Sineu',
  'Inca',
  'Manacor',
  'Palma',
  'Algaida',
  'Montuïri',
  'Porreres',
  'Petra',
  'Binissalem',
  'Marratxí',
  'Llucmajor',
  'Felanitx',
  'Artà',
  'Sant Llorenç des Cardassar',
  'Son Servera',
  'Alcúdia',
  'Pollença',
  'Santa Maria del Camí',
  'Calvià',
  'Andratx (Port d\'Andratx)',
  'Altres municipis de Mallorca',
];
