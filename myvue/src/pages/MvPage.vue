

<template>
  <div class="mv-lists">
    <head-nav></head-nav>
    <main-nav></main-nav>
    <div class="container">
      <!-- 导航 -->
      <ul class="navlists">
        <li v-for="(nav,index) in navlists" @click="show(index,nav.id)">
          <router-link :to="'/'+'mvs'">
            {{nav.name}}
          </router-link>
        </li>
      </ul>
      <!-- mv内容列表 -->
      <ul class="content">
        <li v-for="(mv,ins) in mvlists" >
          <div class="image">
            <div>
              <img :src="mv.pic" alt="">
            </div>
            <p class="text">
              <span class="play">▷&nbsp;{{mv.mvPlayCnt}}</span>
              <span class="time">{{mv.songTimeMinutes}}</span>
            </p>
          </div>
          <a href="#">{{mv.name}}</a>
          <p>{{mv.artist}}</p>
          <div class="cover">
            <p><i class="fa fa-caret-right"></i></p>
          </div>
        </li>
      </ul>
      <!-- 分页 -->
      <div class="pages">
        <el-pagination background layout="prev, pager, next" :total="380">
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
        navlists:[
          {name:'首播',id:'236682871'},
          {name:'华语',id:'236682731'},
          {name:'日韩',id:'236742444'},
          {name:'网络',id:'236682773'},
          {name:'欧美',id:'236682735'},
          {name:'现场',id:'236742576'},
          {name:'热舞',id:'236682777'},
          {name:'伤感',id:'236742508'},
          {name:'剧情',id:'236742578'}
        ],
        mvlists:''
      }
    },
    components:{
      HeadNav,
      MainNav
    },
    mounted(){
      this.show(0,'236682871')
    },
    methods:{
      show:function(index,id){
        $('.navlists li').eq(index).addClass('active').siblings().removeClass('active')
        var that = this
        axios.get('http://www.kuwo.cn/api/www/music/mvList?pid='+id+'&pn=1&rn=30&reqId=51da6dc0-dac6-11e9-8387-1137f12329e9')
          .then(function(val) {
            that.mvlists = val.data.data.mvlist;
            //    console.log(val.data.data.mvlist);
          })
          .catch(function(err) {
            console.log(err);
          });
      }
    }

  }
</script>

<style scoped>
  .mv-lists .container {
    width: 1324px;
    margin-top: 35px;
    overflow: hidden;
    position: relative;
    left: 15%;
  }
  /* 导航 */
  .container .navlists{
    text-align: left;
  }
  .container .navlists li{
    display: inline-block;
    padding: 7px 14px;
    text-align: center;
    border-radius: 14px;
    font-weight: 300;
    cursor: pointer;
    font-size: 14px;
  }
  .container .navlists li.active {
    background: #ffe443;
    font-weight: 700;
  }
  /* mv列表 */

  .mv-lists  .content{
    width: 100%;
    margin-top: 30px;
  }
  .mv-lists .content li{
    width: 20%;
    display: inline-block;
    vertical-align: top;
    text-align: left;
    position: relative;
    margin-top: 25px;
  }
  .mv-lists .content li .image img{
    display: block;
    width: 248px;
    height: 155px;
  }
  .mv-lists .content li a{
    display: block;
    margin-top: 10px;
    color: #333;
    font-size: 18px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .mv-lists .content li a:hover{
    font-weight: 700;
  }
  .mv-lists .content li p{
    margin-top: 10px;
    color: #999;
    font-size: 14px;
  }
  .mv-lists .content li p:hover{
    color: #000;
    cursor: pointer;
  }
  .mv-lists .content li .cover{
    position: absolute;
    width: 248px;
    height: 155px;
    top: 0;
    background: rgba(0,0,0,.2);
    z-index: 1000;
    display: none;
  }
  .mv-lists .content li .cover p{
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 50%;
    margin: 50px auto;
    text-align: center;
  }
  .mv-lists .content li .cover p i{
    color: #333;
    line-height: 50px;
    padding-left: 5px;
    font-size: 40px
  }
  .mv-lists .content li .image{
    width: 248px;
    height: 155px;
    overflow: hidden;
    position: relative;
  }
  .mv-lists .content li .image .text{
    position: absolute;
    bottom: 2px;
    color: hsla(0,0%,100%,.8);
    font-size: 13px;
    font-weight: 400;
    width: 100%;
  }
  .mv-lists .content li .image .text .play{
    padding-left: 5px;
  }
  .mv-lists .content li .image .text .time{
    position: absolute;
    right:5px;
  }
  .mv-lists .content li:hover .cover{
    transition: all .2s ease-in-out;
    display: block;
  }
  .mv-lists .content li:hover .image>div img{
    transform: scale(1.1);
    transition: all .7s ;
  }
  .mv-lists .container .pages{
    margin-top: 50px;
  }

</style>
