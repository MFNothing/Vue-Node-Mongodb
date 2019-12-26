const express = require('express')

const app = express()

// 设置秘钥的环境变量
app.set('secret', 'kjlhasdfqweoriuaasldfkj')

// 使用跨域
app.use(require('cors')())
// 使用json
app.use(express.json())
// 托管静态文件，让我们下面的uploads文件夹中文件可以通过 '/upload'访问
app.use('/uploads', express.static(__dirname + '/uploads'))
app.use('/admin', express.static(__dirname + '/admin'))
app.use('/', express.static(__dirname + '/web'))

require('./routers/admin')(app)
require('./plugins/db')(app)
require('./routers/web')(app)

app.listen(3000, () => {
    console.log('http://localhost:3000/ ')
})