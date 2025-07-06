export interface FAQItem {
  question: string;
  answer: string;
  category: 'logopedia' | 'tratamientos' | 'proceso' | 'practico' | 'especifico';
}

export const faqData: FAQItem[] = [
  // Sobre la Logopedia
  {
    question: "¿Qué es la logopedia y cómo puede ayudarme?",
    answer: "Es una terapia enfocada a rehabilitar la voz, el lenguaje, el habla, la alimentación, entre otras alteraciones. La logopedia puede ayudarte a mejorar tu comunicación y calidad de vida en cualquier etapa.",
    category: "logopedia"
  },
  {
    question: "¿A partir de qué edad se puede acudir al logopeda?",
    answer: "La logopedia abarca un amplio abanico de edad desde los bebés cuando tienen dificultades con el agarre para amamantar hasta la vejez cuando se tienen dificultades con el lenguaje tras una enfermedad o simplemente por deterioro de las capacidades de comer, hablar y poder comunicarse.",
    category: "logopedia"
  },
  {
    question: "¿Cuándo debo llevar a mi hijo al logopeda?",
    answer: "El momento adecuado es cuando detectes que su voz o su lenguaje y articulación es diferente en comparación con el resto de niños que esté presente en su entorno o tú sientes que algo no es acorde a su edad. Una consulta a tiempo puede descartar y sobre todo tranquilizar el día a día.",
    category: "logopedia"
  },
  {
    question: "¿Cuáles son las señales de que necesito un logopeda?",
    answer: "Cuando seas consciente de que pierdes la voz a diario, cuando hay un frenillo sublingual corto y te impide articular fonemas concretos como l, rr, tras un ictus y/o operación a nivel oral y que te afecte a la deglución.",
    category: "logopedia"
  },
  
  // Sobre los Tratamientos
  {
    question: "¿Qué es la terapia miofuncional?",
    answer: "Es una rehabilitación centrada en fortalecer la musculatura orofacial que interviene en funciones como la respiración, deglución y articulación.",
    category: "tratamientos"
  },
  {
    question: "¿En qué consiste el tratamiento de deglución atípica?",
    answer: "La deglución atípica consiste en el aprendizaje y automatización de la colocación de la lengua en reposo y en funciones como son la deglución de todo tipo de sólidos y líquidos.",
    category: "tratamientos"
  },
  {
    question: "¿Cómo se trata la disfagia en adultos?",
    answer: "La disfagia en adultos se trabaja llevando a cabo un trabajo diario minucioso y específico de aprendizaje y automatización de pautas de alimentación, de posturas para favorecer la deglución y de realización de ejercicios de la musculatura oral para tonificarla y llegar a conseguir una dieta completamente normal con todos los volúmenes y texturas.",
    category: "tratamientos"
  },
  {
    question: "¿Qué es la rehabilitación facial y para qué sirve?",
    answer: "La rehabilitación facial es una terapia para recuperar la función de la musculatura de la cara que ha perdido fuerza y movimiento.",
    category: "tratamientos"
  },
  
  // Proceso y Duración
  {
    question: "¿Cuánto dura una sesión de logopedia?",
    answer: "Cada terapeuta ajusta el tiempo para cada patología, pero yo por mi experiencia considero 40 minutos un tiempo bueno para aprovechar al máximo el potencial del paciente sin generar fatiga.",
    category: "proceso"
  },
  {
    question: "¿Cuántas sesiones necesitaré para ver resultados?",
    answer: "El número de sesiones necesarias dependerá de cada paciente, sus condiciones y la patología que tenga. Para una buena evolución es importante el trabajo de la sesión pero también el compromiso del paciente para hacer un trabajo diario en casa junto con el tratamiento en cada sesión de logopedia.",
    category: "proceso"
  },
  {
    question: "¿Cómo es la primera consulta de evaluación?",
    answer: "En la primera consulta realizamos una evaluación completa para entender tus necesidades específicas, establecer objetivos y diseñar un plan de tratamiento personalizado.",
    category: "proceso"
  },
  {
    question: "¿Es necesario hacer ejercicios en casa?",
    answer: "Sí, el trabajo en casa es fundamental para consolidar los avances logrados en las sesiones y acelerar el proceso de recuperación.",
    category: "proceso"
  },
  
  // Aspectos Prácticos
  {
    question: "¿Trabaja con seguros médicos privados?",
    answer: "Realizo sesiones por privado sin seguros médicos privados.",
    category: "practico"
  },
  {
    question: "¿Necesito una derivación médica para acudir?",
    answer: "Aunque no sea necesaria una derivación médica para el inicio del tratamiento, el logopeda podrá requerir una prueba médica si lo estima oportuno para completar información que ayude a la mejor recuperación posible del paciente.",
    category: "practico"
  },
  {
    question: "¿Cuál es el precio de las sesiones?",
    answer: "Para información sobre precios, por favor contacta conmigo directamente. Ofrezco tarifas personalizadas según el tipo de tratamiento y frecuencia de las sesiones.",
    category: "practico"
  },
  {
    question: "¿Ofrece sesiones online o solo presenciales?",
    answer: "Sí ofrezco sesiones online y presenciales, aunque hay patologías como la disfagia que el trabajo con la comida no se puede realizar online por riesgo de atragantamiento.",
    category: "practico"
  },
  
  // Casos Específicos
  {
    question: "¿Puede ayudar con problemas de tartamudez en adultos?",
    answer: "Sí, trabajo con adultos que presentan tartamudez, utilizando técnicas específicas para mejorar la fluidez del habla y reducir la ansiedad asociada.",
    category: "especifico"
  },
  {
    question: "¿Trata problemas de voz en profesionales (profesores, cantantes)?",
    answer: "Por supuesto, trabajo con profesionales de la voz para prevenir y tratar patologías vocales, mejorar la técnica vocal y mantener una voz sana.",
    category: "especifico"
  },
  {
    question: "¿Trabaja con pacientes con daño neurológico?",
    answer: "Sí, tengo experiencia trabajando con pacientes que han sufrido ictus, traumatismos craneoencefálicos y otras afecciones neurológicas que afectan al lenguaje y la deglución.",
    category: "especifico"
  },
  {
    question: "¿Puede ayudar con problemas de respiración bucal en niños?",
    answer: "Definitivamente, la respiración bucal es una de las áreas que tratamos mediante terapia miofuncional, enseñando al niño a respirar correctamente por la nariz.",
    category: "especifico"
  }
];

export const faqCategories = {
  logopedia: "Sobre la Logopedia",
  tratamientos: "Sobre los Tratamientos",
  proceso: "Proceso y Duración",
  practico: "Aspectos Prácticos",
  especifico: "Casos Específicos"
} as const;