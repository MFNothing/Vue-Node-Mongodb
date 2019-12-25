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

// virtual 给定名称创建一个虚拟类型
// 简单来说是申明一个children的虚拟类型，它是基于Category的parent来查找的
// 当我们使用populate填充时，已知查到A项，会去查Category表中parent等于A项_id值的项，查到后放到A项的children字段里面
schema.virtual('children', {
    localField: '_id', // 本地键
    foreignField: 'parent', // 外键
    justOne: false,
    ref: 'Category'
})


// 这里假如查到A项，当我们使用populate填充时，会去查Aritcle表中categories值等于A项中_id值的项，查到后放到A项的newsList字段里面
schema.virtual('newsList', {
    localField: '_id',
    foreignField: 'categories', // 外键
    justOne: false,
    ref: 'Article'
})

// 创建一个model并导出，这里的 Category 是表的名称, 第三个参数表示集合名称，目前没写，默认是表明小写复数形式
module.exports = mongoose.model('Category', schema)