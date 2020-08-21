const isProd = process.env.NODE_ENV === 'production'

const plugins = [require('tailwindcss')]

if (isProd) {
  plugins.push(require('autoprefixer'))
  plugins.push(require('cssnano')({ preset: 'default' }))
}

module.exports = {
  plugins: plugins,
}
