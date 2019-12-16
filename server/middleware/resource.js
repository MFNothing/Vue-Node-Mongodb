module.exports = options => {
    return (req, res, next) => {
        // next方法表示，交给后面的router处理
        const modelName = require('inflection').classify(req.params.resource)
        // 引用导出的model进行数据库操作，并添加到req对象里面，传递给后续处理的函数
        req.Model = require(`../models/${modelName}`)
        next()
    }
}