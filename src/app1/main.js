// import Vue from 'vue'
// import router from '@/router'
// import store from '@/store'
// import APP from './APP'

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   store,
//   render: h => <APP />
// })


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from 'single-spa-vue'

Vue.config.productionTip = false

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
    router
  }
})

export const bootstrap = vueLifecycles.bootstrap
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount


