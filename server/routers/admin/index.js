module.exports = app => {
    const express = require('express')
    const jwt = require('jsonwebtoken')
    const AdminUser = require('../../models/AdminUser')
    const assert = require('http-assert')
    // 定义一个子路由
    const router = express.Router({
        mergeParams: true
    })
    router.post('/', async (req, res) => {
        const model = await req.Model.create(req.body)
        res.send(model)
    })
    router.put('/:id', async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })
    router.delete('/:id', async (req, res) => {
        await req.Model.findByIdAndDelete(req.params.id)
        res.send({
            success: true
        })
    })
    router.get('/', async (req, res, next) => {
        const token = String(req.headers.authorization || '').split(' ').pop()
        assert(token, 401, '请提供jwt token')
        const {id = ''} = jwt.verify(token, app.get('secret'))
        assert(id, 401, '无效的jwt token')
        const user = await AdminUser.findById(id)
        req.user = user
        assert(req.user, 401, '请先登录')
        await next()
    },async (req, res) => {
        // populate 如果字段中有关联字段（ref）的话，就把它查出来，而不是只是它的值
        // const items = await req.Model.find().populate('parent').limit(10)
        // 由于上面的不够通用，所以还可以用下面的处理，效果一样
        const queryOptions = {}
        // 当model的类型等于Category，才做特殊处理，这样就更通用
        if (req.Model.modelName === 'Category') { 
            queryOptions.populate = 'parent'
        }
        const items = await req.Model.find().setOptions(queryOptions).limit(10)
        res.send(items)
    })
    router.get('/:id', async (req, res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })

    // 下面的第二个参数传入一个function，相当于中间件，多做一个处理，当这个处理完后再给router处理
    // 实际上，上面的所有 (req, res) => {} 都可以增加next参数，但是由于他们已经是最后一个了，所以就省略了
    app.use('/admin/api/rest/:resource', (req, res, next) => {
        // next方法表示，交给后面的router处理
        const modelName = require('inflection').classify(req.params.resource)
        // 引用导出的model进行数据库操作，并添加到req对象里面，传递给后续处理的函数
        req.Model = require(`../../models/${modelName}`)
        next()
    } ,router)

    // 文件上传
    const multer = require('multer')
    // 新增中间件upload，接受文件
    const upload = multer({dest: __dirname + '/../../uploads'})
    app.post('/admin/api/upload', upload.single('file'),async(req, res) => {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })

    // 登录接口
    app.post('/admin/api/login', async(req, res) => {
        const {username, password} = req.body
        // 1. 根据用户名找用户
        // 由于默认是不取password的，所以需要单独取出它
        const user = await AdminUser.findOne({username}).select('+password')
        // 下面的assert相当于下面注释的内容
        assert(user, 422, '用户名不存在')
        // if (!user) {
        //     return res.status(422).send({
        //         message: '用户名不存在'
        //     })
        // }
        // 2. 校验密码
        // 还是使用 bcrypt 来校验
        const isValid = require('bcrypt').compareSync(password, user.password)
        assert(isValid, 422, '密码错误')
        // if (!isValid) {
        //     return res.status(422).send({
        //         message: '密码错误'
        //     })
        // }
        // 3. 返回token
        // 第二个参数的秘钥，用于防止客户端串改数据，用于校验的
        const token = jwt.sign({id: user._id}, app.get('secret'))
        return res.send({token})
    })

    // 错误处理函数，还是相当于一个中间件
    app.use(async (err, req, res, next) => {
        res.status(err.status).send({
            message: err.message
        })
    })
}


    // router.get('/dosomething', async (req, res) => {
    //     // 可以通过下面的链接，请求都这里
    //     console.log('http://localhost:3000/admin/api/dosomething?xxx=1')
    // })