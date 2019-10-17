<!--负责oj排行显示-->
<template>
  <div class="panel panel-default" data-aos="fade-down" data-aos-delay="1000" >
    <!-- Default panel contents -->
    <div class="panel-heading"><p class="glyphicon glyphicon-stats"> 贡献排行榜-周榜</p></div>
    <div class="panel-body">
      <p>通过用户上传通过的题目数量来进行排序...请大家多多创作和上传题目</p>
    </div>

    <!--排行周榜-->

    <table class="table">
      <thead>
      <tr>
        <th>#</th>
        <th>用户名</th>
        <th>贡献点</th>
        <th>签名</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>20</td>
        <td>我贡献,我快乐,我是ACMer</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Mark</td>
        <td>20</td>
        <td>我贡献,我快乐,我是ACMer</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Mark</td>
        <td>20</td>
        <td>我贡献,我快乐,我是ACMer</td>

      </tr>
      <tr>
        <th scope="row">4</th>
        <td>Mark</td>
        <td>20</td>
        <td>我贡献,我快乐,我是ACMer</td>

      </tr>
      <tr>
        <th scope="row">5</th>
        <td>Mark</td>
        <td>20</td>
        <td>我贡献,我快乐,我是ACMer</td>

      </tr>
      <tr>
        <th scope="row">6</th>
        <td>Mark</td>
        <td>20</td>
        <td>我贡献,我快乐,我是ACMer</td>

      </tr>
      <tr>
        <th scope="row">7</th>
        <td>Mark</td>
        <td>20</td>
        <td>我贡献,我快乐,我是ACMer</td>

      </tr>
      <tr>
        <th scope="row">8</th>
        <td>Mark</td>
        <td>20</td>
        <td>我贡献,我快乐,我是ACMer</td>

      </tr>
      <tr>
        <th scope="row">9</th>
        <td>Mark</td>
        <td>20</td>
        <td>我贡献,我快乐,我是ACMer</td>

      </tr>
      <tr>
        <th scope="row">10</th>
        <td>Mark</td>
        <td>20</td>
        <td>我贡献,我快乐,我是ACMer</td>

      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

    export default {
        name: "rank"
    }
</script>

<style scoped>
  a, a:hover {
    text-decoration: none;
    color: #333;
  }
</style>
