class Navigation {
    constructor() {
        this.currentPage = 'welcome';
        this.selectedDoctorId = 1;
    }

    showWelcome() {
<<<<<<< HEAD
        document.getElementById('welcomePage').classList.remove('page-hidden');
        document.getElementById('directoryPage').classList.add('page-hidden');
        this.currentPage = 'welcome';
    }

    showDirectory() {
        document.getElementById('welcomePage').classList.add('page-hidden');
        document.getElementById('directoryPage').classList.remove('page-hidden');
=======
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
>>>>>>> 67de77d832be01eebd781d6342ce835a9ceae2d6
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
<<<<<<< HEAD
        // Esta función se implementará cuando creemos los otros componentes
=======
>>>>>>> 67de77d832be01eebd781d6342ce835a9ceae2d6
        if (window.DirectoryPage) {
            window.DirectoryPage.generateTabs(this.selectedDoctorId);
            window.DirectoryPage.generateDoctorProfile(this.selectedDoctorId);
        }
    }

<<<<<<< HEAD
    // Getters para acceso desde otros módulos
=======
    // Getters y setters
>>>>>>> 67de77d832be01eebd781d6342ce835a9ceae2d6
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
<<<<<<< HEAD
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Navigation };
} else {
    window.AppNavigation = new Navigation();
}
=======
window.AppNavigation = new Navigation();
>>>>>>> 67de77d832be01eebd781d6342ce835a9ceae2d6
