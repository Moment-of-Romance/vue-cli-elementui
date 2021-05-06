// 导入vuex
import Vue from 'vue'
import Vuex from 'vuex'
// 导入 module
import musicModule from './modules/music'
import userModule from './modules/user'
import globalModule from './modules/global'
import createLogger from 'vuex/dist/logger'

// 注册
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    music: musicModule,
    user: userModule,
    global: globalModule
  },
  plugins: debug ? [createLogger()] : []
})