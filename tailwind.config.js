module.exports = {
  purge: {
    enabled: true,
    // mode: 'all',
    content: ['./src/**/*'],
  },
  theme: {
    interFontFeatures: {
      default: ['calt', 'liga', 'kern'],
      numeric: ['tnum', 'salt', 'ss02'],
    },
    fontFamily: {
      display: ['Inter', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('tailwindcss-font-inter')({
      importFontFace: true,
      disableUnusedFeatures: true,
    }),
  ],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
