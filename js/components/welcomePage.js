// Actualización para js/components/welcomePage.js

class WelcomePage {
    static init() {
        this.currentView = 'hero'; // hero o about
        this.generateHeroSection();
        this.generateAboutSection();
        this.initializeNavigation();
    }

    static generateHeroSection() {
        const container = document.getElementById('heroContent');
        if (!container) return;
    
        const { hero } = window.LandingContent;
        const heroIcon = window.IconManager.getIcon(hero.icons, '6xl');
    
        container.innerHTML = `
            <div class="text-center">
                <div class="${heroIcon.includes('text-6xl') ? 'text-6xl' : ''} mb-8 animate-float">${heroIcon}</div>
                <h1 class="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
                    ${hero.title}
                </h1>
                <p class="text-2xl md:text-3xl text-slate-700 mb-6 font-medium">
                    ${hero.subtitle}
                </p>
                <p class="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8 text-justify">
                    ${hero.description}
                </p>
                
                <div class="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 animate-pulse-soft">
                    ${hero.stats.map(stat => `
                        <div class="text-center stat-item">
                            <div class="text-4xl font-bold text-${stat.color}-600">${stat.number}</div>
                            <div class="text-slate-600">${stat.label}</div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onclick="window.AppNavigation.showDirectory()" 
                        class="bg-gradient-to-r from-emerald-600 to-sky-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-emerald-700 hover:to-sky-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                        Conoce a Nuestros Especialistas
                    </button>
                    <button onclick="window.WelcomePage.showAboutView()" 
                        class="bg-white text-slate-800 border-2 border-slate-300 px-10 py-4 rounded-full text-lg font-semibold hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                        Más Sobre Nosotros
                    </button>
                </div>
            </div>
        `;
    }

    static generateAboutSection() {
        // Crear contenedor para la sección "Más sobre nosotros"
        const welcomePage = document.getElementById('welcomePage');
        if (!welcomePage) return;

        // Verificar si ya existe
        let aboutContainer = document.getElementById('aboutSection');
        if (!aboutContainer) {
            aboutContainer = document.createElement('div');
            aboutContainer.id = 'aboutSection';
            aboutContainer.className = 'hidden';
            welcomePage.appendChild(aboutContainer);
        }

        aboutContainer.innerHTML = `
            <button onclick="window.WelcomePage.showHeroView()" 
                class="fixed top-8 left-8 z-50 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-1">
                <span class="flex items-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    Volver
                </span>
            </button>
            
            <div class="min-h-screen py-20 px-4">
                <div class="max-w-7xl mx-auto">
                    ${this.generateWhyChooseContent()}
                    ${this.generateSpecialtiesContent()}
                    ${this.generateFinalCTA()}
                </div>
            </div>
        `;
    }

    static generateWhyChooseContent() {
        const { whyChoose } = window.LandingContent;
        
        return `
            
            <div class="mb-20 animate-fade-in why-choose-section">
                <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">${whyChoose.title}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    ${whyChoose.features.map(feature => {
                        const imageElement = window.ImageManager.getCardImage(feature, 'lg');
                        
                        return `
                            
                            <div class="feature-card bg-white backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
                                <div class="w-50 h-50 mx-auto mb-4 rounded-lg overflow-hidden aspect-square">
                                    ${imageElement}
                                </div>
                                <h3 class="text-lg font-semibold text-slate-800 mb-2 text-center">${feature.title}</h3>
                                <p class="text-sm text-slate-600 text-center">${feature.description}</p>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }

    static generateSpecialtiesContent() {
        const { specialties } = window.LandingContent;
        
        return `
            <div class="animate-fade-in specialties-section">
                <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">${specialties.title}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${specialties.services.map((service, index) => {
                        // ✨ USAR getCardImage para tarjetas (con imágenes)
                        const imageElement = window.ImageManager.getCardImage(service, 'xl');
                        const color = service.color || 'slate';
                        
                        return `
                            <div class="specialty-card bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-${color}-100 hover:border-${color}-300">
                                <div class="flex items-center justify-center w-32 h-32 bg-gradient-to-br from-${color}-100 to-${color}-200 rounded-full mb-6 icon-bounce mx-auto overflow-hidden" style="animation-delay: ${service.delay}">
                                    ${imageElement}
                                </div>
                                <h3 class="text-xl font-bold text-slate-800 mb-4 text-center">${service.title}</h3>
                                <p class="text-slate-600 leading-relaxed text-justify">
                                    ${service.description}
                                </p>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }

    static generateFinalCTA() {
        const { cta } = window.LandingContent;
        
        return `
            <div class="mt-20 text-center animate-fade-in">
                <div class="bg-white p-10 rounded-3xl shadow-xl max-w-4xl mx-auto">
                    <h2 class="text-3xl font-bold text-slate-800 mb-4">${cta.title}</h2>
                    <p class="text-lg text-slate-600 mb-8">${cta.description}</p>
                    <button onclick="window.AppNavigation.showDirectory()" 
                        class="bg-gradient-to-r from-emerald-600 to-sky-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-emerald-700 hover:to-sky-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                        ${cta.buttonText}
                    </button>
                </div>
            </div>
        `;
    }

    // Métodos de navegación
    static showHeroView() {
        const heroSection = document.getElementById('heroSection');
        const aboutSection = document.getElementById('aboutSection');
        
        if (heroSection) heroSection.classList.remove('hidden');
        if (aboutSection) aboutSection.classList.add('hidden');
        
        this.currentView = 'hero';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    static showAboutView() {
        const heroSection = document.getElementById('heroSection');
        const aboutSection = document.getElementById('aboutSection');
        
        if (heroSection) heroSection.classList.add('hidden');
        if (aboutSection) aboutSection.classList.remove('hidden');
        
        this.currentView = 'about';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Inicializar animaciones
        this.initializeAnimations();
    }

    // Toggle para las descripciones
    static toggleDescription(index) {
        const description = document.getElementById(`desc-${index}`);
        const button = description.nextElementSibling;
        
        if (!description || !button) return;
        
        description.classList.toggle('visible');
        
        if (description.classList.contains('visible')) {
            button.textContent = 'Mostrar menos';
        } else {
            button.textContent = 'Saber más';
        }
    }

    // Inicializar navegación
    static initializeNavigation() {
        // Asegurar que ambas secciones estén creadas
        this.generateAboutSection();
        
        // Mostrar solo la vista hero al inicio
        this.showHeroView();
    }

    // Inicializar animaciones
    static initializeAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        // Observar elementos con fade-in
        document.querySelectorAll('.animate-fade-in').forEach(el => {
            observer.observe(el);
        });
    }
}

// Exportar para uso global
window.WelcomePage = WelcomePage;