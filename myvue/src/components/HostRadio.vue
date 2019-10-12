

<template>
  <div class="host-radio">
    <div class="container">
      <h1>主播电台</h1>
      <a href="#">
        <span>畅听更多精品电台&nbsp;&nbsp;&nbsp;&nbsp;↓</span>
      </a>
      <ul>
        <li v-for="(radio,index) in radiolists">
           <div class="image">
             <img :src="radio.pic" alt />
             <div class="cover">
               <p><i class="fa fa-play"></i></p>
             </div>
           </div>
            <div class="text">
              <p class="album">{{radio.album}}</p>
              <p class="artist">{{radio.artist}}</p>
            </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      radiolists: []
    };
  },
  mounted() {
    var that = this;
    axios
      .get(
        "/kuwo/api/www/radio/index/radioList?reqId=85a46d82-dacc-11e9-bd1e-49bd763d36f0"
      )
      .then(function(val) {
        that.radiolists = val.data.data.albumList;
        // console.log(val.data.data.albumList);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.host-radio {
  /* min-width:1180px;
  max-width:1300px; */
  margin: 0 auto;
  margin-top: 20px;
}
.host-radio .container {
  text-align: left;
}
.host-radio .container h1 {
  color: #333;
  text-align: left;
  margin-top: 60px;
  font-size: 30px;
  display: inline-block;
}
.host-radio .container a {
  display: inline-block;
  height: 32px;
  justify-content: center;
  background: #ffdf1f;
  border-radius: 18px;
  color: #333;
  text-align: center;
  margin-left: 30px;
}
.host-radio .container a span {
  display: block;
  line-height: 32px;
  padding-right: 9px;
  font-size: 14px;
  width: 170px;
}
.host-radio .container ul {
  margin-top: 10px;
}
.host-radio .container ul li {
  width: 33.33%;
  display: inline-block;
  margin-top: 20px;
}
.host-radio .container ul li .image{
  display: inline-block;
  position: relative;
}
.host-radio .container ul li .image img {
  width: 89px;
  height: 89px;
}
.host-radio .container ul li .text {
  display: inline-block;
  width: 75.66%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  padding-left: 15px;
}
.host-radio .container ul li .text p {
  height: 32px;
  font-size: 16px;
  line-height: 32px;
  font-weight: 400;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #333;
}
.host-radio .container ul li .text .album:hover {
  font-weight: bold;
  cursor: pointer;
}
.host-radio .container ul li .text .artist {
  color: #999;
  margin-bottom: 10px;
}
.host-radio .container ul li .text .artist:hover {
  color: #333;
  cursor: pointer;
}
.host-radio .container ul li .image .cover {
  width: 89px;
  height: 89px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.2);
  display: none;
}
.host-radio .container ul li .image .cover p{
  background: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  margin: 27px auto
}
.host-radio .container ul li .image .cover p i{
  font-size: 18px;
  color: #333;
}
.host-radio .container ul li .image:hover .cover {
  display: block;
}

</style>