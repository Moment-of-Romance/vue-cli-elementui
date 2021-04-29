// 打开全屏
export function requestFullScreen(element) {
  const docEle = element
  // 兼容判断
  if (docEle.requestFullScreen) {
    docEle.requestFullScreen();
  } else if (docEle.msRequestFullScreen) {
    docEle.msRequestFullScreen()
  } else if (docEle.mozRequestFullScreen) {
    docEle.mozRequestFullScreen()
  } else if (docEle.webkitRequestFullScreen) {
    docEle.webkitRequestFullScreen()
  }
}

// 退出全屏
export function exitFullScreen() {
  const el = window.parent.document
  if (el.exitFullscreen) {
    el.exitFullscreen()
  } else if (el.msExitFullScreen) {
    el.msExitFullScreen()
  } else if (el.mozExitFullScreen) {
    el.mozExitFullScreen()
  } else if (el.webkitExitFullScreen) {
    el.webkitExitFullScreen()
  }
}

// 判断是否是全屏
export function isFullScreen() {
  return document.fullscreen ||
  document.mozFullscreen ||
  document.webkitFullscreen
}