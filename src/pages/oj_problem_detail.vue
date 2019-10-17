<template>
  <div>
    <blog_nav></blog_nav>
    <oj_header></oj_header>

    <div class="container">

      <div style="height: 100px"></div>
      <div class="row">
        <div class="col-sm-9">
          <!--题目-->
          <div class="widget-content" data-aos="fade-right" data-aos-delay="500">
            <div class="title">{{problem.title}}</div>


            <hr>

            <div class="title2">Problem Description</div>
            <div v-html="problem.pro_desc" v-highlight >

            </div>


            <div class="title2">Input</div>

            <div v-html="problem.pro_input" v-highlight >

            </div>


            <div class="title2">Output</div>

            <div v-html="problem.pro_output" v-highlight >

            </div>


            <div class="title2" >Sample Input</div>


            <div v-html="problem.sample_input"  v-highlight class="copy" id="target" >

            </div>


            <div class="title2">Sample Output</div>
            <div v-html="problem.sample_output" v-highlight class="copy"  >

            </div>

            <div class="title2">Source</div>
            <div v-html="problem.source" v-highlight   >

            </div>

            <div class="title2">Hit</div>
            <div v-html="problem.hit">

            </div>

          </div>

          <!--提交代码-->
          <div class="widget-content" data-aos="fade-right" data-aos-delay="500">
            <div class="title">提交代码</div>
            <hr>
            <!--下拉框-->
            <select class="select" >
              <option value="1">C++</option>
              <option value="2">Java</option>
              <option value="3">Python3</option>
            </select>
            <div class="filled"></div>

            <form action="" method="post">
              <textarea type="text" id="text1" class="text"></textarea>
              <input type="submit" class="pull-right submit" value="submit">
            </form>

          </div>

        </div>

        <div class="col-sm-3">
          <!--题目信息-->
          <div class="widget-content" data-aos="fade-left" data-aos-delay="500">
            <div class="panel-heading "> <p class="glyphicon glyphicon-tree-conifer"> 题目信息 </p>
            </div>
            <!-- Table -->
            <table class="table text-center">

              <tbody>
              <tr>
                <td>序号</td>
                <td>{{problem.id}}</td>
              </tr>

              <tr>
                <td>时间限制</td>
                <td>{{problem.time_limit}}ms</td>
              </tr>

              <tr>
                <td>内存限制</td>
                <td>{{problem.memory_limit}}MB</td>
              </tr>


              <tr>
                <td>Tags</td>
                <td> <a v-for="(p,index) in problem.tags" rel="nofollow" href="#" class="tooltip-test" data-toggle="tooltip"
                        :title="p.name">
                   tags
                </a></td>
              </tr>

              <tr>
                <td>上传者</td>
                <td><router-link :to="'/comm_person/'+problem.user.id+'/about'"> {{problem.user.username }}</router-link></td>
              </tr>


              </tbody>
            </table>


          </div>

          <!--状态-->
          <div class="widget-content" data-aos="fade-left" data-aos-delay="500">
            <div class="panel-heading "> <p class="glyphicon glyphicon-th-list"> 改题提交状态 </p>


            </div>
            <div>
              <router-link to="/oj_state" class="state glyphicon glyphicon-share-alt"></router-link>
            </div>

          </div>

          <!--通过-->
          <div class="widget-content" data-aos="fade-left" data-aos-delay="500">
            <div class="panel-heading "> <p class="glyphicon glyphicon-th-list"> 通过率 </p>
            </div>

            <div class="charts" >
              <div :id="id" :option="option"></div>
            </div>

          </div>


        </div>
      </div>

    </div>


  </div>

</template>

<script>

  import oj_header from  '../components/oj_nav'
  import HighCharts from 'highcharts'
  import blog_nav from '../components/community/comm_nav'
  import {getDetailProblem} from "../api/api";
  import {hight} from "../assets/js/my";

  export default {
        name: "oj_problem_detail",
      components:{
          oj_header,
          blog_nav,
      },
      data() {
        return {
          id: 'test',
          copyBtn: null, //存储初始化复制按钮事件
          option: {
            chart: {
              type: 'pie',//饼图
              options3d: {
                enabled: true,//使用3d功能
                alpha: 60,//延y轴向内的倾斜角度
                beta: 0,
              }
            },
            title: {
              text: 'WA/AC'//图表的标题文字
            },
            subtitle: {
              text: ''//副标题文字
            },


            plotOptions: {
              pie: {
                allowPointSelect: true,//每个扇块能否选中
                cursor: 'pointer',//鼠标指针
                depth: 10,//饼图的厚度
                dataLabels: {
                  enabled: true,//是否显示饼图的线形tip
                },
                size:100,
              }
            },
            colors:[
              '#00FF00',//绿
              '#FF0000',//红
            ],
            series: [
              {
                type: 'pie',

                data: [
                  ['AC',71],
                  ['WA',29]
                ]
              }
            ]
          },
          problem:'',
        }
      },




      methods:{

        getInfo(){
           getDetailProblem(this.$route.params.id).then((response)=>{
             this.problem = response.data;
           }).catch(function (error) {
             console.log(error.response)
           })
        },


      },

      created() {
        this.getInfo();
      },

    watch:{
      problem:function () {
        this.$nextTick(function () {
          hight();
          this.option.series[0].data[0][1]=this.problem.ac_number*100/this.problem.submit_number;
          this.option.series[0].data[1][1]=100-this.problem.ac_number*100/this.problem.submit_number;
          HighCharts.chart(this.id, this.option)
        })
      }
    },
    }
</script>

<style scoped>
  .state{
    color: black;
    text-decoration: none;
    margin-left: 20px;
  }
  .widget-content{
    padding-bottom: 10px;
  }

  .filled{
    height: 20px;
  }
  .filled2{
    height:70px;
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
  .panel-heading{
    border-bottom: 1px solid #eee;
  }
  .widget-tags {
    margin: 0;
    padding: 0;
  }
  .widget-tags a {
    display: inline-block;
    font-size: 10px;
    line-height: 5px;

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

  .title2{
    width:100%; display:block; line-height:1.5em; overflow:visible; font-size:18px; text-shadow:#f3f3f3 1px 1px 0px, #b2b2b2 1px 2px 0
  }






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


  /*样例框*/

  .copy{
    width: 100%;
    border:1px solid #eee;
    margin-top: 10px;
    margin-bottom:10px;
  }



  /*样例框*/
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


  /*输入框*/
  #text1 {
    width: 100%;
    background-color: #282923;
    height: 300px;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    color: #f8f8f2;
    font-size: 16px;
  }

  /*输入框*/

  /*提交按钮*/
  .submit {
    cursor: pointer;
    width: 80px;
    height: 30px;
    font-size: 17px;
    font-weight: 600;
    color: white;
    background-color: #2d8cf0;;
    border-radius: 40px;
    border: 1px solid #2d8cf0;
    transition: all .2s;
    letter-spacing: 1px;
    font-family: 'Helvetica Neue', sans-serif;
  }

  /*提交按钮*/




</style>
