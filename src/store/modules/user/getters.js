export default {
  // 获取用户信息
  getUserInfo (state) {
    return state.user
  },
  // 获取登录用户歌单
  getUserPlaylist (state) {
    return state.getUserPlaylist
  }

}