// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  /**
   * 源文件
   */
  srcDir: 'src',

  /**
   * 模块
   */
  modules: ['@nuxt/ui'],

  /**
   * 颜色模式
   */
  colorMode: {
    classSuffix: '',
  },

  /**
   * UI
   */
  ui: {
    icons: ['solar', 'ri'],
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
