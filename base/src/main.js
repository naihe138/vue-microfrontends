import Vue from 'vue'
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun'
import Naice from './public/components';

Vue.use(ElementUI);
Vue.use(Naice);

let vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const app = [
  {
    name: 'vueApp',
    entry: '//localhost:10000',
    container: '#vue',
    activeRule: '/vue',
    props: {
      vue
    }
  }
]
registerMicroApps(app)
start()
