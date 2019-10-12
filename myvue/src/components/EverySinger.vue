

<template>
    <div class="every-singer">
       <div class="container">
           <!-- 上部分内容 -->
          <div class="top">
             <div class="content" >
                <img :src="singers.pic" alt="">
                <div class="right">
                    <h3>{{singers.name}}</h3>
                    <p class="music">
                       <span>单曲 : <a>{{singers.musicNum}}</a> </span>
                       <span>专辑 : <a>{{singers.albumNum}}</a> </span>
                       <span>MV : <a>{{singers.mvNum}}</a> </span>
                       <span>粉丝 : <a>{{((singers.artistFans)/10000).toFixed(1)}}W</a> </span>
                    </p>
                    <p class="info">
                       <span>英文名:{{singers.aartist}}</span>
                       <span>国籍:{{singers.country}}</span>
                       <span>语言: {{singers.language}}</span>
                       <span>出生地:{{singers.birthplace}}</span>
                       <span>星座:{{singers.constellation}}...</span>
                       <span class="all">全部></span>
                    </p>
                    <p class="button">
                        <span class="yellow"><i class="fa fa-play"></i>播放全部歌曲</span>
                        <span><i class="fa fa-heart-o"></i>收藏</span>
                        <span><i class="fa fa-television"></i>使用客户端查看歌手</span>
                    </p>
                </div>
             </div>
          </div>

          <!-- 内容部分 -->
          <div class="bottom">
             <div class="musics">
                 <ul class="navlists">
                     <li v-for="(nav,ins) in navs" @click="show(ins,nav.room)">
                         <router-link :to="'/load/'+nav.room">
                              {{nav.name}}
                         </router-link>
                     </li>
                 </ul>
                <singer-music :musiclists="musiclists" v-if="ins==0"></singer-music>
               <artist-album :zhuanji="zhuanji" v-if="ins==1"></artist-album>
               <music-mv :mvs="mvs" v-if="ins==2"></music-mv>
               <singer-info :infos="infos" v-if="ins==3"></singer-info>
             </div>
              
             <div class="icons">
                <div>
                  <h3>下载酷我音乐</h3>
                  <p>无损音质，还原爱豆动听原声</p>
                  <ul class="pics">
                    <li class="oneli">
                        <span><i class="fa fa-windows"></i></span>
                        <p>PC版</p>
                    </li>
                    <li class="twoli">
                        <span><i class="fa fa-android"></i></span>
                        <p>Android</p>
                    </li>
                    <li class="threeli">
                        <span><i class="fa fa-apple"></i></span>
                        <p>iPhone</p>
                    </li>
                  </ul>
                </div>
             </div>
          </div>

       </div>
    </div>
</template>

<script>
import bus from '../router/bus'
import axios from 'axios'
import SingerMusic from '../components/SingerMusic'
import ArtistAlbum  from '../components/ArtistAlbum'
import MusicMv from '../components/MusicMv'
import SingerInfo from '../components/SingerInfo'
 export default {
    data:function(){
        return{
          rooms:336,
          singers:'',
          navs:[
              {name:'单曲',room:'artistMusic'},
              {name:'专辑',room:'artistAlbum'},
              {name:'MV',room:"artistMv"},
              {name:'简介',room:'artist'}
          ],
          musiclists:'',
          zhuanji:'',
          mvs:'',
          infos:'',
          ins:0,
        }
    },
    components:{
       SingerMusic, //单曲
       ArtistAlbum, //专辑
       MusicMv,   //MV
       SingerInfo  //简介
    },
    mounted(){
            var that = this
        bus.$on('sendid',function(id){ 
           that.rooms = id
        console.log(that.rooms)
        })
         
       setTimeout(function(){
            axios.get('/kuwo/api/www/artist/artist?artistid='+that.rooms+'&reqId=28e3aa30-df99-11e9-97c1-af943d0e1d28')
        .then(function(val){
            that.singers = val.data.data
            // console.log(val.data.data)
        }).catch(function(err){
            console.log(err)
        },100)
       })

       setTimeout(function(){
           that.show(0,'artistMusic')
       },10)
       
    },

    methods:{
        show:function(ins,room){
            $('.navlists li').eq(ins).addClass('active').siblings().removeClass('active')
            if(ins>0){
                $('.right .button .yellow').css({
                    display: 'none',
                })
            }else{
                $('.right .button .yellow').css({
                    display: 'inline-block',
                })
            }
            var that = this
            that.ins =ins
            axios.get('/kuwo/api/www/artist/'+room+'?artistid='+that.rooms+'&pn=1&rn=28&reqId=5aced070-dfa2-11e9-90ca-dd55985a88c6')
             .then(function(val){
            that.musiclists = val.data.data.list
            that.zhuanji = val.data.data.albumList
            that.mvs = val.data.data.mvlist
            that.infos = val.data.data
            // console.log(val.data.data)
            }).catch(function(err){
            console.log(err)
            })

        }
    }
}
</script>

