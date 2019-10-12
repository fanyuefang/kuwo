

<template>
  <div class="music-singer">
    <head-nav></head-nav>
    <main-nav></main-nav>
    <div class="container">
      <!-- 热门 -->
      <div class="hotDoor">
        <ul>
          <li @click="show1(0)"><span>热门</span></li>
          <li v-for="(word,index) in words" @click="show1(index+1)" >
            <span>{{word}}</span>
          </li>
        </ul>
      </div>
      <!-- 全部 -->
      <div class="allnavs">
        <ul class="nav">
          <li v-for="(nav,ins) in allnavs" @click="show(ins)">
            <router-link to="/singer">{{nav}}</router-link>
          </li>
        </ul>
      </div>
      <!-- 歌手列表 -->
      <ul class="singerlists">
        <li v-for="(singer,num) in singerlists ">
          <img :src="singer.pic" alt="" v-if="num<12" class="big">
          <img :src="singer.pic" alt="" v-if="num>=12" class="small">
          <p class="name" v-if="num<12">{{singer.name}}</p>
          <span v-if="num>=12">{{singer.name}}</span>
          <p class="number" v-if="num<12">{{singer.musicNum}}首歌曲</p>
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
    data:function(){
      return{
        words:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','#'],
        allnavs:['全部','华语男','华语女','华语组合','日韩男','日韩女','日韩组合','欧美男','欧美女','欧美组合','其他' ],
        singerlists:''
      }
    },
    components:{
      HeadNav,
      MainNav
    },
    mounted(){
      this.show1(0)
      this.show(0)
    },

    methods:{

      show1:function(ins){
        $('.hotDoor ul li').eq(ins).addClass('on').siblings().removeClass('on hot')
        if(ins==0){
            $('.hotDoor ul li').eq(ins).addClass('hot')
        }



      },
      show:function(index){
        $('.allnavs .nav li').eq(index).addClass('active').siblings().removeClass('active')
        var that = this
        axios.get('/kuwo/api/www/artist/artistInfo?category='+index+'&prefix=&pn=1&rn=102&reqId=a3ba8d90-dac7-11e9-a6ea-81963d20d662')
          .then(function(val) {
            that.singerlists =val.data.data.artistList;
            //   console.log(val.data.data.artistList)
          })
          .catch(function(err) {
            console.log(err);
          });
      }
    }
  }
</script>

<style scoped>
  .music-singer .container {
    width: 1324px;
    margin-top: 35px;
    position: relative;
    left: 15%;
  }
  /* 热门 */
  .container .hotDoor ul{
    text-align: left;
  }
  .container .hotDoor ul li{
    width: 32px;
    height: 32px;
    margin-right: 14px;
    text-align: center;
    line-height:32px;
    font-size: 14px;
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
    color: #333;
  }
  .container .hotDoor ul li.on span{
    width: 28px;
    height: 28px;
    margin-right: 14px;
    text-align: center;
    line-height: 28px;
    border-radius: 50%;
    cursor: pointer;
    background: #ffe443;
    font-weight: 700;
    display: inline-block;
    color: #000;
  }
  .container .hotDoor ul li.hot span{
    width: 56px;
    height: 28px;
    border-radius: 14px;
    background: #ffe443;
    font-weight: 700;
    display: inline-block;
    color: #000;
  }
  /* 全部 */
  .container .allnavs ul{
    text-align: left;
  }
  .container .allnavs ul li{
    padding: 7px 28px 7px 0px;
    text-align: center;
    border-radius: 14px;
    cursor: pointer;
    margin-right: 6px;
    display: inline-block;
    font-size: 14px;
  }
  .container .allnavs ul li.active a{
    padding: 7px 14px;
    text-align: center;
    border-radius: 14px;
    cursor: pointer;
    margin-right: 6px;
    background: #ffe443;
    font-weight: 700;
    display: inline-block;
  }
  /* 歌手列表 */
  .container .singerlists li{
    display: inline-block;
    width: 16.66%;
    color: #333;
    overflow: hidden;
    margin: 18px 0;
  }
  .container .singerlists li .big{
    width: 189px;
    height: 189px;
    border-radius: 50%;
    cursor: pointer;
  }
  .container .singerlists li .small{
    width: 38px;
    height: 38px;
    border-radius: 50%;
    float: left;
    margin-left: 10px;
    cursor: pointer;
  }
  .container .singerlists li .name{
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    margin-top: 10px;
    cursor: pointer;
  }
  .container .singerlists li .number{
    margin-top: 6px;
    font-size: 12px;
    color: #999;
  }
  .container .singerlists li span{
    float: left;
    font-size: 14px;
    display: inline-block;
    padding: 10px;
    cursor: pointer;
  }
  .container .pages{
    margin-top: 50px;
  }
</style>
