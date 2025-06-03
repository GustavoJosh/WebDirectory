class DirectoryPage {
    static generateTabs(selectedDoctorId) {
        const tabsContainer = document.getElementById('doctorTabs');
        if (!tabsContainer) return;

        const { doctorsData } = window.DoctorsData;
        tabsContainer.innerHTML = '';

        doctorsData.forEach(doctor => {
            const colorClasses = window.ColorUtils.getColorClasses(doctor.color, selectedDoctorId === doctor.id);
            const shortName = doctor.name.split(' ').slice(0, 3).join(' ');
            const shortSpecialty = doctor.specialty.split(',')[0];

            const tabButton = document.createElement('button');
            tabButton.className = `doctor-tab px-3 sm:px-4 py-3 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 w-full sm:w-auto text-center ${colorClasses.button}`;
            tabButton.onclick = () => this.selectDoctor(doctor.id);

            tabButton.innerHTML = `
                <div class="font-medium">${shortName}</div>
                <div class="text-xs opacity-75 mt-1">${shortSpecialty}</div>
            `;

            tabsContainer.appendChild(tabButton);
        });
    }

    static selectDoctor(doctorId) {
        window.AppNavigation.setSelectedDoctorId(doctorId);
        this.generateTabs(doctorId);
        window.DoctorProfile.generateProfile(doctorId);
    }

    static generateDoctorProfile(selectedDoctorId) {
        // Delegar al componente DoctorProfile
        window.DoctorProfile.generateProfile(selectedDoctorId);
    }
}

// Exportar para uso global
window.DirectoryPage = DirectoryPage;