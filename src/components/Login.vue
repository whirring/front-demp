<template>
  <div class="background" :style="background">
    <div class="loginFrame">
      <el-form ref="AccountForm" :model="account" label-position="left" label-width="0px" class="demo-ruleForm login-container">

        <div class = "tabsUser">
          <el-tabs v-model = "activeName" class = "users" style = "height: 30px;font-size: 25px">
            <el-tab-pane label = "登录"  name = "login">
              <div class = "formGroup">
                <el-form-item  label = "账号:" prop = "username" label-width="50px">
                  <el-input v-model="name" type = "text"  auto-complete = "off" placeholder = "请大胆地输入您的账号" class = "form-control" ></el-input></el-form-item>
                <el-form-item label = "密码:" prop = "password" label-width="50px">
                  <el-input v-model="passwd" type = "password" auto-complete = "off" placeholder = "请小心地输入您的密码" class = "form-control" ></el-input></el-form-item>
              </div>
              <div class = "formButton">
                <el-form-item style = "width:100%;">
                  <el-button type = "primary" style = "width:100%;" @click = "Login">登录</el-button>
                </el-form-item>
              </div>
            </el-tab-pane>
            <el-tab-pane label = "注册" name = "register">
              <div class = "formGroup">
                <el-form-item  label = "账号:" prop = "username" label-width="50px">
                  <el-input  v-model="name1" type = "text"  auto-complete = "off" placeholder = "请大胆地输入您的账号" class = "form-control" ></el-input></el-form-item>
                <el-form-item label = "年龄:" prop = "username" label-width="50px">
                  <el-input v-model="age" type = "text" auto-complete = "off" placeholder = "请谨慎地输入您的年龄" class = "form-control" ></el-input></el-form-item>
                <el-form-item label = "密码:" prop = "password" label-width="50px">
                  <el-input v-model="passwd1" type = "password" auto-complete = "off" placeholder = "请小心地输入您的密码" class = "form-control" ></el-input></el-form-item>
              </div>
              <div class = "formButton">
                <el-form-item style = "width:100%;">
                  <el-button type = "primary" style = "width:100%;" @click = "Register" >注册</el-button>
                </el-form-item>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import userUtils from '../const/username'
export default {
  name: 'Login',
  data () {
    return {
      background: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        backgroundImage: 'url(' + require('../assets/bcpic.jpg') + ')',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
      },
      account: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {required: true, message: '请输入账号'}
        ],
        password: [
          {required: true, message: '请输入密码'}
        ]
      },
      checked: false,
      activeName: 'login',
      name: '',
      passwd: '',
      name1: '',
      passwd1: '',
      age: ''
    }
  },
  methods: {
    Login () {
      let router = this.$router
      let name = this.name
      let alert = this.$alert
      axios.post('http://118.25.54.183:8080/admin/login', {
        params: {
          name: this.name,
          passwd: this.passwd
        }
      }).then(function (response) {
        console.log(response.data.status)
        if (response.data.status === 0) {
          userUtils.username = name
          userUtils.studentId = response.data.id
          router.replace('/Home')
        } else {
          alert('用户名或密码错误', '登录失败', {
            confirmButtonText: '确定'
          })
        }
      })
    },
    Register () {
      let router = this.$router
      let name = this.name1
      let alert = this.$alert
      let url = 'http://118.25.54.183:8080/admin/register?name=' + this.name1 + '&age=' + this.age + '&passwd=' + this.passwd1
      axios.post(url, {
        params: {
        }
      }).then(function (response) {
        if (response.data.status === 0) {
          userUtils.username = name
          userUtils.studentId = response.data.admin.id
          router.replace('/Home')
        } else {
          alert('用户已存在 或 用户名密码不符合规范', '注册失败', {
            confirmButtonText: '确定'
          })
        }
      })
    }
  }
}
</script>

<style scoped>

  .login-container {

    -webkit-border-radius: 5px;
    border-radius: 15px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: rgba(255,255,255,0.6);

    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;

  }

  label{
    width: 60px;
    text-align:left;
  }

  .form-control{
    width:250px;
    flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
  }
  .tabsUser{
    display: inline-block;
    margin-left: 0px;
    margin-right:0px;
    text-align:center;
    font-size:20px;
  }

</style>
