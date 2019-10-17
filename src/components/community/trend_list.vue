<template>
  <div>

          <div class="widget-content widget-content-padding mar-bottom" data-aos="fade-up" data-aos-delay="300" v-for="(p,index) in trend_list " :key="index">
            <article class="post">
              <div class="post__author">

                <img  v-if="!p.is_disabled" :src="p.user.image.UserAvatar" class="pull-left" alt="">
                <img  v-if="p.is_disabled" src="/static/niming.jpg" class="pull-left" alt="">

                <div v-if="!p.is_disabled " class="author-date">
                  <strong><router-link class="change-a" :to="'/comm_person/'+p.user.id+'/about'" >{{p.user.username}}</router-link></strong>
                  <div>
                    <p > {{p.create_time}} </p>
                  </div>
                </div>

                <div v-if="p.is_disabled " class="author-date">
                  <strong>匿名</strong>
                  <div>
                    <p > {{p.create_time}} </p>
                  </div>
                </div>

              </div>

              <p>
                {{p.desc}} <strong><router-link :to="'/trend/'+p.id" class="change-a">查看更多</router-link></strong>
              </p>
              <hr>

              <div v-if="p.photo.length!==0">
                <strong>点击图片可大图轮播浏览</strong>

                <br> <br>
                <div class="demo-image__preview">
                  <el-image
                    style="width: 100px; height: 100px"
                    :src="p.photo[0]"
                    :preview-src-list="p.photo">
                  </el-image>
                </div>
                <hr>
              </div>
              <div style="padding-bottom: 23px;">
                <div class="pull-left">
                  <a class="change-a fa fa-heart-o  fa-lg mar-right" @click="addUp(p.id,index)">    <font-awesome-icon :icon="['fas','heart']"  />  {{p.ThumbsUp}}</a>

                  <a class="change-a fa fa-heart-o  fa-lg mar-left" @click="delUp(p.id,index)">    <font-awesome-icon :icon="['fas','heart-broken']"  />  </a>
                </div>



                <div class="pull-right">


                  <a class=" change-a mar-right " >   <font-awesome-icon :icon="['far','eye']"  />  {{p.browse}}</a>

                  <span class=""></span>
                  <a class=" change-a " >   <font-awesome-icon :icon="['far','comments']"  />  {{p.CommentCount}} </a>

                </div>

              </div>

            </article>
          </div>

          <div class="widget-content2  mar-bottom more" data-aos="fade-up" data-aos-delay="300" @click="more">



            <a href="javascript:;"  class="change-a   item text-center fullressh mar-top"><font-awesome-icon icon="ellipsis-h"  />   </a>


          </div>


        </div>

</template>

<script>

  import {host} from "../../api/api";
  import {getTrend,addUpTrend,delUpTrend} from "../../api/api";

  export default {
    name: "comm_trend_list",
    props:{
      belong:{
        type:String,
        required:true,
      },
    },
    data(){
      return {
        nexturl:'',
        trend_list:[],
      }
    },

    methods:{
      getInfo(){
        getTrend(this.nexturl).then((response)=>{
          this.nexturl = response.data['next'];
          this.trend_list = this.trend_list.concat(response.data['results']);
          for(let i = 0;i<this.trend_list.length;i++){
            for (let j = 0; j<this.trend_list[i].photo.length;j++){
              if(this.trend_list[i].photo[j].Image)
              {
                this.trend_list[i].photo[j] = this.trend_list[i].photo[j].Image;
              }
            }
          }
        }).catch(function (error) {
          alert('没有更多数据了.')
          //alert(error.response);
        })
      },

      addUp(id,index){
        this.obj = {};
        this.obj.article = id;
        addUpTrend(this.obj).then((response)=>{
          this.trend_list[index].ThumbsUp += 1;
        }).catch(function (error) {
          console.log(error.response);
        })
      } ,
      delUp(id,index){
        delUpTrend(id).then((response)=>{
          this.trend_list[index].ThumbsUp -= 1;

        }).catch(function (error) {
          console.log(error.response);
        })
      },
      more(){
        this.getInfo();
      }
    },

    created() {
      if(this.$route.params.id){
        if(this.belong==='person')
          this.nexturl=`${host}/trend/?ordering=-create_time&is_disabled=0&user=`+this.$route.params.id;
        else
          this.nexturl=`${host}/trend/?ordering=-create_time&tags=`+this.$route.params.id;
      }
      else {
        this.nexturl=`${host}/trend/?ordering=-create_time`;
      }

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

  video{
    width: 100%;
    height: 100%;
  }
</style>
