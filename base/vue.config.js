const devtool = process.env.NODE_ENV === 'production' ? '' : 'source-map'
module.exports = {
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios',
      'element-ui': 'ELEMENT'
      // 'moment': 'moment',
      // 'highlight.js': 'highlight.js'
    },
    devtool
  }
}
