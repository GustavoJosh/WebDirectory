const doctorsData = [
    {
        id: 1,
        name: 'Dr. Javier Hector Pérez Carcaño',
        specialty: 'Ginecología y obstetricia - laparoscopía - Fertilidad, climaterio y menopausia .', 
        bio: 'Médico Cirujano por la UNAM con especialidad en Ginecología y Obstetricia, y más de 20 años de experiencia. Cirujano laparoscopista ginecológico certificado por el CMGO. Especializado en fertilidad, climaterio y menopausia, con enfoque integral en la salud de la mujer durante todo su ciclo vital.',

        services: [
            'Controles ginecológicos y obstétricos',
            'Cirugía laparoscópica ginecológica',
            'Tratamientos de fertilidad (Life Fertility)',
            'Manejo del climaterio y menopausia',
            'Ultrasonido Doppler y ecocardiografía fetal'
        ],
        hospital: {
            name: 'CADIM - La Paz',
            address: 'Ignacio Allende 2135, Los Olivos, 23040 La Paz, B.C.S.',
            locationUrl: 'https://g.co/kgs/m59jixh'
        },
        //  Información de WhatsApp
        whatsapp: {
            number: '6122311713', // Número sin espacios ni símbolos
            message: 'Hola Dr. Pérez, me gustaría agendar una consulta. ¿Cuál sería su disponibilidad?'
        },
        color: 'emerald',
        icon: '❤️'
    },
    {
        id: 2,
        name: 'Dr. Jorge Iván Aguiar Ortiz',
        specialty: 'Medicina Interna - HE UMAE - CMNO',
        bio: 'Soy especialista en Medicina Interna, con amplia experiencia en el diagnóstico, tratamiento y seguimiento de enfermedades agudas y crónicas en adultos. Mi enfoque está centrado en ofrecer atención médica integral, personalizada y basada en evidencia científica.',
        services: [
            'Diagnóstico y tratamiento de enfermedades crónicas como diabetes tipo 1 y 2, hipertensión, enfermedades respiratorias y del sistema digestivo',
            'Tratamiento y seguimiento para pacientes con hipertensión arterial sistémica',
            'Tratamiento y seguimiento de enfermedades autoinmunes, infecciosas, endocrinológicas y del sistema nervioso central',
            'Evaluaciones médicas integrales',
            'Coordinación con otras especialidades para un abordaje completo'
        ],
        hospital: {
            name: 'CADIM - La Paz',
            address: 'Ignacio Allende 2135, Los Olivos, 23040 La Paz, B.C.S.',
            locationUrl: 'https://g.co/kgs/m59jixh'
        },
       
        whatsapp: {
            number: '6122311713',
            message: 'Hola Dr. Aguilar, necesito una consulta de medicina interna. ¿Podría agendar una cita?'
        },
        color: 'sky',
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
            locationUrl: 'https://g.co/kgs/m59jixh'
        },
        
        whatsapp: {
            number: '6122311713',
            message: 'Hola Dra. Savin, me gustaría solicitar una consulta. ¿Cuáles son sus horarios disponibles?'
        },
        color: 'pink',
        icon: '👶'
    },
    {
        id: 4,
        name: 'Dr. Wilbert Armin Castro Montoya',
        specialty: 'Ginecología y Obstetricia UNAM',
        bio: 'Médico especialista en Ginecología y Obstetricia egresado de la UNAM con amplia experiencia en atención integral de la salud femenina. Me dedico a brindar cuidado médico de excelencia, combinando conocimientos actualizados con un trato humano y cercano para acompañar a mis pacientes en todas las etapas de su vida reproductiva.',
        services: [
            'Consultas ginecológicas de rutina y especializadas',
            'Consulta y seguimiento para embarazos de alto riesgo',
            'Cirugía laparoscópica',
            'Tratamiento para infecciones vaginales',
            'Consulta y tratamiento de trastornos menstruales',
            'Control prenatal'
        ],
        hospital: {
            name: 'CADIM - La Paz',
            address: 'Ignacio Allende 2135, Los Olivos, 23040 La Paz, B.C.S.',
            locationUrl: 'https://g.co/kgs/m59jixh'
        },
       
        whatsapp: {
            number: '6122311713',
            message: 'Hola Dr. Castro, me interesa agendar una consulta. ¿Cuándo tendría disponibilidad?'
        },
        color: 'blue',
        icon: '🏥'
    }
];

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { doctorsData };
} else {
    window.DoctorsData = { doctorsData };
}