<<<<<<< HEAD
// ============================================================================
// ARCHIVO: js/app.js (Inicialización principal)
// ============================================================================
=======
>>>>>>> 67de77d832be01eebd781d6342ce835a9ceae2d6
class App {
    constructor() {
        this.isInitialized = false;
    }

    init() {
        if (this.isInitialized) return;

        // Esperar a que el DOM esté completamente cargado
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeApp());
        } else {
            this.initializeApp();
        }
    }

    initializeApp() {
        try {
            console.log('🚀 Iniciando aplicación CADIM...');
            
            // Verificar que todos los módulos estén cargados
            this.checkDependencies();

            // Inicializar página de bienvenida
            this.initWelcomePage();

<<<<<<< HEAD
=======
            window.ImageManager.initHeroBackgroundLazy();

>>>>>>> 67de77d832be01eebd781d6342ce835a9ceae2d6
            // Mostrar página de bienvenida por defecto
            window.AppNavigation.showWelcome();

            // Marcar como inicializado
            this.isInitialized = true;

            console.log('✅ Aplicación CADIM inicializada correctamente');
        } catch (error) {
            console.error('❌ Error al inicializar la aplicación:', error);
            this.handleInitError(error);
        }
    }

    checkDependencies() {
        const requiredModules = [
            'LandingContent',
            'IconManager',
            'ColorUtils', 
            'AppNavigation',
            'WelcomePage',
            'DirectoryPage',
            'DoctorProfile'
        ];

        const missingModules = requiredModules.filter(module => !window[module]);
        
        if (missingModules.length > 0) {
            console.warn('⚠️ Módulos faltantes:', missingModules);
            // No lanzar error, intentar continuar
        }

        console.log('📦 Módulos cargados:', requiredModules.filter(module => window[module]));
    }

    initWelcomePage() {
        // Inicializar página de bienvenida
        if (window.WelcomePage && window.WelcomePage.init) {
            window.WelcomePage.init();
            console.log('🏠 Welcome page inicializada');
<<<<<<< HEAD
        } else {
=======
        } else {s
>>>>>>> 67de77d832be01eebd781d6342ce835a9ceae2d6
            console.warn('⚠️ WelcomePage no disponible');
        }
    }

    handleInitError(error) {
        console.error('Error detallado:', error);
        
        // Mostrar mensaje de error al usuario
        const errorDiv = document.createElement('div');
        errorDiv.className = 'fixed inset-0 bg-red-50 flex items-center justify-center z-50';
        errorDiv.innerHTML = `
            <div class="bg-white p-8 rounded-lg shadow-lg max-w-md mx-4 text-center">
                <div class="text-red-600 text-6xl mb-4">⚠️</div>
                <h2 class="text-xl font-bold text-red-800 mb-2">Error de Inicialización</h2>
                <p class="text-red-600 mb-4">No se pudo cargar la aplicación correctamente.</p>
                <p class="text-sm text-gray-600 mb-4">Error: ${error.message}</p>
                <button onclick="location.reload()" class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                    Recargar Página
                </button>
            </div>
        `;
        document.body.appendChild(errorDiv);
    }
}

// Inicializar la aplicación
console.log('📱 Cargando aplicación CADIM...');
const cadimApp = new App();
cadimApp.init();