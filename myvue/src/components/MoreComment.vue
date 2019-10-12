

<template>
    <div class="more-comment">
        <div class="container">
             <div class="pic">
                 <img src="../assets/ff.png" alt=""> 
             </div>
             <shop-comment></shop-comment>
            <!-- 试用报告 -->
              <div class="try">
                <p class="tell"><span></span>试用报告</p>
                <img src="http://img.alicdn.com/tfs/TB1YeYKheP2gK0jSZFoXXauIVXa-750-388.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import ShopComment from '../components/ShopComment'

export default {
    data: function() {
       return {

           }
    },
    components:{
        ShopComment,
    }

}
</script>

<style scoped>
.more-comment .container {
    width: 788px;
    margin: 0 auto;
    font-size: 12px;
}
.container .pic{
    border-left: 1px solid rgb(200,200,200);
    border-right: 1px solid rgb(200,200,200);
    height: 128px;
}
.container  .try{
    margin-top: 30px;
    text-align: left;
}
.container .try .tell{
   color: #000;
font-size: 18px;
font-weight: 700;
margin: 0;
padding: 10px 0;
}
.container .try .tell span{
    display: inline-block;
    vertical-align: middle;
    background: #AF874D;
    width: 5px;
    height: 25px;
    margin-right: 5px;
}
.container .try img{
    width: 100%;
}
</style>
