

<template>
    <div class="search-box">
        <div class="container">
            <h3>大家都在搜索</h3>
            <ul>
                <li v-for="(search,index) in searchs">
                   <span class="num" v-if="index>2">{{index+1}}</span>
                    <span class="num1" v-if="index==0">{{index+1}}</span>
                    <span class="num2" v-if="index==1">{{index+1}}</span>
                    <span class="num3" v-if="index==2">{{index+1}}</span>
                   <span class="name">{{search}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
 export default {
    data:function(){
        return{
          searchs:[]
        }
    },
    mounted(){
        var that = this
        axios.get('/kuwo/api/www/search/searchKey?key=&reqId=9cef9dc0-dad1-11e9-bbd2-bd90be1efccc').then(function(val){
            that.searchs = val.data.data
            // console.log(val.data.data)
        }).catch(function(err){
            console.log(err)
        })
    }
}
</script>

<style scoped>
.search-box{
    width: 290px;
}
.search-box .container{
    width: 100%;
    position: relative;
    left:-12px;
}
.search-box .container h3{
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  padding-left: 10px;
  padding-top: 10px;
  margin-bottom: 8px;
  color: #333;
}
.container ul li{
    width: 100%;
    height: 37px;
    padding-left: 10px;
    padding-top: 5px;
}
.container ul li:hover{
    cursor: pointer;
    background: rgb(245,245,245)
}
.container ul li .num{
    display: inline-block;
    width: 20px;
    height: 20px;
    text-align: center;
    background: rgb(179,179,179);
    color: #fff;
    margin-right: 5px;
}
.container ul li .num1,.num2,.num3{
    display: inline-block;
    width: 20px;
    height: 20px;
    text-align: center;
    color: #fff;
    margin-right: 5px;
    background: rgb(234,67,67);
}
.container ul li .num2{
    background:rgb(255,107,33)
}
.container ul li .num3{
    background:rgb(255,183,0)
}
</style>