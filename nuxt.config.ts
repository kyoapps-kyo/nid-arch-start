// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  /**
   * 源文件
   */
  srcDir: 'src',

  /**
   * 模块
   */
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],

  /**
   * 颜色模式
   */
  colorMode: {
    classSuffix: '',
  },

  /**
   * 配置
   */
  runtimeConfig: {
    public: {
      appName: '有趣网'
    },

    // SurrealDB
    surreal: {
      rootUser: 'user',
      rootPass: '123123',
    }
  }
})
