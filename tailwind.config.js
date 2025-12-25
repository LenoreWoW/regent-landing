/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Regent Premium Palette
        'maroon': '#8A1538',
        'maroon-dark': '#5c0f26',
        'gold': '#d4af37',
        'gold-dark': '#b8962e',
        'dune': '#a89f91',
        'cream': '#faf8f5',
        'charcoal': '#0a0a0a',
        'palm': '#129b82',
        'sea': '#4194b3',
        'salmon': '#dd7877',
        // Legacy support
        'al-adaam': '#8A1538',
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        arabic: ['IBM Plex Sans Arabic', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'slow-rotate': 'slowRotate 20s linear infinite',
        'counter-rotate': 'counterRotate 25s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'orbit': 'orbit 15s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slowRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        counterRotate: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-maroon': 'linear-gradient(135deg, #8A1538 0%, #5c0f26 100%)',
        'gradient-gold': 'linear-gradient(135deg, #d4af37 0%, #b8962e 100%)',
      },
    },
  },
  plugins: [],
};

