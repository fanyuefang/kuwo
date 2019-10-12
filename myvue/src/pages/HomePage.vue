

<template>
  <div class="home">
    <head-nav></head-nav>
    <main-nav></main-nav>
    <main-content></main-content>
    <div class="musicplay">
      <music-play :img="img" :name="name"></music-play>
    </div>
    <foot-nav></foot-nav>
    <div class="aside">
      <home-aside></home-aside>
    </div>
  </div>
</template>

<script>
import bus from "../router/bus";
import HeadNav from "../components/HeadNav";
import MainNav from "../components/MainNav";
import FootNav from "../components/FootNav";
import MainContent from "../components/MainConten";
import MusicPlay from "../components/MusicPlay";
import HomeAside from '../components/HomeAside'

export default {
  data: function() {
    return {
      show: false,
      img:'',
      name:''
    };
  },
  components: {
    HeadNav, //头部导航
    MainNav, //主导航
    FootNav, //底部文字
    MainContent, //首页内容
    MusicPlay, //音乐播放器
    HomeAside  //侧边栏
  },
  mounted() {
    var that = this;
    bus.$on("bollean", function(val,img,name) {
      that.show = val;
      that.img = img;
      that.name = name;
      if (that.show) {
      $(".home .musicplay").animate(
        {
          height: 80,
          opacity: 1
        },1000,function(){
         $(".home .musicplay").animate({
            height: 80,
            opacity: 1
        },5000,function(){
        $(".home .musicplay").css({
                  height:10,
                  opacity:0 
              }) 
           })
        });
    }

    });

// 滚动事件
// console.log(this.$el)
     var that = this
      var html = document.querySelector('html')
      var body = document.querySelector('body')
       body.onscroll=function(){
            // console.log(html.scrollTop)
            if(html.scrollTop>500){
              $('.aside').css({
                opacity:1
              })
            }else{
                 $('.aside').css({
                opacity:0
              })
            }
        }

  },

};
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
}
.home .musicplay {
  width: 100%;
  height: 30px;
  opacity: 0;
  position: fixed;
  bottom: 0;
  background: #fff;
  cursor: pointer;
  box-shadow: 0 0 20px 0 rgba(0,0,0,.1);
}
.home .aside{
  position:fixed;
  bottom:15%;
  right: 2%;
  width: 60px;
  height:300px;
  opacity:0;
}
</style>
