

<template>
  <div class="music-lists">
    <head-nav></head-nav>
    <main-nav></main-nav>
    <div class="container">
      <!-- 导航 -->
      <ul class="title">
        <div class="secondnav">
          <h3 @click="dian()">精选歌单<i class="fa fa-angle-down"></i></h3>
          <!-- 二级导航 -->
          <ul class="hidden">
            <li class="moren">
              <span><i class="fa fa-bookmark-o"></i>默认</span>
              <p class="select">精选歌单</p>
            </li>
            <li v-for="(secondnav,i) in secondnavs" class="others" v-if="i<6">
              <span><i :class="icons[i]"></i>{{secondnav.name}}</span>
              <ul class="styles">
                <li v-for="(style,num) in secondnav.data ">
                  <a href="#">{{style.name}}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- 一级导航 -->
        <li v-for="(nav,index) in navlists" @click="show(index,nav.id)" class="firstnav">
          <router-link to="/musics">{{nav.name}}</router-link>
        </li>
      </ul>
      <!-- 歌单内容 -->
      <ul class="content">
        <li v-for="(music,ins) in musiclists" >
          <div class="image">
            <div>
              <img :src="music.img" alt="">
            </div>
          </div>
          <a href="#">{{music.name}}</a>
          <p><span>▷</span>{{(music.listencnt/10000).toFixed(1)}}万</p>
          <div class="cover">
            <p><i class="fa fa-caret-right"></i></p>
          </div>
        </li>
      </ul>

      <!-- 分页 -->
      <div class="pages">
        <el-pagination background layout="prev, pager, next" :total="100">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import HeadNav from '../components/HeadNav'
  import MainNav from '../components/MainNav'
  export default {
    data: function() {
      return {
        navlists: [{ name: "最新", id: "new" }, { name: "最热", id: "hot" }],
        musiclists:'',
        secondnavs:'',
        count:0, //初始点击次数
        icons:['fa fa-th-large','fa fa-smile-o','fa fa-gittip','fa fa-safari','fa fa-map-o','fa fa-music']
      };
    },
    components:{
      HeadNav,
      MainNav
    },
    mounted() {
      var that  = this
      axios.get('/kuwo/api/www/playlist/getTagList?reqId=7c0a2ab0-dace-11e9-b90d-17e6149e47fd')
        .then(function(val) {
          that.secondnavs = val.data.data;
          console.log(val.data.data);
        })
        .catch(function(err) {
          console.log(err);
        });

      that.show(0,'new')
    },
    methods: {
      show: function(ins, id) {
        var that = this
        $(".title .firstnav").eq(ins).addClass("active").siblings().removeClass("active");

        axios.get('/kuwo/api/pc/classify/playlist/getRcmPlayList?pn=1&rn=30&order='+ id +'&reqId=d01880b0-dac5-11e9-8387-1137f12329e9')
          .then(function(val) {
            that.musiclists = val.data.data.data;
            //   console.log(val.data.data.data);
          })
          .catch(function(err) {
            console.log(err);
          });
      },

      dian:function(){
        this.count++
        if(this.count%2 !==0){
          $('.secondnav .hidden').css({
            display: 'block',
          })
          $('.secondnav h3 i').removeClass()
          $('.secondnav h3 i').addClass('fa fa-angle-up')
        }else{
          $('.secondnav .hidden').css({
            display: 'none',
          })
          $('.secondnav h3 i').addClass('fa fa-angle-down')
        }

      }
    }
  };
</script>

<style scoped>
  .music-lists .container {
    width: 1324px;
    margin-top: 35px;
    overflow: hidden;
    position: relative;
    left: 15%;
    /* border: 1px solid red; */
  }
  .music-lists .container .title {
    text-align: left;
  }
  .music-lists .container .title h3 {
    color: #333;
    display: inline-block;
    font-size: 22px;
    font-weight: 600;
    line-height: 30px;
    margin-right: 36px;
    cursor: pointer;
  }
  .music-lists .container .title h3 i{
    padding-left: 15px;
    font-weight: 600;
    font-size: 24px;
  }
  .music-lists .container .title li {
    display: inline-block;
    height: 20px;
    line-height: 20px;
    margin-right: 34px;
    font-weight: 300;
    color: #333;
    font-size: 14px;
  }
  .music-lists .container .title .firstnav.active a {
    display: inline-block;
    background: #ffe443;
    font-weight: bold;
    color: black;
  }

  /* 歌单 */

  .music-lists .content{
    width: 100%;
    margin-top: 30px;
  }
  .music-lists .content li{
    width: 20%;
    display: inline-block;
    vertical-align: top;
    text-align: left;
    position: relative;
  }
  .music-lists .content li .image img{
    display: block;
    width: 248px;
    height: 248px;
  }
  .music-lists .content li a{
    display: block;
    margin-top: 10px;
    color: #333;
  }
  .music-lists .content li a:hover{
    font-weight: 700;
  }
  .music-lists .content li p{
    margin-top: 10px;
    color: #999;
    font-size: 16px;
  }
  .music-lists .content li .cover{
    position: absolute;
    width: 248px;
    height: 248px;
    top: 0;
    background: rgba(0,0,0,.2);
    z-index: 1000;
    display: none;
  }
  .music-lists .content li .cover p{
    width: 70px;
    height: 70px;
    background: #fff;
    border-radius: 50%;
    margin: 80px auto;
    text-align: center
  }
  .music-lists .content li .cover p i{
    color: #333;
    line-height: 70px;
    padding-left: 10px;
    font-size: 50px
  }
  .music-lists .content li .image{
    width: 248px;
    height: 248px;
    overflow: hidden;
  }
  .music-lists .content li:hover .cover{
    transition: all .2s ease-in-out;
    display: block;
  }
  .music-lists .content li:hover .image>div img{
    transform: scale(1.1);
    transition: all .5s ;
  }
  .music-lists .container .pages{
    margin-top: 50px;
  }
  /* 二级导航 */
  .container .secondnav{
    display: inline-block;
    position: relative;
  }
  .container .secondnav .hidden{
    width:900px;
    height:720px;
    background: #fff;
    box-shadow: 0 4px 20px 0 rgba(65,67,70,.08);
    position: absolute;
    top: 45px;
    z-index: 1002;
    padding: 20px 20px;
    display: none;
  }
  .container .secondnav .hidden li span{
    margin-left: 2px;
    font-weight: 600;
    color: #000;
    display: inline-block;
  }
  .container .secondnav .hidden li span i{
    margin-right: 5px;
  }
  .container .secondnav .hidden .moren .select{
    padding: 6px 18px;
    background: #ffe12c;
    border-radius: 16px;
    margin:10px 0;
    cursor: pointer;
    color: #333;
    font-weight: 600;
  }
  .container .secondnav .hidden .others {
    margin-top: 30px ;
    width: 100%;
  }
  .container .secondnav .hidden .others .styles{
    margin-top: 10px;
  }
  .container .secondnav .hidden .others .styles li {
    padding: 6px 18px;
    background: #f7f7f7;
    border-radius: 16px;
    margin: 0 10px 10px 0;
    cursor: pointer;
    height: 30px;
  }
  .container .secondnav .hidden .others .styles li a{
    font-weight: 400;
    color: #000;
  }
  .container .secondnav .hidden .others .styles li:hover{
    background: #ffe12c;
  }
</style>
