<template>
  <div class="login">
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
          <h4>用户登录</h4>
          <p>还没有酷我账号？<a href="#/register">30秒注册</a></p>
        </div>
        <input type="text" v-model="username" name="username" placeholder="以注册的用户名">
        <br>
        <input style="margin-bottom: 10px;" type="password" v-model="password" name="password" placeholder="密码">
        <br>
        <router-link  >忘记密码</router-link>
        <br>
        <button @click="getLogin">登录</button>
        <!-- {{getNum}} -->
        <br>
      </div>
     
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  // import { mapState } from 'vuex';
  export default {
    data(){
      return{
        username:'',
        password:'',
      }
    },
    methods:{
      getLogin(){
        axios.post('/shop/user/login',{
          username:this.username,
          password:this.password
        }).then(val => {
          // console.log(val);
          if (val.data.error === 0){
            alert(val.data.msg);
            this.$router.push('/');
          }
          else {
            alert(val.data.msg);
          }
        })
        console.log(this.$cookies.get('username'));
        this.$store.commit('getCook',this.$cookies.get('username'));
      }
    },
    // computed:mapState({
    //   getNum:'num'
    // })
    computed:{
      getNum:function(){
        return this.$store.state.num
      }
    }
  }
</script>

<style scoped>
  .login .container {
    max-width: 1000px;
  }

  .login .head {
    height: 120px;
    margin-bottom: 20px;
  }

  .login .head img {
    float: left;
  }

  .login .head-right {
    padding-top: 80px;
    display: flex;
    justify-content: right;
  }

  .login .head-right i {
    /* background: url("../../assets/imgs/header_corn_new.png"); */
    width: 110px;
    height: 31px;
    overflow: hidden;
    margin-left: 25px;
  }

  .login .head-right i:nth-child(2) {
    background-position: 0 -32px;
  }

  .login .head-right i:nth-child(3) {
    background-position: 0 -64px;
  }

  .login .register-box .top {
    display: flex;
    justify-content: space-between;
  }

  .login .register-box {
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
    margin-top: 15px;
    width: 360px;
    height: 40px;
    padding-left: 5px;
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

  .login p {
    text-align: center;
    font-size: 14px;
    color: black;

  }

  .login .footer {
    margin-top: 20px;
  }

  .login .footer i {
    width: 126px;
    height: 50px;
    overflow: hidden;
    display: inline-block;
    /* background: url("../../assets/imgs/footer_btm_icon.png"); */
  }

  .login .footer i:nth-child(2) {
    background-position: -126px 0;
  }

  .login .footer i:nth-child(3) {
    background-position: -252px 0;
  }

  .login .footer i:nth-child(4) {
    background-position: -378px 0;
  }

  .login .footer i:nth-child(5) {
    background-position: -504px 0;
  }
</style>
