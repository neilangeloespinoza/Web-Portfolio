/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0a0a0a',
        'cyber-darker': '#121212',
        'neon-blue': '#00fff9',
        'neon-pink': '#ff00ff',
        'neon-purple': '#b829ea',
        'neon-green': '#39ff14',
      },
      fontFamily: {
        'cyber': ['Orbitron', 'sans-serif'],
        'cyber-secondary': ['Rajdhani', 'sans-serif'],
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00fff9, 0 0 20px #00fff9, 0 0 40px #00fff9',
        'neon-pink': '0 0 5px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff',
        'neon-purple': '0 0 5px #b829ea, 0 0 20px #b829ea, 0 0 40px #b829ea',
        'neon-green': '0 0 5px #39ff14, 0 0 20px #39ff14, 0 0 40px #39ff14',
      },
      animation: {
        'glow': 'glow 5s ease-in-out infinite alternate',
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'border-flow': 'border-flow 2s linear infinite',
        'text-shimmer': 'text-shimmer 2.5s ease-in-out infinite alternate',
        'cyber-hover': 'cyber-hover 1s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { 
            textShadow: '0 0 5px #fff, 0 0 10px #00fff9',
            color: '#fff'
          },
          '100%': { 
            textShadow: '0 0 7px #fff, 0 0 12px #00fff9',
            color: '#00fff9'
          }
        },
        'pulse-neon': {
          '0%, 100%': { 
            boxShadow: '0 0 5px #00fff9, 0 0 20px #00fff9, 0 0 40px #00fff9',
            borderColor: '#00fff9'
          },
          '50%': { 
            boxShadow: '0 0 10px #00fff9, 0 0 30px #00fff9, 0 0 50px #00fff9',
            borderColor: '#fff'
          }
        },
        'border-flow': {
          '0%': { borderImage: 'linear-gradient(90deg, #00fff9, #ff00ff) 1' },
          '50%': { borderImage: 'linear-gradient(180deg, #ff00ff, #39ff14) 1' },
          '100%': { borderImage: 'linear-gradient(270deg, #39ff14, #00fff9) 1' }
        },
        'text-shimmer': {
          '0%': { 
            backgroundPosition: '100% 50%',
            color: '#00fff9'
          },
          '100%': { 
            backgroundPosition: '0% 50%',
            color: '#ff00ff'
          }
        },
        'cyber-hover': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-5px)' }
        }
      },
    },
  },
  plugins: [],
} 