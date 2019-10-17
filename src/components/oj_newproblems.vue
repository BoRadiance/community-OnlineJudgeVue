<!--最新的问题-->
<template>
  <div class="panel panel-default" data-aos="fade-left" data-aos-delay="1000" >
    <!-- Default panel contents -->
    <div class="panel-heading "> <p class="glyphicon glyphicon-tree-conifer"> 最新题目 </p></div>

    <!-- Table -->
    <table class="table">

      <tbody>
      <tr v-for="(p,index) in problem_list" :key="index">
        <td> <router-link :to="'/oj_problem/'+p.id" > {{p.title}} </router-link> </td>
        <td>{{p.user.username}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {getProblem,host} from "../api/api";

  export default {
    name: "oj_newproblems",
    data(){
          return{
            problem_list:[],
            url : `${host}/codingproblem/?ordering=-create_time`
          }
    },



    methods:{
      getInfo(){
          getProblem(this.url).then((response)=> {
            // console.log('获取所有用户头像成功');
            //  console.log(response);
            this.problem_list = response.data['results'];

          }).catch(function (error) {
            console.log(error.response);

          });
      },
    },

    created() {
      this.getInfo();
    },

  }
</script>

<style scoped>
  a, a:hover {
    text-decoration: none;
    color: #333;
  }
</style>
