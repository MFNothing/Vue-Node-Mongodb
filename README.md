# Vue-Node-Mongodb

## 初始化项目

项目分为三端，server端（服务端），web端（网页），admin端（管理界面）

* 创建一个server文件夹，并进入执行 `npm init -y` 命令，创建package.json
* 创建web端，在根目录执行 `vue create web` 命令，创建web工程
* 创建admin端，在根目录执行 `vue create admin` 命令，创建admin工程
* 进入server文件夹中的package.json 文件，在script里面创建启动命令 `"server": "nodemon index.js",`，并创建index.js，这是server的入口文件
* 全局安装 nodemon `sudo npm i -g nodemon`


## admin 项目搭建

* 安装插件 `vue add element` 和 `vue add router`
* 安装网络请求库 `npm i axios`
* eslint 检查去掉 console 和 debugger，在package.json 中 eslintConfig 中 rules 中添加
* 安装富文本编辑库 `npm install vue2-editor`

```
"eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    "rules": {
      "no-console": "off",
      "no-debugger": "off"
    },
    "parserOptions": {
      "parser": "babel-eslint"
    }
  }
```


## server 项目搭建

* 安装 express mongoose cors `npm i express@next mongoose cors`
* cors 跨域用的
* 新建routers文件夹，用于保存不同的路由
* 新建plugins文件夹，用于存储db文件
* 新建models文件夹，用于存储模型
* 安装 inflection，用于转换单词，变首字母大写单数的形式 `npm i inflection --save`
* 安装 multer 用于处理上传数据， `npm i multer --save`
* 安装 bcrypt 用于处理密码散列加密， `npm i bcrypt --save`
* 安装 jsonwebtoken 用于登录token验证的 `npm i jsonwebtoken --save`
* 安装 http-assert 用于请求异常情况 `npm i http-assert --save`


## web 安装

* 安装 sass 和 sass-loader `npm i -D sass sass-loader`
  * loader 用于对模块的源代码进行转换。loader 可以使你在 import 或"加载"模块时预处理文件。因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的强大方法。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript，或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 import CSS文件！
* `npm i -D` 相当于 `npm install --save-dev` 加入到 devDependencies 对象
* `npm i -s` 相当于 `npm install --save` 加入到dependencies 对象
* 安装 px to rem 插件，使用 按住 alt + z，配置转换字体大小，需要到设置-搜索-px to rem 然后设置它的转换的基础字体大小
* 安装 router ， `vue add router` (Requires proper server setup for index fallback in production) 选择no
* 安装 `vue-awesome-swiper` 幻灯片，`npm install vue-awesome-swiper --save`




## mongodb 安装

* 从官网下载下来 https://www.mongodb.com/download-center/community
* 解压后，把文件夹中的内容移动到 `/usr/local/mogodb`，如果没有mogodb，创建一个文件夹
* 配置环境变量 `open -e .bash_profile` ，根目录下打开（新建终端）
* 添加这条进去 `export PATH=${PATH}:/usr/local/mogodb/bin`
* 生效配置 `source ~/.bash_profile`
* 查看版本 `mongod -version`
* 根目录下（新建终端）创建 `/data/db/` 文件夹，不然运行会报错 `sudo mkdir -p /data/db/`
* 然后修改目录权限，默认为只读，会报错 `sudo chown -R lym /data`，lym是我本机的用户名
* 执行 `mongod` 启动数据库

