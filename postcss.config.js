const isProd = process.env.NODE_ENV === 'production'

let plugins = [require('tailwindcss')]

if (isProd) {
  plugins = [...plugins, require('autoprefixer'), require('cssnano')({ preset: 'default' })]
}

module.exports = {
  plugins: plugins,
}
