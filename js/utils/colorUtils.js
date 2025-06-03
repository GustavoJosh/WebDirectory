class ColorUtils {
    static getColorClasses(color, selected = false) {
        const colors = {
            emerald: {
                button: selected ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-600 hover:bg-emerald-50',
                specialty: 'text-emerald-700',
                mapButton: 'bg-emerald-600 hover:bg-emerald-700',
                cardBg: 'gradient-emerald',
                profileBg: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
                borderColor: 'border-emerald-200'
            },
            sky: {
                button: selected ? 'bg-sky-600 text-white shadow-md' : 'text-slate-600 hover:bg-sky-50',
                specialty: 'text-sky-700',
                mapButton: 'bg-sky-600 hover:bg-sky-700',
                cardBg: 'gradient-sky',
                profileBg: 'bg-gradient-to-br from-sky-50 to-sky-100',
                borderColor: 'border-sky-200'
            },
            pink: {
                button: selected ? 'bg-pink-600 text-white shadow-md' : 'text-slate-600 hover:bg-pink-50',
                specialty: 'text-pink-700',
                mapButton: 'bg-pink-600 hover:bg-pink-700',
                cardBg: 'gradient-pink',
                profileBg: 'bg-gradient-to-br from-pink-50 to-pink-100',
                borderColor: 'border-pink-200'
            },
            blue: {
                button: selected ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-blue-50',
                specialty: 'text-blue-700',
                mapButton: 'bg-blue-600 hover:bg-blue-700',
                cardBg: 'gradient-blue',
                profileBg: 'bg-gradient-to-br from-blue-50 to-blue-100',
                borderColor: 'border-blue-200'
            }
        };
        return colors[color] || colors.emerald;
    }
}

// Exportar para uso global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ColorUtils };
} else {
    window.ColorUtils = ColorUtils;
}