

<template>
  <div class="head-nav">
    <div class="container">
      <div class="nav-left">
        <a href="#/"> <img class="logo" src="http://h5static.kuwo.cn/www/kw-www/img/dac7499.png" alt /></a>
        <ul>
          <li class="active" @click="show(0)">
            <a href="#/">发现音乐</a>
          </li>
          <li @click="show(1)">
            <a href="#/user">下载客户端</a>
          </li>
          <li @click="show(2)">
            <a href="#/three">音乐现场</a>
          </li>
          <li @click="show(3)">
            <a href="#">VIP会员</a>
          </li>
          <li @click="show(4)">
            <a href="#/shop">酷我耳机</a>
          </li>
          <li class="more" v-on:mouseover="morehua()" v-on:mouseleave="moreli()">
            <a href="#">更多&nbsp;&nbsp;<i class="fa fa-angle-down"></i></a>
            <!-- 更多的二级导航 -->
            <div class="tanchu">
             <p>腾讯音乐人</p>
             <p>HiFi音乐</p>
             <p>酷我视频</p>
             <p>主播电台</p>
             </div>
          </li>
        </ul>
      </div>
      <div class="nav-right">
        <div class="search">
          <div class="search-box">
            <span>
              <i class="fa fa-search"></i>
            </span>
            <input autofocus type="text" placeholder="搜索音乐/MV/歌单/歌手"  slot="reference" @click="visible = !visible" />
          </div>
        </div>
        <div class="leave">
           <span><a href="#/login">登录</a> / <a href="#/register">注册</a></span>
          <!-- <span class="circle"></span> -->
        </div>
      </div>
    </div>
    <!-- 搜索框-二级导航 -->
    <div class="lists">
      <el-popover placement="bottom" width="290" trigger="manual" v-model="visible">
        <div class="content">
          <search-box></search-box>
        </div>
      </el-popover>
    </div>
  </div>
</template>

<script>
  import SearchBox from '../components/SearchBox'
  export default {
    data: function() {
      return {
        visible: false
      };
    },
    components:{
      SearchBox
    },
    mounted(){
    },
    methods: {
      show: function(val) {
       setTimeout(function(){
          $(".nav-left ul li").eq(val).addClass("active").siblings().removeClass("active");
       },10)
      },

       morehua:function(){
          $('.more ').addClass('play')
           $('.more a i ').removeClass('fa fa-angle-down')
          $('.more a i ').addClass('fa fa-angle-up')
      },
       moreli:function(){
           $('.more').removeClass('play')
            $('.more a i ').removeClass('fa fa-angle-up')
           $('.more a i ').addClass('fa fa-angle-down')
      },
    }
  };
</script>

<style scoped>
  .head-nav {
    /*width: 100vw;*/
    display: inline-block;
    border-bottom: 1px solid #f0f0f0;
    /*position: relative;*/
  }
  .container {
    width: 1324px;
     margin: 0 auto;
    overflow: hidden;
  }
  .container .nav-left {
    width: 780px;
    float: left;
  }
  .container .nav-right {
    float: right;
    width: 370px;
    overflow: hidden;
  }
    .container .nav-left a{
      display: block;
    }
  .container .nav-left .logo {
    float: left;
    width: 130px;
    height: 40px;
    position: relative;
    top: 10px;
    margin-right: 40px;
  }
  .container .nav-left ul {
    overflow: hidden;
  }
  .container .nav-left li {
    float: left;
    font-weight: 300;
    margin-right: 4px;
    line-height: 67px;
  }
  .container .nav-left li:hover a{
    color:#000;
  }
  .container .nav-left li.active a {
    background: #ffe443;
    font-weight: 600;
  }
  .container .nav-left li a {
    display: inline-block;
    padding: 2px 17px;
    width: 100%;
    height: 100%;
    color: #333;
  }
  /* 二级导航 */
.container .nav-left .more .tanchu {
    position: absolute;
    left:925px;
    top:60px;
    color: #333;
    z-index: 1100 !important;
    background: #fff;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    width: 170px;
    height: 210px;
    display: none;
  }
  .container .nav-left .more .tanchu p{
    height: 50px;
  }
    .container .nav-left .more.play .tanchu{
      display: block;
    }
  .container .nav-left .more.play .tanchu p:hover{
    background:#ffe443;
  }
  .nav-right .search{
    float: left;
  }
  .nav-right .search-box {
    overflow: hidden;
    z-index: 10;
    border-radius: 2px;
    background: #f5f5f5;
    margin-top: 20px;
    width: 290px;
  }
  .nav-right .search-box span {
    padding-top: 7px;
    padding-left: 10px;
    float: left;
    color: #999;
    cursor: pointer;
  }
  .nav-right .search-box input {
    display: inline-block;
    height: 34px;
    flex: 1;
    line-height: 34px;
    border: none;
    margin-right: 24px;
    margin-left: -45px;
    background: #f5f5f5;
    color: #999;
    outline: none;
  }
  .nav-right .leave {
    right: 0;
    display: inline-block;
    margin-top: 30px;
    float: right;
  }
    .nav-right .leave span{
      font-size: 14px;
      color: #333;
      line-height: 1
    }
  /* .nav-right .leave .circle {
    display: inline-block;
    width: 36px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    border-radius: 50%;
    overflow: hidden;
    background: #f5f5f5;
  } */
  .head-nav .lists{
    position: absolute;
    left: 1240px;
    top: 0px;
  }
  .head-nav .lists .content{
    width: 100%;
    height: 420px;
  }

</style>
