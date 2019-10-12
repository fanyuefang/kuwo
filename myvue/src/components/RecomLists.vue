

<template>
     <div class="recom-lists">
        <ul>
            <li v-for="(musiclist,index) in musiclists" v-if="index<=4">
               <div class="image">
                  <div>
                       <img :src="musiclist.img" alt="">
                  </div>
               </div>
               <a href="#">{{musiclist.name}}</a>
               <p v-if="musiclist.listencnt>=10000"><span>▷</span>{{(musiclist.listencnt/10000).toFixed(1)}}万</p>
               <p v-else><span>▷</span>{{musiclist.listencnt}}</p>
               <div class="cover">
                   <p><i class="fa fa-caret-right"></i></p>
               </div>
            </li>
        </ul>
    </div>
</template>

<script>
import bus from '../router/bus'
 export default {
    data:function(){
        return{
          musiclists:''
        }
    },
    mounted(){
        var that = this
        bus.$on('sendlists',function(val){
           that.musiclists = val
        })
    }
}
</script>

<style scoped>
.recom-lists{
  /* min-width:1180px;
  max-width:1300px; */
  margin: 0 auto;
  margin-top: 20px;
}
.recom-lists ul{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
 .recom-lists ul li{
   width: 248px;
   display: inline-block;
   vertical-align: top;
   text-align: left;
   position: relative;
}
.recom-lists ul li img{
    display: block;
    width: 248px;
    height: 248px;
}
.recom-lists ul li a{
    display: block;
    margin-top: 10px;
    color: #333;
}
.recom-lists ul li a:hover{
    font-weight: 700;
}
.recom-lists ul li p{
    margin-top: 10px;
    color: #999;
    font-size: 16px;
}
.recom-lists ul li .cover{
    position: absolute;
    width: 248px;
    height: 248px;
    top: 0;
    background: rgba(0,0,0,.2);
    z-index: 1000;
    display: none;
}
.recom-lists ul li .cover p{
    width: 70px;
    height: 70px;
    background: #fff;
    border-radius: 50%;
    margin: 80px auto;
    text-align: center
}
.recom-lists ul li .cover p i{
    color: #333;
    line-height: 70px;
    padding-left: 10px;
    font-size: 50px
}
.recom-lists ul li .image{
    width: 248px;
    height: 248px;
    overflow: hidden;
}
.recom-lists ul li:hover .cover{
    transition: all .2s ease-in-out;
    display: block;
}
.recom-lists ul li:hover .image>div img{
    transform: scale(1.1);
    transition: all .5s ;
}
</style>