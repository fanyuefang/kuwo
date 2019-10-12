<template>
    <div class="shop-main">
        <div class="container">
           <ul class="left">
              <li class="oneli">
                 <img src="https://img.alicdn.com/tfs/TB11ojWRXXXXXafaFXXXXXXXXXX-190-27.png" alt=""> 
              </li>
              <li class="twoli" v-on:mouseover="kuwohua()" v-on:mouseleave="kuwoli()">
                  <!-- 二级导航 -->
                  <div class="kuwo" >
                     <div class="top">
                        <div class="topleft">
                            <p class="yi">店铺动态评分</p>
                            <p>描述相符:  <span>4.8</span></p>
                            <p>服务态度:  <span>4.9</span></p>
                            <p>物流服务:  <span>4.8</span></p>
                        </div>
                        <div class="topright">
                            <p class="yi">与同行业相比</p>
                            <p> <i class="fa fa-long-arrow-up"></i> 高于   <span>12.39%</span></p>
                            <p> <i class="fa fa-long-arrow-up"></i> 高于   <span>37.01%</span></p>
                            <p> <i class="fa fa-long-arrow-up"></i> 高于   <span>28.83%</span></p>
                        </div>
                     </div>
                     <div class="bottom">
                         <p class="yi">店铺服务</p>
                         <p>掌&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;柜:酷我旗舰店</p>
                         <p class="kefu">客&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;服: <i class="fa fa-github-alt"></i></p>
                         <p class="time">开店时长: <span class="big"> <span class="five">5</span>天猫5年店</span></p>
                         <p class="local">所&nbsp;&nbsp;在&nbsp;&nbsp;地:&nbsp;&nbsp;北京,北京市</p>
                         <p class="qiye">企业资质: <img src="http://assets.alicdn.com/app/marketing/xfile/national_emblem_light.png" alt=""></p>
                     </div>
                     <div class="btn">
                        <span class="home"><i class="fa fa-home"></i>进店逛逛</span>
                        <span class="star"><i class="fa fa-star"></i>收藏本店</span>
                     </div>
                  </div>
                  <div class="logo">
                     <p class="qijian">酷我旗舰店</p>
                     <p class="pinpai">
                         <span class="wenzi">品牌宜销</span>
                         <span><i class="fa fa-github-alt"></i></span>
                     </p>
                  </div>
                  <div class="text">
                      <div>
                          <p>描述</p>
                          <span>4.8<i class="fa fa-long-arrow-up"></i></span>
                      </div>
                      <div>
                          <p>服务</p>
                          <span>4.9<i class="fa fa-long-arrow-up"></i></span>
                      </div>
                      <div>
                          <p>物流</p>
                          <span>4.8<i class="fa fa-long-arrow-up"></i></span>
                      </div>
                  </div>
                  <div class="jiantou"><i class="fa fa-caret-down"></i></div>
              </li>
              <li class="threeli" v-on:mouseover="phonehua()" v-on:mouseleave="phoneli()">
                  <!-- 二级导航 -->
                  <div class="erweima">
                      <img src="https://img.alicdn.com/imgextra/TB1l16svYArBKNjSZFLwu3_dVXa.png" alt="">
                      <p>扫一扫,手机逛起来</p>
                  </div>
                 <p>手机逛</p>
                 <p class="icon"><i class="fa fa-th-large"></i> <i class=" arrow fa fa-caret-down" ></i></p>
              </li>
           </ul>
          <!-- 右侧 -->
           <ul class="right">
              <div class="searchBox">
                  <input type="text" placeholder="  搜索 天猫 商品/品牌/店铺">
                  <span>搜天猫</span>
              </div>
              <span class="bendian">搜本店</span>
           </ul>
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
         phonehua:function(){
          $('.left .threeli ').addClass('play')
           $('.left .threeli  p .arrow ').removeClass('fa fa-caret-down')
          $('.left .threeli  p .arrow ').addClass('fa fa-caret-up')
      },
      phoneli:function(){
           $('.left .threeli ').removeClass('play')
            $('.left .threeli  p .arrow').removeClass('fa fa-caret-up')
           $('.left .threeli  p .arrow ').addClass('fa fa-caret-down')
      },
        kuwohua:function(){
          $('.left .twoli ').addClass('play')
           $('.left .twoli .jiantou i ').removeClass('fa fa-caret-down')
          $('.left .threeli .jiantou i ').addClass('fa fa-caret-up')
      },
      kuwoli:function(){
           $('.left .twoli ').removeClass('play')
            $('.left .twoli .jiantou i').removeClass('fa fa-caret-up')
           $('.left .twoli .jiantou i ').addClass('fa fa-caret-down')
      },
    }

}
</script>

