// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // UnoCSS 配置
  modules: [
    '@unocss/nuxt',
  ],

  // UnoCSS 配置
  unocss: {
    configFile: './uno.config.ts',
  },
});
