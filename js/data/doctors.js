const doctorsData = [
    {
        id: 1,
        name: 'Dr. Javier Hector Pérez Carcaño',
        specialty: 'Ginecología y obstetricia, fertilidad, climaterio y menopausia',
        bio: 'Con más de 20 años de experiencia en salud femenina, me especializo en ginecología y obstetricia, ofreciendo atención integral en todas las etapas de la vida de la mujer. Brindo acompañamiento profesional y humano en procesos de fertilidad, climaterio y menopausia, con tratamientos personalizados y basados en evidencia médica.',
        services: [
            'Controles ginecológicos y obstétricos',
            'Evaluación y tratamiento de infertilidad',
            'Manejo de hipertensión y arritmias',
            'Manejo del climaterio y la menopausia',
            'Ultrasonidos ginecológicos y obstétricos'
        ],
        hospital: {
            name: 'Clínica Corazón Sano',
            address: 'Av. Siempre Viva 123, Consultorio 101, Ciudad Esperanza',
            locationUrl: 'https://maps.google.com/?q=Clínica+Corazón+Sano,+Av.+Siempre+Viva+123,+Ciudad+Esperanza'
        },
        color: 'emerald',
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
            name: 'Clínica Salud Integral',
            address: 'Avenida Progreso 789, Consultorio 303, Ciudad Esperanza',
            locationUrl: 'https://maps.google.com/?q=Clínica+Salud+Integral,+Avenida+Progreso+789,+Ciudad+Esperanza'
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
            name: 'Centro Médico Vida Plena',
            address: 'Calle Bienestar 456, Consultorio 205, Ciudad Esperanza',
            locationUrl: 'https://maps.google.com/?q=Centro+Médico+Vida+Plena,+Calle+Bienestar+456,+Ciudad+Esperanza'
        },
        color: 'pink',
        icon: '👶'
    }
];

// Exportar para uso en otros módulos
window.DoctorsData = { doctorsData };
