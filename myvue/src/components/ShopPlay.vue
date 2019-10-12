<template>
  <div class="shop-play">
    <div class="container">
      <!-- 左侧轮播图 -->
      <div class="left-play">
        <div class="big">
          <ul class="bigbox">
            <li v-for="(img,index) in imgs">
              <img :src="img.bigpic" alt />
            </li>
          </ul>

          <!-- 放大镜 -->
          <div class="magnifier"></div>
          <!-- 大图容器 -->
          <div class="big-img" >
            <!-- <img :src="image.fangdajing" alt=""> -->
          </div>

        </div>
        <ul class="smallbox">
          <li v-for="(img,ins) in imgs" v-on:mouseover="show(ins,img.fangdajing)">
            <img :src="img.smallpic" alt />
          </li>
        </ul>
        <p>
          <span class="lefttext">
            <i class="fa fa-star"></i> 收藏商品&nbsp;&nbsp;(253563)人气
          </span>
          <span class="righttext">举报</span>
        </p>
      </div>
      <!-- 右侧商品内容 -->
      <div class="right-thing">
        <div class="singleshop">
          <h4>酷我K1运动跑步蓝牙耳机挂脖无线双耳入耳式音乐耳塞通用磁吸开关</h4>
          <p class="redtext">送耳挂收纳包侧耳帽</p>
          <p class="price">
            <span class="jiage">价格</span>
            <span class="priceicon">
              ￥<span>203.00</span>
            </span>
          </p>
          <p class="yunfei">
            <span >运费</span>
            <span class="city">
              杭州
              <i class="fa fa-angle-down"></i> 上城区
              <i class="fa fa-angle-down"></i>
            </span>
          </p>
          <p class="pingjia">
            <span class="leiji">
              累计评价
              <span>43517</span>
            </span>
            <span class="jifen">
              送天猫积分
              <span>20</span>
            </span>
          </p>
          <div class="color">
            <span>颜色分类</span>
             <p>
                <img
              src="http://img.alicdn.com/imgextra/i3/1917216804/TB2xtfXdCmK.eBjSZPfXXce2pXa_!!1917216804.jpg_40x40q90.jpg"
              alt
            />
             </p>
           <p>
              <img
              src="http://img.alicdn.com/imgextra/i1/1917216804/TB22V7qcHaI.eBjy1XdXXcoqXXa_!!1917216804.jpg_40x40q90.jpg"
              alt
            />
           </p>
           <p>
              <img
              src="http://img.alicdn.com/imgextra/i3/1917216804/TB2CMK7dA5M.eBjSZFrXXXPgVXa_!!1917216804.jpg_40x40q90.jpg"
              alt
            />
           </p>
          </div>
          <p class="taocan">
            <span>套餐类型</span>
            <span class="guanfang">官方标配
              <span></span>
            </span>
          </p>
          <div class="number">
            <span class="num">数量</span>
            <span class="chushi">{{number}}</span>
            <p>
              <span class="up" @click="plus()"><i class="fa fa-angle-up"></i></span>
              <span @click="jian()"><i class="fa fa-angle-down"></i></span>
            </p>
            <span class="jian">件</span>
          </div>
          <p class="btn">
            <span class="btnone">立即购买</span>
            <span class="btntwo"><i class="fa fa-cart-plus"></i> 加入购物车</span>
          </p>
          <div class="serve">
            <span>服务承诺</span>
            <ul>
              <li>正品保证</li>
              <li>只换不修</li>
              <li>急速退款</li>
              <li>赠运费险</li>
              <li>七天无理由退换</li>
            </ul>
             <span class="payway" @click="showway()">
              支付方式
              <i class="fa fa-angle-down"></i>
              <div class="waybox">
                <ul class="way">
                <li class="one">
                   <span></span>信用卡
                </li>
                <li class="two">
                   <span></span>快捷支付
                </li>
                <li class="three">
                   <span></span>蚂蚁花呗
                </li>
                <li class="four">
                   <span></span>余额宝
                </li>
              </ul>
              </div>
            </span>
          </div>
          <p class="wenzi">检测到您当前处于非安全网络环境，部分商品信息可能不准确，请在交易支付页面再次确认商品价格信息。</p>
        </div>
      </div>
        <!-- 看了又看 -->
      <div class="rightlook">
          <p class="looked">看了又看</p>
          <!-- 初始显示的ul -->
          <ul>
              <li>
                <div class="pic">
                  <img src="http://img-tmdetail.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/O1CN01Nu6SEF208HOJp6qlN_!!0-item_pic.jpg_160x160q90.jpg" alt="">
                  <p>￥279.00元</p>
                </div>
                <p class="text">酷我小酷音乐盒 3.5蓝牙接收器 车用手机蓝牙无线连接音响家用MP3</p>
              </li>
              <li>
                <div class="pic">
                  <img src="http://img-tmdetail.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/O1CN01Fe09sh208HOHlDNVQ_!!0-item_pic.jpg_160x160q90.jpg" alt="">
                  <p>￥249.00元</p>
                </div>
                <p class="text">酷我k1漫威钢铁侠运动蓝牙耳机 无线跑步防汗双耳音乐入耳式磁吸</p>
              </li>
              <li>
                <div class="pic">
                  <img src="http://img-tmdetail.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/O1CN01X4ZgOx208HOEOTXC4_!!0-item_pic.jpg_160x160q90.jpg" alt="">
                  <p>￥279.00元</p>
                </div>
                <p class="text">酷我X1真无线蓝牙耳机 运动健身跑步防汗双耳挂耳式音乐入耳型隐形耳塞5.0</p>
              </li>
          </ul>
         <!-- 第二轮 -->
          <ul>
              <li>
                <div class="pic">
                  <img src="http://img-tmdetail.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/O1CN01fAncXO208HOKJxJAL_!!0-item_pic.jpg_160x160q90.jpg" alt="">
                  <p>￥199.00元</p>
                </div>
                <p class="text">酷我小酷音乐盒 3.5蓝牙接收器 车用手机蓝牙无线连接音响家用MP3</p>
              </li>
              <li>
                <div class="pic">
                  <img src="http://img-tmdetail.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/O1CN01208HIEZNGEXBmyP_!!0-item_pic.jpg_160x160q90.jpg" alt="">
                  <p>￥198.00元</p>
                </div>
                <p class="text">酷我k1漫威钢铁侠运动蓝牙耳机 无线跑步防汗双耳音乐入耳式磁吸</p>
              </li>
              <li>
                <div class="pic">
                  <img src="http://img-tmdetail.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/TB1EmoPPpXXXXbhXVXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg" alt="">
                  <p>￥99.00元</p>
                </div>
                <p class="text">酷我X1真无线蓝牙耳机 运动健身跑步防汗双耳挂耳式音乐入耳型隐形耳塞5.0</p>
              </li>
          </ul>
          <!-- 第三轮 -->
          <ul>
              <li>
                <div class="pic">
                  <img src="http://img-tmdetail.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/O1CN01epU6zR208HLLSuWTC_!!0-item_pic.jpg_160x160q90.jpg" alt="">
                  <p>￥10.00元</p>
                </div>
                <p class="text">酷我小酷音乐盒 3.5蓝牙接收器 车用手机蓝牙无线连接音响家用MP3</p>
              </li>
              <li>
                <div class="pic">
                  <img src="http://img-tmdetail.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/TB1gh0sSpXXXXabXpXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg" alt="">
                  <p>￥9.99元</p>
                </div>
                <p class="text">酷我k1漫威钢铁侠运动蓝牙耳机 无线跑步防汗双耳音乐入耳式磁吸</p>
              </li>
              <li>
                <div class="pic">
                  <img src="http://img-tmdetail.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/TB1L_SYMpXXXXauXFXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg" alt="">
                  <p>￥6.00元</p>
                </div>
                <p class="text">酷我X1真无线蓝牙耳机 运动健身跑步防汗双耳挂耳式音乐入耳型隐形耳塞5.0</p>
              </li>
          </ul>


          <p class="icons"> <i class="fa fa-angle-up" @click="prev()"></i> <i class="fa fa-angle-down" @click="next()"></i></p>
        </div>

        <div class="beiimage">
          <img src="http://img.alicdn.com/tps/i4/TB1xcK0GXXXXXXTXFXXa3f9HXXX-990-50.jpeg" alt="">
        </div>
    </div>
  </div>
