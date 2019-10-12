<template>
  <div class="singer-music">
    <div class="container">
        <!-- 内容 -->
         <div class="content">
          <ul class="lists">
            <li>序号</li>
            <li class="gequ">歌曲</li>
            <li class="zhuanji">专辑</li>
            <li class="time">时长</li>
          </ul>
          <ul class="music">
            <li v-for="(music,i) in musiclists" class="everymusic" :class="{active:((i+1)%2==0)}">
              <div class="oneli">
                <span >{{i+1}}</span>
                <img :src="music.pic" alt />
              </div>
              <div class="twoli">
                <span>{{music.name}}</span>
              </div>
              <div class="fourli">
                <span>{{music.album}}</span>
              </div>
              <div class="fiveli">
                <span>{{music.songTimeMinutes}}</span>
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
          <el-pagination background layout="prev, pager, next" :total="350">
          </el-pagination>
        </div>

        <div class="linkimg"></div>

    </div>
  </div>

</template>

<script>
export default {
      data:function(){
          return{
            count:0
          }
      } ,
      props:['musiclists'],
    }
</script>

<style scoped>
.singer-music .container .content{
    margin-top: 20px;
  }
 .singer-music .container .content .lists {
    width: 100%;
    height: 46px;
    background: rgb(250, 250, 250);
    position: relative;
  }
 .singer-music .container .content .lists li {
    width: 18%;
    display: inline-block;
    padding-left: 10px;
    height: 100%;
    line-height: 46px;
    text-align: left;
    color: #999;
    font-size: 14px;
    
  }
 .singer-music .container  .content .lists .gequ {
    width: 35%;
  }
 .singer-music .container  .content .lists .zhuanji {
    width:37%;
  }
 .singer-music .container .content .lists .time {
    width: 8%;
  }
 .singer-music .container .content .music .everymusic {
    width: 100%;
    height:74px;
    position: relative;
    padding: 10px 0;
    overflow: hidden;
  }
  .singer-music .container .content .music .everymusic.active{
    background:rgb(250, 250, 250)
  }
 .singer-music .container  .content .music .everymusic div {
    padding-left: 10px;
    height: 100%;
    line-height: 40px;
    text-align: left;
    float: left;
  }
 .singer-music  .content .music .everymusic .oneli {
    width: 20%;
    overflow: hidden;
  }
 .singer-music .content .music .everymusic .oneli span {
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
.singer-music .content .music .everymusic .oneli img {
    width: 54px;
    height: 54px;
    float: right;
    margin-right: 25px;
  }
 .singer-music .content .music .everymusic .twoli {
    width: 35%;
  }
 .singer-music .content .music .everymusic .twoli span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    color: #333;
    font-size: 14px;
    line-height: 22px;
    display: inline-block;
    width: 300px;
  }
  .singer-music .content .music .everymusic .fourli span{
    display: inline-block;
    width: 170px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    color: #666;
    font-size: 14px;
    line-height: 22px;
  }
.singer-music .content .music .everymusic .fiveli span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    color: #666;
    font-size: 14px;
    line-height: 22px;
  }
 .singer-music .content .music .everymusic .fourli {
    width: 37%;
  }
.singer-music.content .music .everymusic .fiveli {
    width: 9%;
  }
 .singer-music .content .music .everymusic .yinicon{
    position: absolute;
    width: 200px;
    left:745px;
  }
 .singer-music .content .music .everymusic .yinicon .icon{
    display: none;
    /* border: 1px solid green */
  }
 .singer-music .content .music .everymusic .yinicon .icon i{
    padding-left: 20px;
  }
 .singer-music .content .music .everymusic:hover .yinicon .icon {
    display: block;
  }
 .singer-music .content .music .everymusic:hover .fiveli span{
    display: none;
  }
 .singer-music .content .music .everymusic:hover{
    background: rgb(245, 245, 245)
  }
 .singer-music  .container .pages{
      margin-top: 50px;
  }
 .singer-music .container .linkimg{
   width: 100%;
   height: 120px;
   margin-top: 50px;
   background: url('https://h5static.kuwo.cn/upload/image/625fb48fb5c8d6847f4a5b7f9d285f73661ddf3c6d2281d60f9b4cacb80ab41e.jpg')
  }
</style>
