<!--每日一句-->
<template>
  <div class="sentence" data-aos="fade-left" data-aos-delay="1000" > <strong>每日一句</strong>
    <h3>{{date}}</h3>
    <p style="color:red;">{{sen}}</p>
  </div>
</template>

<script>
  import {getDaySen} from "../api/api";

  export default {
        name: "oj_sentence",
      data(){
        return{
          date:new Date(),
          sen :""
        }
      },

      created() {
          getDaySen().then(response=>{
            console.log(response)
            this.sen = response.data.sen;
          }).catch(function (error) {
            alert()
          })
      },


      mounted() {
        var _this = this; //声明一个变量指向vue实例this,保证作用域一致
        this.timer = setInterval(function() {
          _this.date = new Date();//修改数据date
        }, 1000);
      },

      beforeDestroy () {
        if(this.timer) {
          clearInterval(this.timer);//在vue实例销毁钱，清除我们的定时器
        }
      }
    }
</script>

<style scoped>
  .sentence{
    margin-bottom: 20px;
    position: relative;
    padding: 30px 10px 10px 10px;
    border: 1px solid white;
    cursor: default;
  }
  .sentence:hover{
    border: 1px solid #3276b1;
  }
  .sentence strong{

    background: #3399CC;
    color: #FFF;
    font-size: 14px;
    font-weight: 100;
    padding: 5px 10px;
    position: absolute;
    left: 0;
    top: 0;

  }
</style>
