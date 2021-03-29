module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  devServer: {
    proxy: {
      '/index': {
        target: 'http://suxiaomo.top/',
        changeOrigin: true,
      },
      // '/index/apidata': {
      //   target: 'http://ide.msmn.cn/',
      //   changeOrigin: true,
      // },
    },
  },
};
