const isProd = process.env.ENV === 'production'

module.exports = {
  purge: {
    enabled: isProd ? true : false,
    mode: 'all',
    content: ['./src/**/*.tsx'],
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
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
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
