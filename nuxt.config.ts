// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: '123',
    public: {
      apiBase: '/api'
    }
  },
  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },
  $development: {

  }
})
