
// 是否是生产环境
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  // 构建生成目录
  outputDir: 'music',
  // 配置 webpack config
  configureWebpack: {
    // 配置source-map
    devtool: isProd ? false : 'sorce-map',
    // 配置devServer
    devServer: {
      // 自动打开
      open: true,
      // 代理
      proxy: {
        '/netease-api': {
          // 代理的域名
          target: 'http://localhost:3000',
          // 重写
          pathRewrite: {
            '^/netease-api': ''
          },
          // 是否支持跨域
          changeOrigin: true,
          // 安全
          secure: false
        }
      },
      port: 8888
    }
  },
  // css loader 选项配置
  css: {
    loaderOptions: {
      // 配置sass-loader
      sass: {
        data: `
          @import "~@/style/variables.scss";
          @import "~@/style/mixin.scss";
        `
      }
    }
  }
}