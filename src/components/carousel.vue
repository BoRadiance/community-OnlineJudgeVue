<!--幻灯片组件-->
<template>
  <div id="carousel-example-generic" class="carousel slide" data-ride="carousel"data-aos="fade-up" data-aos-delay="300"  >
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#carousel-example-generic" data-slide-to="0" class="active" v-for="(p,index) in imgList" :key="index" v-if="index===0"></li>

      <li data-target="#carousel-example-generic" data-slide-to="1" v-for="(p,index) in imgList " :key="index" v-if="index>=1"></li>

    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <div class="item active"  v-for="(p,index) in imgList" :key="index" v-if="index===0">
        <img :src="p.image" alt="...">
        <div class="carousel-caption">

        </div>
      </div>

      <div class="item" v-for="(p,index) in imgList " :key="index" v-if="index>=1">
        <img :src="p.image" alt="...">
        <div class="carousel-caption">

        </div>
      </div>


    </div>

    <!-- Controls -->
    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

</template>

<script>
import AOS from 'aos'
import {getCarousel,host} from "../api/api";

export default {
        name: "carousel",
      props:{
        id:{
          type:String,
          required:true,
        }
      },

      data(){
          return {
            imgList :[],
            nexturl:"",
          }
      },
      methods:{
        getInfo(){
          getCarousel(this.nexturl).then((response)=>{
            console.log(response.data)
            this.imgList = response.data;
          }).catch(function (error) {
            console.log(error.response);
          })
        }


      },
      created() {
          if(this.id==='oj'){
            this.nexturl =`${host}/ojcarousel/`
          }
          else{
            this.nexturl =`${host}/blogcarousel/`
          }
          this.getInfo();
      },

    }
    AOS.init({
  easing: 'ease-out-back',
  duration: 3000,
  once: true
});


</script>

<style scoped>

</style>
