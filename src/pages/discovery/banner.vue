<template>
  <el-carousel type="card" :interval="4000">
    <el-carousel-item
      v-for="item in banners"
      :key="item.scm"
    >
      <img class="banner-img" :src="item.imageUrl" :alt="item.typeTitle">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
// 导入获取banner
import { getBanner } from '@/api'
export default {
  name: 'Banner',
  data () {
    return {
      msg: 'I am banner component',
      banners: []
    }
  },
  async created () {
    let bannerData = await getBanner()
    this.banners = bannerData.banners
  }
}
</script>

<style lang="scss" scoped>
/deep/ .el-carousel__container {
  height: 250px;

  .banner-img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
}
</style>