<template>
<div>

  <blog_person_nav :id="propsid"></blog_person_nav>


  <div class="container">
  <div class="row">
      <div class="col-md-12">
        <div class="widget-content " data-aos="fade-up" data-aos-delay="500">
          <div class="title text-center"> 新增相册 </div>
          <hr>
          <div class="row">
            <div class="col-md-6 col-md-offset-3">
              <div class="center">
                <div class="search  ">
                  <input type="text" class="pull-left text-center" placeholder="输入简短的相册描述" v-model="newPhotosInfo.Desc">

                </div>
                <div  @click="addInfo" class="btn-primary mybutton text-center mar-bottom mar-top "><font-awesome-icon icon="plus"  />添加为公开新相册</div>


                <div  @click="addSecretInfo" class="btn-warning mybutton text-center mar-bottom mar-top "><font-awesome-icon icon="plus"  />添加为私密新相册</div>
              </div>


            </div>

          </div>
        </div>

        <div  v-for="(p,index) in photosList" :key="index" class="widget-content "   data-aos="fade-up" data-aos-delay="500" >


          <div class="row">
            <div class="col-md-6 col-md-offset-3" >
              <div class="title text-center">{{p.Desc}} <font-awesome-icon  icon="lock" v-show="p.is_disabled" fixed-width /></div>

            </div>
            <hr>

            <div class="col-md-6 col-md-offset-3 " >
              <a  class="btn-primary center-block text-center" @click="openDialog2(p.id)">查看照片</a>
            </div>

            <div class="col-md-6 col-md-offset-3 " >
              <a  class="btn-info center-block text-center" @click="openDialog(p.id)">更改相册</a>
            </div>


            <div class="col-md-6 col-md-offset-3 " >
              <a  class="btn-danger center-block text-center" @click="delPhotosInfo(p.id)">删除相册</a>
            </div>

          </div>

        </div>


      </div>
  </div>
  </div>
    <div class="row">
      <el-dialog
        title="更新相册信息"
        :visible.sync="dialogVisible"
        width="100%">
        <div class="col-md-12">

          <input type="text" class="pull-left text-center" placeholder="输入简短的相册描述" v-model="updateInfo.Desc">

        </div>

        <div style="margin-top: 40px">
          <el-radio-group v-model="radio1" size="small">
            <el-radio-button label="私密"></el-radio-button>
            <el-radio-button  label="公开"></el-radio-button>
          </el-radio-group>
        </div>

        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="updatePhotoInfo">确 定</el-button>
  </span>
      </el-dialog>
    </div>

    <div class="row">
    <el-dialog
      title="相册详情"
      :visible.sync="dialogVisible2"
      width="100%">
      <input type="file" name="message_img" size="45" class="inputBg" @change="preview">
      <br>
      <a  class="btn-primary center-block text-center" @click="addPicToPhoto">为该相册添加照片</a>
      <br>
      <p>该相册所有的照片如下: (点击照片可进行确认删除)</p>
      <div class="container">
        <div class="row">

          <img v-for="(p,index) in pic_list" :key="index" :src=p.Img class="img-responsive" alt="" @click="delPicFromPhoto(p.id)">

        </div>
      </div>



      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible2 = false">关 闭</el-button>

  </span>
    </el-dialog>
  </div>



</div>
</template>

