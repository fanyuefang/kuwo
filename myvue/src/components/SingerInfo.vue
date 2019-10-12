<template>
  <div class="singer-info">
    <div class="container">
        <!-- 基本信息 -->
        <div class="basicinfo">
           <h4>基本信息</h4>
           <ul>
               <li class="oneli">
                   <p>
                       <span>姓名 : <span>{{infos.name}}</span></span>
                   </p>
                   <p>
                       <span>英文名 : <span>{{infos.aartist}}</span></span> 
                   </p>
               </li>
               <li class="twoli">
                   <p>
                       <span>性别 : <span>{{infos.gener}}</span></span>
                   </p>
                   <p>
                       <span>国籍 : <span>{{infos.country}}</span></span> 
                   </p>
               </li>
               <li class="threeli">
                   <p>
                       <span>出生地 : <span>{{infos.birthplace}}</span></span>
                   </p>
                   <p>
                       <span>语言 : <span>{{infos.language}}</span></span> 
                   </p>
               </li>
                <li class="fourli">
                   <p>
                       <span>生日 : <span>{{infos.birthday}}</span></span>
                   </p>
                   <p>
                       <span>星座 : <span>{{infos.constellation}}</span></span> 
                   </p>
               </li>
               <li class="fiveli">
                   <p>
                       <span>身高 : <span>{{infos.tall}}</span></span>
                   </p>
                   <p>
                       <span>体重 : <span>{{infos.weight}}</span></span> 
                   </p>
               </li>
           </ul>
        </div>

        <!-- 个人简介 -->
        <div class="profile">
            <h4>个人简介</h4>
            <p v-html=" infos.info" ></p>
        </div>

        <div class="linkimg"></div>
    </div>
  </div>

</template>

<script>
export default {
   data:function(){
       return{
           splitinfo:''
       }
   },
   mounted(){
   
   },
   props:['infos']
}
</script>

<style scoped>
.singer-info .container .basicinfo{
    text-align: left;
}
.container .basicinfo h4{
    margin-bottom: 24px;
margin-top: 20px;
height: 25px;
line-height: 25px;
font-weight: 600;
font-size: 18px;
color: #333;
display: inline-block;
}
.container .basicinfo ul{
    display: inline-block;
    width: 100%;
}
.container .basicinfo ul li{
    width: 100%;
    height: 54px;
}
.container .basicinfo ul .oneli,.threeli,.fiveli{
    background: rgb(250, 250, 250)
}
.container .basicinfo ul li p{
    display: inline-block;
    width: 49.5%;
    height: 100%;
    padding-left: 20px;
    color: #999;
    font-size: 14px;
    line-height: 54px;
}
.container .basicinfo ul li p span span{
    color: #000
}
.container .profile{
    text-align: left;
}
.container .profile h4{
   margin-bottom: 24px;
margin-top: 20px;
height: 25px;
line-height: 25px;
font-weight: 600;
font-size: 18px;
color: #333;
display: inline-block;
}
.container .profile p{
    text-align: left;
    line-height: 25px;
    font-weight: 300;
    font-size: 14px;
    color: #333;
}
.singer-info .container .linkimg{
   width: 100%;
   height: 120px;
   margin-top: 50px;
   background: url('https://h5static.kuwo.cn/upload/image/625fb48fb5c8d6847f4a5b7f9d285f73661ddf3c6d2281d60f9b4cacb80ab41e.jpg')
  }
</style>
