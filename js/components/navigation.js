class Navigation {
    constructor() {
        this.currentPage = 'welcome';
        this.selectedDoctorId = 1;
    }

    showWelcome() {
        document.getElementById('welcomePage').classList.remove('page-hidden');
        document.getElementById('directoryPage').classList.add('page-hidden');
        this.currentPage = 'welcome';
    }

    showDirectory() {
        document.getElementById('welcomePage').classList.add('page-hidden');
        document.getElementById('directoryPage').classList.remove('page-hidden');
        this.currentPage = 'directory';
        
        // Pequeño delay para asegurar que la página sea visible antes de generar contenido
        setTimeout(() => {
            this.generateDirectoryContent();
        }, 100);
    }

    goToDoctor(doctorId) {
        this.selectedDoctorId = doctorId;
        this.showDirectory();
    }

    generateDirectoryContent() {
        // Esta función se implementará cuando creemos los otros componentes
        if (window.DirectoryPage) {
            window.DirectoryPage.generateTabs(this.selectedDoctorId);
            window.DirectoryPage.generateDoctorProfile(this.selectedDoctorId);
        }
    }

    // Getters para acceso desde otros módulos
    getCurrentPage() {
        return this.currentPage;
    }

    getSelectedDoctorId() {
        return this.selectedDoctorId;
    }

    setSelectedDoctorId(id) {
        this.selectedDoctorId = id;
    }
}

// Instancia global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Navigation };
} else {
    window.AppNavigation = new Navigation();
}