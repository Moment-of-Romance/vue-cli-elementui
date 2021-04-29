<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Layout/>
  </div>
</template>

<script>
import Layout from '@/layout'

export default {
  name: 'app',
  components: {
    Layout
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
