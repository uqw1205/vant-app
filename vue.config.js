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
      '/index/apidata': {
        target: 'http://ide.msmn.cn/',
        changeOrigin: true,
      },
    },
  },
};
