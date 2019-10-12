<template>
    <div class="shop-foot">
        <div class="container">
            <!-- 图片 -->
            <ul class="images">
                <li v-for="(img,index) in imgs">
                  <img :src="img.pic" alt="">
                </li>
            </ul>
            <!-- 文字 -->
            <div class="yellow">
                <div class="one"> 
                    <span class="safe">安全提示:</span>
                    <div>
                       <p class="more">请勿随意接收任何来源不明的文件，请勿随意点击任何来源不明的链接。涉及资金往来的事项请务必仔细核对资金往来信息。 天猫不会以订单有问题，让您提供任何银行卡、密码、手机验证码！遇到可疑情况可在钱盾“诈骗举报”中进行举报,<span>安全推荐</span></p>
                       <p class="tuijian">推荐安全软件: <span class="money"></span><a>钱盾</a><span class="uc"></span><a>UC浏览器</a></p>
                    </div>
                </div>
                <div class="two">
                    <span class="safe">内容声明:</span>
                    <p>天猫为第三方交易平台及互联网信息服务提供者，天猫（含网站、客户端等）所展示的商品/服务的标题、价格、详情等信息内容系由店铺经营者发布，其真实性、准确性和合法性均由店铺经营者负责。天猫提醒用户购买商品/服务前注意谨慎核实。如用户对商品/服务的标题、价格、详情等任何信息有任何疑问的，请在购买前通过阿里旺旺与店铺经营者沟通确认；天猫存在海量店铺，如用户发现店铺内有任何违法/侵权信息，请立即向天猫举报并提供有效线索。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import bus from '../router/bus'

export default {
    data: function() {
       return {
            imgs:[
                {pic:'//img.alicdn.com/bao/uploaded/O1CN01DI1Aho208HOFLqBCh_!!0-item_pic.jpg_250x250.jpg'},
                {pic:'//img.alicdn.com/bao/uploaded/O1CN01X4ZgOx208HOEOTXC4_!!0-item_pic.jpg_250x250.jpg'},
                {pic:'//img.alicdn.com/bao/uploaded/O1CN01ldu0ah208HOJ4ZTbR_!!0-item_pic.jpg_250x250.jpg'},
                {pic:'//img.alicdn.com/bao/uploaded/O1CN01fAncXO208HOKJxJAL_!!0-item_pic.jpg_250x250.jpg'},
                {pic:'//img.alicdn.com/bao/uploaded/O1CN01Fe09sh208HOHlDNVQ_!!0-item_pic.jpg_250x250.jpg'},
                {pic:'//img.alicdn.com/bao/uploaded/TB1ETooLXXXXXXyaXXXXXXXXXXX_!!0-item_pic.jpg_250x250.jpg'},
                {pic:'//img.alicdn.com/bao/uploaded/TB1gh0sSpXXXXabXpXXXXXXXXXX_!!0-item_pic.jpg_250x250.jpg'},
                {pic:'//img.alicdn.com/bao/uploaded/O1CN01epU6zR208HLLSuWTC_!!0-item_pic.jpg_250x250.jpg'},
                {pic:'//img.alicdn.com/bao/uploaded/TB1L_SYMpXXXXauXFXXXXXXXXXX_!!0-item_pic.jpg_250x250.jpg'},
                 {pic:'//img.alicdn.com/bao/uploaded/O1CN01Nu6SEF208HOJp6qlN_!!0-item_pic.jpg_250x250.jpg'},
                {pic:'//img.alicdn.com/bao/uploaded/O1CN01208HIEZNGEXBmyP_!!0-item_pic.jpg_250x250.jpg'},
                {pic:'//img.alicdn.com/bao/uploaded/O1CN013onI5b208HOLFQXVh_!!0-item_pic.jpg_250x250.jpg'}

            ],

           }
    },
    
   

}
</script>

<style scoped>
.shop-foot .container{
    width:788px;
 margin: 0 auto;
}
.container .images {
background: #f6f6f6;
padding-top: 15px;
padding-bottom: 20px;
}
.container .images li{
    width: 222px;
    height: 222px;
    display: inline-block;
    border-bottom-color: #d5d5d5;
box-shadow: 0 1px 2px #eee;
vertical-align: middle;
margin: 10px;
}
.container .images li img{
    width: 220px;
    height: 220px;
}
.container .yellow{
    margin-top: 20px;
padding: 10px;
background-color: #ffffe5;
border: 1px solid #ffcc7f;
font-size: 12px;
}
.container .yellow .one {
    margin-bottom: 10px;
padding-bottom: 10px;
border-bottom: 1px solid #ffe8ca;
}
.container .yellow .one div{
    display: inline-block;
    vertical-align: top;
    width: 700px;
    line-height: 2;
    text-align: left;
    color: #404040;
}
.container .yellow .one div .more span{
    color: #35a;
}
.container .yellow .safe{
/* width: 68px; */
font-weight: 700;
text-align: left;
color: #404040;
display: inline-block;
vertical-align: top;
line-height: 21px;
padding-right: 5px;
}
.container .yellow .one div .tuijian .money{
    display: inline-block;
    height: 16px;
    width: 16px;
    line-height: 16px;
    background: url('https://img-tmdetail.alicdn.com/tfscom/TB19ShZQFXXXXboapXXXXXXXXXX.png')
}
.container .yellow .one div .tuijian .uc{
     display: inline-block;
    height: 16px;
    width: 16px;
    line-height: 16px;
    background: url('https://img-tmdetail.alicdn.com/tps/i4/TB1GK2oGFXXXXX1XFXXwu0bFXXX.png_16x16.jpg')
}
.container .yellow .one div .tuijian a{
    margin: 4px 10px 0 0;
color: #999;
padding-left: 3px;
height: 16px;
line-height: 16px;
display: inline-block;
}
.container .yellow .two p{
     display: inline-block;
    vertical-align: top;
    width: 700px;
    line-height: 2;
    text-align: left;
    color: #404040;
}
/* 列表 */
.shop-foot .line{
    width: 100%;
    height: 600px;
    margin-top: 10px;
    border: 1px solid red;
}
.shop-foot .line ul{
    width: 1190px;
    height: 400px;;
    margin: 0 auto;
    border: 1px solid red;
}
</style>
