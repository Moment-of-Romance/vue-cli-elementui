<template>
  <div class="discovery-container">
    <Banner/>
    <RecommendMusic/>
    <NewSongs/>
  </div>
</template>

<script>
// 导入组件
import Banner from './banner'
import RecommendMusic from './recommendMusic'
import NewSongs from './newSongs'
export default {
  name: 'Discovery',
  data () {
    return {
      msg: 'I am discovery component'
    }
  },
  components: {
    Banner,
    RecommendMusic,
    NewSongs
  }
}
</script>

<style lang="scss" scoped>
.discovery-container {
  padding: 10px 20px;
}
</style>