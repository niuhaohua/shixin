module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/apis': {
        target: 'http://api.shujuzhihui.cn',
        changeOrigin: true,
        pathRewrite:{  // 路径重写，
          '^/apis': 'http://api.shujuzhihui.cn'  // 替换target中的请求地址
      }
      }
    }
  }
};