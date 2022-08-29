import axios, { AxiosRequestConfig } from 'axios'

const request = axios.create({
    baseURL: 'http://192.168.1.45:8000/api/v1'
})

// 请求拦截器
request.interceptors.request.use(function (config) {
    // 统一设置用户身份 token
    return config
}, function (error) {
    // Do something with request error
    return Promise.reject(error)
})

// 相应拦截器
request.interceptors.response.use(function (response) {
    // 统一设置接口相应错误, 比如 token 过期失效, 服务端异常
    // console.log(response)
    return response
}, function (error) {
    // Do something with response error
    return Promise.reject(error)
})

// export default request
// 接口返回数据处理
export default <T = any>(config: AxiosRequestConfig) => {
    return request(config).then(res => {
        return res.data as T
    })
}
