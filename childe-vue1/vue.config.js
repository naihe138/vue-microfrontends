const devtool = process.env.NODE_ENV === 'production' ? '' : 'source-map'

module.exports = {
  devServer: {
    port: 10000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: 'vueApp',
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_vueApp`,
    },
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
