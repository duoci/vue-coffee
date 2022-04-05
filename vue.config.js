module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
    // 公共路径
    indexPath: 'index.html',
    // 相对于打包路径index.html的路径
    outputDir: process.env.outputDir || 'dist',
    // 'dist', 生产环境构建文件的目录
    assetsDir: 'static',
    // 相对于outputDir的静态资源(js、css、img、fonts)目录
  }