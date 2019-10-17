<template>
  <div>
    <!--评论-->

    <div class="widget-content widget-content-padding" data-aos="fade-right" data-aos-delay="300">
      <div class="title text-center">
        <span class="">评论列表</span>
      </div>

      <hr>


      <div class="row">
        <div class="col-md-12 ">
          <textarea rows="6" placeholder="来说几句吧......" class="mytextarea" id="content"
                    v-model="newcomment.content"></textarea>
        </div>
        <div class="col-md-12">
          <br>
          <div class="btn btn-info pull-right" id="comment" @click="addMyComment">评论</div>
        </div>
      </div>

      <hr>

      <div class="row">
        <div class="col-md-12">
          <div class="comment-list">
            <div class="comment-info" v-for="(p,index) in comm_list" :key="index">
              <header>
                <img :src=p.user.image.UserAvatar alt="">
              </header>
              <div class="comment-right">
                <h4>{{ p.user.username }}</h4>
                <a class="pull-right" @click="delreplay(p.id)" v-if="userid===p.user.id">删除</a>
                <div class="comment-content-header"><span><i
                  class="glyphicon glyphicon-time"></i>{{ p.create_time }}</span>
                </div>
                <p class="content">
                  {{ p.content }}
                </p>

                <div class="comment-content-footer">
                  <div class="row">
                    <div class="col-md-2" @click="reply(p.id,p.user.id,p.user.username,p.content)"><span
                      class="reply-btn">回复</span></div>
                  </div>
                </div>


                <div v-if="p.sub_comm">
                  <div class="reply-list" v-for="(pp,index) in p.sub_comm" :key="index">
                    <div class="reply">
                      <div>
                        <router-link :to="'/comm_person/'+pp.user.id+'/about'" class="replyname">{{ pp.user.username }}
                        </router-link>
                        :
                        <router-link :to="'/comm_person/'+pp.touser.id+'/about'">@ {{ pp.touser.username }}</router-link>
                        <span>{{ pp.content }}</span>
                        <a class="pull-right" @click="delreplay(pp.id)" v-if="userid===pp.user.id">删除</a>
                      </div>
                      <p>
                        <span>{{ pp.create_time  }}</span>
                        <span class="reply-list-btn" @click="reply(p.id,pp.user.id,pp.user.username,pp.content)">回复</span>
                      </p>
                    </div>


                  </div>
                </div>

                <div v-else>
                  <div class="reply-list" v-for="(pp,index) in p.trendsub_comm" :key="index">
                    <div class="reply">
                      <div>
                        <router-link :to="'/comm_person/'+pp.user.id+'/about'" class="replyname">{{ pp.user.username }}
                        </router-link>
                        :
                        <router-link :to="'/comm_person/'+pp.touser.id+'/about'">@ {{ pp.touser.username }}</router-link>
                        <span>{{ pp.content }}</span>
                        <a class="pull-right" @click="delreplay(pp.id)" v-if="userid===pp.user.id">删除</a>
                      </div>
                      <p>
                        <span>{{ pp.create_time  }}</span>
                        <span class="reply-list-btn" @click="reply(p.id,pp.user.id,pp.user.username,pp.content)">回复</span>
                      </p>
                    </div>


                  </div>
                </div>





              </div>

            </div>
          </div>
        </div>


      </div>


      <el-dialog
        :title="replaytoname"
        :visible.sync="dialogVisible"
        width="100%">
        <p> {{replaymessage}}</p>
        <textarea rows="6" placeholder="来说几句吧......" class="mytextarea" v-model="newcomment.content"></textarea>


        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addreplay">发 送</el-button>
  </span>
      </el-dialog>


    </div>


  </div>


</template>

