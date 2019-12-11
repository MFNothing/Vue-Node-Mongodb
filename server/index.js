const express = require('express')

const app = express()

// 使用跨域
app.use(require('cors')())
// 使用json
app.use(express.json())
// 托管静态文件，让我们下面的uploads文件夹中文件可以通过 '/upload'访问
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./routers/admin')(app)
require('./plugins/db')(app)

app.listen(3000, () => {
    console.log('http://localhost:3000/ ')
})