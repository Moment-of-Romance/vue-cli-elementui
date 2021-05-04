<template>
  <div
    class="play-icon-wrap"
    :style="wrapStyle"
  >
    <Icon 
      type="play"
      class="play-icon"
      :size="iconsize"
    />
  </div>
</template>

<script>
export default {
  name: 'PlayIcon',
  props: {
    size: {
      type: Number,
      default: 24
    }
  },
  data () {
    return {
      msg: 'I am playicon component'
    }
  },
  computed: {
    wrapStyle () {
      return { width: `${this.size}px`, height: `${this.size}px`}
    },
    iconsize () {
      const iconsize = this.size * 0.6
      return iconsize
    }
  }
}
</script>

<style lang="scss" scoped>
.play-icon-wrap {
  @include flex-center(row);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);

  .play-icon {
    color: $theme-color;
  }
}
</style>