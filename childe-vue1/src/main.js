import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

let instance = null
function render(props) {
  console.log(props)
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
  console.log(instance)
}

if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount(props) {
  render(props);
}

export async function unmount() {
  instance.$destroy()
}

export async function update(props) {
  console.log('update props', props);
}
