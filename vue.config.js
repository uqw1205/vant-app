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
        target: 'http://suxiaomo.qicp.vip/',
        changeOrigin: true,
      },
      '/index/Apidata': {
        target: 'http://suxiaomo.qicp.vip/',
        changeOrigin: true,
      },
    },
  },
};
