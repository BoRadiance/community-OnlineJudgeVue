<!--oj的导航-->
<template>

    <nav class="navbar  navbar-default  navbar-fixed-top ">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" to="/oj_index">Online Judge</router-link>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li ><router-link to="/oj_index">首页 <span class="sr-only">(current)</span></router-link></li>
            <li><router-link  to="/oj_problem">题目</router-link></li>
            <li><router-link to="/oj_contest">比赛</router-link></li>
            <li><router-link to="/oj_state">状态</router-link></li>

            <li><router-link to="/oj_rank">排行</router-link></li>


          </ul>

          <form class="navbar-form navbar-left">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="搜索博客/题目/用户">
            </div>
            <button type="submit" class="btn btn-default">搜索</button>
          </form>


        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>



</template>

<script>

    export default {
        name: "oj_nav",

      components:{}
    }

</script>

<style scoped>

  .navbar{
    z-index:100;
  }

  .filled{
    height: 70px;
  }
  /*竞赛面板&样式*/
  .widget-content {
    display: inline-block;
    padding: 20px 34px 55px 34px;
    width: 100%;
    background-color:white;


    border-radius:30px;
  }



  .title{
    width:100%; display:block; line-height:1.5em; overflow:visible; font-size:22px; text-shadow:#f3f3f3 1px 1px 0px, #b2b2b2 1px 2px 0
  }
  /*tag &样式*/





  /*下拉框*/

  .select {
    display: inline-block;
    width: 95px;
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


  /*评测状态 */
  .ac{
    width: 80px;
    height: 20px;
    background-color: #4cae4c;
    color:white;

  }
  .judging{
    width: 100px;
    height: 20px;
    background-color:#2d8cf0 ;
    color:white;
  }
  .pending{
    width: 100px;
    height: 20px;
    background-color:#2d8cf0 ;
    color:white;
  }
  .other{
    width:  150px;
    height: 20px;
    background-color: red;
    color:white;
  }
  /*比赛状态 */


  /*分页*/
  .pagination{ text-align: center;font-size: 12px;padding: 10px 0;display:inline-block}
  .pagination a,.pagination span{display: inline-block;padding: 0 10px;height: 28px;line-height: 28px;border: 1px solid #ddd;border-radius: 4px;text-decoration: none;color: #999;cursor: pointer;  margin-right:5px;}
  .pagination a:hover:not(.disabled):not(.current),.pagination span:hover:not(.disabled):not(.current){color:#f04848}
  .pagination a.disabled,.pagination span.disabled{color: #bfbfbf;background: #f5f5f5;cursor: no-drop;border: 1px solid #ddd;}

  /*分页*/


  /*搜索框*/
  input {
    width: 300px;
    border-bottom: 1px solid #dbdbdb;
    border-top:0px;
    border-left:0px;
    border-right:0px;
  }

  .search{
    height: 20px;
    width: 100% ;
    margin-bottom: 20px;
  }

  /*搜索框*/


  /*刷新按钮*/
  .refresh
  {
    color:#2d8cf0 ;
  }


  /*刷新按钮*/
</style>
