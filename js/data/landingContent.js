// js/data/landingContent.js - NOMBRES CORREGIDOS

const landingContent = {
    hero: {
        icons: {
            emoji: '👶❤️🤱'
        },
        title: `<div class="text-center">
           Consultorio <span class="bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">CADIM</span>
           <div class="text-lg md:text-xl lg:text-2xl text-slate-600 font-medium tracking-wide mt-3">
               <span class="font-bold text-emerald-600">C</span>entro de 
               <span class="font-bold text-emerald-600">A</span>tención y 
               <span class="font-bold text-sky-600">D</span>iagnóstico 
               <span class="font-bold text-sky-600">I</span>ntegral con 
               <span class="font-bold text-pink-600">M</span>edicina Interna
           </div>
        </div>`,
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
                // ✅ NOMBRES EXACTOS de tus archivos
                image: 'team-specialists.jpg',
                emoji: '🩺',
                alt: 'Equipo médico especializado',
                title: 'Equipo Especializado',
                description: 'Profesionales con amplia experiencia en salud femenina y maternidad',
                color: 'emerald'
            },
            {
                image: 'personalized-care.jpg',  // ✅ Coincide con tu archivo
                emoji: '🤝',
                alt: 'Atención personalizada',
                title: 'Atención Personalizada', 
                description: 'Cada paciente recibe un plan de cuidado único y adaptado a sus necesidades',
                color: 'sky'
            },
            {
                image: 'advanced-technology.jpg',  // ✅ Coincide con tu archivo
                emoji: '🔬',
                alt: 'Tecnología médica avanzada',
                title: 'Tecnología Avanzada',
                description: 'Equipos de última generación para diagnósticos precisos y seguimiento óptimo',
                color: 'pink'
            },
            {
                image: 'integral-care.jpg',  // ✅ Coincide con tu archivo
                emoji: '💖',
                alt: 'Acompañamiento integral',
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
                image: 'prenatal-control.jpg',  // ✅ Coincide con tu archivo
                emoji: '🤰',
                alt: 'Control prenatal',
                title: 'Control Prenatal',
                description: 'Seguimiento completo durante el embarazo con ultrasonidos de alta definición y monitoreo constante para garantizar la salud de mamá y bebé.',
                color: 'pink',
                delay: '0.5s'
            },
            {
                image: 'fertility-treatment.jpg',  // ✅ Coincide con tu archivo
                emoji: '💕',
                alt: 'Tratamiento de fertilidad',
                title: 'Fertilidad',
                description: 'Evaluación y tratamiento de problemas de fertilidad con técnicas modernas y un enfoque integral para cumplir tu sueño de ser madre.',
                color: 'pink',
                delay: '0.7s'
            },
            {
                image: 'menopause-care.jpg',  // ✅ Coincide con tu archivo
                emoji: '🌸',
                alt: 'Cuidado en la menopausia',
                title: 'Climaterio y Menopausia',
                description: 'Acompañamiento especializado durante esta etapa de cambios, con tratamientos personalizados para mantener tu calidad de vida.',
                color: 'pink',
                delay: '0.9s'
            },
            {
                image: 'internal-medicine.jpg',  // ✅ Coincide con tu archivo
                emoji: '🏥',
                alt: 'Medicina interna',
                title: 'Medicina Interna',
                description: 'Atención integral para enfermedades crónicas y agudas, coordinando con otras especialidades para un cuidado completo.',
                color: 'sky',
                delay: '1.1s'
            },
            {
                image: 'gynecology-general.jpg',  // ✅ Coincide con tu archivo
                emoji: '👨‍⚕️',
                alt: 'Ginecología general',
                title: 'Ginecología General',
                description: 'Revisiones ginecológicas, prevención y tratamiento de patologías con la más alta calidad médica y trato humano.',
                color: 'sky',
                delay: '1.3s'
            },
            {
                image: 'preventive-health.jpg',  // ✅ Coincide con tu archivo
                emoji: '📋',
                alt: 'Salud preventiva',
                title: 'Salud Preventiva',
                description: 'Programas de prevención y detección temprana para mantener tu salud en óptimas condiciones a lo largo de la vida.',
                color: 'sky',
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