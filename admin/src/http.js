import axios from 'axios'

import Vue from 'vue'

import router from './router'

const http = axios.create({
    baseURL: process.env.VUE_APP_API_URL || '/admin/api'
    // baseURL: 'http://localhost:3000/admin/api'
})

// 给http的request增加一个拦截器
http.interceptors.request.use(config => {
    if (localStorage.token) {
        config.headers.Authorization = 'Bearer ' + localStorage.token
    }
    return config
}, err => {
    return Promise.reject(err)
})

// 给http的response增加一个拦截器
http.interceptors.response.use(res => {
    return res
}, err => {
    // 用的是element的显示消息的方法，它是被绑定在Vue的prototype上的，所以可以这样用，跟我们把$http绑定在prototype一样
    if (err.response && err.response.data && err.response.data.message) {
        Vue.prototype.$message({
            message: err.response.data.message,
            type: 'error'
        })
    }
    if (err.response.status === 401) {
        router.push('/login')
    }
    return Promise.reject(err)
})

export default http