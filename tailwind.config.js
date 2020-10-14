module.exports = ({ dev, rootDir, srcDir }) => ({
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  experimental: {
    darkModeVariant: true,
  },
  dark: 'class',
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      colors: {
        success: {
          default: '#8BC34A',
          hover: '#4CAF50',
          active: '#CDDC39',
          disabled: '#C5E1A5',
          'gr-from': '#8BC34A',
          'gr-to': '#4CAF50',
        },
        info: {
          default: '#03A9F4',
          hover: '#00BCD4',
          active: '#2196F3',
          disabled: '#81D4FA',
          'gr-from': '#03A9F4',
          'gr-to': '#2196F3',
        },
        danger: {
          default: '#FF5722',
          hover: '#f44336',
          active: '#FF9800',
          disabled: '#FFAB91',
          'gr-from': '#FF5722',
          'gr-to': '#f44336',
        },
        warning: {
          default: '#FFC107',
          hover: '#FF9800',
          active: '#FFEB3B',
          disabled: '#FFE082',
          'gr-from': '#FFC107',
          'gr-to': '#FF9800',
        },
        light: {
          default: '#f8f8f8',
        },
      },
    },
  },
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
    ],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active'],
  },
  plugins: [require('tailwindcss-dark-mode')()],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: !dev,
    layers: ['utilities'],
    content: [
      `${srcDir}/components/**/*.vue`,
      `${srcDir}/layouts/**/*.vue`,
      `${srcDir}/pages/**/*.vue`,
      `${srcDir}/plugins/**/*.js`,
      `${rootDir}/nuxt.config.js`,
      // TypeScript
      `${srcDir}/plugins/**/*.ts`,
    ],
  },
})
