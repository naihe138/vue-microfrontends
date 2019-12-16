import singleSpa from 'single-spa'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

singleSpa.registerApplication(
  'app1',
  () => import('http://localhost:8081/app.js'),
  location => location.pathname.startsWith('/app1')
)

singleSpa.start()