<style scoped>
.shop-main{
    border-bottom: 1px solid #c8baaa;
}
.shop-main .container{
    width: 1190px;
    height:85px;
    margin: 0 auto;
    overflow: hidden;
    color: #404040;
    font-size: 12px;
}
.container .left{
    float: left;
}
/* logo */
.container .left .oneli img{
    padding-top: 20px;
    padding-right: 7px;
}
.container .left li{
    vertical-align: middle;
    display: inline-block;
}
/* 酷我旗舰店 */
.container .left .twoli{
    padding: 15px 0 0;
   height: 50px;
   cursor: pointer;
}
.container .left .twoli .logo{
    padding: 0 10px;
height: 38px;
border-left: 1px solid #f0f0f0;
border-right: 1px solid #f0f0f0;
}
.container .left .twoli .logo .qijian{
height: 22px;
line-height: 19px;
overflow: hidden;
background-color: #fff;
font-size: 12px;
font-family: "\5b8b\4f53";
color: #333;
font-weight: 700;
}
.container .left .twoli .logo .pinpai{
    height: 25px;
}
.container .left .twoli .logo .pinpai .wenzi{
display: inline-block;
font-size:10px;
vertical-align: top;
padding:0 5px;
height: 14px;
line-height: 14px;
font-weight: 700;
background-color: #f4c985;
border: 1px solid #e7ba77;
border-radius: 2px;
color: #856651;
text-align: center;
}
.container .left .twoli .logo .pinpai span i{
    color: rgb(28,158,255);
    font-size: 17px;
}
.container .left .twoli .text div{
   display: inline-block;
   text-align: center;
font-family: "\5b8b\4f53";
color: #999;
}
.container .left .twoli .text div span{
color: #ff0036;
padding-left: 5px;
height: 18px;
width: 31px;
position: relative;
overflow: hidden;
font-weight: 600;
}
.container .left .twoli  .jiantou {
margin: 0 0 0 14px;
width: 6px;
height: 38px;
cursor: pointer;
color: #999;
padding-top: 10px;
padding-right: 15px;
border-right: 1px solid #f0f0f0;
}
.container .left li div{
    display: inline-block;
    vertical-align: middle;
}
/* 手机版 */
.container .left .threeli{
    width: 40px;
    text-align: center;
color: #999;
font-weight: 400;
margin-top: 15px;
cursor: pointer;
}
.container .left .threeli .icon i{
font-size: 13px;
color: rgb(204, 204, 204);
}
/* 右侧 */
.container .right{
    float: right;
    margin-top: 15px;
}
.container .right div{
    display: inline-block;
    width: 455px;
    height: 36px;
    border:  solid #ff0036;
    border-width: 3px 3px 3px 3px;
    overflow: hidden;
    vertical-align: middle;
}
/* 搜天猫 */
.container .right div input{
    float: left;
    width: 367px;
    height: 100%;
    border: none;
    outline: none;
}
.container .right div span{
    float: right;
    display: inline-block;
    width: 80px;
    height: 30px;
    font-size: 16px;
letter-spacing: 0;
cursor: pointer;
color: #fff;
background-color: #ff0036;
overflow: hidden;
text-align: center;
}
/* 搜本店 */
.container .right .bendian{
    display: inline-block;
    background: #333;
width: 80px;
height: 36px;
cursor: pointer;
color: #fff;
text-align: center;
font-size: 16px;
line-height: 36px;
vertical-align: middle;
}
/* 手机逛 --二级导航 */
.container .left .threeli .erweima{
 width: 178px;
    height: 160px;
overflow: hidden;
border: 1px solid #e4e4e4;
background: #fff;
position: absolute;
top: 90px;
left: 803px;
display: none;
}
.container .left .threeli .erweima img{
    width: 152px;
    height: 134px;
}
.container .left .threeli.play .erweima{
    display: block;
}
/* 酷我旗舰店--二级导航 */

