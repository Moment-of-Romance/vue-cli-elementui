<template>
  <div class="new-songs">
    <Title>最新音乐</Title>
    <div class="list-wrap">
      <div
        v-for="(song, index) in newSongDatas"
        :key="song.id"
        class="list-item"
      >
        <NewSongListItem
          :index="index"
          :id="song.id"
          :picUrl="song.picUrl"
          :name="song.name"
          :singer="song.song.artists[0].name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getNewSongs } from '@/api'
import NewSongListItem from '@/components/newSongListItem'
export default {
  name: 'NewSongs',
  data () {
    return {
      msg: 'I am NewSongs component',
      newSongDatas: []
    }
  },
  components: {
    NewSongListItem
  },
  async created () {
    const { result } = await getNewSongs()
    console.log('获取最新音乐：', result)
    this.newSongDatas = result
  }
}
</script>

<style lang="scss" scoped>
.list-wrap {
  display: flex;
  flex-wrap: wrap;

  .list-item {
    width: 50%;
  }
}
</style>