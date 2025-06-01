const landingContent = {
    hero: {
        icons: {
            emoji: '👶❤️🤱',
            // Para logos futuros:
            logos: {
                baby: 'assets/icons/baby-icon.svg',
                heart: 'assets/icons/heart-icon.svg', 
                mother: 'assets/icons/mother-icon.svg'
            }
        },
        title: 'Consultorio <span class="bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">CADIM</span>',
        subtitle: 'Acompañándote en cada etapa de la maternidad',
        description: 'Especialistas dedicados al cuidado integral de la mujer, desde la fertilidad hasta la menopausia, brindando atención personalizada con la tecnología más avanzada y el toque humano que necesitas.',
        stats: [
            { number: '+500', label: 'Familias acompañadas', color: 'emerald' },
            { number: '15+', label: 'Años de experiencia', color: 'sky' },
            { number: '98%', label: 'Satisfacción pacientes', color: 'pink' }
        ]
    },
    
    whyChoose: {
        title: '¿Por qué elegir CADIM?',
        features: [
            {
                icon: { emoji: '🩺', logo: 'assets/icons/stethoscope.svg' },
                title: 'Equipo Especializado',
                description: 'Profesionales con amplia experiencia en salud femenina y maternidad',
                color: 'emerald'
            },
            {
                icon: { emoji: '🤝', logo: 'assets/icons/handshake.svg' },
                title: 'Atención Personalizada', 
                description: 'Cada paciente recibe un plan de cuidado único y adaptado a sus necesidades',
                color: 'sky'
            },
            {
                icon: { emoji: '🔬', logo: 'assets/icons/microscope.svg' },
                title: 'Tecnología Avanzada',
                description: 'Equipos de última generación para diagnósticos precisos y seguimiento óptimo',
                color: 'pink'
            },
            {
                icon: { emoji: '💖', logo: 'assets/icons/heart-care.svg' },
                title: 'Acompañamiento Integral',
                description: 'Te acompañamos en cada paso con calidez humana y profesionalismo',
                color: 'purple'
            }
        ]
    },

    specialties: {
        title: 'Nuestras Especialidades',
        services: [
            {
                icon: { emoji: '🤰', logo: 'assets/icons/pregnancy.svg' },
                title: 'Control Prenatal',
                description: 'Seguimiento completo durante el embarazo con ultrasonidos de alta definición y monitoreo constante para garantizar la salud de mamá y bebé.',
                color: 'emerald',
                delay: '0.5s'
            },
            {
                icon: { emoji: '💕', logo: 'assets/icons/fertility.svg' },
                title: 'Fertilidad',
                description: 'Evaluación y tratamiento de problemas de fertilidad con técnicas modernas y un enfoque integral para cumplir tu sueño de ser madre.',
                color: 'sky',
                delay: '0.7s'
            },
            {
                icon: { emoji: '🌸', logo: 'assets/icons/menopause.svg' },
                title: 'Climaterio y Menopausia',
                description: 'Acompañamiento especializado durante esta etapa de cambios, con tratamientos personalizados para mantener tu calidad de vida.',
                color: 'pink',
                delay: '0.9s'
            },
            {
                icon: { emoji: '🏥', logo: 'assets/icons/internal-medicine.svg' },
                title: 'Medicina Interna',
                description: 'Atención integral para enfermedades crónicas y agudas, coordinando con otras especialidades para un cuidado completo.',
                color: 'purple',
                delay: '1.1s'
            },
            {
                icon: { emoji: '👨‍⚕️', logo: 'assets/icons/gynecology.svg' },
                title: 'Ginecología General',
                description: 'Revisiones ginecológicas, prevención y tratamiento de patologías con la más alta calidad médica y trato humano.',
                color: 'amber',
                delay: '1.3s'
            },
            {
                icon: { emoji: '📋', logo: 'assets/icons/preventive.svg' },
                title: 'Salud Preventiva',
                description: 'Programas de prevención y detección temprana para mantener tu salud en óptimas condiciones a lo largo de la vida.',
                color: 'teal',
                delay: '1.5s'
            }
        ]
    },

    cta: {
        title: '¿Lista para conocer a nuestro equipo?',
        description: 'Descubre a los especialistas que te acompañarán en tu camino hacia la maternidad y el cuidado integral de tu salud femenina.',
        buttonText: 'Conocer a Nuestros Especialistas',
        contact: [
            {
                icon: 'phone',
                text: 'Citas: (624) 123-4567'
            },
            {
                icon: 'clock',
                text: 'Lun-Vie: 8:00 - 18:00'
            },
            {
                icon: 'location',
                text: 'La Paz, BCS'
            }
        ]
    }
};

// Exportar para uso global
window.LandingContent = landingContent;