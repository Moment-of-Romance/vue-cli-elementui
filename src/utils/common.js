// 节流 throttle
export function throttle(func, interval) {
  let lastTime = null
  let context = this
  
  // 如果当前时间减去上次时间 > interval 或 lastTime==null 则执行函数
  return function (...args) {
    let now = Date.now()
    if (now - lastTime > interval || !lastTime) {
      lastTime = now
      func.apply(context, args)
    }
  }
}

// 打开全屏
export function requestFullScreen(element) {
  const docEle = element
  // 兼容判断
  if (docEle.requestFullScreen) {
    docEle.requestFullscreen();
  } else if (docEle.msRequestFullScreen) {
    docEle.msRequestFullscreen()
  } else if (docEle.mozRequestFullScreen) {
    docEle.mozRequestFullscreen()
  } else if (docEle.webkitRequestFullScreen) {
    docEle.webkitRequestFullscreen()
  }
}

// 退出全屏
export function exitFullScreen() {
  const el = window.parent.document
  if (el.exitFullscreen) {
    el.exitFullscreen()
  } else if (el.msExitFullscreen) {
    el.msExitFullscreen()
  } else if (el.mozExitFullscreen) {
    el.mozExitFullscreen()
  } else if (el.webkitExitFullscreen) {
    el.webkitExitFullscreen()
  }
}

// 判断是否是全屏
export function isFullScreen() {
  return document.fullscreen ||
  document.mozFullscreen ||
  document.webkitFullscreen
}

export const isDef = v => (v !== undefined && v !== null)