<template>
  <div class="shop-head">
    <div class="container">
      <ul class="left">
        <li ><i class="fa fa-home"></i><span>天猫首页</span></li>
        <li class="twoli"><span>喵,欢迎来天猫</span></li>
        <li ><span>请登录</span></li>
        <li ><span>免费注册</span></li>
      </ul>
      <ul class="right">
          <li class="mytao" v-on:mouseover="taohua()" v-on:mouseleave="taoli()">
              <div class="yimai">
              <p>已买到的宝贝</p>
              <p>已卖出的宝贝</p>
              </div>
          <span >我的淘宝<i class="fa fa-caret-down"></i></span></li>
          <li class="shopcar"><i class="fa fa-shopping-cart"></i><span>购物车0件</span></li>
          <li class="shoucang" v-on:mouseover="shouhua()" v-on:mouseleave="shouli()">
              <div class="yicang">
              <p>收藏的宝贝</p>
              <p>收藏的店铺</p>
              </div>
            <span>收藏夹<i class="fa fa-caret-down"></i></span></li>
          <li class="phone" v-on:mouseover="phonehua()" v-on:mouseleave="phoneli()"><i class="fa fa-building-o"></i><span>手机版</span>
              <div class="erweima"></div>
          </li>
          <li class="taonet"><span>淘宝网</span></li>
          <li class="shoper" v-on:mouseover="shoperhua()" v-on:mouseleave="shoperli()">
               <div class="shoperhelp">
                  <ul class="top">
                     <h5>商家:</h5>
                     <li v-for="(shop,index) in shops">
                        {{shop}}
                     </li>
                  </ul>
                  <ul class="bottom">
                      <h5>帮助:</h5>
                      <li>帮助中心</li>
                      <li>问商友</li>
                  </ul>
              </div>
              <span>商家支持<i class="fa fa-caret-down"></i></span></li>
          <li class="netnav" v-on:mouseover="nethua()" v-on:mouseleave="netli()">
              <div class="netsecond">
                 <ul class="first">
                     <h4>热点推荐&nbsp;&nbsp;Hot</h4>
                    <li v-for="(hot,index) in hots">
                        {{hot}}
                    </li>
                 </ul>
                 <ul class="second">
                     <h4>行业市场&nbsp;&nbsp;Market</h4>
                     <li v-for="(market,index) in markets">
                        {{market}}
                     </li>
                 </ul>
                 <ul class="thrid">
                     <h4>服务指南&nbsp;&nbsp;Help</h4>
                     <li v-for="(help,index) in helps">
                        {{help}}
                     </li>
                 </ul>
              </div>
          <i class="fa fa-list-ul"></i><span class="nav">网站导航<i class="fa fa-caret-down"></i></span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
        shops:['商家中心','天猫规则','商家入驻','运营服务','商家品控','商家工具','天猫智库','喵言喵语'],
        hots:['天猫超市','喵鲜生','科技新品','女装新品','酷玩街','内衣新品','试美妆','运动新品','时尚先生','精明妈咪','吃乐会','企业采购','会员积分','天猫国际','品质频道'],
        markets:['美妆','电器','女装','男装','女鞋','男鞋','内衣','箱包','运动','母婴','家装','医药','食品','配饰','汽车'],
        helps:['帮助中心','品质保障','特色服务','7天退换货']
    };
  },
  mounted(){
    
  },
  methods:{
    //   我的淘宝
      taohua:function(){
          $('.right .mytao div').addClass('play')
           $('.right .mytao span i ').removeClass('fa fa-caret-down')
          $('.right .mytao span i ').addClass('fa fa-caret-up')
      },
       taoli:function(){
           $('.right .mytao div').removeClass('play')
            $('.right .mytao span i ').removeClass('fa fa-caret-up')
           $('.right .mytao span i ').addClass('fa fa-caret-down')
      },
    //   收藏
      shouhua:function(){
          $('.right .shoucang div').addClass('play')
           $('.right .shoucang span i ').removeClass('fa fa-caret-down')
          $('.right .shoucang span i ').addClass('fa fa-caret-up')
      },
       shouli:function(){
           $('.right .shoucang div').removeClass('play')
            $('.right .shoucang span i ').removeClass('fa fa-caret-up')
           $('.right .shoucang span i ').addClass('fa fa-caret-down')
      },
      //   商家支持
     shoperhua:function(){
          $('.right .shoper .shoperhelp').addClass('active')
           $('.right .shoper span i ').removeClass('fa fa-caret-down')
          $('.right .shoper span i ').addClass('fa fa-caret-up')
      },
      shoperli:function(){
           $('.right .shoper .shoperhelp').removeClass('active')
            $('.right .shoper span i ').removeClass('fa fa-caret-up')
           $('.right .shoper span i ').addClass('fa fa-caret-down')
      },
    //   手机版
      phonehua:function(){
           $('.right .phone div').addClass('play')
       },
        phoneli:function(){
           $('.right .phone div').removeClass('play')
      },
    //网站导航
     nethua:function(){
          $('.right .netnav .netsecond').addClass('active')
           $('.right .netnav span i ').removeClass('fa fa-caret-down')
          $('.right .netnav span i ').addClass('fa fa-caret-up')
      },
      netli:function(){
           $('.right .netnav .netsecond').removeClass('active')
            $('.right .netnav span i ').removeClass('fa fa-caret-up')
           $('.right .netnav span i ').addClass('fa fa-caret-down')
      },
      
  }
};
</script>

