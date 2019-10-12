

<template>
  <div class="main-content">
    <div class="container">
      <!-- 轮播图 -->
      <div class="play-figgure">
        <ul>
          <el-carousel indicator-position="outside" class="pic">
            <el-carousel-item v-for="(picture,index) in pics" :key="index" class="pic">
                <img :src="picture.pic" alt />
            </el-carousel-item>
          </el-carousel>
             <div class="downlink">
             <ul>
               <li>
                    <i class="fa fa-windows"></i>
                 <span>下载PC版</span>
               </li>
               <li>
                   <i class="fa fa-android"></i>
                 <span>下载Android版</span>
               </li>
               <li>
                   <i class="fa fa-apple"></i>
                 <span>下载iPhone版</span>
               </li>
               <li>
                   <i class="fa fa-tv (alias)"></i>
                 <span>下载其它版本</span>
               </li>
             </ul>
          </div>
        </ul>
      </div>

      <!-- 推荐歌单 -->
      <div class="recommend-list">
         <h1>推荐歌单</h1>
         <ul class="list-nav">
           <li @click="show(0)" class="active hover" >
             <router-link :to="'/'">每日推荐</router-link>
           </li>
            <li v-for="(list,ins) in navlists" :key='"ins"+ins' @click="show(ins+1,list.id)" class="hover">
              <router-link :to="'/'+ list.id">
                {{list.name}}
              </router-link >
            </li>
            <li>
              <a href="#/musics" style="color:#999" @click="gedan(3)">更多     <i class="fa fa-angle-right"></i></a>
            </li>
         </ul>
      </div>
      
 <!-- 推荐歌单--每日推荐  -->
 <everyday-recom v-if="ins==0"></everyday-recom>
 <!-- 推荐歌单--其它推荐 -->
 <recom-lists v-if="ins>0"></recom-lists>
 <!-- 精选活动 -->
 <select-active></select-active>
 <!-- 排行榜 -->
 <home-bang></home-bang>
 <!-- 歌手推荐 -->
 <singer-recom></singer-recom>
 <!-- 主播电台 -->
 <host-radio></host-radio>


    </div>
   
  </div>
</template>

<script>
import axios from "axios"
import bus from '../router/bus'
import RecomLists from '../components/RecomLists'
import EverydayRecom from '../components/EverydayRecom'
import SelectActive from '../components/SelectActive'
import HomeBang from'../components/HomeBang'
import SingerRecom from '../components/SingerRecom'
import HostRadio from '../components/HostRadio'
export default {
  data: function() {
    return {
      pics: [],
      navlists:[],
      catelists:[],
      ins:0
    };
  },
  components:{
    RecomLists, //推荐歌单--其它列表
    EverydayRecom,  //推荐歌单--每日推荐
    SelectActive, //精选活动
    HomeBang,  //排行榜
    SingerRecom,  //歌手推荐
    HostRadio,  //主播电台
  },
  methods:{
      show:function(ins,id){
        $('.recommend-list .list-nav li').eq(ins).addClass('active').siblings().removeClass('active')
        this.ins = ins
        var that = this
        //推荐歌单--导航其它列表内容
        axios.get('/kuwo/api/pc/classify/playlist/getTagPlayList?id='+id)
        .then(function(val) {
          // console.log(val.data.data.data)
        that.catelists =val.data.data.data
        // bus.$emit('sendlists',that.catelists)
      })
      .catch(function(err) {
        console.log(err);
      });
      },
    gedan:function (num) {
      console.log(num)
        bus.$emit('chuan',num)
      }

  },
  mounted() {
    var that = this;
    //轮播图
    axios.get( "/kuwo/api/www/banner/index/bannerList?reqId=9cd23a40-da9b-11e9-ba7d-c3dd5a7c96b0")
      .then(function(val) {
        that.pics = val.data.data;
        // console.log(that.pics);
      })
      .catch(function(err) {
        console.log(err);
      });
 
    //推荐歌单--导航列表
    axios.get('/kuwo/api/www/playlist/index/tags?reqId=9cd28860-da9b-11e9-ba7d-c3dd5a7c96b0')
     .then(function(val) {
        that.navlists = val.data.data;
        // console.log(that.navlists);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.main-content{
  width: 1324px;
  position: relative;
  left:15%
}
.main-content .container {
  /* min-width:72%;
  max-width: 85%; */
  width: 100%;
  display: inline-block;
  margin: 0 auto;
  /* border: 1px solid #ccc; */
}
/* 轮播图 */
.main-content .container .play-figgure {
  width: 100%;
}
.main-content .container .play-figgure ul{
  position: relative;
}
.main-content .container .play-figgure ul .pic{
  height: 340px;
}
.main-content .container .play-figgure ul .downlink{
  width: 100%;
  height: 60px;
  position: absolute;
  top:280px;
  z-index: 1000;
  line-height: 60px;
  color: #fff;
  font-size: 16px;
  background: rgba(0,0,0,.15);
}
.container .play-figgure .downlink ul {
  width: 100%;
  height: 100%;
}
.container .play-figgure .downlink ul li{
  width: 25%;
  float: left;
}
/* 推荐歌单 */
.recommend-list {
  margin-top: 40px;
  text-align: left;
}
.recommend-list h1{
  display: inline-block;
  vertical-align: bottom;
  color:#333;
  font-size: 30px;
}
.recommend-list ul{
  overflow: hidden;
  display: inline-block;
  vertical-align: bottom;
  margin-left: 40px;
}
.recommend-list ul li{
  float: left;
}
.recommend-list ul li a{
display: inline-block;
height: 20px;
line-height: 20px;
margin-right: 34px;
font-weight: 300;
color: #333;
font-size: 14px;
}
.recommend-list ul li.active a{
 background: #ffe443;
}
.recommend-list ul .hover a:hover{
  color: black;
}
</style>
