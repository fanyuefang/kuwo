

<template>
    <div class="every-recom">
        <ul>
            <li v-for="(list,index) in lists" v-if="index<=4">
               <div class="image">
                  <div>
                       <img :src="list.img" alt="">
                  </div>
               </div>
               <a href="#">{{list.name}}</a>
               <p><span>▷</span>{{(list.listencnt/10000).toFixed(1)}}万</p>
               <div class="cover">
                   <p><i class="fa fa-caret-right"></i></p>
               </div>
            </li>
        </ul>
    </div>
</template>

<script>

import axios from 'axios'
 export default {
    data:function(){
        return{
            lists:[]
        }
    },
    mounted(){
        var that = this
     axios.get('/kuwo/api/www/rcm/index/playlist?loginUid=1736322280&loginSid=3250776612&reqId=ce74ca30-dc22-11e9-bdfb-6123fb03e3b8')
       .then(function(val) {
        that.lists = val.data.data.list;
        // console.log(that.lists);
      })
      .catch(function(err) {
        console.log(err);
      });
    }
}
</script>

<style scoped>
.every-recom{
  /* min-width:1180px;
  max-width:1300px; */
  margin: 0 auto;
  margin-top: 20px;
}
.every-recom ul{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
 .every-recom ul li{
   width: 248px;
   display: inline-block;
   vertical-align: top;
   text-align: left;
   position: relative;
}
.every-recom ul li img{
    display: block;
    width: 248px;
    height: 248px;
}
.every-recom ul li a{
    display: block;
    margin-top: 10px;
    color: #333;
}
.every-recom ul li a:hover{
    font-weight: 700;
}
.every-recom ul li p{
    margin-top: 10px;
    color: #999;
    font-size: 16px;
}
.every-recom ul li .cover{
    position: absolute;
    width: 248px;
    height: 248px;
    top: 0;
    background: rgba(0,0,0,.2);
    z-index: 1000;
    display: none;
}
.every-recom ul li .cover p{
    width: 70px;
    height: 70px;
    background: #fff;
    border-radius: 50%;
    margin: 80px auto;
    text-align: center
}
.every-recom ul li .cover p i{
    color: #333;
    line-height: 70px;
    padding-left: 10px;
    font-size: 50px
}
.every-recom ul li .image{
    width: 248px;
    height: 248px;
    overflow: hidden;
}
.every-recom ul li:hover .cover{
    transition: all .2s ease-in-out;
    display: block;
}
.every-recom ul li:hover .image>div img{
    transform: scale(1.1);
    transition: all .5s ;
}
</style>