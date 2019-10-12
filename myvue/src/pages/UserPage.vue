<template>
  <div class="user-page">
     <head-nav></head-nav>
     <!-- 内容部分 -->
    <div class="container">
      <!-- 第一块 -->
       <div class="firstBox">
          <div class="firstleft">
             <h1>好音质,用酷我</h1>
             <h3>海量无损资源下载&nbsp;热歌新歌随时听</h3>
             <ul>
               <li class="oneli">
                 <span><i class="fa fa-windows"></i></span>
                  <div class="text">
                    <p>Windows版</p>
                    <p class="load">立即下载</p>
                  </div>
               </li>
               <li class="twoli">
                  <span><i class="fa fa-android"></i></span>
                  <div class="text">
                    <p>Android版</p>
                    <p class="load">立即下载</p>
                  </div>
               </li>
               <li class="threeli">
                  <span><i class="fa fa-apple"></i></span>
                  <div class="text">
                    <p>iPhone版</p>
                    <p class="load">立即下载</p>
                  </div>
               </li>
             </ul>
          </div>
          <div class="rightimg"></div>
       </div>
       <!-- 第二块 -->
       <div class="secondBox">
         <h4>其他客户端下载</h4>
         <ul>
           <li class="oneli">
             <div class="beijing"></div>
             <p class="icon"><i class="fa fa-github-alt"></i></p>
             <p class="banben">Mac OS版</p>
             <p class="newban">最新版本：v1.6.4</p>
             <p class="text">优化音乐盒布局，更人性化的操作，点滑之间尽享畅爽体验</p>
             <p class="btn"><i class="fa fa-download"></i>&nbsp;立即下载</p>
           </li>
           <li class="twoli">
             <div class="beijing"></div>
             <p class="icon"><i class="fa fa-windows"></i></p>
             <p class="banben">Windows Phone版</p>
             <p class="newban">最新版本：v2.9.0.2</p>
             <p class="text">精细化用户品味，每日推荐精选歌单，你想听的都在这里</p>
             <p class="btn"><i class="fa fa-download"></i>&nbsp;立即下载</p>
           </li>
           <li class="threeli">
             <div class="beijing"></div>
             <p class="icon"><i class="fa fa-android"></i></p>
             <p class="banben">Android Pad版</p>
             <p class="newban">最新版本：v8.5.2.3</p>
             <p class="text">一手掌握最新歌曲，海量曲库随时听</p>
             <p class="btn"><i class="fa fa-download"></i>&nbsp;立即下载</p>
           </li>
           <li class="fourli">
             <div class="beijing"></div>
             <p class="icon"><i class="fa fa-apple"></i></p>
             <p class="banben">iPad版</p>
             <p class="newban">最新版本：v4.1.3</p>
             <p class="text">新增最潮视频，大咖首发，日韩流行，海量MV想看就看</p>
             <p class="btn"><i class="fa fa-download"></i>&nbsp;立即下载</p>
           </li>
           <li class="fiveli">
             <div class="beijing"></div>
             <p class="icon"><i class="fa fa-windows"></i></p>
             <p class="banben">Win10版 UMP版</p>
             <p class="newban">最新版本：v3.1.10.0</p>
             <p class="text">优化炫酷音效，多种场景，如身临其境，完美演绎</p>
             <p class="btn"><i class="fa fa-download"></i>&nbsp;立即下载</p>
           </li>
         </ul>
       </div>
       <!-- 第三块 -->
       <div class="thridBox">
          <div class="img"></div>
          <div class="right">
            <div class="picbei"></div>
            <h3>大.曲库</h3>
            <p>专业分类，千万无损音乐任你听</p>
            <div class="blank"></div>
            <ul>
              <li>
                <i class="fa fa-bookmark-o"></i>
                <span>专区</span>
              </li>
              <li>
                <i class="fa fa-th-large"></i>
                <span>主题</span>
              </li>
              <li>
                <i class="fa fa-smile-o"></i>
                <span>心情</span>
              </li>
              <li>
                <i class="fa fa-safari"></i>
                <span>年代</span>
              </li>
              <li>
                <i class="fa fa-map-o"></i>
                <span>流派</span>
              </li>
              <li>
                <i class="fa fa-gittip"></i>
                <span>场景</span>
              </li>
              <li>
                <i class="fa fa-music"></i>
                <span>语言</span>
              </li>
              <li>
                <i class="fa fa-volume-off"></i>
                <span>有声</span>
              </li>
            </ul>
          </div>
       </div>
       <!-- 第四块 -->
       <div class="fourBox">
         <div class="left">
             <div class="leftbei"></div>
             <h1>炫.直播</h1>
             <p>美女才艺主播玩音乐，与众不同</p>
         </div>
         <div class="rightimg"></div>
       </div>
       <!-- 第五块 -->
       <div class="fiveBox">
          <div class="leftimg"></div>
          <div class="right">
             <div class="rightbei"></div>
             <h1>听.主播电台</h1>
             <p>美女才艺主播玩音乐，与众不同</p>
         </div>
       </div>
       <!-- 第六块 -->
       <div class="sixBox">
          <div class="left">
             <div class="leftbei"></div>
             <h1>酷.皮肤</h1>
             <p>全景皮肤，沉浸式体验随你选择</p>
             <div class="blank"></div>
             <div class="leftimg"></div>
          </div>
          <div class="rightimg"></div>
          <div></div>
       </div>
    </div>

    <foot-nav></foot-nav>
  </div>

