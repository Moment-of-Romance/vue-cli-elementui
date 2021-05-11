import { request } from '@/utils'

// 音乐列表详情
export const getListDetail = params => request.get(`/playlist/detail`, { params })