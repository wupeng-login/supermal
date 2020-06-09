import axios from 'axios'
export function request(config) {
    // 1.创建axios的实例
    const instanse1 = axios.create({
        // baseURL: 'http://123.207.32.32:8000/api/vip',
        baseURL :"http://123.207.32.32:8000/api/m3",
        // baseURL : "http://106.54.54.237:8000/api/v1",
        timeout: 5000,
    })
    // 2.axios的拦截器
    // 2.1请求拦截
    instanse1.interceptors.request.use(config => {
        // console.log(config)
        return config
    }, err => {
        console.log(err)
    });
    // 2.2响应拦截
    instanse1.interceptors.response.use(res => {  
        return res.data
    }, err => {
        console.log(err)
    })
    // 3.发送真正的网络请求
    return instanse1(config)
}

