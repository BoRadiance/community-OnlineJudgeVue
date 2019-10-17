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
                    来吧,朋友.无论你是哪个学校,无论你是哪个专业,
                    在这里,只要怀着真诚的心,我相信,你会在这里,找到知己~
                  </p>

                </div>
                <img src="../../.idea/img/cm-main-img.png" alt="">
              </div>

            </div>

            <div class="col-md-6">
              <div class="login-sec">
                <h3>Register</h3>
                <div class="pull-right"><router-link to="/login">已经有账号了? 点击登录</router-link></div>
                <br>
                <br>

                <form>
                  <div class="row">
                    <div class="col-md-offset-2  col-md-8 no-pdd">
                      <div class="form-group">
                        <label for="loginarea">用户名</label>
                        <input type="text" class="form-control" v-model="username" id="loginarea" placeholder="用户名" @focus="errorUnshow">
                        <span v-show="usernameerror"  class="help-block">{{usernameerror}}</span>
                      </div>
                    </div>
                    <div class="col-md-offset-2  col-md-8 no-pdd">
                      <div class="form-group">
                        <label for="exampleInputPassword1">密码</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" v-model="password" placeholder="Password" @focus="errorUnshow">

                      </div>
                    </div>
                    <div class="col-md-offset-2  col-md-8 no-pdd">
                      <div class="form-group">
                        <label for="exampleInputPassword2">确认密码</label>
                        <input type="password" class="form-control" id="exampleInputPassword2" v-model="password2" placeholder="Password" @focus="errorUnshow">
                        <span v-show="passworderror" class="help-block">{{passworderror}}</span>
                      </div>
                    </div>
                    <div class="col-md-offset-2  col-md-8 no-pdd">
                      <div class="form-group">
                        <label for="emailtext">邮箱</label>
                        <input type="text" class="form-control" id="emailtext" placeholder="有效163/126/QQ邮箱,后期验证身份" v-model="email" @focus="errorUnshow">
                        <span  class="help-block" v-show="emailerror">{{emailerror}}</span>
                      </div>
                    </div>

                    <div class="col-md-offset-2  col-md-8 no-pdd">
                      <div class="checkbox">
                        <label>
                          <input type="checkbox" v-model="agree"> 我已经阅读并且承诺遵守博客社区的条例
                        </label>
                        <span  class="help-block" v-show="agreeerror">{{agreeerror}}</span>

                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary pull-right" @click="register" >Sign in</button>

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
  import { register } from '../api/api'
    export default {
        name: "register",
      data(){
          return {
             username:'',
             password:'',
             password2:'',
             email:'',
             agree:false,
            usernameerror:'',
            passworderror:'',
            emailerror:'',
            agreeerror:'',
          }
      },
      components:{
        blog_nav,
      },

      methods:{
          register()
          {

            var that = this;
            if(this.username==='')
            {
              this.usernameerror='必填字段!';
              return
            }
            if(this.password===''||this.password2==='')
            {
              this.passworderror='密码和确定密码是必填字段!';
              return
            }
            if(this.password!==this.password2)
            {
              this.passworderror='两次输入的密码不一致,请重新输入!';
              return
            }
            if(this.email==='')
            {
              this.emailerror='必填字段,后期用于用户验证';
              return
            }

            if(!this.agree)
            {
              this.agreeerror='请同意社区用户协议!'
              return
            }


            register({
              username:this.username,
              password:this.password,
              MyEmail:this.email
            }).then((response)=>{
              localStorage.setItem('username',that.username)

              //跳转到首页页面
              this.$router.push({ name: 'comm_index'})

            }).catch(error=>{
              console.log(error.response);
              if("username" in error.response.data)
              {
                that.usernameerror = error.response.data.username[0];
              }
              if("password" in error.response.data)
              {
                that.passworderror = error.response.data.password[0];
              }
              if("message" in error.response.data)
              {
                that.emailerror = error.response.data.message;
              }
              if("MyEmail" in error.response.data)
              {
                that.emailerror = error.response.data.MyEmail[0];
              }
            })

          },
        errorUnshow(){
          this.usernameerror='';
            this.passworderror='';
            this.emailerror='';
            this.agreeerror='';
        }

      },

    }
</script>

<style scoped>
  /*面板&样式*/
  .widget-content {
    display: inline-block;
    padding: 20px 34px 55px 34px;
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
