<template>
    <div class="music-play">
      <div class="container">
         <img :src="img" alt="">
         <div class="play">
             <p>
                 <span>{{name}}</span>
             </p>
            <el-slider v-model="value1"></el-slider>
         </div>
         <div class="control">
            <span><i class="fa fa-step-backward"></i></span>
            <span class="circle" @click="play()"><i class="fa fa-play-circle"></i></span>
            <span><i class="fa fa-step-forward"></i></span>
         </div>
         <div class="icons">
            <span class="heart"><i class="fa fa-heart-o"></i></span>
            <span><i class="fa fa-download-o"></i></span>
            <span><i class="fa fa-commenting-o"></i></span>
            <span><i class="fa fa-refresh"></i></span>
            <span><i class="fa fa-sun-o"></i></span>
            <span class="shop">商品<i class="fa fa-angle-down"></i></span>
            <span><i class="fa fa-volume-up"></i></span>
            <div class="sound">
                <el-slider v-model="value2"></el-slider>
            </div>
         </div>
          <audio  src="/music/江南.mp3"  ref="audios"></audio>
      </div>
    </div>

</template>

<script>

export default {
    data: function() {
       return {
          value1: 0,
          value2:50,
          newId:''
           }
    },
    props:['img','name'],
    mounted(){
    //    console.log(this.$refs.audios)
    },
    methods:{
        play:function(){
          var audio= this.$refs.audios
        //   console.log(audio.src);

       audio.play()
        }
    }

}
</script>

<style scoped>
.music-play .container{
    width: 1324px;
    margin: 0 auto;
    overflow: hidden;
    height: 80px;
    position: relative;
}
.music-play .container img{
    width: 80px;
    height: 100%;
    float: left;
}
.music-play .container .play{
    position: absolute;
    left: 100px;
    top:24px;
}
.music-play .container .play p{
    text-align: left;
}
.music-play .container .play p span{
    color: #333;
    font-size: 14px;
}
.music-play .container .control{
    width: 164px;
    height: 40px;
    display: inline-block;
    position: absolute;
    top: 42px;
    left: 530px;
}
.music-play .container .control span{
    display: inline-block;
    width: 28px;
    text-align: center;
    cursor: pointer;
    margin: 0 10px;
    color: #333;
}
.music-play .container .control span i{
    font-size: 18px;
}
.music-play .container .control .circle i{
    font-size: 24px;
}
.music-play .container .icons .sound{
   display: inline-block;
   vertical-align: middle;
}
.music-play .container .icons{
    width: 460px;
    position: absolute;
    left: 754px;
    top: 40px;
}
.music-play .container .icons span {
    font-size: 18px;
    color: #666;
    cursor: pointer;
    margin-left: 20px;
}
.music-play .container .icons span .heart{
   margin-left: 0;
}
.music-play .container .icons .shop{
    font-size: 14px;
    display: inline-block;
    width: 58px;
    height: 24px;
    line-height: 24px;
    border-radius: 13px;
    margin-left: 31px;
    font-size: 12px;
    border: 1px solid #666;
}
</style>
