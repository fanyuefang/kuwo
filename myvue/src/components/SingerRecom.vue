

<template>
  <div class="singer-recom">
    <div class="container">
      <h1>歌手推荐</h1>
      <ul class="navlist">
        <li v-for="(nav,index) in navlists"  @click="show(index,nav.id)" >
          <router-link :to="'/'+ nav.id">{{nav.name}}</router-link>
        </li>
        <li>
          <a href="#/singer" style="color:#999" @click="geshou(2)">更多     <i class="fa fa-angle-right"></i>
          </a>
        </li>
      </ul>
      <ul class="singerlist">
          <li v-for="(singer,ins) in singerlists" >
             <div class="singer">
                 <img :src="singer.pic" alt="">
                 <a href="#/load" class="name" @click="dianji(2,singer.id)">{{singer.name}}</a>
                 <p class="num">{{singer.musicNum}}首歌曲</p>
             </div>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import bus from '../router/bus'
export default {
  data: function() {
    return {
      navlists: [],
      singerlists:[],
      index:0,
      id:''
    };
  },
  mounted() {
     setTimeout(() => {
         this.show(0,11)
     }, 1000);

    var that = this;
    axios
      .get(
        "/kuwo/api/www/artist/index/tags?reqId=9cd28861-da9b-11e9-ba7d-c3dd5a7c96b0"
      )
      .then(function(val) {
        that.navlists = val.data.data;
        // console.log(val.data.data);
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  methods:{
      show:function(ins,id){
          var that = this
         $('.container .navlist li').eq(ins).addClass('active').siblings().removeClass('active')
        
         axios.get('http://www.kuwo.cn/api/www/artist/artistInfo?category='+id+'&pn=1&rn=6&reqId=ec4654a0-dc74-11e9-8135-c1717c50e13e')
          .then(function(val) {
        that.singerlists = val.data.data.artistList;
        // console.log(val.data.data.artistList);
      })
      .catch(function(err) {
        console.log(err); 
      });
      },

    geshou:function (num) {
      bus.$emit('chuan',num)
    },

    dianji:function(i,id){
        var that = this
        that.id = id
       setTimeout(function(){
           bus.$emit('sendid',that.id);
           bus.$emit('chuan',i)
       },10)
      }

  }
};
</script>

<style scoped>
.singer-recom {
  /* min-width:1180px;
  max-width:1300px; */
  margin: 0 auto;
  margin-top: 20px;
}
.singer-recom .container{
    text-align: left;
}
.singer-recom .container h1 {
  color: #333;
  margin-top: 60px;
  display: inline-block;
  font-size: 30px;
  vertical-align: bottom;
}
.singer-recom .container .navlist{
  overflow: hidden;
  display: inline-block;
  vertical-align: bottom;
  margin-left: 40px;
}
.singer-recom .container .navlist li{
    float: left;
}
.singer-recom .container .navlist li a{
  display: inline-block;
  height: 20px;
  line-height: 20px;
  margin-right: 34px;
  font-weight: 300;
  color: #333;
  font-size: 14px;
}
.singer-recom .container .navlist li a:hover{
  color: black;
}
.singer-recom .container .navlist li.active a{
  background: #ffe443;
}
.singer-recom .container .singerlist li{
  width: 16.66%;
  display: inline-block;
  padding-top: 20px;
  text-align: center;
}
.singer-recom .container .singerlist li .singer img{
  width: 182px;
  height: 182px;
  border-radius: 50%;
}
.container .singerlist li .singer .name{
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  color: #333;
  font-weight: 500;
  display: block;
  margin-top: 10px;
}
.container .singerlist li .singer .num{
  margin-top: 6px;
  font-size: 12px;
  color: #999;
}
</style>
