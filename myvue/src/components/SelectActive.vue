

<template>
    <div class="select-active">
       <div class="container">
          <h1 @scroll="play()">精选活动</h1>
          <ul >
              <li v-for="(pic,index) in piclists" >
                  <img :src="pic.pic" alt="">
              </li>
          </ul>
       </div>
    </div>
</template>

<script>
import axios from 'axios'
 export default {
    data:function(){
        return{
           piclists:[]
        }
    },
    mounted(){
        var that = this
        axios.get('/kuwo/api/www/activity/index/activityList?reqId=9cd2af70-da9b-11e9-ba7d-c3dd5a7c96b0')
        .then(function(val) {
        // console.log(val.data.data);
        that.piclists = val.data.data
      })
      .catch(function(err) {
        console.log(err);
      });
       
// document.body.onscroll = function(){
//      console.log(that.$el.offsetTop )
//  }

    },

    methods:{

    }
}
</script>

<style scoped>
.select-active{
  /* min-width:1180px;
  max-width:1300px; */
  margin: 0 auto;
  margin-top: 20px;
}
.select-active .container h1{
    color: #333;
    text-align: left;
    margin-top: 60px;
    font-size: 30px;
}
.select-active .container ul{
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.select-active .container ul li{
    width: 49%;
}
.select-active .container ul li img{
    width: 100%;
}
</style>