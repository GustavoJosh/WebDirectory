class DoctorProfile {
    static generateProfile(selectedDoctorId) {
        const { doctorsData } = window.DoctorsData;
        const selectedDoctor = doctorsData.find(doc => doc.id === selectedDoctorId);
        if (!selectedDoctor) return;

        const profileContainer = document.getElementById('doctorProfile');
        if (!profileContainer) return;

        const colorClasses = window.ColorUtils.getColorClasses(selectedDoctor.color, false);

        // Actualizar las clases del contenedor principal
        profileContainer.className = `rounded-2xl shadow-xl border-2 overflow-hidden animate-fade-in ${colorClasses.cardBg} ${colorClasses.borderColor}`;

        const servicesHTML = this.generateServicesHTML(selectedDoctor.services);

        profileContainer.innerHTML = `
            <div class="grid grid-cols-1 lg:grid-cols-3">
                ${this.generateProfileSidebar(selectedDoctor, colorClasses)}
                ${this.generateProfileContent(selectedDoctor, colorClasses, servicesHTML)}
            </div>
        `;

        // Agregar animación
        this.addProfileAnimation(profileContainer);
    }

    static generateServicesHTML(services) {
        return services.map(service => `
            <li class="flex items-start gap-3">
                <div class="w-2 h-2 rounded-full bg-slate-400 mt-2 flex-shrink-0"></div>
                <span class="text-sm leading-relaxed">${service}</span>
            </li>
        `).join('');
    }

    static generateProfileSidebar(doctor, colorClasses) {
        return `
            <div class="lg:col-span-1 p-8 ${colorClasses.profileBg} flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r ${colorClasses.borderColor}">
                <div class="w-32 h-32 rounded-full bg-white border-4 ${colorClasses.borderColor} shadow-lg mb-6 flex items-center justify-center text-6xl">
                    ${doctor.icon}
                </div>
                <h2 class="text-2xl font-bold text-slate-800 mb-2">${doctor.name}</h2>
                <p class="font-semibold ${colorClasses.specialty} text-center text-sm leading-relaxed">
                    ${doctor.specialty}
                </p>
            </div>
        `;
    }

    static generateProfileContent(doctor, colorClasses, servicesHTML) {
        return `
            <div class="lg:col-span-2 p-8 flex flex-col bg-white">
                <div class="mb-8">
                    <h3 class="text-xl font-semibold text-slate-700 mb-4">Sobre mí y mis servicios</h3>
                    <p class="text-slate-600 leading-relaxed mb-6">${doctor.bio}</p>
                    
                    <h4 class="text-lg font-semibold text-slate-700 mb-3">Servicios que ofrezco:</h4>
                    <ul class="space-y-2 text-slate-600">
                        ${servicesHTML}
                    </ul>
                </div>

                ${this.generateHospitalInfo(doctor, colorClasses)}
            </div>
        `;
    }

    static generateHospitalInfo(doctor, colorClasses) {
        return `
            <div class="mt-auto pt-6 border-t border-slate-200">
                <div class="flex flex-col sm:flex-row justify-between items-start gap-6">
                    <div class="flex items-start gap-3 flex-1">
                        <svg class="w-6 h-6 text-slate-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <div>
                            <p class="font-semibold text-slate-700 text-lg">${doctor.hospital.name}</p>
                            <p class="text-slate-600 text-sm mb-3">${doctor.hospital.address}</p>
                            <a href="${doctor.hospital.locationUrl}" target="_blank" rel="noopener noreferrer" 
                               class="inline-block text-white px-4 py-2 rounded-lg transition duration-300 shadow-md text-sm font-medium ${colorClasses.mapButton}">
                                Ver en Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    static addProfileAnimation(profileContainer) {
        profileContainer.classList.remove('animate-fade-in');
        setTimeout(() => {
            profileContainer.classList.add('animate-fade-in');
        }, 10);
    }
}

// Exportar para uso global
window.DoctorProfile = DoctorProfile;