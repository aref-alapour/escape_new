/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/*.html',
    './public/assets/js/*.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": {
          100: "#FFDACC",
          200: "#FFB599",
          300: "#FF8F66",
          400: "#FF6A33",
          500: "#FF4500",
          600: "#CC3700",
          700: "#992900",
          800: "#661C00",
          900: "#330E00",
          950: "#ff4905"
        },
        "secondary": {
          100: "#CCDADA",
          200: "#99B4B5",
          300: "#668F8F",
          400: "#33696A",
          500: "#004445",
          600: "#003637",
          700: "#002929",
          800: "#001B1C",
          900: "#000E0E",
        },
        "tertiary": {
          100: "#DDDCDA",
          200: "#BBB8B4",
          300: "#99958F",
          400: "#777169",
          500: "#554E44",
          600: "#443E36",
          700: "#332F29",
          800: "#221F1B",
          900: "#11100E",
        },
        "green": {
          "light": "#1FA71F",
          "dark": "#198619",
        },
        "cyan": "#008080",
        "dark": "#554E44",
        "light": "#ffffff",
        "gray": {
          1: "#F9F9F9",
          2: "#EDEDED",
          3: "#CBCBCB",
          4: "#757575",
        }
      },
      keyframes: {
        off: {
          '0%, 100%': { transform: 'rotate(-3deg) scale(1.2)' },
          '50%': { transform: 'rotate(3deg) scale(1)' },
        },
        scale: {
          '0%': { transform: 'scale(1.1)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '.9' },
        },
        type: {
          '0%': { visible: 'visible', opacity: '1' },
          '100%': { visible: 'hidden', opacity: '0' },
        },
        play: {
          '0%': {transform: 'translate(-50%, -50%) scale(0.2)', opacity: 0},
          '50%': {opacity: 0.9},
          '100%': {transform: 'translate(-50%, -50%) scale(0.9)', opacity: 0},
        }
      },
      animation: {
        off: 'off 1s ease-in-out infinite',
        scale: 'scale .5s ease-in-out alternate infinite',
        type: 'type .5s ease-in-out alternate infinite',
        play: 'play 3s ease-in-out infinite',
      },
      fontFamily: {
        "YekanBakh" : "YekanBakh",
      },
      spacing: {
        "30" : "7.5rem"
      },
      container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '0.625rem',
      },
      },
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    fontSize: {
      xs: ['.75rem', '1.7'],
      sm: ['0.875rem', '1.7'],
      base: ['1rem', '1.7'],
      lg: ['1.125rem', '1.7'],
      xl: ['1.25rem', '1.7'],
      '2xl': ['1.5rem', '1.7'],
      '3xl': ['1.875rem', '1.7'],
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
      addVariant('child-third', '& > * > a');
    },
    require('tailwind-scrollbar-hide'),
    require('@xpd/tailwind-3dtransforms'),
    require("tailwindcss-animation-delay")
  ],
}

