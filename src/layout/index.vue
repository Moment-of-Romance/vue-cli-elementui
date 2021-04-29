<template>
  <div>
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
