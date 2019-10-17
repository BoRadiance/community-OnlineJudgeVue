<template>
    <div>
      <blog_nav></blog_nav>
      <oj_header></oj_header>
      <div style="height: 100px"></div>
      <div class="container" >
        <div class="row">
          <div class="col-sm-12">

            <div class="widget-content" data-aos="fade-up" data-aos-delay="300">
              <div class="title"> 评测列表 </div>
              <hr>

              <select class="select" >
                <option value="1">All</option>
                <option value="2">Mine</option>

              </select>

              <a  class="pull-right glyphicon glyphicon-refresh refresh" href="javascript:">

              </a>

              <!--搜索框-->
              <div class="search">
                <a class=" pull-right glyphicon glyphicon-search" style="padding-top:5px;"></a>
                <input type="text" class="pull-right text-center" placeholder="Search Author or problem_id">

              </div>

              <!--响应评测表-->
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead>
                  <tr>
                    <th>序号</th>

                    <th>提交时间</th>
                    <th>问题</th>
                    <th>状态</th>
                    <th>时间</th>
                    <th>内存</th>
                    <th>语言</th>
                    <th>作者</th>

                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td> 2019-8-10 14:00 </td>
                    <td> 2</td>
                    <td> <p class="text-center ac">Accepted</p> </td>
                    <td> 30ms </td>
                    <td> 1MB</td>
                    <td> C++ </td>
                    <td>Radiacne</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td> 2019-8-10 14:00 </td>
                    <td> 2</td>
                    <td> <p class="text-center other">Time Limit Exceeded</p> </td>
                    <td> 30ms </td>
                    <td> 1MB</td>
                    <td> C++ </td>
                    <td>Radiacne</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td> 2019-8-10 14:00 </td>
                    <td> 2</td>
                    <td> <p class="text-center other">Memory Limit Exceeded</p> </td>
                    <td> 30ms </td>
                    <td> 1MB</td>
                    <td> C++ </td>
                    <td>Radiacne</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td> 2019-8-10 14:00 </td>
                    <td> 2</td>
                    <td> <p class="text-center pending">Pending</p> </td>
                    <td> 30ms </td>
                    <td> 1MB</td>
                    <td> C++ </td>
                    <td>Radiacne</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td> 2019-8-10 14:00 </td>
                    <td> 2</td>
                    <td> <p class="text-center judging">Judging</p> </td>
                    <td> 30ms </td>
                    <td> 1MB</td>
                    <td> C++ </td>
                    <td>Radiacne</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td> 2019-8-10 14:00 </td>
                    <td> 2</td>
                    <td> <p class="text-center other">Compile Error</p> </td>
                    <td> 30ms </td>
                    <td> 1MB</td>
                    <td> C++ </td>
                    <td>Radiacne</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td> 2019-8-10 14:00 </td>
                    <td> 2</td>
                    <td> <p class="text-center other"> Wrong Answer </p> </td>
                    <td> 30ms </td>
                    <td> 1MB</td>
                    <td> C++ </td>
                    <td>Radiacne</td>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td> 2019-8-10 14:00 </td>
                    <td> 2</td>
                    <td> <p class="text-center ac">Accepted</p> </td>
                    <td> 30ms </td>
                    <td> 1MB</td>
                    <td> C++ </td>
                    <td>Radiacne</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td> 2019-8-10 14:00 </td>
                    <td> 2</td>
                    <td> <p class="text-center other">Time Limit Exceeded</p> </td>
                    <td> 30ms </td>
                    <td> 1MB</td>
                    <td> C++ </td>
                    <td>Radiacne</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td> 2019-8-10 14:00 </td>
                    <td> 2</td>
                    <td> <p class="text-center other">Memory Limit Exceeded</p> </td>
                    <td> 30ms </td>
                    <td> 1MB</td>
                    <td> C++ </td>
                    <td>Radiacne</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td> 2019-8-10 14:00 </td>
                    <td> 2</td>
                    <td> <p class="text-center pending">Pending</p> </td>
                    <td> 30ms </td>
                    <td> 1MB</td>
                    <td> C++ </td>
                    <td>Radiacne</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td> 2019-8-10 14:00 </td>
                    <td> 2</td>
                    <td> <p class="text-center judging">Judging</p> </td>
                    <td> 30ms </td>
                    <td> 1MB</td>
                    <td> C++ </td>
                    <td>Radiacne</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td> 2019-8-10 14:00 </td>
                    <td> 2</td>
                    <td> <p class="text-center other">Compile Error</p> </td>
                    <td> 30ms </td>
                    <td> 1MB</td>
                    <td> C++ </td>
                    <td>Radiacne</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td> 2019-8-10 14:00 </td>
                    <td> 2</td>
                    <td> <p class="text-center other"> Wrong Answer </p> </td>
                    <td> 30ms </td>
                    <td> 1MB</td>
                    <td> C++ </td>
                    <td>Radiacne</td>
                  </tr>

                  </tbody>
                </table>
                <div class="pagination pull-right">
                  <span class="disabled" title="首页">首页</span>
                  <span class="disabled" title="上一页">上一页</span>


                  <span>下一页</span>
                  <span>尾页</span>
                </div>

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
    export default {
        name: "oj_state",

      components:{
          oj_header,
        blog_nav,
      }
    }
</script>

<style scoped>
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
  .pending {
    width: 100px;
    height: 20px;
    background-color:#2d8cf0 ;
    color:white;
  }

  .judging{
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
