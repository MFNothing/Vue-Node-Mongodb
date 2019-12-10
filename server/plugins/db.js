module.exports = app => {
    const mongoose = require('mongoose')
    /*
        DeprecationWarning：不建议使用当前的URL字符串解析器，并将在以后的版本中将其删除。
        要使用新的解析器，请将选项{useNewUrlParser：true}传递给MongoClient.connect
    */ 
    mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moda', {
        useNewUrlParser: true
    })
}