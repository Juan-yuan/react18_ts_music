// 1. 手动切换
export const BASE_URL = 'http://codercba.com:9002'
// // export const BASE_URL = 'http://codercba.prod:9002'
export const TIME_OUT = 10000

// 2. 依赖当前环境
console.log(process.env) //development webpack下面的是这样获取环境

// let BASE_URL = ''
// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = 'http://codercba.dev:9002'
// } else {
//   BASE_URL = 'http://codercba.prod:9002'
// }

// export { BASE_URL }
