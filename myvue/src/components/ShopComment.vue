<template>
    <div class="shop-comment">
        <div class="container">
            <ul>
                <li v-for="(comment,index) in comments">
                   <div class="left">
                      <p>{{comment.msg}}</p>
                      <p class="img">
                          <img :src="comment.u_pic" alt="">
                      </p>
                      <span class="time">{{comment.time}}</span>
                   </div>
                   <div class="categary">
                        <p>套餐类型: <span>官方标配</span></p>
                        <p>颜色分类: <span>深空灰</span></p>
                   </div>
                   <div class="user">
                        <p>{{comment.u_id}} <span>(匿名)</span></p>
                   </div>
                </li>
            </ul>

            <div class="pages">
                <p>
                    <span><i class="fa fa-angle-double-left"></i>上一页</span>
                    <span>1</span>
                    <span class="blue">2</span>
                    <span class="blue">3</span>
                    <span class="sheng">…</span>
                    <span class="blue">下一页 <i class="fa fa-angle-double-right"></i></span>
                </p>
                <p class="logo"></p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data: function() {
       return {
          comments:''
           }
    },
    mounted(){
        var that = this
        axios.get('/kuwo/comment?type=get_rec_comment&f=web&page=1&rows=20&digest=2&sid=93&uid=0&prod=newWeb&reqId=74a18800-da9b-11e9-ba7d-c3dd5a7c96b0')
        .then(function(val){
            that.comments = val.data.rows
            // console.log(val.data.rows)
        })
        .catch(function(err){
            console.log(err)
        })
    }

}
</script>

<style scoped>
.shop-comment .container ul li{
    border-bottom: 1px solid #e3e3e3;
    text-align: left
}
.shop-comment .container ul li div{
    display: inline-block;
    word-wrap: break-word;
word-break: break-all;
line-height: 19px;
overflow: hidden;
margin-left: 10px;
   padding: 16px 7px;
}
.shop-comment .container ul li .left{
    width: 494px;
padding-right: 30px;
text-align: left;
}
.shop-comment .container ul li .left p{
    color: #333;
}
.shop-comment .container ul li .left .img{
    border: 2px solid #f2f2f2;
padding: 2px;
width: 48px;
height: 48px;
margin: 5px 0;
}
.shop-comment .container ul li .left img{
 width: 40px;
 height: 40px;
}
.shop-comment .container ul li .left .time{
    color: #ccc;
}
.shop-comment .container ul li .categary{
    width: 135px;
color: #666;
}
.shop-comment .container ul li .categary p span{
    color: #999;
}
.shop-comment .container ul li .user p span{
    color: #999;
}
.shop-comment .container .pages{
    margin-top:40px;
    position: relative;
    text-align: right;
}
.shop-comment .container .pages p span{
    display: inline-block;
    height: 40px;
line-height: 30px;
padding: 5px 14px;
border: 1px solid #e5e5e5;
font-size: 14px;
color: #999;
text-align: center;
}
.shop-comment .container .pages p span i{
    padding: 0 5px;
}
.shop-comment .container .pages p .sheng{
    border: none;
}
.shop-comment .container .pages p .blue{
    color: #2953a6;
}
.shop-comment .container .pages .logo{
    position: absolute;
    width: 60px;
    height: 20px;
    top: -21px;
    right: 14px;
    background-image: url('https://img.alicdn.com/tfs/TB1dPA5RXXXXXboaXXXXXXXXXXX-70-20.png')
}
</style>
