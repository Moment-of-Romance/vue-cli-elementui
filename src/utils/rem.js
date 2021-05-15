// 导入throttle
import { throttle } from './common'

export const remBase = 14
let htmlFontSize
// rem 实现
!(function() {
  let calc = function() {
    // 定义最大、最小字体
    let minFontSize = 14
    let maxFontSize = 18
    // 获取html
    const html = document.getElementsByTagName('html')[0]
    // 获取html 的宽度
    let htmlWidth = html.clientWidth
    // 得到计算的size
    let size = remBase * (htmlWidth / 1440)
    // 字体大小不能超出 最大最小值
    size = Math.min(maxFontSize, size)
    size = Math.max(minFontSize, size)
    htmlFontSize = size 
    // 设置 html 字体大小
    html.style.fontSize = size + 'px'
  }

  // 监听document onresize 事件
  document.addEventListener('resize', throttle(calc, 500), false)
  // 立即调用
  calc()
})()

export const toRem = function (size) {
  return `${size / remBase}rem`
}

export const toCurrentRem = function (size) {
  return `${size / htmlFontSize}rem`
}