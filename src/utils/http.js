// axios基础封装
import axios from "axios"
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/userStore'
import router from "@/router"
const httpInstance = axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:5000
})

// 拦截器
 
// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    // 1.从pinia获取token数据
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
}, e => Promise.reject(e))
  
// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    const userStore = useUserStore()
    ElMessage({
        type:'warning',
        message:e.response.data.message
    })
    // 401处理
    if (e.response.status === 401) {
        userStore.clearUserInfo()
        router.push('/login')
    }
    return Promise.reject(e)
})

export default httpInstance