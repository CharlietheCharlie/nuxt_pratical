// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: false },
  runtimeConfig: {
    // The private keys which are only available within server-side
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    // Keys within public, will be also exposed to the client-side
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY
    }
  },
  modules: ['@nuxtjs/tailwindcss','@nuxtjs/color-mode','@pinia/nuxt'],
  css: [
    '@/assets/css/tailwind.css',
  ],
  colorMode: {
    classSuffix: '',  
    preference: 'system',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})

