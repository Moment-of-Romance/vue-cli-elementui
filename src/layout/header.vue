<template>
  <div class="header-container">
    <div class="left">
      <div class="buttons">
        <div
          @click="onClickLogo"
          class="mac-button red"
        >
          <Icon
            type="home"
            :size="9"
          />
        </div>
        <div
          @click="exitFullscreen"
          class="mac-button yellow"
        >
          <Icon
            type="minus"
            :size="9"
          />
        </div>
        <div
          @click="fullscreen"
          class="mac-button yellow"
        >
          <Icon
            type="fullscreen"
            :size="9"
          />
        </div>
      </div>
    </div>
    <div class="right">
      <Theme/>
    </div>
  </div>
</template>

<script>
// 导入theme
import Theme from '@/components/theme'
// 导入 全屏方法
import { requestFullScreen, exitFullScreen, isFullScreen } from '@/utils'
export default {
  name: 'Header',
  components: {
    Theme
  },
  data () {
    return {
      msg: 'I am header component'
    }
  },
  methods: {
    onClickLogo () {
      console.log('click home')
    },
    // 退出全屏
    exitFullscreen () {
      // 判断是否是全屏
      if (isFullScreen()) {
        exitFullScreen()
      }
    },
    // 全屏
    fullscreen () {
      if (!isFullScreen()) {
        requestFullScreen(document.documentElement)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  background-color: var(--header-bgcolor);
  height: $header-height;

  .left {
    padding: 14px 14px 0 8px;
    display: flex;

    .buttons {
      display: flex;

      &:hover {
        .mac-button > i {
          opacity: 1;
        }
      }

      .mac-button {
        @include round(12px);
        @include flex-center(row);
        margin-right: 8px;
        cursor: pointer;

        &.red {
          background: #ed655a;
        }

        &.green {
          background: #72be47;
        }

        &.yellow {
          background: #e0c04c;
        }

        i {
          opacity: 0;
          transition: opacity 0.3;
          color: $black;
          font-weight: $font-weight-bold;
          transform-origin: center center;
        }
      }
    }
  }
  
  .right {
    @include flex-center(row);
    margin-right: 20px;
  }
}
</style>