<template>
  <div>
    <blog_nav></blog_nav>
    <oj_header></oj_header>
    <div style="height: 100px;"></div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <!--竞赛列表-->
          <div class="widget-content" data-aos="zoom-in-up" data-aos-delay="300">
            <div class="title"> 竞赛</div>
            <hr>

            <!--下拉框-->
            <select class="select" >
              <option value="1">Private</option>
              <option value="2">Public</option>

            </select>


            <select class="select" >
              <option value="1">Not Started</option>
              <option value="1">Ongoing</option>
              <option value="2">Ended</option>
            </select>


            <!--搜索框-->
            <div class="search">
              <a class=" pull-right glyphicon glyphicon-search" style="padding-top:5px;"></a>
              <input type="text" class="pull-right" placeholder="Search Contest">

            </div>

            <!--竞赛列表-->
            <table class="table table-hover" >
              <thead>
              <tr>
                <th>标题</th>

                <th>开始时间</th>
                <th>时长</th>
                <th>状态</th>

              </tr>
              </thead>
              <tbody>
              <tr>
                <td><router-link  to="/oj_contest/detail/1">南昌理工第二届校赛</router-link></td>
                <td> 2019-8-10 14:00 </td>
                <td> 5 hours</td>
                <td> <p class="text-center mid">Ongoing</p> </td>

              </tr>
              <tr>
                <td>南昌理工第二届校赛 <span class="glyphicon glyphicon-lock "></span></td>
                <td> 2019-8-10 14:00 </td>
                <td> 5 hours</td>
                <td> <p class="text-center low">Not Started </p> </td>

              </tr>
              <tr>
                <td>南昌理工第二届校赛 <span class="glyphicon glyphicon-lock "></span></td>
                <td> 2019-8-10 14:00 </td>
                <td> 5 hours</td>
                <td> <p class="text-center hard">Ended</p> </td>
              </tr>

              <tr>
                <td>南昌理工第二届校赛</td>
                <td> 2019-8-10 </td>
                <td> 5 hours</td>
                <td> <p class="text-center mid">Ongoing</p> </td>
              </tr>

              <tr>
                <td>南昌理工第二届校赛 <span class="glyphicon glyphicon-lock "></span></td>
                <td> 2019-8-10 </td>
                <td> 5 hours</td>
                <td> <p class="text-center low">Not Started </p> </td>
              </tr>

              <tr>
                <td>南昌理工第二届校赛</td>
                <td> 2019-8-10 </td>
                <td> 5 hours</td>
                <td> <p class="text-center hard">Ended</p> </td>
              </tr>

              <tr>
                <td>南昌理工第二届校赛 <span class="glyphicon glyphicon-lock "></span></td>
                <td> 2019-8-10 </td>
                <td> 5 hours</td>
                <td> <p class="text-center mid">Ongoing</p> </td>
              </tr>

              <tr>
                <td>南昌理工第二届校赛</td>
                <td> 2019-8-10 </td>
                <td> 5 hours</td>
                <td> <p class="text-center low">Not Started </p> </td>
              </tr>

              <tr>
                <td>南昌理工第二届校赛</td>
                <td> 2019-8-10 </td>
                <td> 5 hours</td>
                <td> <p class="text-center hard">Ended</p> </td>
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
</template>

<script>
  import oj_header from  '../components/oj_nav'
  import blog_nav from '../components/community/comm_nav'
    export default {
        name: "oj_contest",
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


  /*比赛状态 */
  .low{
    width: 80px;
    height: 20px;
    background-color: #4cae4c;
    color:white;

  }
  .mid{
    width:  80px;
    height: 20px;
    background-color: #2d8cf0;
    color:white;
  }
  .hard{
    width:  80px;
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
    width: 200px;
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
  /*搜索框*/

  .table{
    margin-top:20px;
  }



  td>a{
    color: black;
    text-decoration: none;
  }

  td>a:hover{
    color: black;
    text-decoration: none;
  }


</style>
