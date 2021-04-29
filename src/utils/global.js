/**
 * 注册全局组件
 */
// 按需导入element-ui
import {
  Button,
  Table,
  TableColumn,
  Popover
} from 'element-ui'

// 导出
export default {
  // 暴露 install 方法
  install (Vue) {
    // 获取 base 目录下全部组件并注册到全局
    const componentConfig = require.context(
      '@/base',
      true,
      /[0-9a-z]+\.(jsx?|vue)$/i
    )
    // 遍历拿到的相对路径
    componentConfig.keys().forEach(path => {
      // 获取对应的组件
      const component = componentConfig(path)
      // 获取组件的名称
      const componentName = component.default.name
      // 全局注册组件
      Vue.component(componentName, component.default || component)
    })
    // 注册 element-ui 组件
    Vue.use(Button)
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(Popover)
  }
}