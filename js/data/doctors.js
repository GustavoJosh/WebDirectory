const doctorsData = [
    {
        "id": 1,
        "name": "Dr. Javier Hector Pérez Carcaño",
        "specialty": "Ginecología, Obstetricia, Cirugía Laparoscópica, Fertilidad y Climaterio",
        "bio": "Médico Cirujano egresado de la UNAM con más de 20 años de experiencia y una profunda vocación de servicio. Mi enfoque es entregar atención y conocimiento integral para el cuidado de la salud femenina en todo su ciclo vital, combinando la más alta preparación, que incluye especialidades en Laparoscopía, Fertilidad y Ultrasonido Doppler, con una genuina sensibilidad y preocupación por mis pacientes.",
        "profilePhoto": {
            "image": "drperez.webp",
            "alt": "Dr. Javier Hector Pérez Carcaño"
        },
        "services": [
            "Consulta ginecológica y control obstétrico",
            "Cirugía laparoscópica ginecológica de mínima invasión",
            "Estudios y tratamientos de Fertilidad (Miembro Life Fertility)",
            "Manejo integral de Climaterio y Menopausia",
            "Ultrasonido Doppler y Ecocardiografía Fetal avanzada"
        ],
        "hospital": {
            "name": "CADIM - La Paz",
            "address": "Ignacio Allende 2135, Los Olivos, 23040 La Paz, B.C.S.",
            "locationUrl": "https://g.co/kgs/m59jixh"
        },
        "whatsapp": {
            "number": "6122311713",
            "message": "Hola Dr. Pérez, me gustaría agendar una consulta. ¿Cuál sería su disponibilidad?"
        },
        "color": "emerald",
        "icon": "❤️"
    },
    {
        id: 2,
        name: 'Dr. Jorge Iván Aguiar Ortiz', //el nombre esta bien escrito, el apellido es aguiar no aguilar. 
        specialty: 'Medicina Interna',
        bio: 'Soy especialista en Medicina Interna, con amplia experiencia en el diagnóstico, tratamiento y seguimiento de enfermedades crónicas y agudas en adultos. Mi enfoque está centrado en ofrecer atención médica integral, personalizada y basada en evidencia científica.',
        profilePhoto: {
            image: 'draguiar.webp',
            alt: 'Dr. Jorge Iván Aguiar Ortiz'
        },
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
        "id": 3,
        "name": "Dra. Blanca Aurora Savin Gámez",
        "specialty": "Ginecología, Obstetricia, Climaterio y Menopausia",
        "bio": "Con una trayectoria enfocada en el bienestar femenino, ofrezco atención médica especializada en ginecología, obstetricia y el manejo del climaterio y la menopausia. Acompaño a mis pacientes con empatía y profesionalismo, brindando soluciones personalizadas para cada necesidad.",
        "profilePhoto": {
            "image": "drablanca.webp",
            "alt": "Dra. Blanca Aurora Savin Gámez"
        },
        "services": [
            "Control prenatal, seguimiento de embarazo y ultrasonido",
            "Atención de parto, cesárea y cuidados postparto",
            "Consulta ginecológica, Papanicolaou y colposcopia",
            "Planificación familiar y asesoramiento en métodos anticonceptivos",
            "Manejo integral del climaterio y la menopausia",
            "Cirugía ginecológica (miomas, quistes, endometriosis)",
            "Atención en pérdida gestacional y embarazo ectópico"
        ],
        "hospital": {
            "name": "CADIM - La Paz",
            "address": "Ignacio Allende 2135, Los Olivos, 23040 La Paz, B.C.S.",
            "locationUrl": "https://g.co/kgs/m59jixh"
        },
        "whatsapp": {
            "number": "6122311713",
            "message": "Hola Dra. Savin, me gustaría solicitar una consulta. ¿Cuáles son sus horarios disponibles?"
        },
        "color": "pink",
        "icon": "👶"
    },
    {
        id: 4,
        name: 'Dr. Wiltber Armin Castro Montoya', //wiltber esta bien escrito, no es wilbert
        specialty: 'Ginecología y Obstetricia UNAM',
        bio: 'Médico especialista en Ginecología y Obstetricia egresado de la UNAM con amplia experiencia en atención integral de la salud femenina. Me dedico a brindar cuidado médico de excelencia, combinando conocimientos actualizados con un trato humano y cercano para acompañar a mis pacientes en todas las etapas de su vida reproductiva.',
        // ✅ Foto de perfil corregida para Dr. Castro
        profilePhoto: {
            image: 'drwilbert.webp',
            alt: 'Dr. Wilbert Armin Castro Montoya'
        },
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