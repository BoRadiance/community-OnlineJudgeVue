<template>
 <div>
   <blog_nav></blog_nav>
   <oj_header></oj_header>

   <div class="container">
    <div style="height: 100px"></div>
     <div class="row">
       <div class="col-sm-4">
         <!--竞赛信息-->
         <div class="panel panel-default" data-aos="fade-right" data-aos-delay="1000" >
           <!-- Default panel contents -->
           <div class="panel-heading "> <p class="glyphicon glyphicon-tree-conifer"> 竞赛信息 </p>
           </div>

           <p class="text-center">
             开始时间：2019 年 8 月 1 日 12:00 <br>
             距开始还有：01 天 18 小时 42 分钟 08 秒<br>
             比赛时长：5 小时<br>

             题目数量：8<br>
           </p>

         </div>

         <!--竞赛排行-->
         <div class="panel panel-default" data-aos="fade-right" data-aos-delay="1000" >
           <!-- Default panel contents -->
           <div class="panel-heading "> <p class="glyphicon glyphicon-th-list"> 竞赛排行 </p>
           </div>
           <div>
             <router-link to="/oj_contest_rank/1" class="rank glyphicon glyphicon-share-alt"></router-link>
           </div>



         </div>
       </div>

       <div class="col-sm-8">
         <div class="widget-content" data-aos="fade-left" data-aos-delay="500">
           <div class="title"> 南昌理工学院第二届 森岚杯 </div>
           <!--问题-->
           <table class="table table-hover">
             <thead>
             <tr>
               <th>#</th>
               <th>标题</th>

               <th>提交</th>
               <th>通过</th>
               <th>通过率</th>

             </tr>
             </thead>
             <tbody>
             <tr>

               <th scope="row">1</th>
               <td><a href="problemdetail.html">A+B problem</a>  </td>

               <td>100</td>
               <td>80</td>
               <td>50.0%</td>

             </tr>
             <tr>

               <th scope="row">1</th>
               <td><a href="problemdetail.html">A+B problem</a>  </td>

               <td>100</td>
               <td>80</td>
               <td>50.0%</td>

             </tr>
             <tr>

               <th scope="row">1</th>
               <td><a href="problemdetail.html">A+B problem</a>  </td>

               <td>100</td>
               <td>80</td>
               <td>50.0%</td>

             </tr>
             <tr>

               <th scope="row">1</th>
               <td><a href="problemdetail.html">A+B problem</a>  </td>

               <td>100</td>
               <td>80</td>
               <td>50.0%</td>

             </tr>
             <tr>

               <th scope="row">1</th>
               <td><a href="problemdetail.html">A+B problem</a>  </td>

               <td>100</td>
               <td>80</td>
               <td>50.0%</td>

             </tr>
             <tr>

               <th scope="row">1</th>
               <td><a href="problemdetail.html">A+B problem</a>  </td>

               <td>100</td>
               <td>80</td>
               <td>50.0%</td>

             </tr>
             <tr>

               <th scope="row">1</th>
               <td><a href="problemdetail.html">A+B problem</a>  </td>

               <td>100</td>
               <td>80</td>
               <td>50.0%</td>

             </tr>
             <tr>

               <th scope="row">1</th>
               <td><a href="problemdetail.html">A+B problem</a>  </td>

               <td>100</td>
               <td>80</td>
               <td>50.0%</td>

             </tr>



             </tbody>
           </table>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
  import blog_nav from '../components/community/comm_nav'
  import oj_header from  '../components/oj_nav'


    export default {
        name: "oj_contest_detail",
      components:{
          oj_header,
        blog_nav,
      }
    }
</script>

<style scoped>
  .panel-default>.panel-heading {
    background-color: white;
    border-radius:30px;
    border-bottom:none;
  }
  .panel{
    background-color: white;
    border-radius:20px;
  }

  /*tag &样式*/
  .widget-content {
    display: inline-block;
    padding: 20px 34px 55px 34px;
    width: 100%;
    background-color:white;
    margin-bottom:20px;


    border-radius:30px;
  }
  .widget-tags {
    margin: 0;
    padding: 0;
  }


  .title{
    width:100%; display:block; line-height:1.5em; overflow:visible; font-size:22px; text-shadow:#f3f3f3 1px 1px 0px, #b2b2b2 1px 2px 0
  }
  /*tag &样式*/

  .title2{
    width:100%; display:block; line-height:1.5em; overflow:visible; font-size:18px; text-shadow:#f3f3f3 1px 1px 0px, #b2b2b2 1px 2px 0
  }


  /*题目点击标题*/
  td>a{
    color: black;
    text-decoration: none;
  }

  td>a:hover{
    color: black;
    text-decoration: none;
  }
  /*题目点击标题*/

  /*竞赛排行*/
  .rank{
    color: black;
    text-decoration: none;
    margin-left: 20px;
  }



</style>
