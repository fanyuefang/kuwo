<template>
    <div class="shop-footzi">
        <div class="container">
             <!-- 底部列表 -->
        <div class="line">
           <div class=maincontent>
               <img class="linepic" src="http://img.alicdn.com/tfs/TB14dANRXXXXXbdXXXXXXXXXXXX-1190-100.jpg" alt="">
               <ul>
                   <li>
                      <h4>购物指南</h4> 
                      <p>免费注册</p>
                      <p>开通支付宝</p>
                      <p>支付宝充值</p>
                   </li>
                   <li>
                       <h4>天猫保障</h4>
                       <p>发票保障</p>
                       <p>售后规则</p>
                       <p>缺货赔付</p>
                   </li>
                    <li>
                       <h4>支付方式</h4>
                       <p>快捷支付</p>
                       <p>信用卡</p>
                       <p>余额宝</p>
                       <p>蚂蚁花呗</p>
                       <p>货到付款</p>
                   </li>
                    <li>
                       <h4>商家服务</h4>
                       <p>天猫规则</p>
                       <p>商家入驻</p>
                       <p>商家中心</p>
                       <p>天猫智库</p>
                       <p>物流服务</p>
                       <p>喵言喵语</p>
                       <p>运营服务</p>
                   </li>
                   <li>
                       <h4>手机天猫</h4>
                       <img src="http://img.alicdn.com/tfscom/TB14MWoNhjaK1RjSZFAwu2dLFXa.png" alt="">
                   </li>
               </ul>
           </div>
        </div>
        <!--最底部文字  -->
        <div class="foottext">
        <div class="footlogo"></div>
          <div class="textcontent">
           <p class="onep">关于天猫 帮助中心 开放平台 诚聘英才 联系我们 网站合作 法律声明 隐私权政策 知识产权 廉正举报</p>
           <p class="twop">阿里巴巴集团 | 淘宝网 | 天猫 | 聚划算 | 全球速卖通 | 阿里巴巴国际交易市场| 1688 | 阿里妈妈 | 飞猪 | 阿里云计算 | AliOS | 阿里通信 | 万网 | 高德 | UC | 友盟 | 虾米 | 钉钉 | 支付宝</p>
           <div class="huitext">
              <p><span>增值电信业务经营许可证： 浙B2-20110446</span><span>市场名称登记证：工商网市字3301004119号</span><span>出版物网络交易平台服务经营备案证： 新出发浙备字第001号 </span></p>
              <p><span>互联网违法和不良信息举报电话：0571-81683755 blxxjb@alibaba-inc.com</span><span>互联网药品信息服务资质证书编号：浙-（经营性）-2017-0005</span><span><img src="https://img.alicdn.com/tps/TB1yEqRPXXXXXXPXpXXXXXXXXXX-20-20.png" alt="">  浙公网安备 33010002000120号</span></p>
              <p><span>医疗器械网络交易服务第三方平台备案：（浙）网械平台备字[2018]第00002号</span><span>互联网药品交易服务资格证书：国A20150001</span></p>
              <p><span>浙江省网络食品销售第三方平台提供者备案：浙网食A33010002</span><span>12318举报</span></p>
              <p>© 2003-2019 TMALL.COM 版权所有</p>
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
.shop-footzi .container .line{
    width: 100%;
    margin-top: 10px;
    border-top: 1px solid #ededed;
} 
.shop-footzi .container  .line .maincontent{
    width: 1190px;
    margin: 0 auto;
}
.shop-footzi .container  .line .maincontent .linepic{
     margin: 40px 0;
 }
.container  .line .maincontent ul{
        border-top: 1px solid #ededed;
        margin-bottom: 15px;
 }
 .container .line .maincontent ul li{
     display: inline-block;
    width: 186px;
    /* padding-left: 52px; */
    text-align: left;
    vertical-align: top;
    /* padding-right: 15px; */
    margin-right: 30px;
    margin-top: 20px;
 }
 .container .line .maincontent ul li h4{
    color: #646464;
    font-size: 16px;
    font-weight: 700;
    line-height: 30px;
    text-align: left;
 }
 .container  .line .maincontent ul li p{
    width: 100px;
    overflow: hidden;
    height: 20px;
    line-height: 20px;
    color: #8b8b8b;
    font-size: 12px;
    text-align: left;
  }
 .container  .line .maincontent ul li p:hover{
    text-decoration: underline;
    cursor: pointer;
  }
 .container   .line .maincontent ul li img{
    width: 105px;
    height: 105px;
   }
.container  .foottext{
    width: 100%;
    border-top: 2px solid #FF0036;
    background: #000;
    text-align: left;
    min-height: 177px;
    position: relative;
}
.container .foottext .footlogo{
    background-image: url('https://img.alicdn.com/tfs/TB1dl28RXXXXXbzaFXXXXXXXXXX-136-50.png');
    background-repeat: no-repeat;
    background-size: 68px 25px;
    width: 73px;
    height: 26px;
    position: absolute;
    top: -27px;
    left:406px;
}
.container  .foottext .textcontent{
    width: 1190px;
    margin: 0 auto;
    font-size: 12px;
    padding-bottom: 15px;
}
.container  .foottext .textcontent .onep,.twop{
    color: #fff;
    line-height: 25px;
        padding: 5px 0;
}
.container  .foottext .textcontent .huitext{
        color: #a4a4a4;
        line-height: 20px;
}
.container .foottext .textcontent .huitext p span{
    margin-right: 65px;
}
</style>