</template>

<script>
import bus from '../router/bus'
export default {
  data: function() {
    return {
      imgs: [
        {
          bigpic:
            "https://img.alicdn.com/imgextra/i3/1917216804/O1CN01coq45h208HOLEqpFS_!!0-item_pic.jpg_430x430q90.jpg",
          smallpic:
            "http://img.alicdn.com/imgextra/i3/1917216804/O1CN01coq45h208HOLEqpFS_!!0-item_pic.jpg_60x60q90.jpg",
          fangdajing:'https://img.alicdn.com/imgextra/i3/1917216804/O1CN01coq45h208HOLEqpFS_!!0-item_pic.jpg'
        },
        {
          bigpic:
            "https://img.alicdn.com/imgextra/i1/1917216804/TB1MiEgXocKL1JjSZFzXXcfJXXa_!!0-item_pic.jpg_430x430q90.jpg",
          smallpic:
            "//img.alicdn.com/imgextra/i1/1917216804/TB1MiEgXocKL1JjSZFzXXcfJXXa_!!0-item_pic.jpg_60x60q90.jpg",
          fangdajing:'https://img.alicdn.com/imgextra/i1/1917216804/TB1MiEgXocKL1JjSZFzXXcfJXXa_!!0-item_pic.jpg'
        },
        {
          bigpic:
            "https://img.alicdn.com/imgextra/i3/1917216804/TB2_3yYaz3nyKJjSZFHXXaTCpXa_!!1917216804.jpg_430x430q90.jpg",
          smallpic:
            "http://img.alicdn.com/imgextra/i3/1917216804/TB2_3yYaz3nyKJjSZFHXXaTCpXa_!!1917216804.jpg_60x60q90.jpg",
          fangdajing:'https://img.alicdn.com/imgextra/i3/1917216804/TB2_3yYaz3nyKJjSZFHXXaTCpXa_!!1917216804.jpg'
        },
        {
          bigpic:
            "https://img.alicdn.com/imgextra/i4/1917216804/TB2tAdYafAPyuJjy0FcXXbCzpXa_!!1917216804.jpg_430x430q90.jpg",
          smallpic:
            "http://img.alicdn.com/imgextra/i4/1917216804/TB2tAdYafAPyuJjy0FcXXbCzpXa_!!1917216804.jpg_60x60q90.jpg",
          fangdajing:'https://img.alicdn.com/imgextra/i4/1917216804/TB2tAdYafAPyuJjy0FcXXbCzpXa_!!1917216804.jpg'
        },
        {
          bigpic:
            "https://img.alicdn.com/imgextra/i1/1917216804/TB2PF7WX3AjyKJjSsziXXbyxXXa_!!1917216804.jpg_430x430q90.jpg",
          smallpic:
            "http://img.alicdn.com/imgextra/i1/1917216804/TB2PF7WX3AjyKJjSsziXXbyxXXa_!!1917216804.jpg_60x60q90.jpg",
          fangdajing:'https://img.alicdn.com/imgextra/i1/1917216804/TB2PF7WX3AjyKJjSsziXXbyxXXa_!!1917216804.jpg'
        }
      ],
      num: 0,
      number:2,  //数量初始值
      showindex:0 ,  //初始显示的ul
      count:0   //支付方式的初始点击次数
    };
  },

  
  mounted() {
    this.show(0);
    this.prev();
    this.next();

// 鼠标悬浮/离开big时显示/隐藏放大镜和大图
    $('.big').hover(function(){
       $('.big .magnifier,.big-img.active ').show()
    },function(){
      $('.big .magnifier,.big-img.active ').hide()
    });

     $('.big').mousemove(function(ev){
       // pageX鼠标离文档的边缘的距离
        // offset().left元素离它父元素左侧的偏移量
        var left = ev.pageX - $(this).offset().left - $(".magnifier").width() / 2;
        var top = ev.pageY - $(this).offset().top - $(".magnifier").height() / 2;

         //判断左右边界
        if (left < 0) {
            left = 0;
        }
        if (left > $(this).width() - $(".magnifier").width()) {
            left = $(this).width() - $(".magnifier").width();
        }
        //判断上下边界
        if (top < 0) {
            top = 0;
        }
        if (top > $(this).height() - $(".magnifier").height()) {
            top = $(this).height() - $(".magnifier").height();
        }

        $(".magnifier").css({ left: left, top: top });

//处理大图，也就是放大镜放大后的图
         var d_w = 700 * left / 350;
        var d_h = 700 * top / 350;
        $(".big-img.active ").css("background-position", "-" + d_w + "px -" + d_h + "px");
     })
     

  },
  methods: {
    show: function(index,img) {
      $(".smallbox li").eq(index).addClass("on").siblings().removeClass("on");
      $(".big .bigbox").stop(true, true);
      $(".big .bigbox li").eq(index).addClass("play").siblings().removeClass("play");
      $(".big .big-img").eq(index).addClass("active").siblings().removeClass("active");
      $(".big .big-img").css({
        backgroundImage:"url('" +img + "')"
      })
    },
    
    // 点击数量增加
    plus:function(){
      this.number++
    },
    // 点击数量减小
    jian:function(){
      if(this.number>=1){
        this.number--;
      }
    },

    // 上一轮
    prev:function(){
     if(this.showindex<2){
        $('.container .rightlook ul').eq(this.showindex).addClass('show').siblings().removeClass('show');
      this.showindex++
     }
    },
    // 下一轮
    next:function(){
     if(this.showindex>=0){
        this.showindex--
      $('.container .rightlook ul').eq(this.showindex).addClass('show').siblings().removeClass('show');
     }
    },

    //支付当时显示
    showway:function(){
       this.count++
      if(this.count%2 !==0){
          $('.serve .payway .waybox').css({
            display: 'block',
          })
          $('.serve .payway i').removeClass()
          $('.serve .payway i').addClass('fa fa-angle-up')
        }else{
          $('.serve .payway .waybox').css({
            display: 'none',
          })
          $('.serve .payway i').addClass('fa fa-angle-down')
        }

      }
    

  },


};
</script>

