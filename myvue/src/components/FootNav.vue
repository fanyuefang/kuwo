

<template>
  <div class="foot-nav">
    <div class="top">
      <ul class="top-content">
        <li class="firstli">
          <p>下载酷我音乐客户端</p>
          <section class="tag">
            <li>
              <i class="fa fa-windows"></i>
              <p>PC版</p>
            </li>
            <li>
              <i class="fa fa-android"></i>
              <p>Android</p>
            </li>
            <li>
              <i class="fa fa-apple"></i>
              <p>iPhone版</p>
            </li>
          </section>
        </li>
        <li class="secondli">
          <p>协议与声明</p>
          <p class="second-p">
            <span>用户服务协议</span>
            <span>隐私政策</span>
          </p>
          <p class="thrid-p">
            <span>免费声明</span>
            <span>权利声明</span>
          </p>
        </li>
        <li class="thridli">
          <p>其它</p>
          <p class="one-p">
            <span>联系我们</span>
            <span>广告服务</span>
          </p>
          <p class="two-p">
            <span>
              腾讯音乐
              <a href>诚聘英才</a>
            </span>
            <span>未成年人家长监护工程</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <div class="bottom-content">
          <p> 北京酷我科技有限公司版权所有 丨 网络文化经营许可证：京网文[2015]0525-205号 丨 信息网络传播视听节目许可证0109362号 丨 增值电信业务经营许可证B2-20090418 丨 京ICP证060261号</p>
          <p>广播电视节目制作经营许可证京字第2037号 丨 营业性演出许可证京市演1574 丨 京公网安备11010502030216号 丨 京ICP备09014827号</p>
          <p>举报电话：010-87939949丨 举报邮箱：support@kuwo.cn</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  }
};
</script>

<style scoped>
.foot-nav {
  width: 100vw;
  margin-top:80px;
}
.foot-nav .top {
  width: 100%;
  background: #282828;
}
.foot-nav .top .top-content {
  width: 1324px;
  position: relative;
  left: 15%;
  height: 220px;
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  overflow: hidden;
}
.foot-nav .top .top-content li {
  width: 33.333%;
  height: 200px;
  float: left;
  margin-top: 20px;
}
.foot-nav .top .top-content .firstli {
  padding-top: 30px;
  text-align: left;
}
.foot-nav .top .top-content .firstli .tag {
  margin-top: 30px;
}
.foot-nav .top .top-content .firstli .tag li {
  display: inline-block;
  width: 80px;
  height: 88px;
  padding-right: 20px;
  text-align: center;
}
.top-content .firstli .tag li i {
  font-size: 35px;
  line-height: 18px;
  color: grey;
}
.top-content .firstli .tag li p {
  font-size: 13px;
  line-height: 30px;
  color: grey;
}
.foot-nav .top .top-content .secondli {
  padding-top: 30px;
  text-align: left;
}
.top .top-content .secondli .second-p,
.thrid-p {
  display: inline-block;
  margin-top: 40px;
  margin-right: 40px;
}
.top .top-content .secondli span {
  display: block;
  height: 18px;
  font-size: 13px;
  line-height: 18px;
  color: grey;
  margin-bottom: 26px;
}
.foot-nav .top .top-content .thridli {
  padding-top: 30px;
  text-align: left;
}
.top .top-content .thridli .one-p,.two-p {
  display: inline-block;
  margin-top: 40px;
  margin-right: 40px;
}
.top .top-content .thridli .two-p span a {
  color: gray;
  padding-left: 40px;
}
.top .top-content .thridli span {
  display: block;
  height: 18px;
  font-size: 13px;
  line-height: 18px;
  color: grey;
  margin-bottom: 26px;
}
.bottom {
  background: #1f1f1f;
}
.bottom .bottom-content {
  min-width: 1180px;
  max-width: 1300px;
  font-size: 12px;
  font-weight: 400;
  height: 182px;
  padding: 22px 0 99px;
  margin: 0 auto;
  text-align: center;
  color: grey;
}
.bottom .bottom-content p{
    line-height: 22px;
}
</style>