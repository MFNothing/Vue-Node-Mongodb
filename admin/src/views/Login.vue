<template>
    <div class="login-container">
        <el-card header="请先登录" class="login-card">
            <el-form @submit.native.prevent="login">
              <el-form-item label="用户名">
                  <el-input v-model="model.username"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                  <el-input type="password" v-model="model.password"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" native-type="submit">登录</el-button>
              </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            model: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        async login() {
            const result = await this.$http.post('login', this.model)
            // 关掉浏览器打开还存在
            localStorage.token = result.data.token
            // 关掉浏览器打开就不存在了
            // sessionStorage.token = result.data.token
            this.$router.push('/')
            this.$message({
                message: '登录成功',
                type: 'success'
            })
        }
    },
}
</script>

<style>
.login-card {
    width: 25rem;
    margin: 10rem auto;
}
</style>