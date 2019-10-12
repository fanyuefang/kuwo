<template>
    <div class="load-Page">
      <head-nav></head-nav>
      <main-nav></main-nav>
      <every-singer></every-singer>
      <foot-nav></foot-nav>
    </div>

</template>

<script>
import bus from '../router/bus'
import HeadNav from '../components/HeadNav' 
import MainNav from '../components/MainNav'
import EverySinger from '../components/EverySinger'
import FootNav from '../components/FootNav'
export default {
    data: function() {
       return {

           }
    },
     components:{
        HeadNav,  //头部导航
        MainNav,  //主导航
        EverySinger,  //内容
        FootNav,   //底部
     }

}
</script>

<style scoped>

</style>
