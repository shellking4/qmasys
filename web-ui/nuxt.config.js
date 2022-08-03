export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'qmasys.io',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: '', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './static/assets/css/bootstrap.min.css',
    './static/assets/css/tailwinds.css',
    './static/assets/fontawesome/css/all.css'
  ],

  // Global JS scripts

  script: [
    {
      src: "./static/assets/formassets/vendor/jquery/jquery-3.2.1.min.js",
      body: true,
    },
    {
      src: "./static/assets/fontawesome/js/all.min.js",
      body: true,
    },
    {
      src: "./static/assets/formassets/vendor/animsition/js/animsition.min.js",
      body: true,
    },
    {
      src: "./static/assets/formassets/vendor/bootstrap/js/popper.js",
      body: true,
    },
    {
      src: "./static/assets/formassets/vendor/bootstrap/js/bootstrap.min.js",
      body: true,
    },
    {
      src: "./static/assets/formassets/vendor/select2/select2.min.js",
      body: true,
    },
    {
      src: "./static/assets/formassets/vendor/daterangepicker/moment.min.js",
      body: true,
    },
    {
      src: "./static/assets/formassets/vendor/daterangepicker/daterangepicker.js",
      body: true,
    },
    {
      src: "./static/assets/formassets/vendor/countdowntime/countdowntime.js",
      body: true,
    },
    {
      src: "./static/assets/formassets/js/main.js",
      body: true,
    },
    {
      src: "./static/assets/js/card.js",
      body: true
    },
    {
      src: "./static/assets/js/carousel.js",
      body: true
    }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    global: true,
    dirs: ['~/components']
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'bootstrap-vue/nuxt',
  ],

  ssr: false,

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  loading: { color: "#c80000" },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  }
}
