class IconManager {
    constructor() {
        this.useLogos = false; // Flag para cambiar entre emojis y logos
        this.logoPath = 'assets/icons/'; // Ruta base de los logos
    }

    // Método para cambiar entre emojis y logos
    toggleIconMode(useLogos = true) {
        this.useLogos = useLogos;
    }

    // Obtener icono (emoji o logo según configuración)
    getIcon(iconData, size = '4xl') {
        if (this.useLogos && iconData.logo) {
            return this.createLogoElement(iconData.logo, size);
        }
        return this.createEmojiElement(iconData.emoji, size);
    }

    // Crear elemento de emoji
    createEmojiElement(emoji, size) {
        const sizeClasses = {
            'sm': 'text-2xl',
            'md': 'text-3xl', 
            'lg': 'text-4xl',
            'xl': 'text-5xl',
            '4xl': 'text-4xl',
            '6xl': 'text-6xl'
        };
        
        return `<div class="icon-container ${sizeClasses[size] || 'text-4xl'}">${emoji}</div>`;
    }

    // Crear elemento de logo
    createLogoElement(logoPath, size) {
        const sizeClasses = {
            'sm': 'w-8 h-8',
            'md': 'w-12 h-12',
            'lg': 'w-16 h-16', 
            'xl': 'w-20 h-20',
            '4xl': 'w-16 h-16',
            '6xl': 'w-24 h-24'
        };

        // Si el logo no existe, mostrar placeholder
        return `
            <div class="icon-container ${sizeClasses[size] || 'w-16 h-16'}">
                <img src="${logoPath}" 
                     alt="Logo" 
                     class="w-full h-full object-contain"
                     onerror="this.parentElement.innerHTML='${this.createPlaceholder(size)}'">
            </div>
        `;
    }

    // Crear placeholder para logos faltantes
    createPlaceholder(size) {
        const sizeClasses = {
            'sm': 'w-8 h-8',
            'md': 'w-12 h-12',
            'lg': 'w-16 h-16',
            'xl': 'w-20 h-20', 
            '4xl': 'w-16 h-16',
            '6xl': 'w-24 h-24'
        };

        return `<div class="logo-placeholder ${sizeClasses[size] || 'w-16 h-16'}">
                    <span class="text-slate-400 text-xs">Logo</span>
                </div>`;
    }

    // Método para precargar logos (opcional)
    preloadLogos(iconList) {
        iconList.forEach(iconData => {
            if (iconData.logo) {
                const img = new Image();
                img.src = iconData.logo;
            }
        });
    }
}

// Instancia global
window.IconManager = new IconManager();
