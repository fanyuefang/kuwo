<template>
    <div class="help-detail">
        <div class="container">
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
                      <p>1. 在天猫电器购买带有“只换不修”标识的商品后，商品主体出现国家“三包”范围内或厂家保修服务范围内的质量问题（指“非人为损坏”问题），同时符合服务履行标准的，则商家承诺向买家提供一次免费更换全新商品的服务。其中，商品主体与配件的区分以商品说明书为准。</p>
                      <p>2. 商家应履行只换不修服务但未履行的，商家需以发放天猫积分方式赔付消费者，发放天猫积分数量（个）=商品实际成交金额（元）*30（个/元），最高不超过5万个天猫积分。商家向买家发放天猫积分后，该未履行只换不修服务的情形，不再属于《天猫规则》中违背承诺的投诉受理范围。</p>
                   </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
       return {

           }
    },

}
</script>

<style scoped>
.help-detail .container {
    width: 788px;
    margin: 0 auto;
    font-size: 12px;
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
    height: 205px;
}
.container .detail .text .content img{
    margin-left: -30px;
} 
.container .detail .text  .content .only{
    display: inline-block;
    width: 658px;
    height: 171px;
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
</style>
