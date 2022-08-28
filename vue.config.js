const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify',
  ],
  configureWebpack: {
    devtool: 'source-map',
  },
  css: {
    loaderOptions: {
      scss: { // 8.0.3
        prependData: `@import "@/assets/css/overrides.scss";`,
      },
    },
  },
  lintOnSave: false,
});

