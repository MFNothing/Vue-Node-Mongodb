const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {type: String},
    items: [{
        image: {type: String},
        url: {type: String}
    }]
})

// 创建一个model并导出，这里的 Hero 是表的名称
module.exports = mongoose.model('Ad', schema)