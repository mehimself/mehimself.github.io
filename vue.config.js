module.exports = {
  transpileDependencies: [
    'mermaid'
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto'
        }
      ]
    }
  }
}
