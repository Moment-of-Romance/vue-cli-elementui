import { request } from '@/utils'

// 获取banner 图片
export const getBanner = () => request.get('/banner?type=0')

// 获取 推荐歌曲 列表
export const getRecommendMusic = (params) => request.get('/personalized', { params })

// 获取 新歌
export const getNewSongs = () => request.get('/personalized/newsong')

// 获取 新mv
export const getNewMvs = () => request.get('/personalized/mv')