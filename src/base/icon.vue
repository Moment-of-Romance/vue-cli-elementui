<script>
// 导入 toRem
import { toRem } from '@/utils'
export default {
  name: 'Icon',
  data () {
    return {
      msg: 'I am icon component'
    }
  },
  props: {
    type: {
      type: String,
      require: true
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 9
    },
    backdrop: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getIconCls () {
      let cls = ''
      cls += `icon-${this.type}`
      // 如果传入 color 则
      if (this.color) {
        cls += `icon-color-${this.color}`
      }
      return cls
    },
    getIconStyles () {
      const chromeMinSize = 12
      // 支持12px
      const retStyle = { fontSize: toRem(this.size) }
      if (this.size < chromeMinSize) {
        // 按比例缩放
        const ratio = this.size / chromeMinSize
        retStyle.transform = `scale(${ratio})`
      }
      return retStyle
    },
    // 点击事件触发
    onClick (e) {
      this.$emit('click', e)
    }
  },
  render () {
    const Icon = (
      <i
        onClick={this.onClick}
        class={`iconfont icon-component ${this.getIconCls()}`}
        style={this.getIconStyles()}
      ></i>
    )
    // 如果有backdrop 属性
    if (this.backdrop) {
      // 比例
      const backdropRatial = 1.56
      const backdropSize = toRem(backdropRatial * this.size)
      return (
        <span
          style={{width: backdropSize, height: backdropSize}}
          class="backdrop"
        >
          {Icon}
        </span>
      )
    }
    return Icon
  }
}
</script>

<style lang="scss">
.backdrop {
  display: inline-block;
  @include flex-center(row);
  border-radius: 50%;
  &:hover {
    background: var(--round-hover-bgcolor);
  }
}

.icon-color {
  // 通过prop传入这几个字段
  // 可以使用默认的几个颜色
  &-theme {
    color: $theme-color;
  }
  &-white {
    color: $white;
  }
  &-shallow {
    color: var(--font-color-shallow-grey);
  }
}
</style>