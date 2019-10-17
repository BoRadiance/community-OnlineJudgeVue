<!--oj首页-->
<template>
  <div>
    <blog_nav></blog_nav>
    <oj_header></oj_header>
    <div class="container">
      <div class="col-md-8">
        <div class="filled"></div>
        <!--幻灯片-->
       <carousel id="oj"></carousel>
        <div style="height: 20px;"></div>
        <!--公告-->
        <oj_noticelist></oj_noticelist>
        <!--排行-->
        <rank></rank>

      </div>

      <div class="col-md-4">
        <div class="filled"></div>
         <!--每日一句-->
        <oj_sentence></oj_sentence>
         <!--热门题型-->
        <oj_hottype></oj_hottype>
         <!--最新题目-->
        <oj_newproblems></oj_newproblems>
         <!--最近的比赛-->
        <oj_newcontests></oj_newcontests>
         <!--下载app提示-->
        <oj_downtip></oj_downtip>
      </div>

    </div>
  </div>
</template>

<script>
  import oj_header from  '../components/oj_nav'
  import carousel from '../components/carousel'
  import oj_noticelist from '../components/oj_Noticelist'
  import rank from  '../components/rank'
  import oj_downtip from '../components/oj_downtip'
  import oj_hottype from '../components/oj_hottype'
  import oj_newcontests from '../components/oj_newcontents'
  import oj_newproblems from '../components/oj_newproblems'
  import blog_nav from '../components/community/comm_nav'



  import oj_sentence from  '../components/oj_sentence'

    export default {
        name: "test",

     components:{
          oj_header,
          carousel,
          oj_noticelist,
          rank,
          oj_sentence,
          oj_downtip,
          oj_hottype,
          oj_newproblems,
          oj_newcontests,
          blog_nav,

     },

    }
</script>

<style scoped>

  .filled{
    height: 100px;
  }

</style>
