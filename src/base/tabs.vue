<template>
  <ul
    :class="{[align]: true}"
    class="tab-wrap"
  >
    <template v-if="isRouteMode">
      <router-link
        v-for="(tab, index) in normalizedTabs"
        :key="index"
        :active-class="`${ROUTE_ACTIVE_CLS}${activeItemClass}`"
        tag="li"
        :to="tab.to"
        :style="getItemStyle(tab, index)"
        ref="routerLinks"
        class="tab-item"
      >
        <span>{{tab.title}}</span>
      </router-link>
    </template>
    <template v-else>
      <li
        v-for="(tab, index) in normalizedTabs"
        :key="index"
        :style="getItemStyle(tab, index)"
        @click="onChangeTab(tab, index)"
        class="tab-item"
        :class="getItemCls(tab, index)"
      >
        <span>{{tab.title}}</span>  
      </li>
    </template>
  </ul>
</template>

<script>
import { isDef } from '@/utils'

const ACTIVE_PROP = 'active'
const ACTIVE_CHANGE = 'tabChange'
const ROUTE_ACTIVE_CLS = 'active'
export default {
  name: 'Tabs',
  props: {
    [ACTIVE_PROP]: {
      type: Number,
      default: 0
    },
    tabs: {
      type: Array,
      default: () => ([])
    },
    align: {
      type: String,
      default: 'left'
    },
    itemClass: {
      type: String
    },
    activeItemClass: {
      type: String
    },
    itemStyle: {
      type: Object,
      default: () => ({})
    },
    activeItemStyle: {
      type: Object,
      default: () => ({})
    },
    type: {
      type: String
    }
  },
  // 自定义组件显示定义 v-model 的值
  model: {
    prop: ACTIVE_PROP,
    event: ACTIVE_CHANGE
  },
  data () {
    return {
      ROUTE_ACTIVE_CLS: ROUTE_ACTIVE_CLS
    }
  },
  methods: {
    isActive (tab, index) {
      // 路由模式
      if (this.isRouteMode) {
        const {
          resolved: {path: resolvedPath}
        } = this.$router.resolve(tab.to)
        return resolvedPath === this.$route.path
      } else {
        // console.log('ACTIVE_PROP:', this[ACTIVE_PROP])
        return index === this[ACTIVE_PROP]
      }
    },
    // 获取item class
    getItemCls (tab, index) {
      let base = []
      // 如果有父组件传入的样式
      if (this.itemClass) {
        base.push(this.itemClass)
      }
      // 如果有 传入type 
      if (this.type) {
        base.push(this.type)
      }
      // 判断是否是选中状态
      if (this.isActive(tab, index)) {
        if (this.activeItemClass) {
          base.push(this.activeItemClass)
        }
        base.push('active')
      }
      return base.join(' ')
    },
    // 获取 item style
    getItemStyle (tab, index) {
      return Object.assign(
        {},
        this.itemStyle,
        this.isActive(tab, index)
          ? Object.assign({}, this.activeItemStyle)
          : null
      )
    },
    // tabChange
    onChangeTab (tab, index) {
      // 如果是路由模式
      if (this.isRouteMode) {
        this.$router.push(tab.to)
      } else {
        this.$emit(ACTIVE_CHANGE, index)
      }
    }
  },
  computed: {
    isRouteMode () {
      return this.tabs.length && isDef(this.tabs[0].to)
    },
    normalizedTabs () {
      return typeof this.tabs[0] === 'string'
        ? this.tabs.map(tab => ({title: tab}))
        : this.tabs
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-wrap {
  display: flex;

  &.center {
    justify-content: center;
  }

  &.right {
    justify-content: flex-end;
  }

  .tab-item {
    padding: 12px 0;
    margin: 0 12px;
    color: var(--tab-item-color);
    font-size: $font-size-medium;
    white-space: nowrap;
    cursor: pointer;

    &.active {
      color: var(--tab-item-active-color);

      &:hover {
        color: var(--tab-item-active-color);
      }
    }

    // 对应props 中type
    &.small {
      font-size: $font-size-sm;

      &.active {
        color: $theme-color;
      }
    }

    &.theme {
      font-size: $font-size;

      &.active {
        color: $theme-color;
        border-bottom: 2px solid $theme-color;
        font-weight: $font-weight-bold;
      }
    }

    &.split {
      font-size: $font-size-sm;
      padding: 4px 12px;
      margin: 0 16px;
      border-radius: 999rem;

      &.active {
        color: $theme-color;
        background: var(--shallow-theme-bgcolor);
      }

      &:not(:last-child) {
        &:after {
          position: relative;
          left: 28px;
          width: 1px;
          height: 100%;
          background: var(--border);
          display: inline-block;
          vertical-align: middle;
          content: " ";
        }
      }
    }

    &:hover {
      color: var(--tab-item-hover-color);
    }
  }
}
</style>