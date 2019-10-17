<template>
  <div>
    <blog_nav></blog_nav>
    <div class="container  margin-top">
      <div class="message-body" data-aos="fade-up" data-aos-delay="300">


        <div class="row">
          <div class="col-md-12">
            <div class="BoxHead">
              <div class="headImg">
                <img src="../../../.idea/img/avatar1.jpg"/>
              </div>
              <div class="internetName">hechengbo</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <div class="conLeft">
              <ul>
                <li class="bg">
                  <div class="liLeft"><img src="../../../.idea/img/20170926103645_29.jpg"/></div>
                  <div class="liRight">
                    <span class="intername">南理社区公聊大厅</span>
                    <span class="infor">还在开发中..</span>
                  </div>
                </li>

                <li>
                  <div class="liLeft"><img src="../../../.idea/img/logo.png"/></div>
                  <div class="liRight">
                    <span class="intername">私聊</span>
                    <span class="infor">暂时不开发,有时间再开发吧</span>
                  </div>
                </li>

              </ul>
            </div>
          </div>

          <div class="col-md-9">
            <div class="conRight">
              <div class="Righthead">
                <div class="headName">南理社区公聊大厅</div>
              </div>
              <div class="RightCont">
                <ul class="newsList">
                  <li>
                    <div class="answerHead">  <img src="../../../.idea/img/avatar1.jpg"/></div>

                    <div class="answers"><img class="jiao" src="../../../.idea/img/jiao.jpg">开发中...<div>Radiance 2019-10-13 19:00</div> </div>
                  </li>




                </ul>
              </div>
              <div class="RightFoot">
                <div class="emjon">
                  <ul>
                    <li><img src="../../../.idea/img/em_02.jpg"/></li>
                    <li><img src="../../../.idea/img/em_05.jpg"/></li>
                    <li><img src="../../../.idea/img/em_07.jpg"/></li>
                    <li><img src="../../../.idea/img/em_12.jpg"/></li>
                    <li><img src="../../../.idea/img/em_14.jpg"/></li>
                    <li><img src="../../../.idea/img/em_16.jpg"/></li>
                    <li><img src="../../../.idea/img/em_20.jpg"/></li>
                    <li><img src="../../../.idea/img/em_23.jpg"/></li>
                    <li><img src="../../../.idea/img/em_25.jpg"/></li>
                    <li><img src="../../../.idea/img/em_30.jpg"/></li>
                    <li><img src="../../../.idea/img/em_31.jpg"/></li>
                    <li><img src="../../../.idea/img/em_33.jpg"/></li>
                    <li><img src="../../../.idea/img/em_37.jpg"/></li>
                    <li><img src="../../../.idea/img/em_38.jpg"/></li>
                    <li><img src="../../../.idea/img/em_40.jpg"/></li>
                    <li><img src="../../../.idea/img/em_45.jpg"/></li>
                    <li><img src="../../../.idea/img/em_47.jpg"/></li>
                    <li><img src="../../../.idea/img/em_48.jpg"/></li>
                    <li><img src="../../../.idea/img/em_52.jpg"/></li>
                    <li><img src="../../../.idea/img/em_54.jpg"/></li>
                    <li><img src="../../../.idea/img/em_55.jpg"/></li>
                  </ul>
                </div>
                <div class="footTop">
                  <ul>

                    <li class="ExP"><img src="../../../.idea/img/20170926103645_33.jpg"/></li>

                    <li><img src="../../../.idea/img/20170926103645_41.jpg" alt=""/></li>

                  </ul>
                </div>
                <div class="inputBox">
                  <textarea id="dope" style="width: 99%;height: 75px; border: none;outline: none;" name="" rows=""
                            cols=""></textarea>
                  <button class="sendBtn">发送(s)</button>
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
  import {getUserinfo} from '../../api/api'

  export default {
    name: "comm_chatlist",
    data() {
      return {
        sendmsg: {
          avtr: "",
          content: "",
        }
      }
    },
    methods: {
      getInfo() {

      },

    },

    created: {},


    components: {
      blog_nav,
    }
  }
</script>

