

<template>
  <div class="home-bang">
    <div class="container">
      <h1>排行榜</h1>
      <a href="#/paihang" style="color:#999" class="more" @click="zhuan(1)">更多     <i class="fa fa-angle-right"></i></a>
      <ul class="banglist">
        <li v-for="(bang,index) in musicbangs" class="libox">
          <img :src="bang.musicList[0].pic" alt class="image" />
          <div class="cover">
            <img :src="images[index].src" alt />
            <button @click="chu(true,bang.musicList[0].pic,bang.musicList[0].name)"><i class="fa fa-play"></i></button>
          </div>
          <ul class="musiclist">
            <li v-for="(music,ins) in bang.musicList" v-if="ins<=4">
              <div class="order-pic">
                <img :src="orderpics[ins].url" alt v-if="ins<=2" />
              </div>
              <div class="namelist">
                <p class="sing" v-if="ins<=2">{{music.name}}</p>
                <p class="sing" v-if="ins==3">
                  <span>4</span>
                  {{music.name}}
                </p>
                <p class="sing" v-if="ins==4">
                  <span>5</span>
                  {{music.name}}
                </p>
                <p class="singer">{{music.artist}}</p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
     
    </div>
     <div class="tanchu">

    </div>
  </div>
</template>

<script>
import axios from "axios";
import bus from '../router/bus'
export default {
  data: function() {
    return {
      musicbangs: [], //排行榜
      images: [
        {
          src:
            "https://h5static.kuwo.cn/upload/image/d8faf807ce667092ef29f8d62237bfbf3a1f127a6370664705722a67c8f9e23b.png"
        },
        {
          src:
            "https://h5static.kuwo.cn/upload/image/fb29b783091117318dbb5dac53f8a7deee25b34054f7d00fb91640f6106773c6.png"
        },
        {
          src:
            "https://h5static.kuwo.cn/upload/image/fcd292e95c97704678ae6a77191df0b915dd9b9657296ca20b9f19047f672055.png"
        },
        {
          src:
            "https://h5static.kuwo.cn/upload/image/8eef6e95406eb46f8ed544384bb457e20c8d66a33c3077c586e58537b620ecf5.png"
        },
        {
          src:
            "https://h5static.kuwo.cn/upload/image/838f7519b40479695a6f5a22923704600d2dfceb4e8d6ad0099b5a169ae0df03.png"
        }
      ],
      orderpics: [
        { url: "http://h5static.kuwo.cn/www/kw-www/img/df06fb1.png" },
        { url: "http://h5static.kuwo.cn/www/kw-www/img/d99e73e.png" },
        { url: "http://h5static.kuwo.cn/www/kw-www/img/8abbb65.png" }
      ]
    };
  },
  mounted() {
    var that = this;
    axios
      .get(
        "/kuwo/api/www/bang/index/bangList?reqId=85a46d81-dacc-11e9-bd1e-49bd763d36f0"
      )
      .then(function(val) {
        that.musicbangs = val.data.data;
        // console.log(that.musicbangs);
      })
      .catch(function(err) {
        console.log(err);
      });

      
  },

  methods:{
    zhuan:function (num) {
       bus.$emit('chuan',num)
    },

      chu:function(val,img,name){
      setTimeout(function(){
        bus.$emit('bollean',val,img,name)
      })
    }
  },
};
</script>

<style scoped>
.home-bang {
  /* min-width:1180px;
  max-width:1300px; */
  margin: 0 auto;
  margin-top: 20px;
}
.home-bang .container{
    position: relative;
}
.home-bang .container h1 {
  color: #333;
  text-align: left;
  margin-top: 60px;
  font-size: 30px;
}
.home-bang .container .more{
    display: inline-block;
    font-size: 13px;
    font-weight: 400;
    position: absolute;
    left: 140px;
    top: 22px;
}
.home-bang .container .banglist {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.home-bang .container .banglist .libox {
  width: 19%;
  height: 490px;
  position: relative;
  background: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.home-bang .container .banglist .libox .image {
  width: 100%;
  height: 144px;
}
.home-bang .container .banglist .libox .cover {
  width: 100%;
  height: 144px;
  position: absolute;
  top: 0;
  background: rgba(46, 32, 60, 0.7);
}
.home-bang .container .banglist .cover > img {
  width: 143px;
  height: 76px;
  margin-top: 30px;
}
.home-bang .container .banglist .libox .cover button{
  display: inline-block;
  background: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  color: #333;
  display: none;
  outline: none;
}
.home-bang .container .banglist .libox .cover:hover button{
  display: block;
  position: relative;
  left: 210px;
  bottom: 8px;
  border: none;
}
.container .banglist .libox .musiclist {
  margin-top: 30px;
}
.container .banglist .libox .musiclist li {
  width: 90%;
  height: 60px;
  overflow: hidden;
  margin-left: 15px;
}
.container .banglist .libox .musiclist li .order-pic {
  float: left;
  vertical-align: middle;
}
.container .banglist .libox .musiclist li .order-pic img {
  width: 33px;
  height: 33px;
}
.container .banglist .libox .musiclist li .namelist {
  float: right;
  width: 180px;
  height: 60px;
  padding-left: 12px;
  text-align: left;
  display: inline-block;
  vertical-align: middle;
}
.banglist .libox .musiclist li .namelist .sing {
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  color: rgb(44, 44, 44);
  font-size: 16px;
  font-weight: 500;
  text-align: left;
}
.banglist .libox .musiclist li .namelist .sing span {
  display: inline-block;
  width: 33px;
  height: 33px;
  font-size: 18px;
  font-weight: bold;
  position: absolute;
  left: 28px;
}
.banglist .libox .musiclist li .namelist .sing:hover{
    color: #000;
    font-weight: bold
}
.banglist .libox .musiclist li .namelist .singer {
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  text-overflow: ellipsis;
  margin-top: 4px;
  font-size: 14px;
  font-weight: 300;
  color: #999;
}
.banglist .libox .musiclist li .namelist .singer:hover{
    color: #000;
}
</style>
