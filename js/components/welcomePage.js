class WelcomePage {
    static init() {
        this.generateHeroSection();
        this.generateWhyChooseSection();
        this.generateSpecialtiesSection();
        this.generateCTASection();
    }

    static generateHeroSection() {
        const container = document.getElementById('heroSection');
        if (!container) return;

        const { hero } = window.LandingContent;
        const heroIcon = window.IconManager.getIcon(hero.icons, '6xl');

        container.innerHTML = `
            <div class="${heroIcon.includes('text-6xl') ? 'text-6xl' : ''} mb-8 animate-float">${heroIcon}</div>
            <h1 class="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
                ${hero.title}
            </h1>
            <p class="text-2xl md:text-3xl text-slate-700 mb-6 font-medium">
                ${hero.subtitle}
            </p>
            <p class="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
                ${hero.description}
            </p>
            
            <!-- Estadísticas -->
            <div class="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 animate-pulse-soft">
                ${hero.stats.map(stat => `
                    <div class="text-center">
                        <div class="text-4xl font-bold text-${stat.color}-600">${stat.number}</div>
                        <div class="text-slate-600">${stat.label}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    static generateWhyChooseSection() {
        const container = document.getElementById('whyChooseSection');
        if (!container) return;

        const { whyChoose } = window.LandingContent;

        container.innerHTML = `
            <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-12">${whyChoose.title}</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                ${whyChoose.features.map(feature => {
                    const icon = window.IconManager.getIcon(feature.icon, 'lg');
                    return `
                        <div class="welcome-card bg-white p-6 rounded-2xl shadow-lg border-2 border-${feature.color}-100 hover:shadow-xl">
                            <div class="mb-4">${icon}</div>
                            <h3 class="text-lg font-semibold text-slate-800 mb-2">${feature.title}</h3>
                            <p class="text-slate-600 text-sm">${feature.description}</p>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    static generateSpecialtiesSection() {
        const container = document.getElementById('specialtiesSection');
        if (!container) return;

        const { specialties } = window.LandingContent;

        container.innerHTML = `
            <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-12">${specialties.title}</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${specialties.services.map(service => {
                    const icon = window.IconManager.getIcon(service.icon, 'xl');
                    return `
                        <div class="welcome-card gradient-${service.color} p-8 rounded-2xl shadow-lg border-2 hover:shadow-xl">
                            <div class="mb-4 animate-float" style="animation-delay: ${service.delay}">${icon}</div>
                            <h3 class="text-xl font-bold text-${service.color}-800 mb-3">${service.title}</h3>
                            <p class="text-${service.color}-700 text-sm leading-relaxed">
                                ${service.description}
                            </p>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    static generateCTASection() {
        const container = document.getElementById('ctaSection');
        if (!container) return;

        const { cta } = window.LandingContent;

        const contactIcons = {
            phone: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.16 10.928c-.59.295-.96.99-.96 1.764v.025c0 2.372 2.828 4.292 6.314 4.292 3.486 0 6.314-1.92 6.314-4.292v-.025c0-.773-.37-1.469-.96-1.764l-4.064-2.541a1 1 0 01-.502-1.21L13.8 2.684A1 1 0 0114.72 2H18a2 2 0 012 2v1a17.941 17.941 0 01-17.999 17.999A2 2 0 013 20V5z"></path>`,
            clock: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>`,
            location: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>`
        };

        container.innerHTML = `
            <div class="bg-white p-8 rounded-2xl shadow-xl border-2 border-slate-200 mb-8">
                <h2 class="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                    ${cta.title}
                </h2>
                <p class="text-slate-600 mb-6 max-w-2xl mx-auto">
                    ${cta.description}
                </p>
                <button onclick="window.AppNavigation.showDirectory()" class="bg-gradient-to-r from-emerald-600 to-sky-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-emerald-700 hover:to-sky-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    ${cta.buttonText}
                </button>
            </div>
            
            <!-- Información de contacto -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                ${cta.contact.map(contact => `
                    <div class="flex items-center justify-center gap-3 text-slate-600">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            ${contactIcons[contact.icon]}
                        </svg>
                        <span>${contact.text}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Método para cambiar a modo logo
    static switchToLogos() {
        window.IconManager.toggleIconMode(true);
        this.init(); // Regenerar todo el contenido
    }

    // Método para volver a emojis
    static switchToEmojis() {
        window.IconManager.toggleIconMode(false);
        this.init(); // Regenerar todo el contenido
    }
}

// Exportar para uso global
window.WelcomePage = WelcomePage;scrollTo