import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入 component
const Discovery = () => import('@/pages/discovery')
const Playlists = () => import('@/pages/playlists')
const Songs = () => import('@/pages/songs')
const Mvs = () => import('@/pages/mvs')

// 注册路由
Vue.use(VueRouter)

// 菜单路由
export const menuRoutes = [
  {
    path: '/discovery',
    name: 'discovery',
    component: Discovery,
    meta: {
      title: '发现音乐',
      icon: ''
    }
  },
  {
    path: '/playlists',
    name: 'playlists',
    component: Playlists,
    meta: {
      title: '推荐歌单',
      icon: ''
    }
  },
  {
    path: '/songs',
    name: 'songs',
    component: Songs,
    meta: {
      title: '最新音乐',
      icon: ''
    }
  },
  {
    path: '/mvs',
    name: 'mvs',
    component: Mvs,
    meta: {
      title: '最新MV',
      icon: ''
    }
  }
]

// 初始化路由
export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Discovery
    }
  ]
})