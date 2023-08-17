// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: false },
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