</template>

<script>
import HeadNav from '../components/HeadNav'
import FootNav from '../components/FootNav'
export default {
  data:function(){
    return{

    }
  },
  components:{
    HeadNav,
    FootNav
  }
  
}
</script>

<style scoped>
.user-page .container{
  width: 1460px;
  margin: 0 auto;
}
/* 第一块 */
.container .firstBox{
  width: 100%;
  height: 739px;
  overflow: hidden;
}
.container .firstBox .firstleft{
  width: 420px;
  margin-top: 200px;
  float: left;
}
.container .firstBox .firstleft h1{
  height: 81px;
font-size: 54px;
font-weight: 400;
color: rgba(0,0,0,.9);
line-height: 81px;
letter-spacing: 1px;
}
.container .firstBox .firstleft h3{
  height: 30px;
font-size: 22px;
font-weight: 300;
color: rgba(0,0,0,.6);
line-height: 30px;
margin-top: 12px;
margin-bottom: 48px;
}
.container .firstBox .firstleft ul{
  margin-top: 20px;
  text-align: left;
  margin-left: 30px;
}
.container .firstBox .firstleft ul li{
  width: 180px;
  height: 62px;
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 14px;
  border-radius: 3px;
  color: #fff;
  overflow: hidden;
  cursor: pointer;
}
.container .firstBox .firstleft ul .oneli{
  background: linear-gradient(135deg,#3998f3,#4ab1f7);
  box-shadow: 0 6px 20px 0 rgba(57,152,243,.2);
}
.container .firstBox .firstleft ul .twoli{
  background: linear-gradient(316deg,#30c784,#13ba82);
  box-shadow: 0 6px 20px 0 rgba(19,186,130,.2);
}
.container .firstBox .firstleft ul .threeli{
  background: linear-gradient(315deg,#666,#4d4d4d);
  box-shadow: 0 6px 20px 0 hsla(0,0%,40%,.2);
}
.container .firstBox .firstleft ul li span{
  display: inline-block;
  width: 62px;
height: 62px;
text-align: center;
line-height: 62px;
margin-right: 14px;
background: rgba(0,0,0,.05);
border-radius: 3px 0 0 3px;
float: left;
}
.container .firstBox .firstleft ul li span i{
  font-size: 30px;
}
.container .firstBox .firstleft ul li .text{
  text-align: center;
  margin-top: 10px;
  float:left;
}
.container .firstBox .firstleft ul li .text p{
  line-height: 22px;
font-size: 16px;
font-weight: 500;
}
.container .firstBox .firstleft ul li .text .load{
  line-height: 22px;
font-size: 13px;
font-weight: 400;
}
.container .firstBox .rightimg{
  width: 940px;
  height: 650px;
  float:right;
  background: url('http://h5static.kuwo.cn/www/kw-www/img/47033c0.png')
}

/* 第二部分 */
.container .secondBox{
  width: 100%;
  height: 420px;
}
.container .secondBox h4{
  font-size: 28px;
font-weight: 500;
color: #333;
line-height: 40px;
margin-bottom: 28px;
text-align: left;
}
.container .secondBox ul{
  width: 100%;
}
.container .secondBox ul li{
  position: relative;
padding: 40px 33px 31px;
width: 18.85%;
text-align: center;
background: #fff;
box-shadow: 0 6px 36px 0 rgba(0,0,0,.08);
display: inline-block;
margin-right: 12px;
}
.container .secondBox ul li .beijing{
  position: absolute;
  top: 0;
  left: 0;
  width: 138px;
  height: 167px;
}
.container .secondBox ul .oneli .beijing{
  background: url('http://h5static.kuwo.cn/www/kw-www/img/a9b7264.png')
}
.container .secondBox ul .twoli .beijing{
  background: url('http://h5static.kuwo.cn/www/kw-www/img/408e411.png')
}
.container .secondBox ul .threeli .beijing{
  background: url('http://h5static.kuwo.cn/www/kw-www/img/b880faa.png')
}
.container .secondBox ul .fourli .beijing{
  background: url('http://h5static.kuwo.cn/www/kw-www/img/b4743e4.png')
}
.container .secondBox ul .fiveli .beijing{
  background: url('http://h5static.kuwo.cn/www/kw-www/img/408e411.png')
}
.container .secondBox ul li .icon{
  width: 60px;
height: 60px;
line-height: 50px;
font-size: 40px;
color: #fff;
background: #666;
border-radius: 50%;
margin: 0 auto;
}
.container .secondBox ul .twoli .icon{
  background: #3e88f7;
}
.container .secondBox ul .threeli .icon{
  background: #13ba82;
}
.container .secondBox ul .fiveli .icon{
  background: #3e88f7;
}
.container .secondBox ul li .icon i{
  font-size: 30px;
  text-align: center;
}
.container .secondBox ul li .banben{
  font-size: 16px;
font-weight: 600;
line-height: 25px;
margin-top: 18px;
color: #333;
}
.container .secondBox ul li  .newban{
  line-height: 18px;
font-weight: 400;
color: #999;
font-size: 13px;
margin-top: 2px;
margin-bottom: 18px;
}
.container .secondBox ul li .text{
  height: 60px;
font-size: 14px;
font-weight: 400;
line-height: 20px;
color: #333;
}
.container .secondBox ul li .btn{
  width: 146px;
height: 38px;
margin: 36px auto 0;
line-height: 38px;
justify-content: center;
background: #f2f2f2;
border-radius: 22px;
font-weight: 400;
color: #666;
font-size: 14px;
cursor: pointer;
}

/* 第三部分 */
.container .thridBox{
  width: 100%;
  height: 700px;
  margin-top: 100px;
  margin-bottom: 86px;
  overflow: hidden;
}
.container .thridBox .img{
  width: 980px;
  height: 700px;
  float: left;
  background: url('http://h5static.kuwo.cn/www/kw-www/img/b5a528b.png')
}
.container .thridBox .right{
  float:right;
  width: 380px;
  margin-top: 200px;
  position: relative;
  text-align: left;
}
.container .thridBox .right .picbei{
  position: absolute;
top: 0;
left: 0;
z-index: -1;
height: 715px;
width: 380px;
background: url('http://h5static.kuwo.cn/www/kw-www/img/5f68045.png') no-repeat;
}
.container .thridBox .right h3{
  font-size: 70px;
line-height: 98px;
font-weight: 300;
color: #333;
}
.container .thridBox .right p{
  font-size: 26px;
line-height: 40px;
color: #666;
margin-top: 8px;
}
.container .thridBox .right .blank{
  width: 50px;
height: 4px;
background: #e6e6e6;
margin-top: 40px;
margin-bottom: 45px;
}
.container .thridBox .right ul li{
  display: inline-block;
  color: #666;
font-size: 19px;
line-height: 27px;
font-weight: 400;
margin-right:26px;
margin-bottom: 26px;
}
.container .thridBox .right ul li i{
  font-size: 22px;
margin-right:2px;
}
.container .thridBox .right ul li span{
  color: #666;
font-size: 19px;
line-height: 27px;
font-weight: 400;
}
/* 第四部分 */
.container .fourBox{
  width: 100%;
  height:860px;
  overflow: hidden;
}
.container .fourBox .left{
  width: 386px;
  margin-top: 300px;
  float: left;
  position: relative;
}
.container .fourBox .left .leftbei{
  width: 396px;
  height: 386px;
  position: absolute;
top: 0;
left: 50px;
width: 100%;
z-index: -1;
background: url('http://h5static.kuwo.cn/www/kw-www/img/ce41ad0.png')
}
.container .fourBox .left h1{
  font-size: 70px;
line-height: 98px;
font-weight: 300;
color: #333;
text-align: left;
}
.container .fourBox .left p{
  font-size: 26px;
line-height: 40px;
color: #666;
margin-top: 8px;
}
.container .fourBox .rightimg{
  width: 1000px;
  height: 857px;
  float: right;
  background: url('http://h5static.kuwo.cn/www/kw-www/img/67d60b8.png')
}
/* 第五部分 */
.container .fiveBox{
  width: 100%;
  height:860px;
  overflow: hidden;
}
.container .fiveBox .right{
  width: 386px;
  margin-top: 300px;
  float: right;
  position: relative;
}
.container .fiveBox .right .rightbei{
  height: 314px;
  position: absolute;
top: 0;
left: 40px;
width: 84%;
z-index: -1;
background: url('http://h5static.kuwo.cn/www/kw-www/img/294f297.png')
}
.container .fiveBox .right h1{
  font-size: 70px;
line-height: 98px;
font-weight: 300;
color: #333;
text-align: left;
}
.container .fiveBox .right p{
  font-size: 26px;
line-height: 40px;
color: #666;
margin-top: 8px;
}
.container .fiveBox .leftimg{
  width: 1000px;
  height: 708px;
  float: left;
  background: url('http://h5static.kuwo.cn/www/kw-www/img/6be1276.png')
}
/* 第六部分 */
.container .sixBox{
  width: 100%;
  height: 710px;
  overflow: hidden;
}
.container .sixBox .left{
  width: 386px;
  float: left;
  margin-top: 150px;
  text-align: left;
  position: relative;
}
.container .sixBox .left .leftbei{
  width: 524px;
  height: 349px;
  position: absolute;
  z-index: -1;
  left: -113px;
  top: -127px;
  background: url('http://h5static.kuwo.cn/www/kw-www/img/e198a53.png')
}
.container .sixBox .left h1{
  font-size: 70px;
line-height: 98px;
font-weight: 300;
color: #333;
}
.container .sixBox .left p{
  font-size: 26px;
line-height: 40px;
color: #666;
margin-top: 8px;
}
.container .sixBox .left .blank{
  width: 50px;
height: 4px;
background: #e6e6e6;
margin-top: 40px;
margin-bottom: 45px;
}
.container .sixBox .left .leftimg{
  width: 304px;
  height: 251px;
  background: url('http://h5static.kuwo.cn/www/kw-www/img/a68d42d.png')
}
.container .sixBox .rightimg{
  width: 1000px;
  height: 708px;
  float: right;
  background: url('http://h5static.kuwo.cn/www/kw-www/img/1281ee6.png')
}
</style>
