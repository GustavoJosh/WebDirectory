class Navigation {
    constructor() {
        this.currentPage = 'welcome';
        this.selectedDoctorId = 1;
    }

    showWelcome() {
        document.getElementById('welcomePage')?.classList.remove('page-hidden');
        document.getElementById('directoryPage')?.classList.add('page-hidden');
        this.currentPage = 'welcome';
        
        // Regenerar cards en caso de que hayan cambiado
        setTimeout(() => {
            window.WelcomePage?.init();
        }, 50);
    }

    showDirectory() {
        document.getElementById('welcomePage')?.classList.add('page-hidden');
        document.getElementById('directoryPage')?.classList.remove('page-hidden');
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
        if (window.DirectoryPage) {
            window.DirectoryPage.generateTabs(this.selectedDoctorId);
            window.DirectoryPage.generateDoctorProfile(this.selectedDoctorId);
        }
    }

    // Getters y setters
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
window.AppNavigation = new Navigation();