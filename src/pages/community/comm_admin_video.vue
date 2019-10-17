<template>
<div>

  <blog_person_nav :id="propsid"></blog_person_nav>
  <div class="container">
    <div class="widget-content mar-top" data-aos="fade-up" data-aos-delay="300">
      <div class="title text-center"> 添加视频 </div>
      <hr>
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <div class="center">
            <div class="search  ">
              <input type="text" class="pull-left text-center" placeholder="视频描述"  v-model="newvideoInfo.Desc">
              <br>

            </div>
            <input type="file" name="message_img" size="45" class="inputBg" @change="preview">


            <div   class="btn-primary amybutton text-center mar-bottom mar-top " @click="addInfo"><font-awesome-icon icon="plus"  />添加为公开视频</div>


            <div  class="btn-warning amybutton text-center mar-bottom mar-top "
            @click="addSecretInfo"><font-awesome-icon icon="plus"  />添加为私密视频</div>
          </div>


        </div>

      </div>


     </div>


    <div class="row">
      <div class="col-md-4" v-for="(p,index) in videoList " :key="index">
        <div class="widget-content" data-aos="fade-up" data-aos-delay="300">
          <div class="title text-center"> {{p.Desc}}
            <font-awesome-icon v-show="p.is_disabled" icon="lock" fixed-width />
          </div>
          <hr>
          <div  class="btn-primary mybutton text-center mar-bottom  center-block" @click="viewvideo(p.vid)"><font-awesome-icon icon="eye"  />查看该视频</div>

          <div class="btn-danger mybutton text-center mar-bottom center-block"  @click="delInfo(p.id)"><font-awesome-icon icon="trash-alt"/>删除该视频</div>

          <div  class="btn-primary mybutton text-center mar-bottom  center-block"  @click="openDialog(p.id)" ><font-awesome-icon icon="edit" />上传(更新)视频及描述</div>






        </div>



      </div>

    </div>




    </div>

  <div class="row">
    <el-dialog
      title="更新视频信息"
      :visible.sync="dialogVisible"
      width="100%">
      <div class="col-md-12">

        <input type="text" class="pull-left text-center" placeholder="输入简短的视频描述" v-model="updateInfo.Desc">

      </div>
      <input type="file" name="message_img" size="45" class="inputBg" @change="preview2">


      <div style="margin-top: 40px">
        <el-radio-group v-model="radio1" size="small">
          <el-radio-button label="私密"></el-radio-button>
          <el-radio-button  label="公开"></el-radio-button>
        </el-radio-group>
      </div>

      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="updateVideoInfo">确 定</el-button>
  </span>
    </el-dialog>
  </div>

  <!--视频弹框-->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>

        </div>
        <div class="modal-body">
          <video :src="videourl" controls="controls">
          </video>
        </div>

      </div>
    </div>
  </div>

</div>

</template>

<script>
  import blog_person_nav from '../../components/community/comm_person_nav'
  import {getvideo2,addvideo,updatevideo,delvideo} from "../../api/api";

  export default {
        name: "comm_admin_video",

    components:{
          blog_person_nav,
    },

    data(){
          return{
            updateIndex:-1,
            newvideoInfo:{
              is_disabled:false,
              Desc:'',
              vid:''
            },
            updateInfo:{
              Desc:'',
              is_disabled:false,
              vid:'',
            },
            videoList:[],
            dialogVisible: false,
            dialogVisible2:false,
            radio1:'公开',
            videourl:'',
            propsid :'',
          }
    },


    methods:{
      viewvideo(url){
        this.videourl=url;
        $('#exampleModal').modal('show');
      },
      preview (e) {
        console.log(e.target.files);
        this.newvideoInfo.vid = e.target.files[0]; //获取文件资源
      },

      preview2 (e) {
        console.log(e.target.files);
        this.updateInfo.vid = e.target.files[0]; //获取文件资源
      },


      openDialog(id){
        this.dialogVisible=true;
        this.updateIndex=id;
      },

      getInfo(){
        getvideo2().then((response)=> {
          console.log(response.data);
          this.videoList = response.data;

        }).catch(function (error) {
          alert(error.response);
        });
        this.newvideoInfo.Desc='';
        this.updateInfo.Desc='';
      },

      updateVideoInfo(){
          if(this.updateInfo.Desc===''){
            alert('描述不能为空!');
            return ;
          }

          this.dialogVisible = false;
          this.updateInfo.is_disabled = this.radio1 !== '公开';

        const formData = new FormData();
        formData.append("is_disabled",this.updateInfo.is_disabled);
        formData.append("Desc",this.updateInfo.Desc);
        formData.append("vid",this.updateInfo.vid);

          updatevideo(this.updateIndex,formData).then((response)=> {
            alert('修改成功');
            this.getInfo();

          }).catch(function (error) {
            alert(error.response);
            console.log(error.response);
          });
      },




      delInfo(id){
        if(confirm('确定要删除该视频嘛?')===true) {
            delvideo(id).then((response)=> {
              alert('删除成功');
              this.getInfo();
            }).catch(function (error) {
              alert(error.response);
            });
          }
        },


      addInfo(){
        if(this.newvideoInfo.Desc==='')
        {
          alert('视频描述不能为空!');
          return;
        }

        this.newvideoInfo.is_disabled = false;
        const formData = new FormData();
        formData.append("is_disabled",this.newvideoInfo.is_disabled);
        formData.append("Desc",this.newvideoInfo.Desc);
        formData.append("vid",this.newvideoInfo.vid);
        addvideo(formData).then((response)=> {
          alert('添加成功');
          // 重置新的
          this.getInfo();
          this.newvideoInfo.title='';
        }).catch(function (error) {
          console.log(error.response);
        });

      },

      addSecretInfo(){
        if(this.newvideoInfo.Desc==='')
        {
          alert('视频描述不能为空!');
          return;
        }
        this.newvideoInfo.is_disabled = true;
        const formData = new FormData();
        formData.append("is_disabled",this.newvideoInfo.is_disabled);
        formData.append("Desc",this.newvideoInfo.Desc);
        formData.append("vid",this.newvideoInfo.vid);

        addvideo(formData).then((response)=> {
          alert('添加成功');
          // 重置新的
          this.getInfo();
          this.newvideoInfo.title='';
        }).catch(function (error) {
          alert(error.response);
        });
      },

        },

    created() {
      this.getInfo();
      this.propsid = localStorage.getItem('user_id');
    },
    mounted() {
      myfunction();
    },

  }
  function myfunction()
  {
    $('.modal').on('hide.bs.modal',function (e) {
      $('video').trigger('pause');
    })
  }

  $(document).ready(function () {
    $('.modal').on('hide.bs.modal',function (e) {
      $('video').trigger('pause');
    })
  })
</script>


<style scoped>

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

  /*搜索框*/

  .mybutton{
    width: 200px;
    height: 20px;

  }
  .amybutton{
    width:100%;
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


  /*分页*/
  .pagination{ text-align: center;font-size: 12px;padding: 10px 0;display:inline-block}
  .pagination a,.pagination span{display: inline-block;padding: 0 10px;height: 28px;line-height: 28px;border: 1px solid #ddd;border-radius: 4px;text-decoration: none;color: #999;cursor: pointer;  margin-right:5px;}
  .pagination a:hover:not(.disabled):not(.current),.pagination span:hover:not(.disabled):not(.current){color:#f04848}
  .pagination a.disabled,.pagination span.disabled{color: #bfbfbf;background: #f5f5f5;cursor: no-drop;border: 1px solid #ddd;}

  /*分页*/



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
  video{
    width: 100%;
    height: 100%;
  }

</style>
