const mongoose = require('mongoose')

/*
    schema是mongoose里会用到的一种数据模式，可以理解为表结构的定义；Mongoose的一切都始于一个Schema。
    每个schema会映射到mongodb中的一个collection，但是不具备操作数据库的能力。
*/

// 定义Schema
const schema = new mongoose.Schema({
    name: {type: String},
    // 关联属性，以 Schema 中 ref 字段为名称查找 model 进行关联，比如这里会根据parent字段的值，在Category表中找到对应的项，并关联
    // 这里如果数据库存，parent要么为空，有值的时候，需要有可以对应的项，否则会报错，这里对应的是Category表中id匹配的项
    // 如果能找到，在我们查找的时候，就可以把关联的项具体信息一起生产返回
    parent: {type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}
})

// 创建一个model并导出，这里的 Category 是表的名称
module.exports = mongoose.model('Category', schema)