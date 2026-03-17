export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  symptoms: string[];
  treatmentProcess: string[];
  benefits: string[];
  faq: ServiceFAQ[];
  relatedServices: string[];
  priceReference: string;
}

export const services: Service[] = [
  {
    slug: "terapia-miofuncional",
    title: "Terapia Miofuncional",
    metaTitle: "Terapia Miofuncional en Segovia | Alexandra Palacios Logopeda",
    metaDescription: "Especialista en terapia miofuncional en Segovia. Reeducación de la musculatura orofacial para mejorar masticación, deglución y respiración. +17 años de experiencia.",
    icon: "Utensils",
    shortDescription: "Especialidad en la reeducación de la musculatura orofacial para mejorar funciones como masticación y deglución.",
    fullDescription: `
      <h2>¿Qué es la terapia miofuncional?</h2>
      <p>La terapia miofuncional es mi especialidad principal y una de las áreas en las que he dedicado más años de formación y práctica clínica. Se trata de un conjunto de técnicas y ejercicios dirigidos a rehabilitar la musculatura orofacial — los músculos de la cara, la lengua, los labios y la mandíbula — que intervienen en funciones esenciales como la respiración, la masticación, la deglución y el habla.</p>
      <p>Cuando estos músculos no funcionan de forma coordinada o presentan debilidad, pueden aparecer problemas que afectan a la calidad de vida del paciente: dificultades para tragar, respiración bucal, maloclusiones dentarias o problemas de articulación del habla.</p>

      <h2>Mi enfoque de tratamiento</h2>
      <p>Con más de 17 años de experiencia en logopedia clínica, he desarrollado un enfoque personalizado que combina la evaluación minuciosa de cada caso con un plan de intervención adaptado a las necesidades específicas del paciente.</p>
      <p>Trabajo tanto con adultos como con niños. En el caso de los adultos, las alteraciones miofuncionales suelen estar asociadas a problemas de deglución (disfagia), parálisis facial o intervenciones quirúrgicas en la zona oral. En los niños, lo más frecuente es la deglución atípica, la respiración bucal y la aversión a ciertos alimentos.</p>
      <p>Cada sesión dura 40 minutos e incluyo ejercicios específicos que el paciente puede practicar en casa para acelerar los resultados. El compromiso del paciente con el trabajo diario es fundamental para el éxito del tratamiento.</p>

      <h2>¿Qué problemas trata la terapia miofuncional?</h2>
      <p>Esta terapia aborda un amplio rango de alteraciones que afectan a la musculatura de la cara y la boca. Los problemas más frecuentes que trato en mi consulta de Segovia incluyen trastornos de la deglución en adultos y niños, alteraciones respiratorias como la respiración bucal habitual, desequilibrios musculares que afectan a la posición de los dientes y la mandíbula, y dificultades en la masticación y la alimentación.</p>
      <p>Trabajo de forma cercana con otros profesionales de la salud — odontólogos, ortodoncistas, otorrinolaringólogos y pediatras — para ofrecer un tratamiento integral al paciente.</p>
    `,
    symptoms: [
      "Dificultad para tragar alimentos sólidos o líquidos",
      "Respiración habitual por la boca en lugar de la nariz",
      "Posición incorrecta de la lengua en reposo",
      "Problemas de masticación o dolor al comer",
      "Ronquidos o apnea del sueño",
      "Maloclusión dental o deformación del paladar",
      "Babeo excesivo en niños mayores de 2 años",
      "Rechazo a ciertos alimentos o texturas"
    ],
    treatmentProcess: [
      "Evaluación inicial completa de la musculatura orofacial y las funciones orales",
      "Diagnóstico personalizado y explicación detallada al paciente o familia",
      "Diseño del plan de intervención con objetivos específicos y medibles",
      "Sesiones semanales de 40 minutos con ejercicios progresivos",
      "Pautas y ejercicios para practicar en casa entre sesiones",
      "Revisiones periódicas para ajustar el tratamiento según la evolución"
    ],
    benefits: [
      "Mejora de la deglución y la alimentación",
      "Corrección de la respiración bucal",
      "Fortalecimiento de la musculatura orofacial",
      "Mejora de la postura lingual en reposo",
      "Apoyo al tratamiento ortodóncico",
      "Mayor calidad de vida y bienestar"
    ],
    faq: [
      {
        question: "¿Qué es la terapia miofuncional exactamente?",
        answer: "Es una rehabilitación centrada en fortalecer la musculatura orofacial que interviene en funciones como la respiración, deglución y articulación. Mediante ejercicios específicos, se reeducan estos músculos para que funcionen correctamente."
      },
      {
        question: "¿Cuántas sesiones necesitaré?",
        answer: "Depende de cada caso particular. Tras la evaluación inicial, te daré una estimación del número de sesiones necesarias. Lo habitual son entre 10 y 20 sesiones, aunque esto varía según la patología y la implicación del paciente con los ejercicios en casa."
      },
      {
        question: "¿La terapia miofuncional es solo para niños?",
        answer: "No, trabajo con pacientes de todas las edades. En adultos es especialmente útil tras un ictus, cirugías orales, parálisis facial o cuando hay problemas de deglución asociados a enfermedades neurológicas."
      },
      {
        question: "¿Se notan los resultados desde el principio?",
        answer: "Los primeros cambios suelen notarse a partir de las 3-4 primeras sesiones, siempre que el paciente sea constante con los ejercicios en casa. La mejoría es gradual y progresiva."
      }
    ],
    relatedServices: ["disfagia-adultos", "deglucion-infantil", "paralisis-facial"],
    priceReference: "Desde 40€/sesión"
  },

  {
    slug: "disfagia-adultos",
    title: "Tratamiento de Disfagia en Adultos",
    metaTitle: "Tratamiento Disfagia Adultos en Segovia | Alexandra Palacios",
    metaDescription: "Tratamiento especializado de disfagia en adultos en Segovia. Rehabilitación de la deglución tras ictus, enfermedades neurológicas y oncológicas. Evaluación completa.",
    icon: "Utensils",
    shortDescription: "Terapia específica en la deglución de adultos especialmente tras accidentes cerebrovasculares, enfermedades oncológicas y/o neurológicas.",
    fullDescription: `
      <h2>¿Qué es la disfagia?</h2>
      <p>La disfagia es la dificultad para tragar alimentos, líquidos o incluso la propia saliva. Es una condición que afecta significativamente a la calidad de vida del paciente y que, en casos graves, puede provocar desnutrición, deshidratación o neumonías por aspiración.</p>
      <p>En mi consulta de Segovia atiendo a pacientes adultos con disfagia derivada de diferentes causas: accidentes cerebrovasculares (ictus), enfermedades neurológicas como Parkinson, ELA o esclerosis múltiple, procesos oncológicos de cabeza y cuello, y también el deterioro asociado al envejecimiento.</p>

      <h2>Mi abordaje de la disfagia</h2>
      <p>El tratamiento de la disfagia requiere un trabajo diario, minucioso y específico. Mi método se basa en tres pilares fundamentales: el aprendizaje y automatización de pautas seguras de alimentación, el entrenamiento de posturas compensatorias que favorecen la deglución y la realización de ejercicios específicos para tonificar la musculatura oral.</p>
      <p>El objetivo es progresivo: partimos de la situación actual del paciente y trabajamos paso a paso hasta conseguir una dieta lo más normalizada posible, con todos los volúmenes y texturas de alimentos. Cada caso es diferente, y por eso la evaluación inicial es tan importante para diseñar un plan de tratamiento realista y efectivo.</p>

      <h2>La evaluación inicial</h2>
      <p>La primera sesión dedicada a la evaluación de la disfagia es más extensa que una sesión habitual. Realizo una valoración completa que incluye la observación directa de la deglución con diferentes texturas y volúmenes, la evaluación de la musculatura oral, el análisis de los reflejos de protección y la revisión del historial médico del paciente.</p>
      <p>Con toda esta información, diseño un plan de intervención personalizado que incluye la adaptación de la dieta si es necesario, los ejercicios específicos a realizar y las pautas de seguridad para la alimentación.</p>
    `,
    symptoms: [
      "Tos o atragantamiento frecuente al comer o beber",
      "Sensación de que la comida se queda atascada en la garganta",
      "Cambios en la voz después de tragar (voz húmeda)",
      "Pérdida de peso involuntaria",
      "Neumonías recurrentes",
      "Babeo o escape de alimento por la boca",
      "Necesidad de tragar varias veces para pasar el alimento",
      "Rechazo a comer o miedo a atragantarse"
    ],
    treatmentProcess: [
      "Evaluación especializada de la deglución con diferentes texturas y volúmenes",
      "Análisis de la musculatura oral y los reflejos de protección",
      "Adaptación de la dieta según el grado de disfagia",
      "Enseñanza de posturas compensatorias para deglutir de forma segura",
      "Ejercicios específicos para fortalecer la musculatura implicada en la deglución",
      "Seguimiento y ajuste progresivo hacia una dieta normalizada"
    ],
    benefits: [
      "Alimentación más segura y sin riesgo de aspiración",
      "Recuperación progresiva de texturas y volúmenes de alimentos",
      "Mayor autonomía en la alimentación",
      "Prevención de neumonías por aspiración",
      "Mejora del estado nutricional y la hidratación",
      "Mayor calidad de vida y confianza al comer"
    ],
    faq: [
      {
        question: "¿Cómo se trata la disfagia en adultos?",
        answer: "La disfagia se trabaja con un trabajo diario de aprendizaje y automatización de pautas de alimentación seguras, posturas compensatorias para favorecer la deglución y ejercicios específicos para tonificar la musculatura oral."
      },
      {
        question: "¿Cuánto cuesta la evaluación de disfagia?",
        answer: "La evaluación especializada de disfagia y deglución tiene un coste de 60€. Incluye valoración completa, análisis funcional, pruebas diagnósticas, plan de intervención y recomendaciones personalizadas."
      },
      {
        question: "¿Se puede curar la disfagia?",
        answer: "Depende de la causa. En muchos casos, como tras un ictus, es posible recuperar total o parcialmente la función deglutoria. En enfermedades degenerativas, el objetivo es mantener la mejor función posible y garantizar una alimentación segura."
      },
      {
        question: "¿Necesito derivación médica para tratarme de disfagia?",
        answer: "Aunque no es imprescindible, es recomendable disponer de informes médicos previos. En algunos casos puedo solicitar pruebas complementarias si lo considero necesario para la mejor recuperación."
      }
    ],
    relatedServices: ["terapia-miofuncional", "terapia-neurologica", "deglucion-infantil"],
    priceReference: "Evaluación: 60€ | Sesiones: desde 40€"
  },

  {
    slug: "deglucion-infantil",
    title: "Deglución Infantil y Aversión Alimentaria",
    metaTitle: "Deglución Infantil y Aversión Alimentaria | Logopeda Segovia",
    metaDescription: "Tratamiento de deglución atípica y aversión alimentaria en niños en Segovia. Especialista en respiración bucal, fisura labiopalatina y hábitos alimentarios.",
    icon: "Utensils",
    shortDescription: "Especialidad en niños con mala colocación lingual al tragar y en reposo, mejorando la alimentación y el desarrollo oral.",
    fullDescription: `
      <h2>Deglución atípica y problemas de alimentación en niños</h2>
      <p>La deglución atípica infantil es una de las consultas más frecuentes que recibo en mi consulta. Se produce cuando el niño coloca la lengua de forma incorrecta al tragar y en reposo, lo que puede provocar problemas dentales, dificultades en la alimentación y alteraciones en el desarrollo del habla.</p>
      <p>Muchos padres llegan a mi consulta preocupados porque su hijo tiene dificultades para comer ciertos alimentos, rechaza texturas nuevas, respira habitualmente por la boca o tiene problemas de articulación. Detrás de estos síntomas suele haber un desequilibrio en la musculatura orofacial que necesita ser tratado.</p>

      <h2>La aversión alimentaria infantil</h2>
      <p>La aversión a los alimentos es un problema más frecuente de lo que se piensa. No se trata simplemente de un niño caprichoso con la comida: hay una base sensorial y muscular que dificulta la aceptación de nuevos alimentos, texturas o sabores. Mi trabajo consiste en enseñar al niño nuevos hábitos para comer todo tipo de alimentos y disfrutarlos, utilizando técnicas lúdicas adaptadas a su edad.</p>

      <h2>Patologías que trato en niños</h2>
      <p>Mi experiencia de más de 17 años me ha permitido trabajar con una gran variedad de alteraciones infantiles relacionadas con la deglución y la alimentación. Trato a niños respiradores orales que necesitan aprender a respirar por la nariz, niños con deglución atípica que presentan malformaciones dentarias por la mala posición lingual, niños con fisura labio-palatina que requieren un abordaje especializado y niños con aversión a diferentes alimentos.</p>
      <p>En todos los casos, realizo una evaluación completa y diseño un plan de tratamiento con ejercicios específicos adaptados a la edad del niño, utilizando técnicas lúdicas para mantener su motivación. La adaptación de la dieta, cuando es necesaria, se hace de forma gradual y siempre en coordinación con la familia.</p>
    `,
    symptoms: [
      "El niño respira habitualmente por la boca",
      "Coloca la lengua entre los dientes al tragar o en reposo",
      "Rechaza alimentos nuevos o ciertas texturas de forma habitual",
      "Tiene dificultades para masticar alimentos sólidos",
      "Babea con frecuencia para su edad",
      "Presenta malformaciones dentarias o paladar ojival",
      "Tiene arcadas o vómitos al probar nuevos alimentos",
      "Le diagnosticaron fisura labio-palatina"
    ],
    treatmentProcess: [
      "Evaluación completa de la deglución, respiración y musculatura orofacial del niño",
      "Conversación detallada con los padres sobre hábitos alimentarios y preocupaciones",
      "Diseño de un plan de tratamiento con objetivos adaptados a la edad del niño",
      "Sesiones semanales de 40 minutos con técnicas lúdicas y motivadoras",
      "Adaptación gradual de la dieta si es necesario",
      "Pautas para la familia para trabajar en casa entre sesiones"
    ],
    benefits: [
      "Corrección de la posición lingual en reposo y al tragar",
      "Transición de respiración bucal a respiración nasal",
      "Aceptación progresiva de nuevos alimentos y texturas",
      "Mejora del desarrollo dental y maxilar",
      "Mayor autonomía en la alimentación",
      "Refuerzo positivo de la relación del niño con la comida"
    ],
    faq: [
      {
        question: "¿En qué consiste el tratamiento de deglución atípica?",
        answer: "Consiste en el aprendizaje y automatización de la colocación correcta de la lengua en reposo y al deglutir todo tipo de sólidos y líquidos. Se trabaja con ejercicios específicos adaptados a la edad del niño."
      },
      {
        question: "¿A partir de qué edad se puede tratar la deglución atípica?",
        answer: "Se puede empezar a trabajar desde edades tempranas, incluso con bebés que tienen dificultades con el agarre para amamantar. Lo ideal es consultar en cuanto se detecten los primeros síntomas, sin importar la edad."
      },
      {
        question: "¿Mi hijo es caprichoso con la comida o tiene aversión alimentaria?",
        answer: "La aversión alimentaria tiene una base sensorial y muscular. Si tu hijo rechaza sistemáticamente ciertas texturas, tiene arcadas con alimentos nuevos o solo acepta una gama muy limitada de comida, es recomendable una valoración logopédica."
      },
      {
        question: "¿Los padres participan en las sesiones?",
        answer: "Sí, la participación de la familia es fundamental. Doy pautas y ejercicios para practicar en casa. El éxito del tratamiento depende en gran parte del trabajo diario que se hace fuera de la consulta."
      }
    ],
    relatedServices: ["terapia-miofuncional", "disfagia-adultos", "terapia-articulacion"],
    priceReference: "Desde 40€/sesión"
  },

  {
    slug: "terapia-vocal",
    title: "Terapia Vocal y Entrenamiento de Voz",
    metaTitle: "Terapia Vocal en Segovia | Entrenamiento de Voz | Alexandra Palacios",
    metaDescription: "Terapia vocal para profesionales de la voz y personas con alteraciones vocales en Segovia. Disfonía, nódulos, rehabilitación vocal. Logopeda con +17 años.",
    icon: "Mic",
    shortDescription: "Entrenamiento diseñado para profesionales de la voz o personas con alteraciones vocales causadas por lesión o problemas funcionales.",
    fullDescription: `
      <h2>Terapia vocal especializada</h2>
      <p>La voz es nuestra herramienta de comunicación más importante y, para muchos profesionales, también es su herramienta de trabajo principal. Profesores, locutores, cantantes, actores, abogados, comerciales — todos ellos dependen de su voz a diario y están expuestos a un mayor riesgo de desarrollar problemas vocales.</p>
      <p>Mi terapia vocal está diseñada para dar herramientas prácticas y aplicables en el día a día, tanto para profesionales que quieren cuidar y optimizar su voz como para personas que ya presentan alteraciones vocales causadas por una lesión (nódulos, pólipos, edema) o por problemas funcionales (mala técnica vocal, sobreesfuerzo).</p>

      <h2>¿Cuándo necesitas terapia vocal?</h2>
      <p>Si notas que pierdes la voz con frecuencia, que tu voz suena ronca al final del día, que necesitas hacer esfuerzo para hablar o que no puedes mantener el tono durante periodos largos, es posible que necesites una valoración logopédica. Estos síntomas indican que estás usando tu voz de forma ineficiente o que ya existe una lesión que necesita tratamiento.</p>

      <h2>Mi método de trabajo</h2>
      <p>El tratamiento vocal comienza con una evaluación de tu patrón vocal: cómo respiras, cómo proyectas la voz, qué tensiones acumulas y cómo puedes modificar esos hábitos. A partir de ahí, diseño un programa de ejercicios personalizado que incluye técnicas de respiración, relajación laríngea, proyección vocal y cuidado preventivo de la voz.</p>
      <p>El objetivo no es solo tratar el problema actual, sino darte las herramientas para que puedas cuidar tu voz de forma autónoma a largo plazo.</p>
    `,
    symptoms: [
      "Pérdida de voz frecuente o ronquera habitual",
      "Esfuerzo al hablar o sensación de cansancio vocal",
      "Voz que no aguanta toda la jornada laboral",
      "Dolor o tensión en la garganta al hablar",
      "Cambios en el tono o la calidad de la voz",
      "Diagnóstico de nódulos, pólipos o edema en cuerdas vocales",
      "Necesidad profesional de optimizar la voz"
    ],
    treatmentProcess: [
      "Evaluación del patrón vocal: respiración, proyección, tensiones",
      "Identificación de hábitos vocales perjudiciales",
      "Diseño de un programa de ejercicios personalizado",
      "Técnicas de respiración diafragmática y relajación laríngea",
      "Entrenamiento en proyección vocal y técnica de voz",
      "Pautas de higiene vocal para el día a día"
    ],
    benefits: [
      "Recuperación de la calidad vocal",
      "Mayor resistencia vocal para jornadas largas",
      "Reducción de la tensión y fatiga al hablar",
      "Prevención de lesiones en cuerdas vocales",
      "Mejor técnica de proyección y dicción",
      "Autonomía en el cuidado de la voz"
    ],
    faq: [
      {
        question: "¿Trata problemas de voz en profesionales como profesores o cantantes?",
        answer: "Por supuesto. Trabajo con profesionales de la voz para prevenir y tratar patologías vocales, mejorar la técnica vocal y mantener una voz sana durante toda la jornada laboral."
      },
      {
        question: "¿Cuántas sesiones necesita un tratamiento vocal?",
        answer: "Depende del caso. Un entrenamiento preventivo puede completarse en 6-8 sesiones. Si hay una lesión diagnosticada, el tratamiento puede ser más extenso. Tras la evaluación inicial te daré una estimación personalizada."
      },
      {
        question: "¿Se puede combinar con el tratamiento médico?",
        answer: "Sí, de hecho es lo recomendable. En caso de lesiones (nódulos, pólipos), la terapia vocal logopédica suele ser complementaria al seguimiento con el otorrinolaringólogo."
      }
    ],
    relatedServices: ["terapia-articulacion", "terapia-miofuncional", "paralisis-facial"],
    priceReference: "Desde 40€/sesión"
  },

  {
    slug: "terapia-articulacion",
    title: "Terapia de Articulación del Habla",
    metaTitle: "Terapia de Articulación en Segovia | Frenillo Lingual | Alexandra Palacios",
    metaDescription: "Terapia de articulación del habla en Segovia. Tratamiento postquirúrgico de frenillo lingual, mejora de dicción y prosodia para profesionales. Logopeda especialista.",
    icon: "Mic",
    shortDescription: "Tratamientos especializados para mejorar la articulación y el habla, incluyendo tratamiento postquirúrgico y entrenamiento de locución.",
    fullDescription: `
      <h2>Mejorar la articulación del habla</h2>
      <p>La articulación del habla es la capacidad de producir los sonidos del lenguaje de forma clara y precisa. Cuando hay dificultades en la articulación, la comunicación se ve afectada y puede generar frustración, inseguridad o problemas en el ámbito laboral y social.</p>
      <p>En mi consulta trato dos grandes áreas dentro de la articulación: el tratamiento postquirúrgico tras la intervención de frenillo lingual y la terapia de articulación, locución y prosodia para profesionales de la voz.</p>

      <h2>Tratamiento postquirúrgico del frenillo lingual</h2>
      <p>El frenillo lingual corto limita el movimiento de la lengua e impide la correcta articulación de ciertos fonemas, especialmente la /l/, la /rr/ y la /s/. Tras la intervención quirúrgica (frenectomía), es necesario un trabajo logopédico para que la lengua aprenda los nuevos movimientos que antes no podía realizar.</p>
      <p>Mi trabajo consiste en guiar al paciente en la adquisición e integración de estos fonemas, con ejercicios específicos y progresivos que aprovechan la nueva movilidad lingual.</p>

      <h2>Terapia de articulación, locución y prosodia</h2>
      <p>Si eres locutor, profesor, actor, actriz o trabajas durante horas con tu voz, esta terapia te ayudará a mejorar tu dicción, la prosodia de tu discurso y la proyección vocal. Trabajamos la claridad articulatoria, el ritmo del habla, la entonación y la capacidad de mantener un discurso fluido y natural durante periodos prolongados.</p>
    `,
    symptoms: [
      "Dificultad para pronunciar ciertos sonidos (/l/, /rr/, /s/)",
      "Cirugía reciente de frenillo lingual (frenectomía)",
      "Habla poco clara o que cuesta entender",
      "Necesidad profesional de mejorar la dicción",
      "Ritmo de habla inadecuado (demasiado rápido o lento)",
      "Entonación monótona o falta de expresividad al hablar"
    ],
    treatmentProcess: [
      "Evaluación de la articulación y la movilidad lingual",
      "Identificación de los fonemas afectados y su causa",
      "Ejercicios progresivos para la adquisición de fonemas",
      "Entrenamiento de dicción, prosodia y proyección vocal",
      "Práctica en contextos comunicativos reales",
      "Seguimiento hasta la automatización de los nuevos patrones"
    ],
    benefits: [
      "Articulación clara y precisa de todos los fonemas",
      "Mayor confianza al hablar en público",
      "Mejor dicción y prosodia para profesionales",
      "Recuperación completa tras cirugía de frenillo",
      "Habla más natural, fluida y expresiva"
    ],
    faq: [
      {
        question: "¿Después de operar el frenillo necesito logopedia?",
        answer: "Sí, es muy recomendable. La operación libera la lengua, pero los músculos necesitan aprender los movimientos que antes no podían hacer. La terapia logopédica postquirúrgica es fundamental para integrar los fonemas correctamente."
      },
      {
        question: "¿A qué edad se puede tratar un frenillo lingual corto?",
        answer: "Se puede trabajar desde edades tempranas, incluso con bebés que tienen dificultades con la lactancia. En niños mayores y adultos, la terapia se centra en la adquisición de los fonemas afectados tras la cirugía."
      },
      {
        question: "¿La terapia de locución es solo para profesionales?",
        answer: "Aunque es especialmente útil para profesionales de la voz, cualquier persona que quiera mejorar su forma de hablar puede beneficiarse. Si sientes que tu articulación no es clara o que te cuesta expresarte con fluidez, puedo ayudarte."
      }
    ],
    relatedServices: ["terapia-vocal", "terapia-miofuncional", "deglucion-infantil"],
    priceReference: "Desde 40€/sesión"
  },

  {
    slug: "paralisis-facial",
    title: "Rehabilitación de Parálisis Facial",
    metaTitle: "Rehabilitación Parálisis Facial en Segovia | Alexandra Palacios Logopeda",
    metaDescription: "Tratamiento de parálisis facial en Segovia. Recuperación de la movilidad y funcionalidad de la musculatura orofacial. Logopeda especialista con +17 años.",
    icon: "Smile",
    shortDescription: "Tratamiento para la recuperación de la movilidad y funcionalidad de la musculatura orofacial tras parálisis facial.",
    fullDescription: `
      <h2>Rehabilitación de la parálisis facial</h2>
      <p>La parálisis facial es la pérdida de movilidad de los músculos de un lado de la cara. Puede ser causada por la parálisis de Bell, infecciones, cirugías, traumatismos o enfermedades neurológicas. Afecta no solo a la expresión facial, sino también a funciones básicas como cerrar el ojo, comer, beber y hablar.</p>
      <p>En mi consulta de Segovia ofrezco tratamiento de rehabilitación facial centrado en recuperar la mayor funcionalidad posible de la musculatura afectada. Es una terapia que requiere paciencia y constancia, pero los resultados suelen ser muy positivos cuando se trabaja de forma adecuada.</p>

      <h2>¿Cómo trabajo la rehabilitación facial?</h2>
      <p>El tratamiento se basa en ejercicios específicos para cada grupo muscular afectado. Trabajamos la movilidad de los labios, las mejillas, los párpados y la frente con ejercicios progresivos que van aumentando en complejidad a medida que se recupera la función.</p>
      <p>Además de los ejercicios de movilidad, abordo las dificultades funcionales asociadas: problemas de masticación y deglución por debilidad de los músculos de la boca, dificultades de articulación del habla y gestión de la saliva.</p>
      <p>Es fundamental empezar la rehabilitación lo antes posible tras el diagnóstico. Cuanto más temprano se inicie el trabajo, mejores son las posibilidades de recuperación completa.</p>
    `,
    symptoms: [
      "Pérdida de movilidad en un lado de la cara",
      "Dificultad para cerrar un ojo o mover los labios",
      "Asimetría facial visible",
      "Dificultad para comer, beber o hablar",
      "Escape de líquidos por un lado de la boca",
      "Diagnóstico de parálisis de Bell u otra parálisis facial",
      "Post-cirugía que ha afectado a nervios faciales"
    ],
    treatmentProcess: [
      "Evaluación de la movilidad facial y las funciones afectadas",
      "Diseño de un plan de ejercicios específicos por grupo muscular",
      "Sesiones semanales de 40 minutos con ejercicios progresivos",
      "Trabajo en funciones básicas: deglución, masticación, articulación",
      "Ejercicios para realizar en casa entre sesiones",
      "Seguimiento de la evolución y ajuste continuo del tratamiento"
    ],
    benefits: [
      "Recuperación progresiva de la movilidad facial",
      "Mejora de la simetría del rostro",
      "Recuperación de funciones de masticación y deglución",
      "Mayor claridad en la articulación del habla",
      "Reducción de las molestias asociadas",
      "Mejor calidad de vida y confianza"
    ],
    faq: [
      {
        question: "¿Cuánto tiempo tarda en recuperarse una parálisis facial?",
        answer: "Depende de la causa y la gravedad. Una parálisis de Bell leve puede recuperarse en semanas con tratamiento. Casos más complejos pueden requerir varios meses de rehabilitación. La constancia con los ejercicios es clave."
      },
      {
        question: "¿Cuándo debo empezar la rehabilitación?",
        answer: "Lo antes posible. Cuanto más temprano se inicie la rehabilitación tras el diagnóstico, mejores son las posibilidades de recuperación completa. No esperes a que pase tiempo por si se recupera sola."
      },
      {
        question: "¿La parálisis facial afecta a la deglución?",
        answer: "Sí, la debilidad de los músculos de la boca y la cara puede dificultar la masticación y la deglución. Es una de las áreas que trabajo en la rehabilitación, junto con la movilidad facial y la articulación."
      }
    ],
    relatedServices: ["terapia-miofuncional", "terapia-neurologica", "disfagia-adultos"],
    priceReference: "Desde 40€/sesión"
  },

  {
    slug: "terapia-neurologica",
    title: "Logopedia Neurológica",
    metaTitle: "Logopedia Neurológica en Segovia | Post Ictus y Afasia | Alexandra Palacios",
    metaDescription: "Logopedia neurológica en Segovia. Rehabilitación del lenguaje y habla tras ictus, afasia, disartria. Sesiones individuales y grupales. Logopeda con +17 años.",
    icon: "Brain",
    shortDescription: "Tratamiento de recuperación del lenguaje y articulación para personas con afasia o disartria tras ictus y/o enfermedad neurológica.",
    fullDescription: `
      <h2>Logopedia neurológica: recuperar la comunicación</h2>
      <p>Cuando una persona sufre un ictus, un traumatismo craneoencefálico o una enfermedad neurológica, una de las consecuencias más frustrantes puede ser la pérdida o alteración de la capacidad de comunicarse. La afasia (dificultad para comprender o producir el lenguaje) y la disartria (dificultad para articular las palabras) son los trastornos más frecuentes.</p>
      <p>En mi consulta de Segovia trabajo con pacientes neurológicos para recuperar la mayor funcionalidad posible en el lenguaje, el habla y la deglución. Es un trabajo que requiere perseverancia, pero los avances, aunque a veces lentos, son reales y significativos para la calidad de vida del paciente.</p>

      <h2>Mi enfoque de tratamiento</h2>
      <p>El tratamiento de logopedia neurológica comienza siempre con una evaluación completa que incluye una valoración neurológica específica con informe detallado. A partir de ahí, diseño un plan de intervención que puede incluir sesiones individuales, sesiones en grupo reducido o una combinación de ambas.</p>
      <p>Las sesiones grupales son especialmente valiosas en la rehabilitación neurológica porque ofrecen al paciente la oportunidad de practicar la comunicación en un contexto social seguro y motivador, además de compartir experiencias con personas en situaciones similares.</p>

      <h2>Áreas de trabajo</h2>
      <p>En cada sesión trabajamos de forma integrada la comprensión y producción del lenguaje, la articulación y la claridad del habla, la estimulación oral y la deglución si está afectada. El objetivo es devolver al paciente la mayor autonomía comunicativa posible, adaptando los objetivos a sus capacidades y progresando a su ritmo.</p>
    `,
    symptoms: [
      "Dificultad para encontrar o producir palabras tras un ictus",
      "Problemas para comprender lo que le dicen",
      "Habla poco clara o ininteligible (disartria)",
      "Dificultad para leer o escribir tras daño neurológico",
      "Problemas de deglución asociados a enfermedad neurológica",
      "Diagnóstico de afasia, disartria o apraxia del habla",
      "Deterioro del lenguaje por enfermedad neurodegenerativa"
    ],
    treatmentProcess: [
      "Valoración neurológica completa con informe detallado (100€)",
      "Diseño del plan de intervención personalizado",
      "Sesiones individuales de 40 minutos (1 o 2 días/semana)",
      "Opción de sesiones grupales reducidas (2-3 personas)",
      "Entrenamiento del lenguaje, articulación y estimulación oral",
      "Seguimiento y ajuste continuo según la evolución del paciente"
    ],
    benefits: [
      "Recuperación progresiva de la capacidad comunicativa",
      "Mejora de la articulación y la claridad del habla",
      "Mayor autonomía en la comunicación diaria",
      "Interacción social en sesiones grupales",
      "Rehabilitación de la deglución si está afectada",
      "Apoyo emocional y motivacional durante el proceso"
    ],
    faq: [
      {
        question: "¿Trabaja con pacientes con daño neurológico?",
        answer: "Sí, tengo experiencia trabajando con pacientes que han sufrido ictus, traumatismos craneoencefálicos y otras afecciones neurológicas que afectan al lenguaje y la deglución."
      },
      {
        question: "¿Cuánto cuesta el tratamiento neurológico?",
        answer: "La valoración neurológica con informe es de 100€. Las sesiones individuales (1 día/semana) son 40€, dos días/semana 75€. Las sesiones grupales (2-3 personas) son 35€/persona. Todas las sesiones son de 40 minutos."
      },
      {
        question: "¿Las sesiones grupales son efectivas?",
        answer: "Sí, son un complemento muy valioso al trabajo individual. Permiten practicar la comunicación en un contexto social, compartir experiencias con otros pacientes y mantener la motivación. Los grupos son reducidos (2-3 personas) para garantizar atención personalizada."
      },
      {
        question: "¿Se puede recuperar el habla después de un ictus?",
        answer: "En muchos casos sí, con un tratamiento adecuado y constante. La recuperación depende de la gravedad del daño, la zona afectada y la dedicación al tratamiento. Cuanto antes se empiece la rehabilitación, mejores son los resultados."
      }
    ],
    relatedServices: ["disfagia-adultos", "paralisis-facial", "terapia-miofuncional"],
    priceReference: "Valoración: 100€ | Individual: desde 40€ | Grupal: 35€/persona"
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}