<script>
  import {getComments, addComment, delComment} from "../../api/api";
  import {getTrendComments, addTrendComment, delTrendComment} from "../../api/api";

  export default {
    name: "comm_article_comments",
    props: {
      belong: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        comm_list: [],
        dialogVisible: false,
        replaytoname: '',
        userid: '',
        newcomment: {
          content: '',
          layer: '',
          article: '',
          parent_comment: '',
          touser: '',
        },
        replaymessage: "",
        typeid: '',

      }
    },

    methods: {
      reply(parentid, touserid, tousername, message) {
        this.replaytoname = "回复" + tousername;
        this.replaymessage = message;
        this.newcomment.parent_comment = parentid;
        this.newcomment.touser = touserid;
        this.dialogVisible = !this.dialogVisible

      },

      getInfo() {
        if (this.belong === 'article') {
          getComments(this.id).then((response) => {

            this.comm_list = response.data;
          }).catch(function (error) {
            console.log(error.response)
          })
        } else {
          getTrendComments(this.id).then((response) => {
            this.comm_list = response.data;
            for(let i = 0 ;i<this.comm_list.length;i++){

            }
          }).catch(function (error) {
            console.log(error.response)
          })
        }
      },


      addMyComment() {
        this.newcomment.layer = 1;
        if (this.belong === 'article') {
          addComment(this.newcomment).then((response) => {
            alert('添加成功');
            // 重置新的
            this.getInfo();
            this.newcomment.content = '';

          }).catch(function (error) {
            alert(error.response);
          });
        } else {
          addTrendComment(this.newcomment).then((response) => {
            alert('添加成功');
            // 重置新的
            this.getInfo();
            this.newcomment.content = '';

          }).catch(function (error) {
            alert(error.response);
          });
        }

      },

      addreplay() {
        this.newcomment.layer = 2;
        this.dialogVisible = false;
        if (this.belong === 'article') {
          addComment(this.newcomment).then((response) => {
            alert('添加成功');
            // 重置新的
            this.getInfo();
            this.newcomment.content = '';
            this.newcomment.touser = '';
            this.newcomment.parent_comment = '';

          }).catch(function (error) {
            alert(error.response);
          });
        } else {
          addTrendComment(this.newcomment).then((response) => {
            alert('添加成功');
            // 重置新的
            this.getInfo();
            this.newcomment.content = '';
            this.newcomment.touser = '';
            this.newcomment.parent_comment = '';

          }).catch(function (error) {
            alert(error.response);
          });
        }

      },


      delreplay(id) {
        // alert(id);
        if (confirm('确定删除该评论?') === true) {
          if (this.belong === 'article') {
            delComment(id).then((response) => {
              alert('删除成功');
              this.getInfo();
            }).catch(function (error) {
              alert(error.response);
            });
          } else {
            delTrendComment(id).then((response) => {
              alert('删除成功');
              this.getInfo();
            }).catch(function (error) {
              alert(error.response);
            });
          }

        }
      },

    },

    created() {
      this.typeid = this.belong === 'article';
      this.getInfo();
      this.userid = parseInt(localStorage.getItem('user_id'))
      this.newcomment.article = parseInt(this.$route.params.id);
    },
    mounted() {

    },

  }
</script>


<style scoped>
  .reply-btn, .reply-list-btn {

    border: 1px;
  }

  .comment-list .comment-info .comment-right .reply-list .reply p span {
    padding-right: 2em;
    color: #aaa;
  }

  a {
    color: #337ab7;
    text-decoration: none;
  }

  .mytextarea {
    width: 100%;
  }

  .comment-list .comment-info header {
    width: 10%;
    position: absolute;
  }

  .comment-list .comment-info header img {
    width: 100%;
    border-radius: 50%;
    padding: 5px;
  }

  .comment-list .comment-info .comment-right {
    padding: 5px 0px 5px 11%;
  }

  .comment-list .comment-info .comment-right h4 {
    margin: 5px 0px;
  }

  .comment-list .comment-info .comment-right .comment-content-header {
    height: 25px;
  }

  .comment-list .comment-info .comment-right .reply-list {
    border-left: 3px solid #ccc;
    padding-left: 7px;
  }

  .comment-list .comment-info .comment-right .reply-list .reply {
    border-top: 1px dashed #ccc;
  }

  .comment-info {
    border-bottom: 1px dotted #aaa;
  }

  /*面板&样式*/
  .widget-content {
    display: inline-block;
    border-radius: 5px;
    width: 100%;
    background-color: white;
    margin-bottom: 20px;

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
    padding-left: 23px;
    padding-right: 23px;
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
    width: 100%;
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

  p {
    color: #888da8
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

  .comment img {
    margin-top: 5px;
    margin-left: 20px;
    margin-right: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
  }

  .comment-content {
    border-bottom: 1px dashed grey;
    border-left: 1px dashed grey;
    padding-bottom: 12px;
    padding-top: 12px;
  }
</style>
