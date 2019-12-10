module.exports = app => {
    const express = require('express')
    // 定义一个子路由
    const router = express.Router({
        mergeParams: true
    })
    // 引用导出的model进行数据库操作
    const Category = require('../../models/Category')
    router.post('/', async (req, res) => {
        const model = await Category.create(req.body)
        res.send(model)
    })
    router.put('/:id', async (req, res) => {
        const model = await Category.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })
    router.delete('/:id', async (req, res) => {
        await Category.findByIdAndDelete(req.params.id)
        res.send({
            success: true
        })
    })
    router.get('/', async (req, res) => {
        // populate 如果字段中有关联字段（ref）的话，就把它查出来，而不是只是它的值
        const items = await Category.find().populate('parent').limit(10)
        res.send(items)
    })
    router.get('/:id', async (req, res) => {
        const model = await Category.findById(req.params.id)
        res.send(model)
    })
    // router.get('/dosomething', async (req, res) => {
    //     // 可以通过下面的链接，请求都这里
    //     console.log('http://localhost:3000/admin/api/dosomething?xxx=1')
    // })
    app.use('/admin/api/rest/:resource', router)
}