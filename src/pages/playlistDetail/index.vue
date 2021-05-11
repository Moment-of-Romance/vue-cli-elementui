<template>
  <div class="play-detail-container">
    <PlayDetailHeader />
    <div class="tabs-wrap">
      <Tabs />
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
      playlist: [],
      songs: null
    }
  },
  computed: {
    id () {
      return Number(this.$route.params.id)
    }
  },
  created () {
    
  },
  methods: {
    async init () {
      // 获取列表详情
      const { playlist } = await getListDetail({id: this.id})
      this.playlist = playlist
      // 生成songs
      this.genSongs(playlist)
    },
    getSongs (playlist) {

    }
  },

}
</script>

<style>

</style>