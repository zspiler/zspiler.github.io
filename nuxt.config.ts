// https://nuxt.com/docs/api/configuration/nuxt-config

import { execSync } from 'child_process';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  hooks: {
    'build:before': () => {
      execSync('node scripts/generateImagesJson.js', { stdio: 'inherit' });
    }
  },
  css: [
    '@/assets/css/main.less',
  ],

  modules: ['@pinia/nuxt'],
})