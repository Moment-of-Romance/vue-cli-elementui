<template>
  <div class="layout-container">
    <Header/>
    <Menu/>
  </div>
</template>

<script>
import Header from './header'
import Menu from './menu'
export default {
  name: 'Layout',
  components: {
    Header,
    Menu
  }
}
</script>

<style lang="scss" scoped>
.layout-container {
  height: 100%;
}
</style>
