<template>
  <div>
    <blog_nav></blog_nav>
    <oj_header></oj_header>

    <div class="container" style="margin-top: 100px;">
      <div class="row">
        <div class="col-md-12">
          <!--公告-->
          <div class="panel panel-default" data-aos="fade-up" data-aos-delay="300" >
            <!-- Default panel contents -->
            <div class="panel-heading "> <p class="glyphicon glyphicon-flag"> 公告</p>

            </div>

            <!-- Table -->
            <table class="table">
              <tbody>
              <tr v-for="(p,index) in ann_list" :key="index">

                <td><router-link :to="'oj_ann/'+p.id">{{p.title}}</router-link></td>
                <td>{{p.create_time}}</td>
                <td>By {{p.Belong.username}}</td>
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
  import oj_header from  '../components/oj_nav'
  import blog_nav from '../components/community/comm_nav'
  import {getAnnouncements} from "../api/api";

  export default {
        name: "oj_ann_list",
      components:{
        oj_header,
        blog_nav,
      },
      data(){
        return{
          ann_list :[],
        }
      },

      methods:{
        getInfo(){
          getAnnouncements().then((response=>{
            this.ann_list = response.data;
            console.log(response.data);
          })).catch(function (error) {
            console.log(error.response)
          })
        }
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

  /*分页*/
  .pagination{ text-align: center;font-size: 12px;padding: 10px 0;display:inline-block}
  .pagination a,.pagination span{display: inline-block;padding: 0 10px;height: 28px;line-height: 28px;border: 1px solid #ddd;border-radius: 4px;text-decoration: none;color: #999;cursor: pointer;  margin-right:5px;}
  .pagination a:hover:not(.disabled):not(.current),.pagination span:hover:not(.disabled):not(.current){color:#f04848}
  .pagination a.disabled,.pagination span.disabled{color: #bfbfbf;background: #f5f5f5;cursor: no-drop;border: 1px solid #ddd;}

  /*分页*/


</style>
