const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {type: String},
    icon: {type: String}
})

// 创建一个model并导出，这里的 Item 是表的名称
module.exports = mongoose.model('Item', schema)