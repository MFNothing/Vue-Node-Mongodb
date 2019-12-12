const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username: {type: String},
    password: {type: String}
})

// 创建一个model并导出，这里的 Hero 是表的名称
module.exports = mongoose.model('AdminUser', schema)