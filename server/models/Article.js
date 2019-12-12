const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title: {type: String},
    categories: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}],
    body: {type: String}
})

// 创建一个model并导出，这里的 Hero 是表的名称
module.exports = mongoose.model('Article', schema)