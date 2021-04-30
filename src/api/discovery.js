import { request } from '@/utils'

// 获取banner 图片
export const getBanner = () => request.get('/banner?type=0')