<style scoped>

  .conLeft li {
    margin-bottom: 4px;
  }
  .newsList li{
    display: block;
    height: 100%;
  }
  .message-body {
    background-color: white;
  }

  .margin-top {
    margin-top: 30px;
  }

  .BoxHead {
    width: 100%;
    height: 52px;
    background-color: #557bee;
    display: -webkit-box;
    -webkit-box-orient: horizontal;
  }

  .headImg {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    margin: 0 10px;
    margin-top: 4px;
  }

  .headImg img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .internetName {
    width: auto;
    height: 52px;
    line-height: 52px;
    color: white;
  }



  .conLeft {
    width: 100%;
    height: 548px;
    overflow: auto;
    background: #f5f7fa;

  }

  .conLeft::-webkit-scrollbar {
    width: 0;
  }

  .conLeft ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .conLeft li {
    width: 100%;
    height: 62px;
    display: -webkit-box;
    -webkit-box-orient: horizontal;
  }

  .conLeft li .liLeft {

    height: 100%;
  }

  .liLeft img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  .liRight span {
    display: block;
    font-size: 16px;
    height: 31px;
    line-height: 31px;
    margin-left: 12px;
  }

  .liRight span:last-child {
    font-size: 14px;
    color: #767676;
    line-height: 15px;
    overflow: hidden;
  }

  .conRight {
    -webkit-box-flex: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;

  }

  .Righthead {
    width: 100%;
    height: 42px;
    border-bottom: 1px solid #ccc;
  }

  .headName {
    width: auto;
    height: 100%;
    line-height: 42px;
    margin-left: 20px;
    font-family: "微软雅黑", serif;
    font-size: 18px;
    float: left;
  }

  .headConfig ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: -webkit-box;
    -webkit-box-orient: horizontal;
  }

  .headConfig li {
    margin: 10px 5px;
  }

  .RightCont {
    -webkit-box-flex: 1;
    overflow-y: scroll;
    width: 100%;
    height: 380px;
  }

  .RightCont::-webkit-scrollbar {
    width: 15px;
  }

  .RightCont ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .RightCont li {
    width: 100%;
    height: 50px;
    /*display: -webkit-box;
      -webkit-box-orient: horizontal;*/
    margin-top: 10px;
  }

  .nesHead {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    margin-left: 15px;
    float: left;
  }

  .nesHead img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    margin-top: 2px;
  }

  .news {
    width: auto;

    background: #eeeeee;
    padding: 5px 20px;
    margin: 4px;
    line-height: 40px;
    font-size: 14px;
    border-radius: 10px;
    margin-left: 10px;
    position: relative;
    float: left;
  }

  .news .jiao {
    position: absolute;
    left: -8px;
    top: 10px;
  }

  .news .Expr {
    width: 50px;
    height: 30px;
    margin: 5px;
  }

  .answerHead {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    margin-left: 15px;
    float: right;
  }

  .answerHead img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }

  .answers {
    width: auto;

    background: #eeeeee;
    padding: 5px 20px;
    margin: 4px;
    line-height: 30px;
    font-size: 14px;
    border-radius: 10px;
    margin-left: 10px;
    position: relative;
    float: right;
  }

  .answers .jiao {
    position: absolute;
    right: -8px;
    top: 10px;
  }

  .RightFoot {
    width: 100%;
    height: 118px;
    border-top: 1px solid #ccc;
    position: relative;
  }

  .emjon {
    width: 360px;
    height: 200px;
    border: 1px solid #ccc;
    position: absolute;
    left: 0;
    top: -190px;
    display: none;
    background: #fff;
  }

  .emjon ul {
    list-style: none;
    margin: 0;
  }

  .emjon ul li {
    width: 50px;
    height: 30px;
    margin: 5px;
    float: left;

  }

  .emjon ul li:hover {
    box-shadow: 5px 5px 5px #888888;
    transform: scale(1.2);

  }

  .emjon ul li img {
    width: 100%;
    height: 100%;

  }

  .footTop {
    width: 100%;
    height: auto;
  }

  .footTop ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: -webkit-box;
    -webkit-box-orient: horizontal;
  }

  .footTop li {
    margin: 5px 10px;
  }

  .sendBtn {
    width: 68px;
    height: 25px;
    background: #0188fb;
    border: none;
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: white;
  }

  .bg {
    background: #ebebec;
  }


</style>
