<template>
  <div class="song-wrap">
    <div class="index-wrap">
      <span>{{index}}</span>
    </div>
    <div class="img-wrap">
      <img v-lazy="picUrl">
      <PlayIcon class="play-icon" />
    </div>
    <div class="song-content">
      <p class="song-name">{{name}}</p>
      <p class="singer">{{singer}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewSongListItem',
  props: ['id', 'index','name', 'picUrl', 'singer'],
  data () {
    return {
      msg: 'I am newsonglistitem component'
    }
  }
}
</script>

<style lang="scss" scoped>
.song-wrap {
  display: flex;
  padding: 8px;
  font-size: $font-size-sm;
  cursor: pointer;

  div {
    flex-shrink: 0;
  }

  &:hover {
    background: var(--light-bgcolor);
  }

  .index-wrap {
    @include flex-center(row);
    width: 60px;
    margin-right: 8px;
  }

  .img-wrap {
    position: relative;
    width: 60px;
    height: 60px;
    margin-right: 8px;

    img {
      width: 100%;
      height: 100%;
    }

    .play-icon {
      @include abs-center;
    }
  }

  .song-content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 1;
    overflow: hidden;

    .song-name {
      @include text-ellipsis;
      color: var(--font-color-white);
    }

    .singer {
      @include text-ellipsis;
    }
  }
}
</style>