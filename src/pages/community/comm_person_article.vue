<template>
 <div>

   <div class="container">
     <div class="row">
       <div class="col-md-12">
         <div>
           <div class="search" data-aos="fade-up" data-aos-delay="300" style="padding-bottom: 23px;">
             <!--搜索框-->
             <a class=" pull-right glyphicon glyphicon-search" style="padding-top:5px;" @click="searchArticle"></a>

             <input v-model="searchkeyword" type="text" class="pull-right" placeholder="Search 标题和描述">


           </div>
       </div>
     </div>
     <div class="row">
       <div class="col-md-3 pad-bottom">
         <div class="widget-content widget-content-padding" data-aos="fade-right" data-aos-delay="300">
           <div class="title text-center">
             <span class="">Tags 标签</span>
             <p>默认显示所有文章</p>
             <p>点击标签名可以查看相关文章</p>
           </div>

           <hr>
           <div class="widget-tags" >
             <a href="javascript:; "  v-for="(p,index) in tagList" :key="index" @click="changeUrl(p.id)" >
               {{p.title}}
             </a>
           </div>
         </div>

         <person_read_rank></person_read_rank>


       </div>

       <div class="col-md-9">


           <div class="widget-content widget-content-padding mar-bottom" data-aos="fade-up" data-aos-delay="300"
                v-for="(p,index) in article_list" :key="index">
             <article class="post">
               <div class="post__author">
                 <img :src=p.user.image.UserAvatar class="pull-left" alt="">
                 <div class="author-date">
                   <strong>{{p.user.username}}</strong>
                   <div>
                     <p > {{p.create_time}} </p>
                   </div>
                 </div>
               </div>

               <strong>{{p.title}}</strong>
               <p v-html="p.desc">

               </p>
               <strong><router-link :to="'/article/' +p.id" class="change-a">查看详情</router-link></strong>
               <hr>
               <strong>所属标签</strong>
               <div class="widget-tags">
                 <a href="javascript:;" v-for="(item,index) in p.tags" :key="index">
                   {{item.title}}
                 </a>
               </div>
               <hr>
               <div>
                 <div class="pull-left">
                   <a class="change-a fa fa-heart-o  fa-lg mar-right" @click="addUp(p.id,index)">    <font-awesome-icon :icon="['fas','heart']"  />  {{p.ThumbsUp}}</a>

                   <a class="change-a fa fa-heart-o  fa-lg mar-left" @click="delUp(p.id,index)">    <font-awesome-icon :icon="['fas','heart-broken']"  />  </a>
                 </div>



                 <div class="pull-right">


                   <a class=" change-a mar-right " >   <font-awesome-icon :icon="['far','eye']"  />  {{p.browse}}</a>

                   <span class=""></span>
                   <a class=" change-a " >   <font-awesome-icon :icon="['far','comments']"  />  {{p.CommentCount}}</a>

                 </div>

               </div>

             </article>
           </div>


           <div class="widget-content2  mar-bottom more" data-aos="fade-up" data-aos-delay="300" @click="more">



             <a href="javascript:;"  class="change-a   item text-center fullressh mar-top"><font-awesome-icon icon="ellipsis-h"  />   </a>


           </div>

         </div>
       </div>



     </div>


   </div>
 </div>



</template>

<script>

  import person_read_rank from '../../components/community/comm_person_readrank'
  import {getArticle,host,getUserTag,addUpArticle,delUpArticle} from "../../api/api";


  export default {
        name: "comm_person_article",
    data(){
      return{
        nexturl:`${host}/article/?ordering=-create_time&user=${this.$route.params.id}`,
        article_list:[],
        tagList:[],
        obj:{},
        searchkeyword:'',

      }
    },

    components:{
          person_read_rank,
    },

    methods:{
      getInfo(){

        getArticle(this.nexturl).then((response)=> {
          console.log(response.data['results']);
          this.nexturl = response.data['next'];
          this.article_list =  this.article_list.concat(response.data['results']);

        })
          .catch(function (error) {
            console.log(error);
          });
      },

      getTagInfo(){
        getUserTag(this.$route.params.id).then((response)=> {

          this.tagList = response.data;
        }).catch(function (error) {
          alert(error);
        });
      },

      addUp(id,index){
        //  this.article_list[index].ThumbsUp+=1;
        this.obj = {};
        this.obj.article=id;
        addUpArticle(this.obj).then((response)=>{
          console.log('success');
          this.article_list[index].ThumbsUp+=1;
        }).catch(function () {
          console.log(error.response);
        });
      },

      delUp(id,index){
        delUpArticle(id).then((response)=>{
          console.log('success');
          this.article_list[index].ThumbsUp-=1;
        }).catch(function () {
          console.log(error.response);
        });
      },

      more(){
        this.getInfo();
      },

      changeUrl(id)
      {
      //  alert(id);
        this.article_list=[];
        this.nexturl = `${host}/article/?ordering=-create_time&user=`+this.$route.params.id+`&tags=`+id;
        this.getInfo();
      },

      searchArticle(){
        this.article_list = [];
        this.nexturl = `${host}/article/?search=${this.searchkeyword}&user=${this.$route.params.id}`;
        this.getInfo();
      }
    },

    created() {

      this.getTagInfo();
      this.getInfo();
    },


  }
</script>

<style scoped>
  /*搜索框*/

  input {
    border-bottom: 1px solid #eee;
    border-top:0px;
    border-left:0px;
    border-right:0px;
  }

  .search{
    height: 20px;
    width: 100% ;
    margin-top: 20px;
  }



  .table{
    margin-top:20px;
  }

  /*搜索框*/
  .fullressh{
    display: block;
    width: 100%;
    height: 20px;
    padding-top: 15px;
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



  /*tag &样式*/






  .row{
    margin-top: 20px;
  }


  .widget-content  img{
    display: block;
    width:100%;
    border-radius: 5px 5px 0 0;

    overflow:hidden;
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

  video{
    width: 100%;
    height: 100%;
  }
</style>
