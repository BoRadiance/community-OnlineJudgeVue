<template>
  <div>
    <blog_nav></blog_nav>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="widget-content widget-content-padding mar-bottom" data-aos="fade-up" data-aos-delay="300">
            <article class="post">
              <div class="post__author">
                <img  v-if="!article.is_disabled" :src="article.user.image.UserAvatar" class="pull-left" alt="">
                <img  v-if="article.is_disabled" src="/static/niming.jpg" class="pull-left" alt="">

                <div class="author-date" v-if="!article.is_disabled">
                  <strong>
                    <router-link class="change-a" :to="'/comm_person/'+article.user.id+'/about'">{{article.user.username}}</router-link>
                  </strong>
                  <div>
                    <p>{{article.create_time}}</p>
                  </div>
                </div>

                <div class="author-date" v-if="article.is_disabled">
                  <strong>
                    匿名用户
                  </strong>
                  <div>
                    <p>{{article.create_time}}</p>
                  </div>
                </div>

              </div>

              <div v-html="article.content">

              </div>

              <hr>
              <div v-if="article.photo.length!==0">
                <div v-for="(p,index) in article.photo " :key="index">
                  <img :src="p" class="img-responsive" alt="">
                  <br>
                  <br>
                </div>
                <hr>
              </div>

            </article>

            <div style="margin-left: 23px; margin-right: 23px;">
              <div class="pull-left">
                <a class="change-a fa fa-heart-o  fa-lg mar-right" @click="addUp()">
                  <font-awesome-icon :icon="['fas','heart']"/>
                {{article.ThumbsUp}} </a>

                <a class="change-a fa fa-heart-o  fa-lg mar-left" @click="delUp()">
                  <font-awesome-icon :icon="['fas','heart-broken']"/>
                </a>
              </div>


              <div class="pull-right">


                <a class=" change-a mar-right ">
                  <font-awesome-icon :icon="['far','eye']"/>
                  {{article.browse}}</a>

                <span class=""></span>
                <a class=" change-a ">
                  <font-awesome-icon :icon="['far','comments']"/>
                  {{ article.CommentCount}}</a>


              </div>

            </div>

          </div>


          <comm_comments :belong="typearticle" :id="this.$route.params.id"/>

        </div>


      </div>

    </div>

  </div>
</template>

<script>
  import blog_nav from '../../components/community/comm_nav'
  import comm_comments from '../../components/community/comm_article_comments'
  import {hight} from "../../assets/js/my";
  import {getTrendDetail, addUpTrend, delUpTrend} from "../../api/api";

  export default {
    name: "trenddetail",
    components: {
      blog_nav,
      comm_comments,
    },
    data() {
      return {
        article: "",
        obj: {},
        typearticle: "trend",
      }
    },

    methods: {
      getInfo() {
        getTrendDetail(this.$route.params.id).then((response) => {
          this.article = response.data;

          for (let j = 0; j < this.article.photo.length; j++) {
            this.article.photo[j] = this.article.photo[j].Image;
          }
        }).catch(function (error) {
          alert(error.response)
        })
      },

      addUp() {
        this.obj.article = this.$route.params.id;
        addUpTrend(this.obj).then((response) => {
          console.log('success');
          this.article.ThumbsUp += 1;
        }).catch(function () {
          console.log(error.response);
        });
      },

      delUp() {
        delUpTrend(this.$route.params.id).then((response) => {
          console.log('success');
          this.article.ThumbsUp -= 1;
        }).catch(function () {
          console.log(error.response);
        });
      },

    },

    created() {
      this.getInfo();
    },




    watch: {
      article: function () {
        this.$nextTick(function () {
          hight();
        })
      }
    },

  }
</script>

<style scoped>


  /*面板&样式*/
  .widget-content {
    display: inline-block;
    border-radius: 5px;
    width: 100%;
    background-color: white;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }

  .no-margin {
    margin: 0;
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

  .widget-tags a:hover {
    background-color: #2d8cf0;
    color: white;
  }


  .widget-content2 {
    display: inline-block;
    border-radius: 5px;
    width: 100%;
    background-color: #eee;


  }

  .widget-content-padding {
    padding-left: 10px;
    padding-right: 10px;
  }

  .top-head {
    background-color: #eee;
  }


  .title {
    font-size: 14px;
    font-weight: 700;
    color: #515365;
    display: block;
    text-decoration: none;
    padding-top: 12px;
  }

  .title-a {
    font-size: 10px;
    font-weight: 700;
    color: #9a9fbf;
    display: block;
    text-decoration: none;

  }

  .title-content {
    padding-bottom: 20px;
  }

  /*tag &样式*/


  .row {
    margin-top: 20px;
  }


  .top-row {
    margin-top: 20px;
  }


  .widget-content img {
    display: block;

    border-radius: 5px 5px 0 0;

    overflow: hidden;
  }

  .person-nav {
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

  .profile-menu li a:hover {
    color: #515365;
  }

  /* reapeat set*/
  li a {
    font-size: 14px;
    font-weight: 700;
    color: #9a9fbf;
    display: block;
    text-decoration: none;
  }

  .change-a {
    text-decoration: none;
    color: #515365;
  }

  li a:hover {
    color: #515365;
  }

  li a.active {
    color: #515365;
  }

  li {
    list-style: none;
  }

  .top-header-author .author-thumb img {
    border-radius: 50%;
    display: block;

  }

  p {
    color: #888da8
  }

  .post {
    position: relative;
    padding: 25px;

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

  .mar-left {
    margin-left: 10px;
  }

  .mar-right {
    margin-right: 10px;
  }

  .mar-top {
    margin-top: 10px;
  }

  .mar-bottom {
    margin-bottom: 10px;
  }

  .pad-left {
    padding-left: 10px;
  }

  .pad-right {
    padding-right: 10px;
  }

  .pad-top {
    padding-top: 10px;
  }

  .pad-bottom {
    padding-bottom: 10px;
  }


  p img {
    width: 50%;
    height: 50%;
  }


  .item {
    margin: 0 auto;
    margin-top: 15%;
    margin-bottom: 20%;
    width: 50px;
    height: 50px;
    background: white;
    border-radius: 50%;
  }

  .row-change-mar {
    margin: 1px 1px 1px 1px;
    padding: 1px 1px 1px 1px;

  }

  video {
    width: 100%;
    height: 100%;
  }

</style>
