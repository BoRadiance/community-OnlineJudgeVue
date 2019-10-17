<template>
<div>
  <blog_nav></blog_nav>
  <div class="container" >
    <div class="row">

      <div class="col-md-offset-1 col-md-10">

        <div class="widget-content" data-aos="zoom-in" data-aos-delay="300">

          <div class="row">
            <div class="col-md-6 col-md-6-left">
              <div class="cmp-info">
                <div class="cm-logo">

                  <p>
                    来吧,朋友.无论你来自哪里,
                    在这里,只要怀着真诚的心,你会在这里,找到知己~
                  </p>

                </div>
                <img src="../../.idea/img/cm-main-img.png" alt="">
              </div>

            </div>

            <div class="col-md-6">
              <div class="login-sec">
                <h3>Sign in</h3>
                <div class="pull-right"><router-link to="/register">还有没有账号? 点击注册</router-link></div>
                <br>
                <br>

                <form>
                  <div class="row">
                    <div class="col-md-offset-2  col-md-8 no-pdd">
                      <div class="form-group">
                        <label for="loginarea">用户名</label>
                        <input type="text" class="form-control" id="loginarea" v-model="username"  @focus="errorUnshow" placeholder="用户名">
                        <span v-show="usernameerror" class="help-block">{{usernameerror}}</span>

                      </div>
                    </div>
                    <div class="col-md-offset-2  col-md-8 no-pdd">
                      <div class="form-group">
                        <label for="exampleInputPassword1">密码</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password" @focus="errorUnshow">
                        <span v-show="passworderror" class="help-block">{{passworderror}}</span>


                      </div>

                      <span v-show="error" class="help-block">{{error}}</span>
                    </div>
                    <div class="col-md-offset-2  col-md-8 no-pdd">
                      <div class="checkbox">
                        <label>
                          <input type="checkbox" v-model="remember"> 记住密码
                        </label>

                        <a href="#" class="pull-right">忘记密码?</a>
                      </div>
                    </div>
                    <button  type="submit" class="btn btn-primary pull-right" @click="login">Sign in</button>

                  </div>

                </form>

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
  import blog_nav from '../components/community/comm_nav'
  import { login } from '../api/api'
    export default {
        name: "login",
      data(){
          return{
            username:localStorage.getItem('username')||'',
            password:localStorage.getItem('password')||'',
            remember:false,


            usernameerror:'',
            passworderror:'',
            error:'',
          }
      },
      components:{
          blog_nav,
      },

      methods:{
        login(){

          var that = this;
          login({
            username:this.username,
            password:this.password
          }).then((response)=> {
            console.log(response);
            //本地存储用户信息

            localStorage.setItem('username',response.data.username);
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('user_id',response.data.user_id);
            localStorage.setItem('visit_user_id',response.data.user_id);




            if(this.remember){
              localStorage.setItem('password',this.password)
            }
            else {
              localStorage.setItem('password','')
            }


            //存储在store
            // 更新store数据
            that.$store.dispatch('setInfo',response.data);

            //跳转到首页页面
            this.$router.push({ name: 'comm_index'})
          })
            .catch(function (error) {

              console.log(error.response.data)

              if("non_field_errors" in error.response.data){
                that.error = '密码错误'
              }
              if("username" in error.response.data){
                that.usernameerror = error.response.data.username[0];
              }
              if("password" in error.response.data){
                that.passworderror = error.response.data.password[0];
              }
            });

        },
        errorUnshow(){
          this.error = false;
        },
      },

    }
</script>

<style scoped>
  /*面板&样式*/
  .widget-content {
    display: inline-block;
    padding: 20px 30px 55px 34px;
    margin-top: 10px;
    width: 100%;
    background-color:white;


    border-radius:30px;
  }



  .title{
    width:100%; display:block; line-height:1.5em; overflow:visible; font-size:22px; text-shadow:#f3f3f3 1px 1px 0px, #b2b2b2 1px 2px 0
  }
  /*tag &样式*/



  .container {
    margin-top:5%;
  }




  .row{
    margin-top: 20px;
  }

  /*登录样式*/
  .col-md-6-left{
    border-right:  1px solid #dbdbdb;

  }

  .cmp-info {
    float: left;
    width: 100%;
    padding: 70px 5px 92px 5px;
  }


  .cm-logo {
    float: left;
    width: 100%;
    padding-left: 45px;
    margin-bottom: 120px;
  }


  .login-sec {
    float: left;
    width: 100%;
    padding: 30px 0;
    position: relative;
  }



  .row {
    margin: 0;
  }


  .checky-sec > a {
    float: right;
    color: #000000;
    font-size: 14px;
    font-weight: 600;
  }
  .sign_in_sec form {
    float: left;
    width: 100%;
  }

  img{
    width: 100%;
    height:100%
  }

  button:hover{
    background-color: #2d8cf0;
    color:white;
  }

  .no-pdd{
    padding:0px;
  }

  form .row{

  }
  a{
    color: black;
    text-decoration: none;
  }

  .help-block{
    color:red;
  }
  /*登录样式*/


</style>
