<template>
  <div class="play-header-container" v-if="playList.id">
    <div class="img-wrap">
      <img :src="playList.coverImgUrl" alt="">
    </div>
    <div class="content-wrap">
      <div class="title-wrap">
        <p class="title">{{playList.name}}</p>
      </div>
      <div class="creator-wrap">
        <img :src="playList.creator.avatarUrl" class="avatar" />
        <p class="creator">{{playList.creator.nickname}}</p>
        <p class="create-time">{{playList.createTime}}</p>
      </div>
      <div class="action-wrap">
        
      </div>
      <div class="desc-wrap">
        <p class="desc">
          <span>标签：{{playList.tags.join('/')}}</span>
        </p>
        <p class="desc" v-if="playList.description">
          <span class="value">简介：{{playList.description}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayDetailHeader',
  props: {
    playList: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      msg: 'I am playlist Detail header',
      tagsText: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.play-header-container {
  display: flex;
  padding: 36px;

  .img-wrap {
    width: 200px;
    height: 200px;
    margin-right: 24px;

    img {
      width: 100%;
      height: 100%;
    };
  }

  .content-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

    .title-wrap {
      display: flex;
      align-items: center;
      margin-bottom: 12px;

      .title {
        font-size: $font-size-lg;
        color: var(--font-size-white);
      }
    }

    .creator-wrap {
      display: flex;
      align-items: center;
      margin-bottom: 18px;

      .avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 8px;
      }

      .creator {
        margin-right: 8px;
      }
      
      .create-time {
        font-size: $font-size-sm;
      }
    }
    
    .action-wrap {
      margin-bottom: 18px;
    }
  }
}
</style>