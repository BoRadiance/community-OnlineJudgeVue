<!--热门题型-->
<template>
  <div class="panel panel-default" data-aos="fade-left" data-aos-delay="1000">
    <div class="panel-heading">
      <p class="glyphicon glyphicon-fire"> 热门题型</p>
    </div>
    <div class="panel-body">
      <div class="labelList">
        <a class="label label-default" href="#" v-for="(p,index) in hot_tag">{{p.name}}</a>
      </div>
    </div>
  </div>
</template>

<script>
  import {getHotProblemTag} from "../api/api";

  export default {
        name: "oj_hottype",

    data(){
          return{
            hot_tag:[],
          }
    },

    methods:{
        getInfo(){
          getHotProblemTag().then((response)=>{
            console.log(response.data)
            this.hot_tag = response.data;
          }).catch(function (error) {
            console.log(error.response)
          })
        }
    },

    created() {
      this.getInfo();
    },


  }
</script>

<style scoped>
  .labelList {
    padding: 0px;
  }
  a, a:hover {
    text-decoration: none;
    color: #333;
  }
  .label {
    display: inline;
    padding: .2em .6em .3em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25em;
  }
  .labelList .label {
    float: left;
    margin: 5px;
    font-size: 14px;
  }

  .label-default {
    background-color: #777;
  }


</style>
