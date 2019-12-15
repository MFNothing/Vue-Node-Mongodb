const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username: {type: String},
    password: {type: String,
        // select 表示是否需要被查出来显示，默认是true
        select: false,
        set(val) {
            // 对密码进行散列操作达到加密效果
            return require('bcrypt').hashSync(val, 10)
        }
    }
})

// 创建一个model并导出，这里的 Hero 是表的名称
module.exports = mongoose.model('AdminUser', schema)