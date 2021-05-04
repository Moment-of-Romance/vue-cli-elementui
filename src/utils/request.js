// 导入axios
import axios from 'axios'
// 导入 Loading 
import { Loading } from 'element-ui'

// 定义base_url
const BASE_URL = 'https://api.mtnhao.com/'

// 导出没有混入loadind 的request
export const requestWithoutLoading = createBaseInstace()

// 导出request
export const request = createBaseInstace()

// 混入 loading
mixinLoading(request.interceptors)

function createBaseInstace () {
  const instance = axios.create({
    baseURL: BASE_URL
  })
  instance.interceptors.response.use(responseInterceptor, handleError)
  return instance
}

// 响应错误处理
function handleError (e) {
  throw e
}

let loading
let loadingCount = 0
const SET_AXIOS_LOADING = 'global/isLoading'

function responseInterceptor(response) {
  return response.data
}

// 混入loading
function mixinLoading (interceptors) {
  // 请求拦截
  interceptors.request.use(requestLoadingInterceptor)
  // 响应拦截
  interceptors.response.use(responseLoadingInterceptor, responseLoadingErrorHandle)

  // 请求拦截处理
  function requestLoadingInterceptor (config) {
    // 判断是否有 Loading
    if (!loading) {
      loading = Loading.service({
        target: '#page-content',
        background: 'transparent',
        text: 'loading..'
      })
    }
    loadingCount++
    return config
  }

  // 相应拦截处理
  function handleResponse () {
    loadingCount--
    // 判定loading 数是否为0
    if (loadingCount === 0) {
      // 关闭loading
      loading.close()
      loading = null
    }
  }

  function responseLoadingInterceptor (response) {
    handleResponse()
    return response
  }
  // 响应错误处理
  function responseLoadingErrorHandle (e) {
    handleResponse()
    handleError(e)
  }
}