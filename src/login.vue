<template>
    <div class="login_container" style="background-color:blue">
        <div class="login_box">
           <el-form :model= "loginForm"  class="textinput" ref="loginFormRef">
  <el-form-item prop="username">
    <el-input class="first" v-model="loginForm.username" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item prop="password" >
    <el-input v-model="loginForm.password"  placeholder="请输入密码"></el-input>
   </el-form-item>
  <el-row class="button">
  <el-button type="primary">登录</el-button>
  <el-button type="primary" @click="resetLoginForm">重置</el-button>
</el-row>
           </el-form>
        </div>
    </div>
</template>
<script>
export default {
   data() {
       return {
       loginForm: {
           username: '',
           password: ''
       },
      
       }
   },
   methods: {
       resetLoginForm(){
          this.$refs.loginFormRef.resetFields();
       }   
      },
}
</script>
<style  scoped>
    .login_container{
        background-color: #2b4b6b;
        height: 100%;
    }
    .login_box{
      width: 450px;
      height:300px;
      background-color: #fff;
      border-radius: 3px;
      position: absolute;
      top: 50%;
      left:50%;
      transform: translate(-50%,-50%);
    }
    .textinput{
        padding-left:20px;
       
        top: 60px;
        position: absolute;
        width: 90%;
    }
    
    .button{
        position: absolute;
        top: 140px;
        right: 10px;
       
    }
</style>