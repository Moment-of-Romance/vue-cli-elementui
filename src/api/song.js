import { request, requestWithoutLoading } from '@/utils'

// 获取音乐url
export const getSongUrl = id => request.get(`/song/url?id=${id}`)

// 获取音乐详情
export const getSongDetail = ids => request.get(`/song/detail?ids=${ids}`)

// 获取相似音乐
export const getSimiSongs = (id, option) =>
requestWithoutLoading.get(`/simi/song?id=${id}`, option)

// 获取歌词
export const getLyric = id => request.get(`/lyric?id=${id}`)