.container .left .twoli .kuwo{
    width: 250px;
    height: 340px;
    color: #999;
    position: absolute;
    top: 80px;
    background-color: #fff;
border: 1px solid #e5e5e5;
display: none;
z-index: 100;
}
.container .left .twoli.play .kuwo{
    display: block;
}
.container .left .twoli.play .kuwo .top p:hover span{
   text-decoration: underline;
   cursor: pointer;
}
.container .left .twoli .kuwo .top{
    margin-top: 16px;
    width: 91%;
}
.container .left .twoli .kuwo .top p{
    margin: 5px 0 0;
line-height: 15px;
color: #959595;
}
.container .left .twoli .kuwo .top .topleft .yi{
    height: 18px;
    margin: 0 0 10px;
    color: #999;
    font-weight: 400;
}
.container .left .twoli .kuwo .top .topleft p span{
    color: #35a;
    display: inline-block;
width: 20px;
}
.container .left .twoli .kuwo .top .topright .yi{
    height: 18px;
    margin: 0 0 10px;
    margin-left: 55px;
    color: #999;
    font-weight: 400;
}
.container .left .twoli .kuwo .top .topright p i{
    color: #ff0036;
    height: 9px;
width: 8px;
margin: 3px 5px 0 30px;
}
.container .left .twoli .kuwo .bottom{
    margin:10px 20px;
    padding: 10px 0;
    width: 91%;
    text-align: left;
    border-top: 1px dotted #DBDBDB;
border-bottom: 1px dotted #DBDBDB;
}
.container .left .twoli .kuwo .bottom p{
        margin: 5px 0 0;
line-height: 15px;
color: #959595;
}
.container .left .twoli .kuwo .bottom .yi{
 height: 18px;
   margin:10px 0 10px;
    color: #999;
    font-weight: 400;
    text-align: left;
}
.container .left .twoli .kuwo .bottom .kefu i{
   color: rgb(28,158,255);
   font-size: 15px;
}
.container .left .twoli .kuwo .bottom .time .big{
border: 1px solid #f04343;
height: 14px;
width: 75px;
line-height: 14px;
font-size: 13px;
margin-top: 4px;
color: #f04343;
}
.container .left .twoli .kuwo .bottom .time .big .five{
    display: inline-block;
    font-family: Impact,Arial;
color: #ffd800;
background-color: #f04343;
padding: 1px 4px;
}
.container .left .twoli .kuwo .bottom .local{
    padding-top: 5px;
}
.container .left .twoli .kuwo .btn span{
    display: inline-block;

vertical-align: top;
width: 86px;
height: 28px;
border: 1px solid #e5e5e5;
color: #404040;
background-color: #f2f2f2;
line-height: 26px;
text-align: center;
padding:0 10px;
}
.container .left .twoli .kuwo .btn span i{
    font-size: 14px;
    padding-right: 3px;
}
.container .left .twoli .kuwo .btn .star{
    background-color: #ff0036;
    border: 1px solid #ff0036;
    color: #fff;
    margin-left: 10px;
}
</style>
