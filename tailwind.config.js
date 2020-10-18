module.exports = {
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
    // boxShadow: {
    //   default: '0 10px 20px -10px rgba(0, 0, 0, .25)',
    // },
    extend: {
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        default: '0.25rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
      },
      colors: {
        primary: {
          default: '#ff4757',
          hover: '#d43446',
          active: '#ff5e6c',
          disabled: '#ff7f8a',
          'gr-from': '#ff4757',
          'gr-to': '#d43446',
        },
        neutral: {
          default: '#2f2f2f',
          hover: '#212121',
          active: '#353535',
          disabled: '#666666',
          'gr-from': '#2f2f2f',
          'gr-to': '#212121',
        },
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
          'gr-to': '#071c2d',
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
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    layers: ['utilities'],
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
    ],
  },
}
