module.exports = {
  chainWebpack: config => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap(options => {
        options.fix = true
        return options
      })
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://m.maoyan.com',
        ws: true,
        changeOrigin: true,
        pathRewrite:{
          '^/api': ''
        }
      }
    }
  }
}
