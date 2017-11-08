module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-tutorial',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  css: [
    //'bootstrap',
    // Load a node module directly (here it's a SASS file)
    //'bulma',
    // CSS file in the project
    //'@/assets/css/main.css',
    // SCSS file in the project
    '@/assets/scss/main.scss'
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['axios'],
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    '~/plugins/i18n.js'
  ],
  router: {
    middleware: 'i18n'
  },
  modules: [
    // With options
    ['@nuxtjs/bootstrap-vue', { css: true }],
  ]
}
