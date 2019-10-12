<template>
    <div class="shop-scroll">
        <div class="container">
           <div class="navfixed">
               <span><i class="fa fa-cart-plus"></i>加入购物车</span>
           </div>
          <div class="navshow">
              <ul>
                  <li @click="show(0)" class="active">
                      <a>商品详情</a>
                  </li>
                  <li @click="show(1)">
                      <a>累计评价 <span>43517</span></a>
                  </li>
                  <li @click="show(2)">
                      <a>服务详情</a>
                  </li>
                  <span class="phone" @mouseover="huapic()" @mouseleave="lipic()">手机购买 <i class="fa fa-table"></i> <i id="icon" class="fa fa-caret-down"></i>
                  <div class="erweima">
                     <img src="https://img.alicdn.com/imgextra/TB16FOhPHPpK1RjSZFFwu15PpXa.png" alt="">
                  </div>
                  </span>
              </ul>
          </div>
          <shop-detail v-if="ins==0"></shop-detail>
          <more-comment v-if="ins==1"></more-comment>
          <help-detail v-if="ins==2"></help-detail>
         
        </div>
         <shop-foot></shop-foot>
          <div class="foottext">
               <shop-footzi></shop-footzi>
          </div>
    </div>

</template>

<script>
import ShopDetail from '../components/ShopDetail'
import MoreComment from '../components/MoreComment'
import HelpDetail from '../components/HelpDetail'
import ShopFoot from '../components/ShopFoot'
import ShopFootzi from '../components/ShopFootzi'
export default {
    data: function() {
       return {
             ins:0, //初始显示的页面
             count:0,  //点击次数

           }
    },
    components:{
       ShopDetail,  //商品详情
       ShopFoot, //底部图片列表公共部分
       ShopFootzi, //底部文字列表的公共部分
       MoreComment,  //累计评价
       HelpDetail,   //服务详情
    },
    mounted(){
        this.show(0)

        var that = this
        var html = document.querySelector('html')
        var body = document.querySelector('body')
        var foottext = document.querySelector('.foottext')
        // console.log(that.$el.offsetTop)
        // console.log(foottext.offsetTop)
        body.onscroll=function(){
            // console.log(html.scrollTop)
            if(html.scrollTop>that.$el.offsetTop && html.scrollTop<foottext.offsetTop){
                $('.navfixed').addClass('on')
                $('.navshow').addClass('navon')
            }else{
                $('.navfixed').removeClass('on')
                $('.navshow').removeClass('navon')
            }
        }
    },
    methods:{
        show:function(index){
            this.ins =index
            this.count++
            $('.navshow ul li').eq(index).addClass('active').siblings().removeClass('active')
            if(this.count>1){
              $('.navfixed span').css({
                opacity:0
            })
            }
        },

        huapic:function(){
            $('.navshow  .phone').addClass('on')
            $('.navshow  .phone #icon').removeClass()
            $('.navshow  .phone #icon').addClass('fa fa-caret-up')
        },
        lipic:function(){
            $('.navshow  .phone').removeClass('on')
            $('.navshow  .phone  #icon').removeClass()
            $('.navshow  .phone  #icon').addClass('fa fa-caret-down')
        }


    }
  
}
</script>

<style scoped>
/* .shop-scroll .container{
  border: 1px solid red;
  height: 2000px;
} */
.shop-scroll .container .navfixed{
  border-bottom: 1px solid #ccc;
position: fixed;
top: 0;
left: 0;
right: 0;
height: 49px;
z-index: 1000;
box-shadow: rgba(0,0,0,.2) 0 1px 5px 0;
display: none;
}
.shop-scroll .container .navfixed span{
display: inline-block;
width: 200px;
height: 49px;
line-height: 48px;
background-color: #FF0036;
color: #fff;
font-size: 14px;
text-align: center;
position: fixed;
left: 71%;
z-index: 1000;
opacity: 0;
}
.shop-scroll .container .navfixed span i{
    font-size: 16px;
    padding-right: 5px;
}
.shop-scroll .container .navfixed.on {
    display: block;
   
    z-index: 1000
}
.shop-scroll .container .navfixed.on span{
     opacity: 1;
}
.container .navshow{
    width: 788px;
    margin: 0 auto;
    font-size: 12px;
    border: 1px solid #dfdfdf;
    z-index: 1000;
    background: #fff;
    position: relative;
}
.container .navshow.navon{
    position: fixed;
    top: 0;
    left: 29.7%;
    width: 788px;
    font-size: 12px;
    border: 1px solid #dfdfdf;
    z-index: 1000;
    background: #fff;
}
.container .navshow  ul{
    overflow: hidden;
    height: 48px;
}
 .container .navshow ul li{
float: left;
height: 48px;
line-height: 48px;
cursor: pointer;
position: relative;
}
 .container  .navshow ul li.active{
     border-top: 2px solid #FF0036;
 }
 .container  .navshow ul li.active::after{
content: ' ';
display: block;
border-width: 5px;
border-style: solid;
border-color: #FF0036 transparent transparent;
width: 0;
height: 0;
font-family: arial;
position: absolute;
top: -1px;
left: 50%;
margin-left: -5px;
 }
  .container  .navshow ul li.active a{
      font-weight: 700;
display: block;
height: 100%;
line-height: 46px;
color: #FF0036;
border-left: 1px solid #cfbfb1;
border-right: 1px solid #cfbfb1;
  }
 .container  .navshow ul li a{
     border-right: 1px dotted #d2d2d2;
color: #333;
padding: 0 20px;
 }
  .container .navshow ul li a span{
      color: #35a;
margin: 0 1px;
  }
 .container  .navshow ul .phone{
     float: right;
     color: #989898;
line-height: 48px;
padding-left:50px;
/* position: relative; */
cursor: pointer;
 }
  .container .navshow ul .phone i{
    font-size: 16px;
    padding: 0 2px;
  }
.container .navshow ul .phone .erweima{
    position: absolute;
    right: 0;
    top: 49px;
    z-index: 999;
    display: none;
 }
 .container .navshow ul .phone .erweima img{
    height: 140px;
    width: 140px;
 }
.container  .navshow ul .phone.on{
    background: rgb(245,245,245);
    color: #989898;
  }
  .container  .navshow ul .phone.on .erweima{
      display: block;
      transition: 0
  }
</style>
