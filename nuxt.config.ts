// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from 'path'

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title:'My Nuxt App'
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  // ssr: true, // Enable SSR mode
  // target: 'server',
  alias:{
    "@":resolve(__dirname,"/"),
  },
  css:["~/assets/main.scss"],
  modules:["@pinia/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  }

})