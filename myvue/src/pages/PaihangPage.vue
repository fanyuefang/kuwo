

<template>
  <div class="pai-hang">
    <head-nav></head-nav>
    <main-nav></main-nav>
    <div class="container">
      <!-- 左侧--排行榜列表 -->
      <div class="navlists">
        <ul class="nav">
          <li
            v-for="(nav,index) in navlists"
            v-if="index<=2"
            :key="index+'index'"
            @click="show(index,nav.name)"
          >
            <router-link to="/paihang" >{{nav.name}}</router-link>
          </li>
        </ul>
        <ul class="bang">
          <li v-for="(bang,ins) in banglists" @click="dian(ins,bang.sourceid,bang.name)">
            <router-link to="paihang" class="image">
              <img :src="bang.pic" alt />
            </router-link>
            <div class="text">
              <p class="name">{{bang.name}}</p>
              <p class="pub">{{bang.pub}}</p>
            </div>
          </li>
        </ul>
      </div>
      <!-- 右侧--音乐列表 -->
      <div class="singlelist">
        <!-- 标题 -->
        <div class="title">
          <p class="top">
            <a>{{names}}</a>
            <span>更新时间:{{date}}</span>
          </p>
          <p class="bottom">
            <button class="yellow">
              <i class="fa fa-play-circle-o"></i> 播放全部
            </button>
            <button>
              <i class="fa fa-plus-square-o"></i>添加
            </button>
            <button>
              <i class="fa fa-heart-o"></i>收藏
            </button>
            <button>
              <i class="fa fa-comment-o"></i>评论
            </button>
          </p>
        </div>
        <!-- 单一音乐 -->
        <div class="content">
          <ul class="list">
            <li>序号</li>
            <li class="gequ">歌曲</li>
            <li class="singer">歌手</li>
            <li class="zhuanji">专辑</li>
            <li class="time">时长</li>
          </ul>
          <ul class="music">
            <li v-for="(single,i) in singlelists" class="everymusic" :class="{active:((i+1)%2==0)}">
              <div class="oneli">
                <span v-if="i>2">{{i+1}}</span>
                <span v-if="i==0" class="zero"></span>
                <span v-if="i==1" class="first"></span>
                <span v-if="i==2" class="second"></span>
                <img :src="single.pic" alt />
              </div>
              <div class="twoli">
                <span>{{single.name}}</span>
              </div>
              <div class="threeli">
                <span>{{single.artist}}</span>
              </div>
              <div class="fourli">
                <span>{{single.album}}</span>
              </div>
              <div class="fiveli">
                <span>{{single.songTimeMinutes}}</span>
              </div>
              <div class="yinicon">
                <span class="icon">
                  <i class="fa fa-play-circle-o"></i>
                  <i class="fa fa-plus-square-o"></i>
                  <i class="fa fa-heart-o"></i>
                  <i class="fa fa-download"></i>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <!-- 分页 -->
        <div class="pages">
          <el-pagination background layout="prev, pager, next" :total="100">
          </el-pagination>
        </div>

        <!-- 热门评论 -->
        <div class="hotcomment">
          <div class="hotTitle">
            <h3>热门评论</h3>
            <span>{{hotcomments.length}}条</span>
          </div>
          <ul class="hotContent">
            <li v-for="(comment,num) in hotcomments">
              <div class="image">
                <img :src="comment.u_pic" alt="">
                <img src="https://h5static.kuwo.cn/upload/image/4f768883f75b17a426c95b93692d98bec7d3ee9240f77f5ea68fc63870fdb050.png" alt="" v-if="!comment.u_pic  ">
              </div>
              <div class="user">
                <p class="id">{{comment.u_id}}</p>
                <p class="msg">{{comment.msg}}</p>
                <p class="time">{{comment.time}}</p>
              </div>
            </li>
          </ul>
        </div>
        <!-- 最新评论 -->
        <div class="newcomment">
          <div class="newTitle">
            <h3>最新评论</h3>
            <span>{{newcomments.length}}条</span>
          </div>
          <ul class="newContent">
            <li v-for="(newcomment,num) in newcomments" v-if="num<20">
              <div class="image">
                <img :src="newcomment.u_pic" alt="">
                <img src="https://h5static.kuwo.cn/upload/image/4f768883f75b17a426c95b93692d98bec7d3ee9240f77f5ea68fc63870fdb050.png" alt="" v-if="!newcomment.u_pic  ">
              </div>
              <div class="user">
                <p class="id">{{newcomment.u_id}}</p>
                <p class="msg">{{newcomment.msg}}</p>
                <p class="time">{{newcomment.time}}</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- 分页 -->
        <div class="pages">
          <el-pagination background layout="prev, pager, next" :total="100">
          </el-pagination>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import HeadNav from '../components/HeadNav'
  import MainNav from '../components/MainNav'
  export default {
    data: function() {
      return {
        navlists: [],  //导航列表
        banglists: [],   //排行版列表
        singlelists: [],  //音乐列表
        names: "",
        date: "",  //当前日期
        hotcomments:'', //热门评论
        newcomments:'', //最新评论
      };
    },
    components:{
      HeadNav,
      MainNav
    },
    mounted() {
      var that = this;
      axios.get("/kuwo/api/www/bang/bang/bangMenu?reqId=f47d47c0-dace-11e9-b90d-17e6149e47fd")
        .then(function(val) {
          that.navlists = val.data.data;
          // console.log(val.data.data)
        })
        .catch(function(err) {
          console.log(err);
        });
      that.show(0, "官方榜");
      that.dian(0, 93, "酷我飙升榜");
    },
    methods: {
      show: function(ins, name) {
        $(".navlists .nav li").eq(ins).addClass("active").siblings().removeClass("active");
        var that = this;
        axios.get("/kuwo/api/www/bang/bang/bangMenu?reqId=f47d47c0-dace-11e9-b90d-17e6149e47fd")
          .then(function(val) {
            that.banglists = val.data.data[ins].list;
            // console.log(val.data.data[ins].list)
          })
          .catch(function(err) {
            console.log(err);
          });
      },

      dian: function(num, id, name) {
        $('.bang li').eq(num).addClass('on').siblings().removeClass('on')
        var that = this;
        that.names = name;
        // 音乐列表的数据
        axios.get("/kuwo/api/www/bang/bang/musicList?bangId=" +id +"&pn=1&rn=30&reqId=b4e98cf0-dac8-11e9-9bff-c5b98392702c")
          .then(function(val) {
            that.singlelists = val.data.data.musicList;
            that.date = val.data.data.pub
            // console.log(val.data.data.musicList);
          })
          .catch(function(err) {
            console.log(err);
          });

        //热门评论的数据
        axios.get('/kuwo/comment?type=get_rec_comment&f=web&page=1&rows=20&digest=2&sid='+id+'&uid=0&prod=newWeb&reqId=74a18800-da9b-11e9-ba7d-c3dd5a7c96b0')
          .then(function(val) {
            that.hotcomments = val.data.rows;
            // console.log(val.data.rows);
          })
          .catch(function(err) {
            console.log(err);
          });

        //最新评论的数据
        axios.get('/kuwo/comment?type=get_comment&f=web&page=1&rows=20&digest=2&sid='+id+'&uid=0&prod=newWeb&reqId=797a4a50-dac9-11e9-bad7-532ae3bae2cc')
          .then(function(val) {
            that.newcomments = val.data.rows;
            console.log(val.data.rows);
          })
          .catch(function(err) {
            console.log(err);
          });

      }
    }
  };
