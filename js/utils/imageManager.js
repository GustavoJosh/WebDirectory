// js/utils/imageManager.js - CORRECCIÓN PARA EMOJI FALLBACK

class ImageManager {
    constructor() {
        this.imagePath = 'assets/images/';
        this.fallbackPath = 'assets/icons/';
        this.loadedImages = new Set();
        this.failedImages = new Set();
    }

    // ===================================
    // MÉTODO PRINCIPAL PARA TARJETAS
    // ===================================
    
    getCardImage(imageData, size = 'xl', className = '') {
        const imageKey = this.getImageKey(imageData);
        
        if (this.failedImages.has(imageKey)) {
            return this.getFallbackForData(imageData, size, className);
        }

        if (imageData.image) {
            return this.createOptimizedImageElement(imageData.image, imageData.alt || imageData.title, size, className, imageData.emoji);
        } else if (imageData.icon) {
            return this.createOptimizedIconElement(imageData.icon, imageData.alt || imageData.title, size, className);
        } else if (imageData.emoji) {
            return this.createEmojiElement(imageData.emoji, size, className);
        }
        return this.createPlaceholder(size, className);
    }

    // ===================================
    // MÉTODO PARA MANTENER COMPATIBILIDAD
    // ===================================
    
    getIcon(iconData, size = '4xl') {
        if (typeof iconData === 'string') {
            return this.createEmojiElement(iconData, size);
        } else if (iconData && iconData.emoji) {
            return this.createEmojiElement(iconData.emoji, size);
        }
        return this.createEmojiElement('📋', size);
    }

    // ===================================
    // ELEMENTOS OPTIMIZADOS
    // ===================================

    // 🔧 CORREGIDO: Pasar emoji para fallback
    createOptimizedImageElement(imageName, alt, size, className = '', fallbackEmoji = '📋') {
        const imageId = `img_${Math.random().toString(36).substr(2, 9)}`;
        const imageKey = `image_${imageName}`;
        
        const webpName = imageName.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        
        return `
            <picture class="block w-full h-full">
                <source srcset="${this.imagePath}${webpName}" type="image/webp">
                <img 
                    id="${imageId}"
                    src="${this.imagePath}${imageName}" 
                    alt="${alt}" 
                    class="w-full h-full object-cover ${className}"
                    loading="lazy"
                    decoding="async"
                    data-image-key="${imageKey}"
                    data-fallback-emoji="${fallbackEmoji}"
                    onerror="window.ImageManager.handleImageError('${imageId}', '${imageName}', '${alt}', '${size}', '${className}', '${fallbackEmoji}')"
                    onload="window.ImageManager.markAsLoaded('${imageKey}')"
                >
            </picture>
        `;
    }

    createOptimizedIconElement(iconName, alt, size, className = '') {
        const iconId = `icon_${Math.random().toString(36).substr(2, 9)}`;
        const iconKey = `icon_${iconName}`;

        return `
            <img 
                id="${iconId}"
                src="${this.fallbackPath}${iconName}" 
                alt="${alt}" 
                class="w-full h-full object-contain ${className}"
                loading="lazy"
                decoding="async"
                data-image-key="${iconKey}"
                onerror="window.ImageManager.handleIconError('${iconId}', '${size}', '${className}')"
                onload="window.ImageManager.markAsLoaded('${iconKey}')"
            >
        `;
    }

    createEmojiElement(emoji, size, className = '') {
        const sizeClasses = this.getSizeClasses(size);
        return `<div class="flex items-center justify-center ${sizeClasses.emoji} ${className}">${emoji}</div>`;
    }

    // ===================================
    // MANEJO OPTIMIZADO DE ERRORES
    // ===================================

