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
        // 🔧 CORREGIDO: Usar ImageManager existente
        const profileImageHTML = this.generateProfileImage(doctor, colorClasses);
        
        return `
            <div class="lg:col-span-1 p-8 ${colorClasses.profileBg} flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r ${colorClasses.borderColor}">
                ${profileImageHTML}
                <h2 class="text-2xl font-bold text-slate-800 mb-2">${doctor.name}</h2>
                <p class="font-semibold ${colorClasses.specialty} text-center text-sm leading-relaxed">
                    ${doctor.specialty}
                </p>
            </div>
        `;
    }

    // 🔧 CORREGIDO: Usar ImageManager en lugar de manejo manual
    static generateProfileImage(doctor, colorClasses) {
        // Si tiene foto de perfil configurada, usar ImageManager
        if (doctor.profilePhoto && doctor.profilePhoto.image) {
            // Crear objeto compatible con ImageManager
            const imageData = {
                image: `profiles/${doctor.profilePhoto.image}`, // Agregar carpeta profiles/
                alt: doctor.profilePhoto.alt || doctor.name,
                emoji: doctor.icon // 🔧 IMPORTANTE: Emoji específico del doctor
            };
            
            // Usar ImageManager para generar la imagen con fallbacks automáticos
            const imageElement = window.ImageManager.getCardImage(imageData, 'xl', '');
            
            return `
                <div class="w-34 h-34 overflow-hidden border-4 ${colorClasses.borderColor} shadow-lg mb-6 bg-white rounded-full">
                    ${imageElement}
                </div>
            `;
        } 
        // Fallback directo al emoji si no tiene profilePhoto
        else {
            return `
                <div class="w-32 h-32 rounded-full bg-white border-4 ${colorClasses.borderColor} shadow-lg mb-6 flex items-center justify-center text-6xl">
                    ${doctor.icon}
                </div>
            `;
        }
    }

    static generateProfileContent(doctor, colorClasses, servicesHTML) {
        return `
            <div class="lg:col-span-2 p-8 flex flex-col bg-white">
                <div class="mb-8">
                    <h3 class="text-xl font-semibold text-slate-700 mb-4 text-center">Sobre mí y mis servicios</h3>
                    <p class="text-slate-600 leading-relaxed mb-6 text-justify">${doctor.bio}</p>
                    
                    <h4 class="text-lg font-semibold text-slate-700 mb-3 text-center">Servicios que ofrezco:</h4>
                    <ul class="space-y-2 text-slate-600">
                        ${servicesHTML}
                    </ul>
                </div>
    
                ${this.generateHospitalInfo(doctor, colorClasses)}
            </div>
        `;
    }

    static generateHospitalInfo(doctor, colorClasses) {
        const whatsappUrl = this.generateWhatsAppUrl(doctor.whatsapp);
        
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
                            <p class="text-slate-600 text-sm mb-4">${doctor.hospital.address}</p>
                            
                            <div class="flex flex-col sm:flex-row gap-3">
                                <a href="${doctor.hospital.locationUrl}" target="_blank" rel="noopener noreferrer" 
                                   class="inline-flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg transition duration-300 shadow-md text-sm font-medium ${colorClasses.mapButton}">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    Ver en Google Maps
                                </a>
                                
                                <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" 
                                   class="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition duration-300 shadow-md text-sm font-medium">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                    </svg>
                                    Contactar por WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    static generateWhatsAppUrl(whatsappData) {
        if (!whatsappData || !whatsappData.number) {
            return '#';
        }
        
        const cleanNumber = whatsappData.number.replace(/\D/g, '');
        const encodedMessage = encodeURIComponent(whatsappData.message || 'Hola, me gustaría agendar una consulta.');
        
        return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
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