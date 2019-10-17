<template>
  <div>

    <blog_person_nav :id="propsid"></blog_person_nav>

    <div class="container">
      <div class="row">
        <div class="col-md-12 mar-bottom"  data-aos="fade-up" data-aos-delay="300">
          <router-link  to="/comm_add_article" class="btn-primary mybutton text-center mar-bottom mar-top " ><font-awesome-icon icon="plus"  />添加新文章</router-link>

        </div>
        <div class="col-md-12">
          <div class="widget-content" data-aos="fade-up" data-aos-delay="300">
            <div class="title text-center"> 文章列表  (点击描述进行编辑) </div>
            <hr>



            <!--不使用表格-->
            <div class="row">

              <div class="col-md-4 text-center">
               <strong>标题</strong>
              </div>
              <div class="col-md-4 text-center">
                <strong>描述</strong>
              </div>
              <div class="col-md-1 text-center">
                <strong>状态</strong>
              </div>
              <div class="col-md-1 text-center">
                <strong>私密方式</strong>
              </div>

              <div class="col-md-2 text-center">
                <strong>删除</strong>
              </div>

            </div>

            <hr>



            <div class="row" v-for="(p,index) in article_list" :key="index">

              <div class="col-md-4  text-center">
                <div class="change-a"  v-if="!p.title">这是一个没有标题的动态</div>
                <div class="change-a"  v-if="p.title">{{p.title }}</div>
              </div>
              <div class="col-md-4 text-center">
                <p><router-link :to="'/articleupdate/'+p.id">{{p.desc}}</router-link></p>
              </div>
              <div class="col-md-1  text-center ">
                <div class="ac middle" v-if="p.State===1">审核通过</div>
                <div class="pending middle" v-if="p.State===2">审核中</div>
                <div class="other middle" v-if="p.State===3">审核不通过</div>

              </div>
              <div class="col-md-1 text-center">
                <a href="javascript:;"><font-awesome-icon v-if="!p.is_disabled" icon="lock-open" /></a>
                <a href="javascript:;"><font-awesome-icon v-if="p.is_disabled" icon="lock" /></a>
              </div>

              <div class="col-md-2 text-center ">
                <a  class="other text-center " href="javascript:;" @click="delInfo(p.id)">删除</a>
              </div>
            </div>

            <hr>


            <!--分页-->
            <div  @click="nextpag" class="pagination pull-right">
              <span> 加载更多</span>

            </div>

          </div>
        </div>

      </div>
      </div>

    </div>


</template>

<script>

  import blog_person_nav from '../../components/community/comm_person_nav'
  import {getArticle2,delArticle} from "../../api/api";
  import {host} from "../../api/api";

  export default {
        name: "comm_admin_article",

      components:{
          blog_person_nav,
      },
      data(){
          return {

             nexturl:`${host}`+'/adminarticle/?ordering=-create_time',
            article_list:[],
            propsid :'',
          }
      },

      methods:{
        getInfo(){
            getArticle2(this.nexturl).then((response)=> {
              console.log(response.data);
              this.nexturl = response.data['next'];
              this.article_list =  this.article_list.concat(response.data['results']);
            })
              .catch(function (error) {
                console.log(error);
              });
        },

        nextpag()
        {
           this.getInfo(this.nexturl);
        },

        delInfo(id){
          if(confirm('确定要删除嘛? ')===true)
          {
            delArticle(id).then((response)=> {
              alert('删除成功');
              this.article_list=[];
              this.getInfo();
            }).catch(function (error) {
              alert(error.response);
            });
          }
        }


      },



      created() {
          this.getInfo(this.nexturl);
          this.propsid = localStorage.getItem('user_id');
      },


    }
</script>

