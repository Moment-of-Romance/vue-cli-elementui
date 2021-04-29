<template>
  <div class="theme-container">
    <el-popover
      placement="bottom"
      v-model="visible"
      width="230"
    >
      <div class="themes">
        <div
          v-for="(themeValue, themeKey, index) in themeMap"
          :key="index"
          @click="setTheme(themeKey)"
          class="theme-item"
        >
          <div
            :style="themeValue.style"
            class="theme-icon"
          ></div>
          <p>{{themeValue.title}}</p>
        </div>
      </div>
      <!-- <el-button slot="reference">
        换肤
      </el-button> -->
      <Icon
        :backdrop="true"
        type="skin"
        :size="20"
        slot="reference"
      />
    </el-popover>
  </div>
</template>

<script>
// 导入good-storage
import GoodStorage from 'good-storage'
// 导入主题 样式
import variablesDefault from '@/style/themes/variables'
import variablesRed from '@/style/themes/variables-red'
import variablesWhite from '@/style/themes/variables-white'

// 主题key
const THEME_KEY = '__THEME__'
// 定义主题
const themes = {
  red: 'red',
  white: 'white',
  dark: 'dark'
}

const themeMap = {
  [themes.red]: {
    title: '红色',
    file: variablesRed,
    style: {
      backgroundColor: '#D33A31'
    }
  },
  [themes.white]: {
    title: '浅色',
    file: variablesWhite,
    style: {
      backgroundColor: '#F6F6F6'
    }
  },
  [themes.dark]: {
    title: '深色',
    file: variablesDefault,
    style: {
      backgroundColor: '#202020'
    }
  }
}
export default {
  name: 'Theme',
  data () {
    return {
      visible: false,
      themeMap: themeMap
    }
  },
  created() {
    this.setTheme(GoodStorage.get(THEME_KEY, themes.white))
  },
  methods: {
    // 设置主题
    setTheme (key) {
      // 设置对应的可以
      GoodStorage.set(THEME_KEY, key)
      // 获取theme 样式
      const theme = themeMap[key].file
      // 遍历样式设置到document
      Object.keys(theme).forEach(key => {
        const value = theme[key]
        document.documentElement.style.setProperty(key, value)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.themes {
  @include flex-center(row);

  .theme-item {
    @include flex-center(column);
    margin: 0 8px;
    cursor: pointer;

    .theme-icon {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      margin-bottom: 4px;
    }
  }
}
</style>