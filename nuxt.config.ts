// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from 'path'

export default defineNuxtConfig({
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

})