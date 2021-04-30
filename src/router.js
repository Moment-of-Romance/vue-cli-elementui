import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入 component
const Discovery = () => import('@/pages/discovery')
const Playlists = () => import('@/pages/playlists')
const Songs = () => import('@/pages/songs')
const Mvs = () => import('@/pages/mvs')

// 注册路由
Vue.use(VueRouter)

// 导出 center 布局的路由名称
export const layoutCenterNames = ['discovery', 'playlists', 'songs', 'mvs']

// 菜单路由
export const menuRoutes = [
  {
    path: '/discovery',
    name: 'discovery',
    component: Discovery,
    meta: {
      title: '发现音乐',
      icon: 'music'
    }
  },
  {
    path: '/playlists',
    name: 'playlists',
    component: Playlists,
    meta: {
      title: '推荐歌单',
      icon: 'playlist-menu'
    }
  },
  {
    path: '/songs',
    name: 'songs',
    component: Songs,
    meta: {
      title: '最新音乐',
      icon: 'yinyue'
    }
  },
  {
    path: '/mvs',
    name: 'mvs',
    component: Mvs,
    meta: {
      title: '最新MV',
      icon: 'mv'
    }
  }
]

// 初始化路由
export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/discovery'
    },
    ...menuRoutes
  ]
})