<script>
  import blog_person_nav from '../../components/community/comm_person_nav'
  import { addPhotos,delPhotos,updatePhotos,getPhotos } from "../../api/api";
  import  { getPic,delPic,addPic } from "../../api/api";

  export default {
        name: "comm_admin_photo",

      components:{
          blog_person_nav,
      },
      data(){
          return{
            updateIndex:-1,
            newPhotosInfo:{
              Desc:'',
              is_disabled:false,
            },
            updateInfo:{
              Desc:'',
              is_disabled:false,
            },
            photosList:[],
            dialogVisible: false,
            dialogVisible2:false,
            radio1:'公开',
            propsid:'',

            pic_list:[],

            newPic:{
              Img:'',
              Belong:'',
            },
          }
      },

      methods:{
        preview (e) {
          console.log(e.target.files);
          this.newPic.Img = e.target.files[0]; //获取文件资源
        },
        addPicToPhoto(){
          const formData = new FormData();
          formData.append('Img',this.newPic.Img);
          formData.append('Belong',this.newPic.Belong);
          addPic(formData).then((response)=> {
            alert('添加成功!');

            this.newPic.Img='';
            this.newPic.Belong ='';
            this.dialogVisible2 =false;
          }).catch(function (error) {
            console.log(error.response);
          });
        },

        delPicFromPhoto(id){
          if(confirm('确定要删除嘛? ')===true)
          {
            delPic(id).then((response)=> {
              alert('删除成功!');
              this.newPic.Img='';
              this.newPic.Belong ='';
              this.dialogVisible2 =false;
            }).catch(function (error) {
              console.log(error.response);
            });
          }
        },


        openDialog(id){
          this.dialogVisible=true;
          this.updateIndex=id;
        },

        openDialog2(id)
        {
          this.newPic.Belong = id;
          this.dialogVisible2 =true;
          getPic(id).then((response)=>{
            this.pic_list = response.data;

          }).catch(function (error) {
            console.log(error.response);
          })
        },



        getInfo()
        {
          getPhotos().then((response)=> {
            console.log(response.data);
            this.photosList = response.data;

          }).catch(function (error) {
            alert(error.response);
          });
          this.newPhotosInfo.Desc='';
          this.updateInfo.Desc='';
        },

        updatePhotoInfo(){
            if(this.updateInfo.Desc==='')
            {
              alert('描述不能为空');
              return;
            }
            this.dialogVisible=false;
            this.updateInfo.is_disabled = this.radio1 !== '公开';
          updatePhotos(this.updateIndex,this.updateInfo).then((response)=> {
            alert('修改成功');
            this.getInfo();

          }).catch(function (error) {
            alert(error.response);
            console.log(error.response);
          });

        },

        addInfo(){
          if(this.newPhotosInfo.Desc==="")
          {
            alert('相册描述不能为空!');
            return;
          }
          this.newPhotosInfo.is_disabled=false;
          addPhotos(this.newPhotosInfo).then((response)=> {
            alert('添加成功');
            // 重置新的
            this.getInfo();
            this.newPhotosInfo.title='';
          }).catch(function (error) {
            alert(error.response);
          });
        },

        addSecretInfo(){
          if(this.newPhotosInfo.Desc==="")
          {
            alert('相册描述不能为空!');
            return;
          }
          this.newPhotosInfo.is_disabled=true;
          addPhotos(this.newPhotosInfo).then((response)=> {
            alert('添加成功');
            // 重置新的
            this.getInfo();
            this.newPhotosInfo.title='';
          }).catch(function (error) {
            alert(error.response);
          });
        },

        delPhotosInfo(id){
          if(confirm('确定要删除该相册嘛?该相册里面的照片都将会全部删除')===true)
          {

            delPhotos(id).then((response)=> {
              alert('删除成功');
              this.getInfo();
            }).catch(function (error) {
              alert(error.response);
            });

          }

        },



      },


      created() {
          this.getInfo();
        this.propsid = localStorage.getItem('user_id');
      },
    }
</script>

<style scoped>
  a{
    text-decoration: none;
    margin-bottom: 23px;
    height: 20px;
  }

  .mybutton{
    width: 120px;
    height: 20px;

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

  .mybutton{
    width: 100%;
    height: 20px;

  }
  /*搜索框*/
  input {
    width: 100%;
    border-bottom: 1px solid #dbdbdb;
    border-top:0px;
    border-left:0px;
    border-right:0px;
  }

  .search{
    height: 20px;
    width: 100% ;
    margin-bottom: 20px;
  }



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
