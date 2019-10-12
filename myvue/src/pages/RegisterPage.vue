<template>
  <div class="register">
    <div class="container">
      <div class="head">
        <!-- <img src="../../assets/imgs/logo_new_v1.jpg" alt=""> -->
        <div class="head-right">
          <i></i>
          <i></i>
          <i></i>
        </div>
      </div>
      <div class="register-box">
        <div class="top">
          <h4>用户注册</h4>
          <p>已有账户<a href="#/login">在此登录</a></p>
        </div>
        <input @change="userInter" type="text" v-model="username" name="username" placeholder="用户名由英文字母和数字组成的6-16位字符，以字母开头">
        <p class="hint" style="font-size: 12px;color: #f76199;"></p>
        <br>
        <input @keyup="passwordInter" type="password" v-model="password" name="password" placeholder="密码">
        <p class="passhint" style="font-size: 12px;color: #f76199;"></p>
        <br>
        <input style="margin-top: 10px;" type="password" v-model="reppassword" name="password" placeholder="确认密码">
        <br>
        <input @change="emailInter" style='width: 300px' type="text" v-model="email" placeholder="邮箱">
        <button style="width: 50px;position: relative;top: 8px;margin: 10px 0;" @click="getEmail"> 发送验证码</button>
        <p class="emailhint" style="font-size: 12px;color: #f76199;"></p>
        <br>
        <input style="margin-top: 10px;" type="text" v-model="verify" placeholder="验证码">
        <br>
        <button type="submit" @click="getUser">同意协议并注册</button>
        <br>
        <a href="http://www.jumei.com/help/privacy_policy">隐私协议</a>
      </div>
     
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import $ from 'jquery';
  export default {
    data() {
      return {
        username: '',
        password: '',
        reppassword: '',
        email: '',
        verify: '',
        backVerify: ''
      }
    },
    methods: {
      getUser() {
        if (this.password !== this.reppassword) {
          alert('两次输入密码不一致');
          return;
        }
        if (this.backVerify !== this.verify) {
          alert('验证码输入错误,请重新输入...');
          return;
        }
        var that = this;
        axios.post('/shop/user/register', {
          username: this.username,
          password: this.password,
          email: this.email,
          verify: this.verify
        }).then((val) => {
          console.log(val);
          if (val.data.error == 0) {
            alert(val.data.msg);
            this.$router.push('/login');
          } else {
            alert(val.data.msg);
          }
        })
      },
      getEmail() {
        var that = this;
        axios.post('/shop/user/email', {
          email: this.email
        }).then((val) => {
          console.log(val);
          that.backVerify = val.data.num;
        })
      },
      userInter(){
        var reg=/^[a-zA-Z][a-zA-Z0-9]{5,15}$/;
        if (reg.test(this.username) == false && this.username !== ''){
          $('.hint').html('用户名格式不正确');
        }
        else {
          $('.hint').html('');
        }
      },
      passwordInter(){
        var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g")  //强
        var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g")  //中
        var enoughRegex = new RegExp("(?=.{6,}).*", "g")//弱
        if(strongRegex.test(this.password) == true){
          $('.passhint').html('密码强度:强')
        }
        else if (mediumRegex.test(this.password) == true){
          $('.passhint').html('密码强度:中')
        }
        else if (enoughRegex.test(this.password) == true){
          $('.passhint').html('密码强度:弱')
        }
        else if (this.password == ''){
          $('.passhint').html('')
        }
        else{
          $('.passhint').html('密码格式不正确')
        }
      },
      emailInter(){
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        if (reg.test(this.email) == false && this.email !== ''){
          $('.emailhint').html('邮箱格式不正确');
        }
        else {
          $('.emailhint').html('');
        }
      }
    }
  }
</script>

<style scoped>
  .register .container {
    max-width: 1000px;
  }

  .register .head {
    height: 120px;
    margin-bottom: 20px;
  }

  .register .head img {
    float: left;
  }

  .register .head-right {
    padding-top: 80px;
    display: flex;
    justify-content: right;
  }

  .register .head-right i {
    /* background: url("../../assets/imgs/header_corn_new.png"); */
    width: 110px;
    height: 31px;
    overflow: hidden;
    margin-left: 25px;
  }

  .register .head-right i:nth-child(2) {
    background-position: 0 -32px;
  }

  .register .head-right i:nth-child(3) {
    background-position: 0 -64px;
  }

  .register .register-box .top {
    display: flex;
    justify-content: space-between;
  }

  .register .register-box {
    width: 400px;
    margin: 0 auto;
    box-shadow: 0 0 4px rgba(0, 0, 0, .075);
    padding: 20px;
  }

  .register-box .top h4 {
    font-size: 20px;
    color: #ffe443;
  }

  .register-box .top p {
    font-size: 14px;
  }

  .register-box .top p a {
    color: #ffe443;
  }

  .register-box .top p a:hover {
    text-decoration: underline;
  }

  .register-box input {
    width: 360px;
    height: 40px;
    padding-left: 5px;
  }
  .register-box p{
    margin-top: 10px;
  }
  .register-box button {
    margin: 15px 0;
    width: 360px;
    border: none;
    background: #ffe443;
    height: 40px;
    color: white;
  }

  .register-box a {
    font-size: 14px;
    color: #ffe443;
  }

  .register-box a:hover {
    text-decoration: underline;
  }

  .register p {
    text-align: center;
    font-size: 14px;
    color: black;
  }

  .register .footer {
    margin-top: 20px;
  }

  .register .footer i {
    width: 126px;
    height: 50px;
    overflow: hidden;
    display: inline-block;
    /* background: url("../../assets/imgs/footer_btm_icon.png"); */
  }

  .register .footer i:nth-child(2) {
    background-position: -126px 0;
  }

  .register .footer i:nth-child(3) {
    background-position: -252px 0;
  }

  .register .footer i:nth-child(4) {
    background-position: -378px 0;
  }

  .register .footer i:nth-child(5) {
    background-position: -504px 0;
  }
</style>
