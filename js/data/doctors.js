const doctorsData = [
    {
        id: 1,
        name: 'Dr. Javier Hector Pérez Carcaño',
        specialty: 'Ginecología y obstetricia - laparoscopía - Fertilidad, climaterio y menopausia .',
        bio: 'Con más de 20 años de experiencia en salud femenina, me especializo en ginecología y obstetricia, ofreciendo atención integral en todas las etapas de la vida de la mujer. Brindo acompañamiento profesional y humano en procesos de fertilidad, climaterio y menopausia, con tratamientos personalizados y basados en evidencia médica.',
        services: [
            'Controles ginecológicos y obstétricos',
            'Evaluación y tratamiento de infertilidad',
            'Manejo de hipertensión y arritmias',
            'Manejo del climaterio y la menopausia',
            'Ultrasonidos ginecológicos y obstétricos'
        ],
        hospital: {
            name: 'CADIM - La Paz',
            address: 'Ignacio Allende 2135, Los Olivos, 23040 La Paz, B.C.S.',
            locationUrl: 'https://g.co/kgs/xyJMzwH'
        },
        // ✨ NUEVO: Información de WhatsApp
        whatsapp: {
            number: '6122311713', // Número sin espacios ni símbolos
            message: 'Hola, me gustaría agendar una consulta con el Dr. Pérez. ¿Cuál sería su disponibilidad?'
        },
        color: 'emerald',
        image: 'drperez.webp',
        icon: '❤️'
    },
    {
        id: 2,
        name: 'Dr. Jorge Iván Aguilar Ortiz',
        specialty: 'Medicina Interna',
        bio: 'Soy especialista en Medicina Interna, con amplia experiencia en el diagnóstico, tratamiento y seguimiento de enfermedades crónicas y agudas en adultos. Mi enfoque está centrado en ofrecer atención médica integral, personalizada y basada en evidencia científica.',
        services: [
            'Diagnóstico y manejo de enfermedades crónicas como diabetes, hipertensión y enfermedades respiratorias',
            'Atención a pacientes con múltiples condiciones médicas',
            'Seguimiento de enfermedades autoinmunes e infecciosas',
            'Evaluaciones médicas integrales',
            'Coordinación con otras especialidades para un abordaje completo'
        ],
        hospital: {
            name: 'CADIM - La Paz',
            address: 'Ignacio Allende 2135, Los Olivos, 23040 La Paz, B.C.S.',
            locationUrl: 'https://maps.google.com/?q=Clínica+Salud+Integral,+Avenida+Progreso+789,+Ciudad+Esperanza'
        },
        // ✨ NUEVO: Información de WhatsApp
        whatsapp: {
            number: '6122311713',
            message: 'Hola, necesito una consulta con el Dr. Aguilar. ¿Podría agendar una cita?'
        },
        color: 'sky',
        image: 'draguiar.webp',
        icon: '🩺'
    },
    {
        id: 3,
        name: 'Dra. Blanca Aurora Savin Gámez',
        specialty: 'Ginecología, Obstetricia, Climaterio y Menopausia',
        bio: 'Con una trayectoria enfocada en el bienestar femenino, ofrezco atención médica especializada en ginecología, obstetricia y el manejo del climaterio y la menopausia. Acompaño a mis pacientes con empatía y profesionalismo, brindando soluciones personalizadas para cada necesidad.',
        services: [
            'Controles ginecológicos y prenatales',
            'Atención durante el embarazo y el posparto',
            'Manejo integral del climaterio y la menopausia',
            'Salud hormonal y planificación familiar',
            'Ecografías ginecológicas y obstétricas'
        ],
        hospital: {
            name: 'CADIM - La Paz',
            address: 'Ignacio Allende 2135, Los Olivos, 23040 La Paz, B.C.S.',
            locationUrl: 'https://maps.google.com/?q=Centro+Médico+Vida+Plena,+Calle+Bienestar+456,+Ciudad+Esperanza'
        },
        // ✨ NUEVO: Información de WhatsApp
        whatsapp: {
            number: '66122311713',
            message: 'Hola, me gustaría solicitar una consulta con la Dra. Savin. ¿Cuáles son sus horarios disponibles?'
        },
        color: 'pink',
        image: 'drablanca.webp',
        icon: '👶'
    },
    {
        id: 4,
        name: 'Dr. Wilbert Armin Castro Montoya',
        specialty: 'Ginecología y Obstetricia UNAM',
        bio: 'Médico especialista en Ginecología y Obstetricia egresado de la UNAM con amplia experiencia en atención integral de la salud femenina. Me dedico a brindar cuidado médico de excelencia, combinando conocimientos actualizados con un trato humano y cercano para acompañar a mis pacientes en todas las etapas de su vida reproductiva.',
        services: [
            'Consultas ginecológicas de rutina y especializadas',
            'Control prenatal y seguimiento del embarazo',
            'Atención del parto y cesáreas',
            'Manejo de patologías ginecológicas',
            'Ultrasonido ginecológico y obstétrico',
            'Cirugía ginecológica mínimamente invasiva',
            'Planificación familiar y anticoncepción'
        ],
        hospital: {
            name: 'CADIM - La Paz',
            address: 'Ignacio Allende 2135, Los Olivos, 23040 La Paz, B.C.S.',
            locationUrl: 'https://maps.google.com/?q=Hospital+Materno+Infantil+San+Rafael,+Av.+Universidad+789,+Ciudad+de+México'
        },
        // ✨ NUEVO: Información de WhatsApp
        whatsapp: {
            number: '6122311713',
            message: 'Hola me interesa agendar una consulta con el Dr. Castro. ¿Cuándo tendría disponibilidad?'
        },
        color: 'blue',
        image: 'drwiltber.webp',
        icon: '🏥'
    },
    {
        id: 5,
        name: 'Dra. Victoria Palma Ojeda',
        specialty: 'Ginecologia y Obstetricia, Colposcopia',
        bio: 'Atencion de la paciente obstetrica en estado critico.  Curso de Estetica Vaginal. Cedula profesial 3300047, cedula de especialidad 4512737 ',
        services: [
            'Atención del parto y cesáreas',
            'Manejo de patologías ginecológicas',
            'Cirugía ginecológica mínimamente invasiva',   
        ],
        hospital: {
            name: 'CADIM - La Paz',
            address: 'Ignacio Allende 2135, Los Olivos, 23040 La Paz, B.C.S.',
            locationUrl: 'https://maps.google.com/?q=Hospital+Materno+Infantil+San+Rafael,+Av.+Universidad+789,+Ciudad+de+México'
        },
        // ✨ NUEVO: Información de WhatsApp
        whatsapp: {
            number: '6122311713',
            message: 'Hola me interesa agendar una consulta con la Dra. Victoria Palma Ojeda. ¿Cuándo tendría disponibilidad?'
        },
        color: 'purple',
        image: 'drapalma.webp',
        icon: '🏥'
    }
];

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { doctorsData };
} else {
    window.DoctorsData = { doctorsData };
}