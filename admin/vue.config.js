module.exports = {
    // 打包后的文件放置的路径
    outputDir: __dirname + '/../server/admin',
    // 打包后的页面访问路径，默认是根路径，如果要在域名的子路径访问，就需要设置
    // 当我们使用npm run build的时候 NODE_ENV 就等于 production
    // 开发环境下就是 / 
    publicPath: process.env.NODE_ENV === 'production'
      ? '/admin/'
      : '/'
  }