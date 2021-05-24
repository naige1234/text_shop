import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

// 导入样式表
import './assets/css/global.css'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入axios
import axios from 'axios'

/// /把axios包挂载到Vue的原型对象上，这样每个Vue的组件都可以通过this直接访问到$http,从而发送ajax请求
Vue.prototype.$http = axios
// 为axiox设置请求根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
