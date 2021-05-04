<template>
  <div class="recommend-container">
    <Title>推荐歌曲</Title>
    <div class="list-wrap">
      <PlayListCard
        v-for="recommend in recommendMusics"
        :key="recommend.id"
        :id="recommend.id"
        :picUrl="recommend.picUrl"
        :desc="recommend.copywriter"
        :name="recommend.name"
      />
    </div>
  </div>
</template>

<script>
import PlayListCard from '@/components/playListCard'
import { getRecommendMusic } from '@/api'
export default {
  name: 'RecommendMusic',
  data () {
    return {
      recommendMusics: []
    }
  },
  async created () {
    const { result } = await getRecommendMusic({limit: 10})
    this.recommendMusics = result
  },
  components: {
    PlayListCard
  }
}
</script>

<style lang="scss" scoped>
.recommend-container {
  .list-wrap {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>