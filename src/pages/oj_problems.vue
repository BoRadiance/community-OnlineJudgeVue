<template>
   <div>
     <blog_nav></blog_nav>
     <oj_header></oj_header>
     <div style="height: 100px;"></div>
      <div class="container">
        <div class="row">
           <div class="col-sm-3">
             <!--题目的标签-->
             <div class="widget-content" data-aos="fade-right" data-aos-delay="500">
               <div class="title"> Screen</div>
               <hr>
               <div class="widget-tags">
                 <a href="javascript:;" @click="changeUrl(-1)">显示所有</a>
                 <hr>
                 <a href="javascript:;" v-for="(p,index) in tagList" :key="index" @click="changeUrl(p.id)">{{p.name}}</a>
                 <hr>
                 <a href="javascript:;" @click="changedegree(1)">low</a>
                 <a href="javascript:;" @click="changedegree(2)">mid</a>
                 <a href="javascript:;" @click="changedegree(3)">hard</a>
               </div>
             </div>
           </div>
          <div class="col-sm-9">
            <!--题目的列表-->
            <div class="widget-content" data-aos="fade-left" data-aos-delay="500">
              <div class="title"> Problem List</div>
              <router-link  to="/oj_add_problem" class="btn-primary mybutton text-center mar-bottom mar-top  pull-right" ><font-awesome-icon icon="plus"  />上传题目</router-link>

              <hr>





              <div class="search">
                <!--搜索框-->
                <a class=" pull-right glyphicon glyphicon-search" style="padding-top:5px;" @click="searchproblem"></a>

                <input v-model="searchkeyword" type="text" class="pull-right" placeholder="Search Problem">


              </div>





              <!--问题-->
              <table class="table table-hover">
                <thead>
                <tr>
                  <th>#</th>
                  <th>标题</th>
                  <th>难度</th>
                  <th>提交</th>
                  <th>通过</th>
                  <th>通过率</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(p,index) in problemList" :key="index">

                  <th scope="row">{{p.id}}</th>

                  <td><router-link :to="'/oj_problem/'+p.id">{{p.title}}</router-link>  </td>
                  <td v-if="p.degree===1"> <p class="low text-center ">Low </p> </td>
                  <td v-if="p.degree===2"> <p class="mid text-center ">Mid</p>  </td>
                  <td v-if="p.degree===3"> <p class="hard text-center ">Mid</p>  </td>
                  <td>{{p.submit_number}}</td>
                  <td>{{p.ac_number}}</td>
                  <td>{{ (Number(p.ac_number) /Number(p.submit_number)).toFixed(3) }} </td>
                </tr>

                </tbody>
              </table>
              <div class="pagination pull-right">
                <span @click="prepage">上一页</span>
                <span @click="nextpage">下一页</span>
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>

</template>

<script>
  import oj_header from  '../components/oj_nav'
  import blog_nav from '../components/community/comm_nav'
  import {getProblem,host,getProblemTag} from "../api/api";

  export default {
        name: "oj_problems",
      components:{
          oj_header,
        blog_nav,
      },

    data(){
          return{
              tagList:[],
              problemList:[],
              preurl:'',
              nexturl:`${host}/codingproblem`,
            searchkeyword:'',
          }
    },

    methods:{
          getTagInfo(){
              getProblemTag().then((response)=>{
                  this.tagList = response.data;
              }).catch(function (error) {
                console.log(error.response)
              })
          },

          getInfo(){
              getProblem(this.nexturl).then((response)=>{
                this.nexturl = response.data['next'];
                this.preurl = response.data['previous'];
                this.problemList = response.data['results'];
              }).catch(function (error) {
                console.log(error.response);
              })
          },

      changeUrl(id)
      {
        if(id!==-1) {
          this.problemList = [];
          this.nexturl = `${host}/codingproblem/?tags=`+id;
          this.getInfo();
        }
        else{
          this.problemList = [];
          this.nexturl = `${host}/codingproblem/`;
          this.getInfo();
        }

      },

      changedegree(id){
        this.problemList = [];
        this.nexturl = `${host}/codingproblem/?degree=`+id;
        this.getInfo();
      },


      searchproblem(){
        this.problemList = [];
        this.nexturl = `${host}/codingproblem/?search=`+this.searchkeyword;
        this.getInfo();
      },


      prepage(){
         if(this.preurl){
           this.nexturl = this.preurl;
           this.getInfo();
         }
      },

      nextpage(){
          this.getInfo();
      },

    },

    created() {
          this.getTagInfo();
          this.getInfo();
    },

  }
