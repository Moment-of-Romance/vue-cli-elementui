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