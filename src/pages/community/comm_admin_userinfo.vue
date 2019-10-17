<template>
  <div>

    <blog_person_nav :id="propsid"></blog_person_nav>

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="widget-content" data-aos="fade-up" data-aos-delay="300">
            <div class="title text-center"> 更新头像和个人封面(2个文件都要上传)   </div>
            <hr>

            <div class="form-horizontal">

              <div class="form-group pad-left">
                <label  class="col-md-3 control-label">
                  头 像:</label>

                <div class="col-md-9 ">
                  <input type="file" name="message_img" size="45" class="inputBg" @change="previewavatar">
                </div>
              </div>




              <div class="form-group pad-left">
                <label  class="col-md-3 control-label">
                  个人封面图:</label>

                <div class="col-md-9 ">
                  <input type="file" name="message_img" size="45" class="inputBg" @change="preview">
                </div>
              </div>






              <div class="form-group pad-left">
                <div class="col-sm-offset-3 col-sm-9">
                  <button type="submit" class="btn btn-primary " @click="updateImg">更新头像和封面图</button>
                </div>
              </div>

            </div>
            <hr>


          </div>



          <div class="widget-content" data-aos="fade-up" data-aos-delay="300">
            <div class="title text-center"> 更新个人信息   </div>
            <hr>

            <div class="form-horizontal">

              <div class="form-group pad-left">
                <label  class="col-md-3 control-label">
                  昵称:</label>

                <div class="col-md-9 ">
                  <input type="text" v-model="userInfo.NickName">
                  </input>
                </div>
              </div>

              <div class="form-group pad-left">
                <label  class="col-md-3 control-label">
                  学 号:</label>

                <div class="col-md-9 ">
                   <input type="text" v-model="userInfo.LearnId">
                   </input>
                </div>
              </div>

              <div class="form-group pad-left">
                <label  class="col-md-3 control-label">
                  关于我:</label>

                <div class="col-md-9 ">

                   <textarea name="message" rows="5" cols="35%" v-model="userInfo.AboutMe">

                   </textarea>


                </div>
              </div>

              <div class="form-group pad-left">
                <label  class="col-md-3 control-label">
                  座右铭:</label>

                <div class="col-md-9 ">

                   <textarea name="message" rows="5" cols="35%" v-model="userInfo.Motto">

                   </textarea>


                </div>
              </div>


              <div class="form-group pad-left">
                <label  class="col-md-3 control-label">
                  生日:</label>

                <div class="col-md-9 ">

                  <input  type="text" v-model="userInfo.BirthDay">

                  </input>



                </div>
              </div>


              <div class="form-group pad-left">
                <label  class="col-md-3 control-label">
                  出生地:</label>

                <div class="col-md-9 ">

                   <input type="text"  v-model="userInfo.BirthPlace">

                   </input>


                </div>
              </div>


              <div class="form-group pad-left">
                <label  class="col-md-3 control-label">
                  住哪:</label>

                <div class="col-md-9 ">

                   <input type="text"  v-model="userInfo.LivesIn">

                   </input>


                </div>
              </div>

              <div class="form-group pad-left">
                <label  class="col-md-3 control-label">
                  性别:</label>

                <div class="col-md-9 ">

                   <input  type="text" v-model="userInfo.Gender">

                   </input>


                </div>
              </div>

              <div class="form-group pad-left">
                <label  class="col-md-3 control-label">
                  情感状态:</label>

                <div class="col-md-9 ">


                  <input  type="text" v-model="userInfo.Status">

                  </input>


                </div>
              </div>



              <div class="form-group pad-left">
                <label  class="col-md-3 control-label">
                  QQ:</label>

                <div class="col-md-9 ">

                  <input  type="text" v-model="userInfo.QQ">

                  </input>


                </div>
              </div>

              <div class="form-group pad-left">
                <label  class="col-md-3 control-label">
                  WeChat:</label>

                <div class="col-md-9 ">


                  <input  type="text" v-model="userInfo.WeChat">

                  </input>


                </div>
              </div>

              <div class="form-group pad-left">
                <label  class="col-md-3 control-label">
                  爱好:</label>

                <div class="col-md-9 ">

                   <textarea name="message" rows="5" cols="35%" v-model="userInfo.Hobbies">

                   </textarea>


                </div>
              </div>

              <div class="form-group pad-left">
                <label  class="col-md-3 control-label">
                  最喜欢的电视剧:</label>

                <div class="col-md-9 ">

                   <textarea name="message" rows="5" cols="35%" v-model="userInfo.FavouriteTvShows" >

                   </textarea>


                </div>
              </div>

              <div class="form-group pad-left">
                <label  class="col-md-3 control-label">
                  最喜欢的电影:</label>

                <div class="col-md-9 ">

                   <textarea name="message" rows="5" cols="35%" v-model="userInfo.FavouriteMovies">

                   </textarea>


                </div>
              </div>

              <div class="form-group pad-left">
                <label  class="col-md-3 control-label">
                  最喜欢的游戏:</label>

                <div class="col-md-9 ">

                   <textarea name="message" rows="5" cols="35%" v-model="userInfo.FavouriteGames" >

                   </textarea>


                </div>
              </div>

              <div class="form-group pad-left">
                <label  class="col-md-3 control-label">
                  最喜欢的音乐: </label>

                <div class="col-md-9 ">

                   <textarea name="message" rows="5" cols="35%" v-model="userInfo.FavouriteMusic">

                   </textarea>


                </div>
              </div>

              <div class="form-group pad-left">
                <label  class="col-md-3 control-label">
                  最爱的书:</label>

                <div class="col-md-9 ">

                   <textarea name="message" rows="5" cols="35%" v-model="userInfo.FavouriteBooks">

                   </textarea>


                </div>
              </div>



              <div class="form-group pad-left">
                <label  class="col-md-3 control-label">
                  其他兴趣:</label>

                <div class="col-md-9 ">

                   <textarea name="message" rows="5" cols="35%" v-model="userInfo.OtherInterests">

                   </textarea>


                </div>
              </div>


              <div class="form-group pad-left">
                <label  class="col-md-3 control-label">
                  其他关于我:</label>

                <div class="col-md-9 ">


                  <tinymce-editor v-model="userInfo.OthersAboutMe"
                                  :toolbar="mytoolbar"
                                  :plugins="myplugins"
                                  ref="editor"></tinymce-editor>



                </div>
              </div>

              <div class="form-group pad-left">
                <div class="col-sm-offset-3 col-sm-9">
                  <button type="submit" class="btn btn-primary " @click="updateInfo">Update it</button>
                </div>
              </div>

          </div>
            <hr>



        </div>
      </div>
    </div>
  </div>
  </div>