<style scoped>
.every-singer{
  /* margin: 0 auto; */
  margin-top: 20px;
}
/* 上面--个人信息部分 */
.every-singer .container .top{
  width: 100%;
  height: 314px;
  background: #f5f5f5;
}
.container .top .content{
   width: 1350px;
  position: relative;
  left:15%  ;
  height:80%;
  top: 40px;
  text-align: left;
}
.container .top .content img{
    width: 230px;
    height: 230px;
    border-radius: 50%;
    vertical-align: middle;
}
.container .top .content .right{
    display: inline-block;
    margin-left: 35px;
    vertical-align: middle;
    color: #333;
}
.container .top .content .right h3{
    height: 42px;
line-height: 42px;
font-weight: 500;
font-size: 30px;
}
.container .top .content .right .music{
    color: #999;
font-size: 18px;
font-weight: 300;
line-height: 25px;
margin: 16px 0;
}
.container .top .content .right .music span{
   margin-right: 40px;
   font-size: 18px;
}
.container .top .content .right .music span a{
    color: #333;
}
.container .top .content .right .info{
    max-width: 700px;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
color: #666;
font-weight: 300;
font-size: 14px;
}
.container .top .content .right .info span{
    margin-right: 15px;
}
.container .top .content .right .info .all{
    cursor: pointer;
color: #296294;
font-weight: 400;
}
.container .top .content .right .button{
    margin-top: 32px;
}
.container .top .content .right .button span{
padding: 0 30px;
height: 40px;
margin-right: 10px;
text-align: center;
border-radius: 22px;
border: none;
font-size: 16px;
background: #ebebeb;
cursor: pointer;
color: #666;
line-height: 40px;
display: inline-block;
}
.container .top .content .right .button span i{
    padding-right: 5px;
}
.container .top .content .right .button .yellow{
    background: #ffe12c;
   color: #333;
}
.container .bottom{
  width: 1350px;
  position: relative;
  left:15%;
  overflow: hidden;
}
.container .bottom .musics{
    width: 76%;
    height: 100%;
    float: left;
}
.container .bottom .icons{
    width: 24%;
    height: 100%;
    float: right;
}
/* 下部分---导航 */
.container .bottom .musics .navlists {
    margin-bottom: 24px;
    text-align: left;
    margin-top: 50px;
}
.container .bottom .musics .navlists li{
    display: inline-block;
}
.container .bottom .musics .navlists li a{
display: inline-block;
font-size: 22px;
line-height: 30px;
margin-right: 46px;
font-weight: 300;
color: #333;
cursor: pointer
}
.container .bottom .musics .navlists li.active a{
    background: #ffe443;
}
/* 右侧图标 */

.container .bottom .icons div{
    margin-top: 50px;
    width: 270px;
    margin-left: 50px;
    text-align: left;
}
.container .bottom .icons div h3{
    font-size: 22px;
font-weight: 500;
color: #333;
}
.container .bottom .icons div p{
    margin-top: 11px;
margin-bottom: 24px;
font-size: 13px;
font-weight: 300;
line-height: 18px;
color: #999;
}
.container .bottom .icons div .pics li{
    display: inline-block;
    padding-right: 15px;
}
.container .bottom .icons div .pics li span{
    display: inline-block;
    width: 71px;
    height: 71px;
    color: #fff;
cursor: pointer;
text-align: center;
}
.container .bottom .icons div .pics li span i{
    font-size: 35px;
    line-height: 70px;
}
.container .bottom .icons div .pics li p{
    font-weight: 400;
    font-size: 14px;
    color: #333;
}
.container .bottom .icons div .pics .oneli span{
 background: #3998f3;
}
.container .bottom .icons div .pics .twoli span{
    background: #13ba82;
}
.container .bottom .icons div .pics .threeli span{
    background: #666;
}
</style>