</script>

<style scoped>
  .pai-hang .container {
    /* width: 100%; */
    width: 1324px;
    position: relative;
    left: 15%;
    margin-top: 35px;
    overflow: hidden;
  }
  .pai-hang .container .navlists {
    width: 18.85%;
    overflow: hidden;
    min-width: 210px;
    background: #fff;
    box-shadow: 0 0 20px 0 rgba(65, 67, 70, 0.05);
    float: left;
  }
  .pai-hang .container .navlists .nav li {
    width: 30%;
    display: inline-block;
    height: 50px;
    border-bottom: 1px solid #f2f2f2;
    text-align: center;
    padding-top: 15px;
  }
  .pai-hang .container .navlists li a {
    display: inline-block;
  }
  .pai-hang .container .navlists li.active a {
    background: #ffe443;
  }
  .container .navlists .bang li {
    width: 100%;
    height: 80px;
    text-align: left;
    padding-top: 10px;
  }
  .container .navlists .bang li.on{
    background: rgb(242,242,242)
  }
  .container .navlists .bang li:hover {
    background: rgb(250, 250, 250);
  }
  .container .navlists .bang li .image {
    display: inline-block;
    margin-right: 12px;
    cursor: pointer;
    margin-left: 20px;
    vertical-align: middle;
  }
  .container .navlists .bang li .image img {
    width: 60px;
    height: 60px;
  }
  .container .navlists .bang li .text {
    display: inline-block;
    vertical-align: middle;
  }
  .container .navlists .bang li .text .name {
    width: 100px;
    height: 20px;
    line-height: 20px;
    font-weight: 600;
    margin-bottom: 6px;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-right: 5%;
    font-size: 14px;
    color: #333;
  }
  .container .navlists .bang li .text .pub {
    height: 20px;
    line-height: 20px;
    color: #999;
    font-size: 14px;
  }
  .container .singlelist {
    width: 75%;
    float: right;
  }
  .container .singlelist .title {
    width: 100%;
    text-align: left;
  }
  .container .singlelist .title .top a {
    display: inline-block;
    margin-top: 14px;
    height: 53px;
    line-height: 53px;
    font-size: 38px;
    font-weight: 600;
    color: #333;
  }
  .container .singlelist .title .top span {
    line-height: 20px;
    margin-left: 10px;
    color: #999;
    font-size: 14px;
  }
  .container .singlelist .title .bottom {
    margin: 20px 0;
  }
  .container .singlelist .title .bottom button {
    display: inline-block;
    padding: 0 30px;
    height: 40px;
    margin-right: 10px;
    text-align: center;
    border-radius: 22px;
    border: none;
    font-size: 16px;
    background: #f2f2f2;
    cursor: pointer;
    color: #333;
  }
  .container .singlelist .title .bottom button i {
    padding-right: 5px;
  }
  .container .singlelist .title .bottom .yellow {
    width: 150px;
    background: #ffe12c;
  }
  .container .singlelist .content{
    margin-top: 40px;
  }
  .container .singlelist .content .list {
    width: 100%;
    height: 46px;
    background: rgb(250, 250, 250)
  }
  .container .singlelist .content .list li {
    width: 20%;
    display: inline-block;
    padding-left: 10px;
    height: 100%;
    line-height: 46px;
    text-align: left;
    color: #999;
    font-size: 14px;
  }
  .container .singlelist .content .list .gequ {
    width: 22%;
  }
  .container .singlelist .content .list .singer {
    width: 20%;
  }
  .container .singlelist .content .list .zhuanji {
    width: 28%;
  }
  .container .singlelist .content .list .time {
    width: 8%;
  }
  .container .singlelist .content .music .everymusic {
    width: 100%;
    height:74px;
    position: relative;
    padding: 10px 0;
  }
  .container .singlelist .content .music .everymusic.active{
    background:rgb(250, 250, 250)
  }
  .container .singlelist .content .music .everymusic div {
    /* width: 20%; */
    display: inline-block;
    padding-left: 10px;
    height: 100%;
    line-height: 40px;
    text-align: left;
    vertical-align: middle;
  }
  .singlelist .content .music .everymusic .oneli {
    width: 20%;
    overflow: hidden;
  }
  .singlelist .content .music .everymusic .oneli span {
    display: inline-block;
    width:30px;
    height: 33px;
    text-align: center;
    line-height: 33px;
    font-size: 16px;
    font-weight: 700;
    float: left;
    margin-top: 10px;
    color: #333;
  }
  .singlelist .content .music .everymusic .oneli .zero {
    background: url(http://h5static.kuwo.cn/www/kw-www/img/df06fb1.png)center no-repeat;
    background-size: 100% 100%;
  }
  .singlelist .content .music .everymusic .oneli .first {
    background: url(http://h5static.kuwo.cn/www/kw-www/img/d99e73e.png)center no-repeat;
    background-size: 100% 100%;
  }
  .singlelist .content .music .everymusic .oneli .second {
    background: url(http://h5static.kuwo.cn/www/kw-www/img/8abbb65.png)center no-repeat;
    background-size: 100% 100%;
  }
  .singlelist .content .music .everymusic .oneli img {
    width: 54px;
    height: 54px;
    float: right;
    margin-right: 25px;
  }
  .singlelist .content .music .everymusic .twoli {
    width: 22%;
  }
  .singlelist .content .music .everymusic .twoli span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    color: #333;
    font-size: 14px;
    line-height: 22px;
  }
  .singlelist .content .music .everymusic .threeli {
    width: 20%;
  }
  .singlelist .content .music .everymusic .threeli,
  .fourli,
  .fiveli span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    color: #666;
    font-size: 14px;
    line-height: 22px;
  }
  .singlelist .content .music .everymusic .fourli {
    width: 28%;
  }
  .singlelist .content .music .everymusic .fiveli {
    width: 8%;
  }
  .singlelist .content .music .everymusic .yinicon{
    position: absolute;
    width: 260px;
    left:742px;
  }
  .singlelist .content .music .everymusic .yinicon .icon{
    display: none;
  }
  .singlelist .content .music .everymusic .yinicon .icon i{
    padding-left: 30px;
  }
  .singlelist .content .music .everymusic:hover .yinicon .icon {
    display: block;
  }
  .singlelist .content .music .everymusic:hover .fiveli span{
    display: none;
  }
  .singlelist .content .music .everymusic:hover{
    background: rgb(245, 245, 245)
  }
  .singlelist .content .music .everymusic:hover .fourli span{
    display: inline-block;
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .singlelist .pages{
    margin-top: 50px;
  }
  /* 热门评论 */
  .singlelist .hotcomment{
    width: 100%;
    margin-top: 50px;
    color: #333;
  }
  .singlelist .hotcomment .hotTitle{
    text-align: left;
    padding: 10px 0;
  }
  .singlelist .hotcomment .hotTitle h3{
    font-size: 22px;
    line-height: 30px;
    font-weight: 600;
    display: inline-block;
  }
  .singlelist .hotcomment .hotTitle span{
    font-size: 14px;
    margin-left: 10px;
    font-weight: 300;
  }
  .singlelist .hotcomment .hotContent li{
    width: 100%;
    height: 100px;
    text-align: left;
  }
  .singlelist .hotcomment .hotContent li .image{
    display: inline-block;
    width: 42px;
    height: 42px;
    margin-right: 10px;
  }
  .singlelist .hotcomment .hotContent li .image img{
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
  .singlelist .hotcomment .hotContent li .user{
    display: inline-block;
    height: 100%;
    padding-top: 10px;
    width: 94%;
    border-bottom: 1px solid #f2f2f2;
  }
  .singlelist .hotcomment .hotContent li .user p{
    line-height: 25px;
    font-size: 14px;

  }
  .singlelist .hotcomment .hotContent li .user .id{
    font-weight: 600;
  }
  .singlelist .hotcomment .hotContent li .user .msg{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .singlelist .hotcomment .hotContent li .user .time{
    color: #999;
  }
  /* 最新评论 */
  .singlelist .newcomment{
    width: 100%;
    margin-top: 20px;
    color: #333;
  }
  .singlelist .newcomment .newTitle{
    text-align: left;
    padding: 10px 0;
  }
  .singlelist .newcomment .newTitle h3{
    font-size: 22px;
    line-height: 30px;
    font-weight: 600;
    display: inline-block;
  }
  .singlelist .newcomment .newTitle span{
    font-size: 14px;
    margin-left: 10px;
    font-weight: 300;
  }
  .singlelist .newcomment .newContent li{
    width: 100%;
    height: 100px;
    text-align: left;
  }
  .singlelist .newcomment .newContent li .image{
    display: inline-block;
    width: 42px;
    height: 42px;
    margin-right: 10px;
  }
  .singlelist .newcomment .newContent li .image img{
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
  .singlelist .newcomment .newContent li .user{
    display: inline-block;
    height: 100%;
    padding-top: 10px;
    width: 94%;
    border-bottom: 1px solid #f2f2f2;
  }
  .singlelist .newcomment .newContent li .user p{
    line-height: 25px;
    font-size: 14px;

  }
  .singlelist .newcomment .newContent li .user .id{
    font-weight: 600;
  }
  .singlelist .newcomment .newContent li .user .msg{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .singlelist .newcomment .newContent li .user .time{
    color: #999;
  }
</style>
