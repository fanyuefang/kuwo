<template>
  <div class="music-mv">
    <div class="container">
       <ul class="content">
        <li v-for="(mv,ins) in mvs" >
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
        <el-pagination background layout="prev, pager, next" :total="140">
        </el-pagination>
      </div>

       <div class="linkimg">
      </div>
    </div>
  </div>

</template>

<script>
export default {
     data:function(){
         return{

         }
     },
     props:['mvs']   
}
</script>

<style scoped>
.music-mv .container {
    width: 100%;
    overflow: hidden;
  }
.music-mv .container .content{
    width: 100%;
  }
.music-mv .container .content li{
    width: 25%;
    display: inline-block;
    vertical-align: top;
    text-align: left;
    position: relative;
    margin-bottom: 20px;
  }
.music-mv .container .content li .image img{
    display: block;
    width: 238px;
    height: 155px;
  }
.music-mv .container .content li a{
    display: block;
    margin-top: 10px;
    color: #333;
    font-size: 18px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
.music-mv .container .content li a:hover{
    font-weight: 600;
  }
.music-mv .container .content li p{
    margin-top: 10px;
    color: #999;
    font-size: 14px;
  }
.music-mv .container .content li p:hover{
    color: #000;
    cursor: pointer;
  }
.music-mv .container .content li .cover{
    position: absolute;
    width: 248px;
    height: 155px;
    top: 0;
    background: rgba(0,0,0,.2);
    z-index: 1000;
    display: none;
  }
.music-mv .container .content li .cover p{
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 50%;
    margin: 50px auto;
    text-align: center;
  }
.music-mv .container .content li .cover p i{
    color: #333;
    line-height: 50px;
    padding-left: 5px;
    font-size: 40px
  }
.music-mv .container .content li .image{
    width: 248px;
    height: 155px;
    overflow: hidden;
    position: relative;
  }
.music-mv .container .content li .image .text{
    position: absolute;
    bottom: 2px;
    color: hsla(0,0%,100%,.8);
    font-size: 13px;
    font-weight: 400;
    width: 100%;
  }
.music-mv .container .content li .image .text .play{
    padding-left: 5px;
  }
.music-mv .container .content li .image .text .time{
    position: absolute;
    right:15px;
  }
.music-mv .container .content li:hover .cover{
    transition: all .2s ease-in-out;
    display: block;
  }
.music-mv .container .content li:hover .image>div img{
    transform: scale(1.1);
    transition: all .7s ;
  }
  .music-mv .container .pages{
      margin-top: 40px;
  }
  .music-mv .container .linkimg{
   width: 100%;
   height: 120px;
   margin-top: 50px;
   background: url('https://h5static.kuwo.cn/upload/image/625fb48fb5c8d6847f4a5b7f9d285f73661ddf3c6d2281d60f9b4cacb80ab41e.jpg')
  }
</style>
