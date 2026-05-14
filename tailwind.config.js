/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Syne', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f5f5f0',
          100: '#e8e8e0',
          200: '#d0d0c0',
          300: '#a8a890',
          400: '#7a7a60',
          500: '#5a5a44',
          600: '#3d3d2c',
          700: '#2a2a1c',
          800: '#1a1a10',
          900: '#0f0f08',
        },
        accent: {
          50: '#fff8e6',
          100: '#ffedb3',
          200: '#ffe080',
          300: '#ffd04d',
          400: '#ffc01a',
          500: '#e6a800',
          600: '#b38300',
          700: '#806000',
          800: '#4d3a00',
          900: '#1a1300',
        },
        sage: {
          50: '#f0f5f0',
          100: '#d8ead8',
          200: '#b0d5b0',
          300: '#80ba80',
          400: '#559a55',
          500: '#3a7a3a',
          600: '#275a27',
          700: '#1a3d1a',
          800: '#0f240f',
          900: '#050e05',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-in-right': 'slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        slideInRight: { from: { opacity: '0', transform: 'translateX(20px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
      },
    },
  },
  plugins: [],
}
