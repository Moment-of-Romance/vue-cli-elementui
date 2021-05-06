import Vue from 'vue'
import App from './App.vue'
// 导入路由
import router from './router'

// 导入 store
import store from './store'

// 导入global
import global from '@/utils/global'

// 导入样式
import '@/style/index.scss'

Vue.config.productionTip = false

// 注册全局组件
Vue.use(global)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
