

<template>
  <div class="home-aside">
      <div class="container">
         <p>反馈</p>
         <p class="onep"><i class="fa fa-windows"></i></p>
         <p class="twop"><i class="fa fa-android"></i></p>
         <p class="threep"><i class="fa fa-apple"></i></p>
         <p><i class="fa fa-angle-up" @click="totop()"></i></p>
      </div>
  </div>
</template>

<script>

export default {
  data: function() {
    return {

    }
  },
  methods:{
      totop:function(){
          $('html').animate({
              scrollTop:0
          },300)
      }
  }


}
</script>

<style scoped>
.home-aside .container p{
   width: 52px;
height: 52px;
text-align: center;
line-height: 52px;
background: #f5f5f5;
margin-bottom: 8px;
cursor: pointer; 
font-size: 17px;
font-weight: 600;
color: #666;
}
.home-aside .container p i{
    font-size: 25px;
color: #666;
}
.home-aside .container .onep:hover i{
    color: #0ae;
}
.home-aside .container .twop:hover i{
    color: #13ba82;
}
.home-aside .container .threep:hover i{
    color: #333;
}
</style>
