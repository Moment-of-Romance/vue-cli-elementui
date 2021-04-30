<template>
  <div class="discovery-container">
    <Banner/>
  </div>
</template>

<script>
// 导入组件
import Banner from './banner'
export default {
  name: 'Discovery',
  data () {
    return {
      msg: 'I am discovery component'
    }
  },
  components: {
    Banner
  }
}
</script>

<style lang="scss" scoped>
.discovery-container {
  padding: 20px 0;
}
</style>