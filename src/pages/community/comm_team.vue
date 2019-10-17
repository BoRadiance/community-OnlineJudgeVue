<template>
      <div>
        <blog_nav></blog_nav>
        <div class="container">
          <div class="widget-content">
            <div class="row">
              <div class="col-md-4 col-md-6 col-12" v-for="(p,index) in trendlist" :key="index">
                <div class="blog-item">
                  <div class="blog-img">
                    <img :src="p.Image" alt="">
                    <div class="blog-s-text">
                      <div class="blog-content">
                        <h3>{{p.title}}</h3>
                      </div>

                    </div>
                    <div class="blog-text">
                      <div class="blog-content blog-content2">
                        <h3><a href="">{{p.title}}</a></h3>
                        <p>{{p.desc}}</p>
                        <router-link :to="'/trendlist/'+p.id">Enter..</router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
  import blog_nav from '../../components/community/comm_nav'
  import {getTrendTag} from "../../api/api";

  export default {
        name: "comm_team",
      components:{
        blog_nav,
      },

      data(){
          return{
            trendlist:[]
          }
      },

      methods:{
          getInfo(){
            getTrendTag().then((response)=>{
              this.trendlist = response.data;
            }).catch(function (error) {
              alert(error.response)
            })
          }
      },

      created() {
          this.getInfo();
      },

    }
</script>
<style scoped>
  .blog-item {
    position: relative;
    overflow: hidden;
  }
  .blog-item {
    margin-bottom: 30px;
  }
  .blog-area.blog-style-2 .blog-img {
    position: relative;
  }
  .blog-area.blog-style-2 .blog-img:before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    content: "";
    z-index: 9;
  }
  .blog-img img {
    -webkit-filter: grayscale(0);
    -moz-filter: grayscale(0);
    -o-filter: grayscale(0);

    filter: grayscale(0);
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    -ms-transition: all 0.5s;
    transition: all 0.5s;
    width: 100%;
  }
  .blog-s-text {
    position: absolute;
    left: 0;
    top: 56%;
    width: 100%;
    height: 50%;
    background: none;
    z-index: 99;
  }
  .blog-area.blog-style-2 .blog-content {
    background: none;
  }
  .blog-s-text .blog-content {
    background: none;
  }
  .blog-content {
    text-align: center;
    background: #fff;
    padding: 25px 45px 10px;
  }
  .blog-s-text .blog-content h3 {
    color: black;
    font-size: 20px;
    margin-bottom: 15px;
  }
  .blog-content h3 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 30px;
  }

  a{
    text-decoration: none;
  }

  .blog-area.blog-style-2 {
    background: #fff;
  }
  .blog-area.blog-style-2 .blog-img{
    position: relative;
  }
  .blog-area.blog-style-2 .blog-img:before{
    position:absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background:rgba(0,0,0,.5);
    content: "";
    z-index: 9;
  }
  .blog-s-text{
    position: absolute;
    left: 0;
    top:56%;
    width: 100%;
    height: 50%;
    background: none;
    z-index: 99;
  }
  .blog-s-text .blog-content{
    background: none;
  }

  .blog-s-text .blog-content-sub ul li a {
    color: #fff;
  }
  .blog-s-text .blog-content-sub ul li {
    color: #fff;
  }
  .blog-s-text .blog-content-sub {
    background: none;
    border-bottom: none;
    border-top: none;
    border-top: 1px solid rgba(255,255,255,.3);
    padding-top: 17px;
  }
  .blog-item{
    position: relative;
    overflow: hidden;
  }
  .blog-text{
    position: absolute;
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background:rgba(255,255,255,.9);
    transform: translateY(200px);
    transition: all .3s;
    opacity: 0;
  }

  .blog-item:hover .blog-text{
    transform: translateY(0px);
    opacity: 1;
  }

  .blog-area.blog-style-2 .blog-content {
    background:none;
  }
  .blog-item:hover .blog-s-text .blog-content{
    opacity: 0;
  }
  .blog-text .blog-content h3 a {
    color: #333;
  }
  .blog-text .blog-content h3 a:hover {
    color:#34ccff;
  }
  .blog-text .blog-content a {
    color: #34ccff;
  }
  .blog-text .blog-content-sub ul li a {
    color: #34ccff;
  }
  .blog-text .blog-content-sub {
    background: none;
    border-bottom: none;
    padding-top: 16px;
    border-top: 1px solid #ddd;
    margin-top: 5px;
  }
  .blog-text .blog-content {
    padding: 40px 45px 10px;
  }
  .blog-item:hover .blog-s-text .blog-content-sub{
    opacity: 0;
  }

  .newsletter-section.newsletter-section-2{
    background: #f5f5f5;
  }
  .blog-right-bar-2{
    padding-left: 0;
    padding-right:30px;
  }

  .blog-right-bar .img-holder {
    float: left;
    padding-right: 14px;
  }

  /*面板&样式*/
  .widget-content {
    display: inline-block;
    border-radius: 5px;
    width: 100%;
    background-color:white;

    padding: 13px 13px 13px 13px;
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



  .title2{
    margin-top: 35px;
    margin-bottom: 25px;
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
    width: 80px;
    height: 80px;
    border-radius: 100%;
    overflow: hidden;
    margin-left: 35%;
    margin-right: 35%;
    margin-top:20px;

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
