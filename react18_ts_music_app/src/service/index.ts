// import { LOGIN_TOKEN } from '@/global/constants'
// import { localCache } from '@/utils/cache'
import { BASE_URL, TIME_OUT } from './config'
import HYRequest from './request'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      // 每一个请求都自动携带 token
      //   const token = localCache.getCache(LOGIN_TOKEN)
      //   if (config.headers && token) {
      //     config.headers.Authorization = 'Bearer ' + token
      //   }
      return config
    }
  }
})

export default hyRequest