    // 🔧 CORREGIDO: Usar emoji específico del doctor
    handleImageError(imageId, imageName, alt, size, className, fallbackEmoji = '📋') {
        console.log('❌ Error cargando imagen:', imageName);
        console.log('📂 Ruta que falló:', this.imagePath + imageName);
        
        const element = document.getElementById(imageId);
        if (!element) return;
    
        const imageKey = element.dataset.imageKey;
        this.failedImages.add(imageKey);
        
        // 🔧 USAR EL EMOJI ESPECÍFICO DEL DOCTOR
        const emojiToUse = fallbackEmoji || element.dataset.fallbackEmoji || '📋';
        
        console.log('🔄 Usando emoji fallback:', emojiToUse);
        
        const pictureElement = element.parentElement;
        if (pictureElement && pictureElement.parentElement) {
            pictureElement.parentElement.innerHTML = this.createEmojiElement(emojiToUse, size, className);
        }
    }

    handleIconError(elementId, size, className) {
        const element = document.getElementById(elementId);
        if (!element) return;

        const iconKey = element.dataset.imageKey;
        this.failedImages.add(iconKey);
        
        this.finalFallback(elementId, size, className);
    }

    finalFallback(elementId, size, className) {
        const element = document.getElementById(elementId);
        if (!element) return;

        const container = element.parentElement.tagName === 'PICTURE' ? element.parentElement : element;
        
        if (container && container.parentElement) {
            container.parentElement.innerHTML = this.createEmojiElement('📋', size, className);
        }
    }

    // ===================================
    // CACHE Y OPTIMIZACIONES
    // ===================================

    markAsLoaded(imageKey) {
        this.loadedImages.add(imageKey);
    }

    getImageKey(imageData) {
        if (imageData.image) return `image_${imageData.image}`;
        if (imageData.icon) return `icon_${imageData.icon}`;
        if (imageData.emoji) return `emoji_${imageData.emoji}`;
        return 'unknown';
    }

    // 🔧 CORREGIDO: Usar emoji específico en fallback
    getFallbackForData(imageData, size, className) {
        if (imageData.emoji) {
            return this.createEmojiElement(imageData.emoji, size, className);
        } else if (imageData.icon) {
            return this.createEmojiElement('🔧', size, className);
        }
        return this.createEmojiElement('📋', size, className);
    }

    // ===================================
    // LAZY LOADING DEL HERO BACKGROUND
    // ===================================
    
    initHeroBackgroundLazy() {
        const heroBackground = document.querySelector('.background-image');
        if (!heroBackground) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadHeroBackground(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '50px'
        });

        observer.observe(heroBackground);
    }

    loadHeroBackground(element) {
        const webpImg = new Image();
        webpImg.onload = () => {
            element.style.backgroundImage = "url('assets/images/doctoraybebe.webp')";
            element.classList.add('background-loaded');
        };
        webpImg.onerror = () => {
            const pngImg = new Image();
            pngImg.onload = () => {
                element.style.backgroundImage = "url('assets/images/doctoraybebe.png')";
                element.classList.add('background-loaded');
            };
            pngImg.src = 'assets/images/doctoraybebe.png';
        };
        webpImg.src = 'assets/images/doctoraybebe.webp';
    }

    // ===================================
    // UTILIDADES
    // ===================================

    getSizeClasses(size) {
        const sizes = {
            'sm': { emoji: 'text-2xl' },
            'md': { emoji: 'text-3xl' }, 
            'lg': { emoji: 'text-4xl' },
            'xl': { emoji: 'text-5xl' },
            '4xl': { emoji: 'text-4xl' },
            '6xl': { emoji: 'text-6xl' }
        };
        
        return sizes[size] || sizes['md'];
    }

    createPlaceholder(size, className = '') {
        return `
            <div class="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center ${className}">
                <div class="text-center">
                    <svg class="w-6 h-6 text-slate-400 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z"></path>
                    </svg>
                    <span class="text-xs text-slate-500">Imagen</span>
                </div>
            </div>
        `;
    }

    preloadImages(imageList) {
        const criticalImages = imageList.slice(0, 3);
        
        criticalImages.forEach(imageData => {
            if (imageData.image && !this.loadedImages.has(`image_${imageData.image}`)) {
                const link = document.createElement('link');
                link.rel = 'prefetch';
                link.href = this.imagePath + imageData.image;
                document.head.appendChild(link);
            }
        });
    }

    clearCache() {
        this.loadedImages.clear();
        this.failedImages.clear();
    }
}

// Instancia global
window.ImageManager = new ImageManager();
window.IconManager = window.ImageManager;