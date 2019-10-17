<!--最新的比赛-->
<template>
  <div class="panel panel-default" data-aos="fade-left" data-aos-delay="1000" >
    <!-- Default panel contents -->
    <div class="panel-heading "> <p class="glyphicon glyphicon-fire"> 最近的比赛</p></div>


    <!-- Table -->
    <table class="table">
      <thead>
      <tr>
        <th>比赛名称</th>
        <th>开始时间</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><a href="">第二届校赛 <span class="badge">未开始</span></a></td>
        <td>2019-10-1</td>
      </tr>
      <tr>
        <td><a href="">第二届校赛 <span class="badge">未开始</span></a></td>
        <td>2019-10-1</td>
      </tr>
      <tr>
        <td><a href="">第二届校赛 <span class="badge">未开始</span></a></td>
        <td>2019-10-1</td>
      </tr>
      <tr>
        <td><a href="">第二届校赛 <span class="badge">未开始</span></a></td>
        <td>2019-10-1</td>
      </tr>
      <tr>
        <td><a href="">第一届校赛 <span class="badge">已结束</span></a></td>
        <td>2019-10-1</td>
      </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
    export default {
        name: "oj_newcontents"
    }
</script>

<style scoped>
  a, a:hover {
    text-decoration: none;
    color: #333;
  }
</style>
