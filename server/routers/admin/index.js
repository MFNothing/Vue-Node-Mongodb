module.exports = app => {
    const express = require('express')
    // 定义一个子路由
    const router = express.Router()
    const Category = require('../../models/Category')
    router.post('/categories', async (req, res) => {
        const model = await Category.create(req.body)
        res.send(model)
    })
    router.get('/categories', async (req, res) => {
        const items = await Category.find().limit(10)
        res.send(items)
    })
    router.get('/dosomething', async (req, res) => {
        // 可以通过下面的链接，请求都这里
        console.log('http://localhost:3000/admin/api/dosomething?xxx=1')
    })
    app.use('/admin/api', router)
}