<style scoped>

  a{
    text-decoration: none;
  }

  /*面板&样式*/
  .widget-content {
    display: inline-block;
    border-radius: 5px;
    width: 100%;
    background-color:white;
    margin-bottom: 20px;

  }
  .no-margin{
    margin:0 ;
  }
  .widget-tags {
    padding: 13px 13px 13px 13px;
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


  .widget-content2 {
    display: inline-block;
    border-radius: 5px;
    width: 100%;
    background-color:#eee;


  }

  .widget-content-padding{
    padding-left: 23px;
    padding-right:23px;
  }

  .top-head{
    background-color:#eee;
  }






  .title{
    font-size: 14px;
    font-weight: 700;
    color: #515365;
    display: block;
    text-decoration: none;
    padding-top:12px;
  }

  .title-a{
    font-size: 10px;
    font-weight: 700;
    color: #9a9fbf;
    display: block;
    text-decoration: none;

  }

  .title-content{
    padding-bottom: 20px;
  }

  /*tag &样式*/






  .row{
    margin-top: 20px;
  }


  .top-row{
    margin-top:20px;
  }


  .widget-content  img{
    display: block;
    width:100%;
    border-radius: 5px 5px 0 0;

    overflow:hidden;
  }

  .person-nav{
    margin: 0;
    position: relative;
    padding: 28px 0;
    z-index: 3;
  }

  .profile-menu {
    margin-bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    justify-content: space-around;
  }

  .profile-menu li a.active {
    color: #515365;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  .profile-menu li a {
    font-size: 14px;
    font-weight: 700;
    color: #9a9fbf;
    display: block;
    text-decoration: none;
  }
  .profile-menu li a:hover{
    color:#515365;
  }
  /* reapeat set*/
  li a {
    font-size: 14px;
    font-weight: 700;
    color: #9a9fbf;
    display: block;
    text-decoration: none;
  }
  .change-a{
    text-decoration: none;
    color: #515365;
  }

  li a:hover{
    color:#515365;
  }

  li a.active {
    color: #515365;
  }
  li{
    list-style: none;
  }
  /**/
  .author-thumb {
    border-radius: 100%;
    border: 6px solid #fff;
    margin: 0 auto;
    overflow: hidden;
    width: 132px;
    height: 132px;
    background-color: #FDFBEE;

  }
  .top-header-author {
    position: absolute;
    left: 50%;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    bottom: 15px;
    text-align: center;
    max-width: 200px;
    z-index: 4;
  }
  .top-header-author .author-thumb img {
    border-radius: 50%;
    display: block;

  }

  p{
    color:#888da8
  }

  .post {
    position: relative;
    padding: 25px;
    border-bottom: 1px solid #e6ecf5;
  }
  .post__author {
    margin-bottom: 20px;
  }
  .post__author img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    overflow: hidden;
    margin-right: 12px;
  }


  .friends-harmonic {
    margin-bottom: 0;
    overflow: hidden;
  }
  .friends-harmonic li {
    float: left;
  }
  .friends-harmonic a {
    width: 28px;
    height: 28px;
    border-radius: 100%;
    overflow: hidden;
    border: 2px solid #fff;
    display: block;
    margin-left: -12px;
  }
  .friends-harmonic li:first-child a {
    margin-left: 0;
  }

  .mar-left{
    margin-left:10px ;
  }

  .mar-right{
    margin-right: 10px;
  }
  .mar-top{
    margin-top:10px ;
  }

  .mar-bottom{
    margin-bottom: 10px;
  }

  .pad-left{
    padding-left: 10px;
  }

  .pad-right{
    padding-right: 10px;
  }
  .pad-top{
    padding-top: 10px;
  }

  .pad-bottom{
    padding-bottom: 10px;
  }


  p img{
    width: 50%;
    height: 50%;
  }


  .item{
    margin:0 auto;
    margin-top:15%;
    margin-bottom: 20%;
    width: 50px;
    height: 50px;
    background: white;
    border-radius: 50%;
  }

  .row-change-mar{
    margin: 1px 1px 1px 1px;
    padding: 1px 1px 1px 1px;

  }


  /*分页*/
  .pagination{ text-align: center;font-size: 12px;padding: 10px 0;display:inline-block}
  .pagination a,.pagination span{display: inline-block;padding: 0 10px;height: 28px;line-height: 28px;border: 1px solid #ddd;border-radius: 4px;text-decoration: none;color: #999;cursor: pointer;  margin-right:5px;}
  .pagination a:hover:not(.disabled):not(.current),.pagination span:hover:not(.disabled):not(.current){color:#f04848}
  .pagination a.disabled,.pagination span.disabled{color: #bfbfbf;background: #f5f5f5;cursor: no-drop;border: 1px solid #ddd;}

  /*分页*/



  /*评测状态 */
  .ac{
    width: 80px;
    height: 20px;
    background-color: #4cae4c;
    color:white;

  }
  .pending {
    width: 80px;
    height: 20px;
    background-color:#2d8cf0 ;
    color:white;
  }


  .other{
    width:  80px;
    height: 20px;
    background-color: red;
    color:white;
  }

  .middle {

    float: none;

    display: inline-block;

    vertical-align: middle;

  }

</style>