</template>

<script>
  import blog_person_nav from '../../components/community/comm_person_nav'
  import { updateUserinfo,getUserinfo,updateUserImg}  from  '../../api/api'
  import TinymceEditor from '../../components/tinymce-editor'

    export default {
        name: "comm_admin_userinfo",
      components:{
          blog_person_nav,
        TinymceEditor,

      },

      data()
      {
        return {
          UserBackgroundImage:'',
          UserAvatar:'',
            userInfo:{

            },
          propsid :'',
          mytoolbar:' undo redo |  formatselect  forecolor textcolor strikethrough superscript  subscript | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists  codesample   link charmap table code | removeformat wordcount fullscreen',
          myplugins:'lists   table textcolor wordcount contextmenu code codesample  textcolor charmap link fullscreen',

        }
      },

      methods:{
        previewavatar (e) {
          console.log(e.target.files);


          this.UserAvatar = e.target.files[0]; //获取文件资源

        },
        preview (e) {
          console.log(e.target.files);


          this.UserBackgroundImage = e.target.files[0]; //获取文件资源

        },

        updateImg()
        {
          const formData = new FormData();
          formData.append('UserBackgroundImage',this.UserBackgroundImage);
          formData.append('UserAvatar',this.UserAvatar);

          updateUserImg(localStorage.getItem("user_id"),formData).then((response)=>{
              alert('您的头像和封面更新成功');
          }).catch(function (error) {
            alert(error.response);
          })
        },
          getInfo()
          {
            getUserinfo().then((response)=> {
              console.log(response.data);
              this.userInfo = response.data;

            }).catch(function (error) {
              console.log(error.response);
            });
          },
        updateInfo(){
            updateUserinfo(this.userInfo).then((response)=> {
             alert('修改成功');
             this.getInfo();
            }).catch(function (error) {
              console.log(error.response);
            });
        },


      },


      created() {
          this.getInfo();
        this.propsid = localStorage.getItem('user_id');
      },


    }
</script>

<style scoped>
/*上传头像*/
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

/*上传头像*/


  .divabslu{
    position: relative;
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
