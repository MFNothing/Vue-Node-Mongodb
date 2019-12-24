module.exports = app => {
    const router = require('express').Router()

    // 由于我们注册了所有模块，在db.js里面，我们可以直接通过mongoose来获取对应模型
    const mongoose = require('mongoose')
    const Article = mongoose.model('Article')
    const Category = mongoose.model('Category')
    router.get('/news/init', async (req, res) => {
        // 找到parent等于新闻分类的
        const parent = await Category.findOne({
            name: '新闻分类'
        })
        // lean属性的作用：转换mongoose查询结果类型，从MongooseDocuments转换为JS Object
        const cats = await Category.find().where({
            parent: parent
        }).lean()
        const newsTitles = ["新皮肤爆料丨教练小金金@你：游泳健身，了解一下", "王者荣耀交响音乐会·原曲大赏（收听同款歌单）", "王者荣耀玩家的最佳聚集地，QQ音乐推出特色专区", "模拟战爆料丨换阵营，新天赋，还能“回转”拿BUFF？", "《王者荣耀》×QQ音乐︱快来王者荣耀音乐专区听歌啦！", "12月24日全服不停机更新公告", "游戏内召唤师技能音效丢失异常说明", "12月23日体验服不停机修复公告", "12月23日体验服停机更新公告", "12月23日体验服不停机更新公告"]
        const newsList = newsTitles.map(title => {
            const randomCats = cats.slice(0).sort((a,b) => Math.random() - 0.5)
            return {
                title: title,
                categories: randomCats.slice(0, 2)
            }
        })
        // 清除数据, {}  应该是条件
        await Article.deleteMany({})
        // 插入数据， 参数就是插入的数据
        await Article.insertMany(newsList)
        res.send(newsList)
    })

    app.use('/web/api', router)
}