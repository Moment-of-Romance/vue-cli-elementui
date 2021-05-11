<template>
  <div class="play-list-card" @click="onClickCard">
    <div
      class="img-wrap"
    >
      <img v-lazy="picUrl">
      <div class="desc-wrap" v-if="desc">
        <span class="desc">{{desc}}</span>
      </div>
      <PlayIcon :size="36" class="play-icon" />
    </div>
    <p class="name">{{name}}</p>
  </div>
</template>

<script>
export default {
  name: 'PlayListCard',
  props: ['id', 'picUrl', 'desc', 'name'],
  data () {
    return {
      msg: 'I am palylistcard component'
    }
  },
  methods: {
    onClickCard () {
      console.log('click card id:' + this.id)
      this.$router.push(`/playlist/${this.id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.play-list-card {
  position: relative;
  width: calc(20% - 8px);
  margin: 4px;
  margin-bottom: 32px;
  cursor: pointer;

  .img-wrap {
    position: relative;
    width: 100%;
    padding-top: 100%;
    margin-bottom: 8px;
    border-radius: 4px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
    }

    .desc-wrap {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.3);
      padding: 6px;
      transform: translateY(-100%);
      transition:  all 0.3s;

      .desc {
        color: $white;
        font-size: $font-size-sm;
      }
    }

    .play-icon {
      opacity: 0;
      position: absolute;
      right: 5px;
      bottom: 5px;
      transition: all 0.3s;
    }

    &:hover {
      .desc-wrap {
        transform: translateY(0);
      }

      .play-icon {
        opacity: 1;
      }
    }
  }

  .name {
      font-size: $font-size-sm;
      @include text-ellipsis();
    }
}
</style>