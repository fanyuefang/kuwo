<template>
    <div class="shop-detail">
        <div class="container">
            <div class="pinpai">
                <p class="name">品牌名称: <span>酷我</span></p>
                <p class="canshu">品牌参数:</p>
                <p><span>产品名称:酷我k1</span><span>品牌:酷我</span><span>型号:k1</span></p>
                <p><span>功能:支持音乐</span><span>耳机材质:塑料</span><span>声道:2</span></p>
                <p><span>蓝牙版本:4.1</span><span>颜色分类:炫动绿 深空灰 魅力红</span><span>套餐类型:官方标配</span></p>
                <p><span>生产企业:深圳市冠旭电子股份有限公司</span><span>使用方式:耳塞式</span><span>传输半径:10m</span></p>
                <p><span>是否单双耳:双边立体声</span><span>待机时间:12天</span><span>传输半径:10m</span></p>
                <p><span>保修期:12个月</span><span>耳机与播放设备连接方式:蓝牙连接</span></p>
            </div>
            <div class="firstimg">
                 <img src="http://img.alicdn.com/tfs/TB1tqFIxpzqK1RjSZFCXXbbxVXa-790-180.png" alt="">
            </div>
            <div class="change">
                <img src="../assets/change.png" alt="">
                <div class="only">
                    <h5>只换不修</h5>
                    <p>1.在天猫电器购买带有“只换不修”标识的商品后，商品主体出现质量问题，同时符合服务履行标准的，则商家承诺向买家提供一次免费更换全新商品的服务。</p>
                    <p>2.商家应履行只换不修服务但未履行的，商家需以发放天猫积分方式赔付消费者，发放天猫积分数量（个）=商品实际成交金额（元）*30（个/元），最高不超过5万个天猫积分。</p>
                </div>
            </div>
            <div class="secondimg">
                <img src="http://img.alicdn.com/tfs/TB1.CUdsY9YBuNjy0FgXXcxcXXa-1572-394.png" alt="">
                <img src="../assets/ping.png" alt="">
            </div>
            <shop-comment></shop-comment>
            <!-- 试用报告 -->
            <div class="try">
                <p class="tell"><span></span>试用报告</p>
                <img src="http://img.alicdn.com/tfs/TB1YeYKheP2gK0jSZFoXXauIVXa-750-388.jpg" alt="">
            </div>
            <!-- 服务详情 -->
            <div class="detail">
                <h4 class="servered">服务详情</h4>
                <div class="text">
                    <div class="title">
                        <h2>天猫电器城服务承诺</h2>
                    </div>
                    <div class="content">
                       <img src="../assets/change.png" alt="">
                     <div class="only">
                      <h5>只换不修</h5>
                      <p>1.在天猫电器购买带有“只换不修”标识的商品后，商品主体出现质量问题，同时符合服务履行标准的，则商家承诺向买家提供一次免费更换全新商品的服务。</p>
                      <p>2.商家应履行只换不修服务但未履行的，商家需以发放天猫积分方式赔付消费者，发放天猫积分数量（个）=商品实际成交金额（元）*30（个/元），最高不超过5万个天猫积分。</p>
                   </div>
                    </div>
                </div>
            </div>
            <!-- 店铺30天服务情况 -->
            <div class="dianpu">
               <h4>店铺30天服务情况</h4> 
               <img src="../assets/detail.png" alt="">
            </div>
            <!-- 猜你喜欢 -->
            <div class="like">
                <h4>猜你喜欢</h4>
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
        ShopComment,  //评价
    }

}
</script>

<style scoped>
.shop-detail .container {
    width: 788px;
    margin: 0 auto;
    font-size: 12px;
}
.shop-detail .container .pinpai{
    border: 1px solid #e6e6e6;
    border-top: none;
    margin-bottom: 10px;
    color: #666;
    text-align: left;
    padding-left: 15px;
    padding-bottom: 10px;
}
.container .pinpai .name,.canshu{
    line-height: 40px;
}
.container .pinpai  span{
    display: inline-block;
    width: 220px;
height: 18px;
overflow: hidden;
margin: 10px 15px 0 0;
line-height: 18px;
vertical-align: top;
white-space: nowrap;
text-overflow: ellipsis;
color: #666;
}
.container .pinpai .name span{
   color: #333;
   font-weight: 400;
}
.container .pinpai .canshu{
    color: #999;
    font-weight: 700;
}
.container .change{
    background: #f6f6f6;
    height: 170px;
}
.container .change .only{
    display: inline-block;
    width: 658px;
    height: 132px;
    vertical-align: middle;
    text-align: left;
    margin-left: 15px;
    margin-top: 15px;
    border-bottom: 1px solid #e5e5e5;
padding-bottom: 15px;
}
.container .change .only h5{
   line-height: 32px;
font-size: 14px;
font-weight: bolder;
color: #000;
}
.container .change .only  p{
    line-height: 21px;
    color: #666;
}
.container .secondimg{
    width: 100%;
}
.container .secondimg img{
    width: 100%;
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
.container .detail{
    margin-top: 10px;
}
.container .detail .servered{
    height: 30px;
line-height: 30px;
padding-left: 16px;
background-color: #FF0036;
color: #fff;
text-align: left;
}
.container .detail .text {
    background: #f6f6f6;
}
.container .detail .text .title{
    border-bottom: 1px solid #285fad;
text-align: center;
}
.container .detail .text .title h2{
line-height: 34px;
color: #124ca4;
border-bottom: 3px solid #124ca4;
width: 280px;
display: inline-block;
vertical-align: bottom;
padding: 12px 40px;
font-size: 12px;
}
.container .detail .text .content{
    height: 170px;
}
.container .detail .text .content img{
    margin-left: -30px;
} 
.container .detail .text  .content .only{
    display: inline-block;
    width: 658px;
    height: 132px;
    vertical-align: middle;
    text-align: left;
    margin-left: 15px;
    margin-top: 15px;
    border-bottom: 1px solid #e5e5e5;
padding-bottom: 15px;
}
.container .detail .text  .content .only h5{
   line-height: 32px;
font-size: 14px;
font-weight: bolder;
color: #000;
}
.container .detail .text  .content .only  p{
    line-height: 21px;
    color: #666;
}
.container .dianpu{
    margin-top: 10px;
}
.container .dianpu h4{
        height: 30px;
line-height: 30px;
padding-left: 16px;
background-color: #FF0036;
color: #fff;
text-align: left;
}
.container .like h4{
        height: 30px;
line-height: 30px;
padding-left: 16px;
background-color: #FF0036;
color: #fff;
text-align: left;
}
</style>
