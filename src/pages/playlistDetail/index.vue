<template>
  <div class="play-detail-container">
    <PlayDetailHeader :playList="playlist"/>
    <div class="tabs-wrap">
      <Tabs :tabs="tabs" v-model="activeTab" @tabChange="tabChange" type="theme"/>
    </div>
  </div>
</template>

<script>
import PlayDetailHeader from './playDetailHeader'
import { getListDetail, getSongDetail } from '@/api'
const SONG_IDX = 0
const COMMENT_IDX = 1
export default {
  name: 'PlaylistDetail',
  components: {
    PlayDetailHeader
  },
  data () {
    return {
      msg: 'I am playlist-detail component',
      playlist: {},
      songs: null,
      activeTab: 0,
      tabs: ['歌曲列表', '评论']
    }
  },
  computed: {
    id () {
      return Number(this.$route.params.id)
    }
  },
  async created () {
    await this.init()
  },
  methods: {
    async init () {
      // 获取列表详情
      const { playlist } = await getListDetail({id: this.id})
      this.playlist = playlist
      // 生成songs
      this.genSongs(playlist)
    },
    genSongs (playlist) {
      console.log(playlist)
    },
    tabChange (index) {
      console.log('tabIndex:', this.activeTab)
    }
  },

}
</script>

<style>

</style>