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
import { mapGetters } from 'vuex'
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
  },
  computed: {
    ...mapGetters(['isLoading'])
  },
  created () {
    console.log('vuex全局状态管理里的loading:', this.isLoading)
  }
}
</script>

<style lang="scss" scoped>
.discovery-container {
  padding: 10px 20px;
}
</style>