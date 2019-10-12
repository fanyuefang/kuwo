

<template>
  <div class="main-nav">
    <div class="container">
      <div class="link">
        <a href="#/" @click="aclick(0)" class="active">推荐</a>
        <a href="#/paihang" @click="aclick(1)">排行榜</a>
        <a href="#/singer" @click="aclick(2)">歌手</a>
        <a href="#/musics" @click="aclick(3)">歌单</a>
        <a href="#/mvs" @click="aclick(4)">MV</a>
      </div>
    </div>
  </div>
</template>

<script>
  import bus from '../router/bus'
export default {
  data: function() {
    return {
      index:0,
    };
  },
  mounted(){
    var that =  this
      bus.$on('chuan',function (num) {
        that.index = num
        // console.log(that.index)
        setTimeout(function () {
          $(".container .link a").eq(that.index).addClass("active").siblings().removeClass("active");
        })
      })
  },
  methods: {
    aclick: function(index) {
     setTimeout(function () {
       $(".container .link a").eq(index).addClass("active").siblings().removeClass("active");
     },10)
  }
}
}
</script>

<style scoped>
.main-nav .container {
  /* min-width:72%;
  max-width: 85%; */
  width: 1324px;
  height: 54px;
  /* display: inline-block; */
   margin: 0 auto;
  overflow: hidden;
  /*position: relative;*/
  /*left:15%*/
}
.main-nav .container .link {
  height: 54px;
  overflow: hidden;
  line-height: 54px;
  margin-left: 200px;
}
.main-nav .container .link a {
  float: left;
  display: inline-block;
  height: 20px;
  line-height: 20px;
  margin-right: 34px;
  font-weight: 300;
  color: #333;
  font-size: 15px;
  margin-top: 20px;
}
.main-nav .container .link a:hover{
  color: black;
}
.main-nav .container .link a.active {
  background: #ffe443;
  font-weight: bold;
}
</style>
