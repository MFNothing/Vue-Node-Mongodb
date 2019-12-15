import axios from 'axios'

import Vue from 'vue'

const http = axios.create({
    baseURL: 'http://localhost:3000/admin/api'
})

// 给http增加一个拦截器
http.interceptors.response.use(res => {
    return res
}, err => {
    // 用的是element的显示消息的方法，它是被绑定在Vue的prototype上的，所以可以这样用，跟我们把$http绑定在prototype一样
    if (err.response.data.message) {
        Vue.prototype.$message({
            message: err.response.data.message,
            type: 'error'
        })
    }
    return Promise.reject(err)
})

export default http