<style scoped>
.shop-head{
    width: 100vw;
    background: #f2f2f2;
}
.shop-head .container{
    width: 1190px;
    height: 26px;
    margin: 0 auto;
    border-bottom: 1px solid #e5e5e5;
    overflow: hidden;
    font-size: 12px;
    color: #999;
}
.shop-head .container .left{
    float: left;
}
.shop-head .container .left li{
    display: inline-block;
    line-height: 26px;
    margin-right: 20px;
}
.shop-head .container .left li span:hover{
    color: #FF0036;
    cursor: pointer;
    text-decoration: underline;
} 
.shop-head .container .left .twoli span:hover{
    color: #999;
    text-decoration: none;
} 
.shop-head .container .left i{
    color: #FF0036;
    margin-right: 4px;
    font-size: 13px;
}
.shop-head .container .right{
    float: right;
}
.shop-head .container .right li{
    display: inline-block;
    line-height: 26px;
    margin-right: 20px;
}
.shop-head .container .right li span{
    display: inline-block;
}
.shop-head .container .right li span:hover{
    color: #FF0036;
    cursor: pointer;
    text-decoration: underline;
}
.shop-head .container .right .netnav .nav:hover{
     color: #999;
    text-decoration: none;
}
.shop-head .container .right li span:hover i{
    color: #999;
}
.shop-head .container .right i.fa-shopping-cart,.fa-building-o,.fa-list-ul{
    color: #FF0036;
    margin-right: 4px;
    font-size: 13px;
}
/* 我的淘宝二级导航 */
.container .right .mytao:hover{
    background: #fff;
}
.container .right .mytao span i{
    padding:0 2px;
}
.container .right .mytao .yimai{
    position: absolute;
    width: 84px;
    height: 60px;
    background: #fff;
    border:1px solid #eee;
    border-width: 0 1px 1px;
    line-height: 20px;
    top: 26px;
    display: none;
}
.container .right .mytao .yimai p{
    padding: 5px 5px 0 5px;
    color: #333
}
.container .right .mytao  .yimai.play{
    display: block;
}
.container .right .mytao  .yimai.play p:hover{
    color: #FF0036;
    cursor: pointer;
}
/* 收藏二级导航 */
.container .right .shoucang:hover{
    background: #fff;
}
.container .right .shoucang span i{
    padding:0 2px;
}
.container .right .shoucang .yicang{
    position: absolute;
    width: 84px;
    height: 60px;
    background: #fff;
    border:1px solid #eee;
    border-width: 0 1px 1px;
    line-height: 20px;
    top: 26px;
    display: none;
}
.container .right .shoucang .yicang p{
    padding: 5px 5px 0 5px;
    color: #333
}
.container .right .shoucang  .yicang.play{
    display: block;
}
.container .right .shoucang  .yicang.play p:hover{
    color: #FF0036;
    cursor: pointer;
}
/* 手机版 */
.container .right .phone .erweima{
    width: 175px;
    height: 215px;
    margin: 5px 0 0px;
    margin-left: -49px; 
    position: absolute;
    display: none;
    background: url('https://img.alicdn.com/tfs/TB1vJ0POwTqK1RjSZPhXXXfOFXa-175-215.png')
}
.container .right .phone .erweima.play{
    display: block;
}
/* 商家支持 */
.container .right .shoper:hover{
    background: #fff;
}
.container .right .shoper span i{
    padding:0 2px;
}
.container .right .shoper .shoperhelp{
    position: absolute;
    width: 160px;
    background: #fff;
    border:1px solid #eee;
    border-width: 0 1px 1px;
    line-height: 20px;
    top: 24px;
    color: #666;
    text-align: left;
    margin-left: -100px;
    display: none;
}
.container .right .shoper .shoperhelp h5{
    margin:0 3px; 
}
.container .right .shoper .shoperhelp .top {
    border-bottom: 1px dotted #999;
    overflow: hidden;
    margin:0 7px; 
}
.container .right .shoper .shoperhelp .top li{
    float: left;
    padding:0 2px; 
}
.container .right .shoper .shoperhelp .bottom li{
    padding:0 4px; 
}
.container .right .shoper .shoperhelp .bottom{
     margin:7px 7px; 
     border-bottom: 1px dotted #999;
}
.container .right .shoper .shoperhelp.active{
    display: block;
}
.container .right .shoper .shoperhelp.active ul li:hover{
    color: #FF0036;
    cursor: pointer;
}
/* 网站导航 */
.container .right .netnav:hover{
     background: #fff;
}
.container .right .netnav .netsecond{
    position: absolute;
    width: 1188px;
    top: 26px;
    border: solid #eee;
    border-width: 0 1px 1px;
    right:385px;
    left: auto;
    padding: 25px 0;
    display: none;
    background: #fff;
}
.container .right .netnav span i{
    padding:0 5px;
}
.container .right .netnav .netsecond ul{
    display:inline-block;
}
.container .right .netnav .netsecond .first,.second{
    width: 455px;
    border-right: 1px solid #eee;
}
.container .right .netnav .netsecond .thrid{
    width: 260px;
}
.container .right .netnav .netsecond ul h4{
    font-size: 18px;
    padding-bottom: 8px;
    text-align: left;
    margin-left: 10px;
}
.container .right .netnav .netsecond .first h4{
    color: #f56a00;
}
.container .right .netnav .netsecond .second h4{
    color: #2263d4;
}
.container .right .netnav .netsecond .thrid h4{
    color: #666;
}
.container .right .netnav .netsecond ul li{
    width: 70px;
    float: left;
    padding: 6px 0;
    overflow: hidden;
    color: #333;
}
.container .right .netnav .netsecond .thrid li{
    width: 95px;
    float: left;
    padding: 6px 0;
    overflow: hidden
}
.container .right .netnav .netsecond.active {
    display: block;
}
.container .right .netnav .netsecond.active ul li:hover{
    color: #FF0036;
    cursor: pointer;
}
</style>
