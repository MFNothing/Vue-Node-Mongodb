const express = require('express')

const app = express()

// 使用跨域
app.use(require('cors')())
// 使用json
app.use(express.json())

require('./routers/admin')(app)
require('./plugins/db')(app)

app.listen(3000, () => {
    console.log('http://localhost:3000/ ')
})