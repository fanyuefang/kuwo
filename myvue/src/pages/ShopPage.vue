<template>
    <div class="shop-Page">
        <shop-head></shop-head>
        <shop-main></shop-main>
        <shop-play></shop-play>
        <shop-scroll></shop-scroll>
        <shop-aside></shop-aside>
    </div>
</template>

<script>
import ShopHead from '../components/ShopHead'
import ShopMain from '../components/ShopMain'
import ShopPlay from '../components/ShopPlay'
import ShopScroll from '../components/ShopScroll'
import ShopAside from '../components/ShopAside'
export default {
    data: function() {
       return {

           }
    },
    components:{
        ShopHead,  //头部导航
        ShopMain,   //主导航
        ShopPlay,   //商品
        ShopScroll,  //滚动详情
        ShopAside, //侧边栏
    }

}
</script>

<style scoped>

</style>
