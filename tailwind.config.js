/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blob': 'blob 10s infinite alternate',
        'spin-slow': 'spin 10s linear infinite', // <--- INI BARU (Putaran Lambat)
      },
      keyframes: {
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '25%': { transform: 'translate(40px, -60px) scale(1.1)' },
          '50%': { transform: 'translate(-20px, 30px) scale(0.9)' },
          '75%': { transform: 'translate(50px, 20px) scale(1.05)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      },
    },
  },
  plugins: [],
}