</script>

<style scoped>

  .filled{
    height: 70px;
  }
  /*tag &样式*/
  .widget-content {
    display: inline-block;
    padding: 20px 34px 55px 34px;
    width: 100%;
    background-color:white;


    border-radius:30px;
  }
  .widget-tags {
    margin: 0;
    padding: 0;
  }
  .widget-tags a {
    display: inline-block;
    font-size: 10px;
    line-height: 11px;

    font-weight: normal;
    color: #888;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 30px;
    border: 1px solid #e2e2e2;
    padding: 7px 13px;
    margin-bottom: 5px;
    -webkit-transition: all 0.25s ease;
    -moz-transition: all 0.25s ease;
    transition: all 0.25s ease;
  }
  .widget-tags a:hover{
    background-color:#2d8cf0;
    color:white;
  }

  .title{
    width:100%; display:block; line-height:1.5em; overflow:visible; font-size:22px; text-shadow:#f3f3f3 1px 1px 0px, #b2b2b2 1px 2px 0
  }
  /*tag &样式*/





  /*下拉框*/

  .select {
    display: inline-block;
    width: 100px;
    position: relative;
    vertical-align: middle;
    padding: 0;
    overflow: hidden;
    background-color: #fff;
    color: #555;
    border: 1px solid #aaa;
    text-shadow: none;
    border-radius: 4px;
    transition: box-shadow 0.25s ease;
    z-index: 2;
  }

  .select:hover {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  }

  .select:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: #ccc;
    top: 14px;
    right: 10px;
    cursor: pointer;
    z-index: -2;
  }
  .select select {
    cursor: pointer;
    padding: 10px;
    width: 100%;
    border: none;
    background: transparent;
    background-image: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  .select select:focus {
    outline: none;
  }

  /*下拉框*/



  /*难度*/
  .low{
    width: 40px;
    height: 20px;
    background-color: #4cae4c;
    color:white;

  }
  .mid{
    width: 40px;
    height: 20px;
    background-color: #2d8cf0;
    color:white;
  }
  .hard{
    width: 40px;
    height: 20px;
    background-color: orangered;
    color:white;
  }
  /*难度*/

  /*分页*/
  .pagination{ text-align: center;font-size: 12px;padding: 10px 0;display:inline-block}
  .pagination a,.pagination span{display: inline-block;padding: 0 10px;height: 28px;line-height: 28px;border: 1px solid #ddd;border-radius: 4px;text-decoration: none;color: #999;cursor: pointer;  margin-right:5px;}
  .pagination a:hover:not(.disabled):not(.current),.pagination span:hover:not(.disabled):not(.current){color:#f04848}
  .pagination a.disabled,.pagination span.disabled{color: #bfbfbf;background: #f5f5f5;cursor: no-drop;border: 1px solid #ddd;}

  /*分页*/



  /*搜索框*/

  input {
    border-bottom: 1px solid #dbdbdb;
    border-top:0px;
    border-left:0px;
    border-right:0px;
  }

  .search{
    height: 20px;
    width: 100% ;
    margin-top: 20px;
  }



  .table{
    margin-top:20px;
  }

  /*搜索框*/


  /*题目点击标题*/
  td>a{
    color: black;
    text-decoration: none;
  }

  td>a:hover{
    color: black;
    text-decoration: none;
  }
</style>
