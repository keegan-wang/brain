/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dfe8ff',
          500: '#7aa2f7',
          600: '#6b91e6',
          700: '#5c7fd5',
          900: '#3d5aa3',
        },
        accent: {
          pink: '#f7768e',
          purple: '#c6a0f6',
          teal: '#8bd5ca',
          green: '#a7c957',
        },
        dark: {
          50: '#e8eef7',
          100: '#a9b3c7',
          800: '#1f2a44',
          850: '#0e1530',
          900: '#0b1020',
          950: '#070b12',
        }
      },
      boxShadow: {
        'glow': '0 0 40px rgba(122, 162, 247, 0.2)',
        'glow-pink': '0 0 30px rgba(247, 118, 142, 0.15)',
        'glow-teal': '0 0 30px rgba(139, 213, 202, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
