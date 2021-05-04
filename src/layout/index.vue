<template>
  <div class="layout-container">
    <Header/>
    <div class="layout-body">
      <div
        class="layout-menu"
        v-show="isMenuShow"
      >
        <Menu/>
      </div>
      <div
        class="content"
        id="page-content"
      >
        <router-view :class="routerViewCls"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './header'
import Menu from './menu'
import { layoutCenterNames } from '@/router'
export default {
  name: 'Layout',
  components: {
    Header,
    Menu
  },
  data () {
    return {
      isMenuShow: true
    }
  },
  computed: {
    routerViewCls () {
      return layoutCenterNames.find(name => name === this.$route.name)
        ? 'router-view-center'
        : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-container {
  height: 100%;

  .layout-body {
    display: flex;
    height: calc(100% - #{$header-height});

    .layout-menu {
      height: calc(100% - #{$mini-player-height});
    }

    .content {
      flex: 1;
      overflow-y: auto;
      min-width: $layout-content-min-width;
      margin-bottom: $mini-player-height;
      background: var(--body-bgcolor);

      .router-view-center {
        max-width: $center-content-max-width;
        margin: auto;
      }
    }
  }
}
</style>