<style scoped>
.shop-play .container {
  width: 1170px;
  margin: 0 auto;
  margin-top: 200px;
  overflow: hidden;
}
.shop-play .container .left-play {
  width: 430px;
  float: left;
  border: 1px solid red；
}
/* 大图 */
.shop-play .container .left-play .big {
  width: 430px;
  height: 430px;
  position: relative;
}
.shop-play .container .left-play .big .bigbox {
  position: relative;
  border: 1px solid #999;
}
.shop-play .container .left-play .big .bigbox li {
  position: absolute;
  display: none;
  transition: 0.5s;
}
.shop-play .container .left-play .big .bigbox li.play {
  display: block;
}
/* 放大镜 */
.shop-play .container .left-play .big .magnifier{
  width: 200px;
  height: 200px;
  background: url('../assets/scope.png') repeat;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 99;
  display: none;
  cursor: move;
}
/* 大图容器 */
.shop-play .container .left-play .big .big-img{
  width: 430px;
  height: 430px;
  overflow: hidden;
  position: absolute;
  left: 450px;
  top: 0;
  z-index: 99;
  display: none;
}
/* .shop-play .container .left-play .big .big-img img{
  position: absolute;
   display: none;
} */
/* .shop-play .container .left-play .big .big-img p{
  position: absolute; 
} */
/* 小图 */
.shop-play .container .left-play .smallbox {
  width: 420px;
  overflow: hidden;
}
.shop-play .container .left-play .smallbox li {
  width: 64px;
  height: 64px;
  float: left;
  margin: 20px 10px;
}
.shop-play .container .left-play .smallbox li.on {
  border: 2px solid #000;
}
.shop-play .container .left-play p {
  width: 100%;
  overflow: hidden;
  font-size: 12px;
  color: #999;
  margin-top: 20px;
}
.shop-play .container .left-play p .lefttext {
  float: left;
  margin-left: 5px;
}
.shop-play .container .left-play p .righttext {
  float: right;
  margin-right: 10px;
}
/* 右侧内容 */
.shop-play .container .right-thing {
  width: 315px;
  height: 600px;
  float: left;
   border: 1px solid red；
}
.shop-play .container .right-thing .singleshop {
  width: 530px;
  text-align: left;
  padding-left: 19px;
  padding-right: 10px;
  border-right: 1px solid #eceae8;
}
.container .right-thing .singleshop h4 {
  padding-bottom: 0.2em;
  line-height: 1;
  font-size: 16px;
  font-weight: 700;
  color: #000;
}
.container .right-thing .singleshop .redtext {
  font-size: 14px;
  color: #ff0036;
}
.container .right-thing .singleshop .price {
  background-color: #e9e9e9;
  background-repeat: no-repeat;
  position: relative;
  left: 0;
  z-index: -1;
  padding-bottom: 10px;
  padding-top: 10px;
  margin: 10px 0;
  margin-right: 20px;
  background-image: url("data:image/png;base64,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");
}
.container .right-thing .singleshop .price .jiage{
  color: #999;
font-size: 12px;
margin: 0 0 0 8px;
}
.container .right-thing .singleshop .price .priceicon{
  color: #FF0036;
font-size: 18px;
margin-left: 50px;
}
.container .right-thing .singleshop .price .priceicon span{
 font-size: 24px;
font-weight: bolder;
}
.container .right-thing .singleshop .yunfei{
color: #999;
font-size: 12px;
margin: 0 10px;
padding: 10px 0;
}
.container .right-thing .singleshop .city{
  color: #333;
margin-right: -12px;
padding-right: 12px;
margin-left: 35px;
}
.container .right-thing .singleshop .pingjia{
  border-top: 1px dotted #c9c9c9;
  border-bottom: 1px dotted #c9c9c9;
  margin: -1px 20px 0 0;
padding: 10px 0;
}
.container .right-thing .singleshop .pingjia .leiji,.jifen{
  display: inline-block;
line-height: 16px;
height: 16px;
color: #999;
font-size: 12px;
width: 46%;
text-align: center;
}
.container .right-thing .singleshop .pingjia .leiji{
  border-right: 1px solid #e5dfda;
}
.container .right-thing .singleshop .pingjia .leiji span{
color: #FF0036;
font-weight: 700;
margin-left: 3px;
}
.container .right-thing .singleshop .pingjia .jifen span{
 color: #280;
 font-weight: 700;
margin-left: 3px;
}
.container .right-thing .singleshop .color{
margin-top: 18px;
}
.container .right-thing .singleshop .color span{
  color: #838383;
  display: inline-block;
  width: 66px;
  font-size: 12px;
  vertical-align: middle;
  margin-right: 5px;
}
.container .right-thing .singleshop .color p{
  margin: 0 4px 4px 0;
  width: 45px !important;
height: 45px;
display: inline-block;
border: 1px solid #b8b7bd;
  vertical-align: middle;
}
.container .right-thing .singleshop .color p:hover{
  border: 2px solid red;
  cursor: pointer;
}
.container .right-thing .singleshop .taocan{
  font-size: 12px;
  padding: 6px 0;
  color: #838383;
}
.container .right-thing .singleshop .taocan .guanfang{
  border: 2px solid #FF0036;
  width: 71px;
  height: 32px;
  display: inline-block;
  text-align: center;
  line-height: 32px;
  margin-left: 25px;
  color: #000;
  position: relative;
}
.container .right-thing .singleshop .taocan .guanfang span{
  display: inline-block;
  position: absolute;
bottom: 0;
right: 0;
width: 12px;
height: 12px;
overflow: hidden;
text-indent: -99em;
background-repeat: no-repeat;
background-position: 0 0;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURUxpcf8AN////7f4NBoAAAABdFJOUwBA5thmAAAAMUlEQVQI103MAQ4AMAQEQev/j66i6YrEXIKIX9jY2NjYyDmhZnlCo5rdyWvebfYDVAcSmABbA7WD+QAAAABJRU5ErkJggg==')
}
.container .right-thing .singleshop .number{
 color: #999;
 font-size: 12px;
 margin: 10px 0;
}
.container .right-thing .singleshop .number .num{
  display: inline-block;
  width: 66px;
}
.container .right-thing .singleshop .number  .chushi{
  display: inline-block;
  font-size: 12px;
height: 26px;
border: 1px solid #a7a6ac;
width: 36px;
color: #666;
text-align: left;
line-height: 26px;
padding: 0 2px 0 3px;
margin-left: 10px;
}
.container .right-thing .singleshop  .number p{
  display: inline-block;
  vertical-align: top;
}
.container .right-thing .singleshop .number  p span{
  width: 16px;
height: 12px;
overflow: hidden;
border: 1px solid #a7a6ab;
display: block;
line-height: 12px;
font-size: 12px;
cursor: pointer;
text-align: center;
}
.container .right-thing .singleshop .number  p .up{
  margin-bottom: 3px;
}
.container .right-thing .singleshop .number .jian{
  padding-left: 5px;
}
.container .right-thing .singleshop .btn{
  text-align: center;
  margin: 25px 0;
}
.container .right-thing .singleshop .btn span{
 display: inline-block;
 height: 38px;
line-height: 38px;
text-align: center;
font-size: 16px;
}
.container .right-thing .singleshop .btn .btnone{
  margin-right: 0;
width: 178px;
background-color: #ffeded;
border: 1px solid #FF0036;
color: #FF0036;
}
.container .right-thing .singleshop .btn .btntwo{
  background-color: #ff0036;
border: 1px solid #ff0036;
color: #fff;
width: 178px;
}
.container .right-thing .singleshop .serve{
  font-size: 12px;
  color: #666;
  margin: 25px 0;
  margin-top: 40px;
  position: relative;
}
.container .right-thing .singleshop .serve span:nth-of-type(1){
  color: #999;
  display: inline-block;
  width: 66px;
}
.container .right-thing .singleshop .serve  ul{
  display: inline-block;
  overflow: hidden;
  width: 340px;
  vertical-align: top;
  margin-left: 10px
}
.container .right-thing .singleshop .serve  ul li{
  float: left;
  padding-right: 20px;
padding-bottom: 5px;
}
.right-thing .singleshop .serve .payway .waybox{
  width:168px;
border: 1px solid #e2e2e4;
  position: absolute;
  right: 0;
  top: 0;
  display: none
}
.right-thing .singleshop .serve .payway .way{
  width: 100%;
  background: #fff;
  margin-top: 25px;
  padding-bottom: 10px;
  position: relative;
  right: 10px;
}
.right-thing .singleshop .serve .payway .way li{
width: 82px;
color: #666;
padding-left: 2px;
}
.right-thing .singleshop .serve .payway .way span{
  width: 12px;
height: 12px;
display: inline-block;
}
.right-thing .singleshop .serve .payway .way .one span{
  background: url('https://img.alicdn.com/tps/i4/TB1gNG3JpXXXXbcXVXXAz6UFXXX-16-16.png') no-repeat center center;
}
.right-thing .singleshop .serve .payway .way .two span{
  background: url('https://gtms04.alicdn.com/tps/i4/TB1fnvXJpXXXXcTXpXXAz6UFXXX-16-16.png') no-repeat center center;
}
.right-thing .singleshop .serve .payway .way .three span{
  background: url('https://gtms03.alicdn.com/tps/i3/TB1rf58JpXXXXc5XFXXAz6UFXXX-16-16.png') no-repeat center center;
}
.right-thing .singleshop .serve .payway .way .four span{
  background: url('https://gtms02.alicdn.com/tps/i2/TB1HAHaJpXXXXX0XFXXAz6UFXXX-16-16.png') no-repeat center center;
}
.container .right-thing .singleshop .wenzi{
  font-size: 12px ;
  color: #999;
}
/* 最右侧轮播 */
.container .rightlook{
  width: 200px;
 float:right;
 font-size: 12px
}
.container .rightlook .looked{
  color: #999;
  padding-right: 25px;
  padding-bottom: 10px;
}
.container .rightlook ul{
  display: none
}
.container .rightlook ul.show{
  transition: .5s;
  display: block
}
.container .rightlook .pic {
  position: relative;
  width: 140px;
  height: 140px;
  margin-left: 15px;
}
.container .rightlook .pic img{
  width: 140px;
  height: 140px;
}
.container .rightlook .pic  p{
  width: 100%;
left: 0;
position: absolute;
line-height: 20px;
background-color: rgba(255,255,255,.8);
bottom: 0;
text-align: center;
}
.container .rightlook ul li .text{
  width: 175px;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
cursor: pointer;
padding-top: 3px;
padding-bottom: 10px;
}
.container .rightlook ul li .text:hover{
  color: #e22127;
  text-decoration: underline;
}
.container .rightlook .icons i{
  font-size: 30px;
  padding: 0 15px;
  color: #999;
}
.container .rightlook .icons i:hover{
  color: #666;
  cursor: pointer;
}
.container .beiimage{
  text-align: left;
}
.container .beiimage img{
  margin-top: 20px;
}
</style>
