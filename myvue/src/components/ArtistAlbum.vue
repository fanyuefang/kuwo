<template>
  <div class="artist-album">
    <div class="container">
        <ul>
            <li v-for="(album,index) in zhuanji" >
               <div class="image">
                  <div>
                       <img :src="album.pic" alt="">
                  </div>
               </div>
               <a href="#">{{album.album}}</a>
               <p><span>{{album.releaseDate}}</span></p>
               <div class="cover">
                   <p><i class="fa fa-caret-right"></i></p>
               </div>
            </li>
        </ul>

         <!-- 分页 -->
         <div class="pages">
          <el-pagination background layout="prev, pager, next" :total="20">
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

          }
      } ,
      props:['zhuanji']
}
</script>

<style scoped>

.artist-album .container ul{
    width: 100%;
}
.artist-album .container ul li{
   width: 254px;
   display: inline-block;
   vertical-align: top;
   text-align: left;
   position: relative;
}
.artist-album .container ul li img{
    display: block;
    width: 219px;
    height: 219px;
}
.artist-album .container ul li a{
    display: block;
    margin-top: 10px;
    color: #333;
    width: 219px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 18px;
}
.artist-album .container li a:hover{
    font-weight: 700;
}
.artist-album .container ul li p{
    font-size: 14px;
    color: #999;
    font-weight: 300;
    margin-top: 11px;
    margin-bottom: 26px;
}
.artist-album .container ul li .cover{
    position: absolute;
    width: 219px;
    height: 219px;
    top: 0;
    background: rgba(0,0,0,.2);
    z-index: 1000;
    display: none;
}
.artist-album .container ul li .cover p{
    height: 50px;
    width: 50px;
    background: #fff;
    border-radius: 50%;
    margin: 80px auto;
    text-align: center
}
.artist-album .container ul li .cover p i{
    color: #333;
    line-height: 50px;
    padding-left: 10px;
    font-size: 40px
}
.artist-album .container ul li .image{
    width: 219px;
    height: 219px;
    overflow: hidden;
}
.artist-album .container ul li:hover .cover{
    transition: all .2s ease-in-out;
    display: block;
}
.artist-album .container ul li:hover .image>div img{
    transform: scale(1.1);
    transition: all .5s ;
}
.artist-album .container .pages{
    margin-top: 50px;
}
.artist-album .container .linkimg{
   width: 100%;
   height: 120px;
   margin-top: 50px;
   background: url('https://h5static.kuwo.cn/upload/image/625fb48fb5c8d6847f4a5b7f9d285f73661ddf3c6d2281d60f9b4cacb80ab41e.jpg')
  }
</style>
