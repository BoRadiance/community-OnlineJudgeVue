<template>
  <div>

    <blog_person_nav :id="propsid"></blog_person_nav>
    <div class="container">




      <div class="row">
      <div class="col-md-12 ">

        <div class="widget-content " data-aos="fade-up" data-aos-delay="500">
          <div class="title text-center"> 新增标签 </div>
          <hr>
       <div class="row">
         <div class="col-md-6 col-md-offset-3">
           <div class="center">
             <div class="search  ">
               <input type="text" class="pull-left text-center" placeholder="标签名" v-model="newTagInfo.title">

             </div>
             <div  @click="addTagInfo" class="btn-primary mybutton text-center mar-bottom mar-top "><font-awesome-icon icon="plus"  />添加为公开新标签</div>


             <div  @click="addSecretTagInfo" class="btn-warning mybutton text-center mar-bottom mar-top "><font-awesome-icon icon="plus"  />添加为私密新标签</div>
           </div>


         </div>

       </div>
      </div>




        <div class="widget-content" data-aos="fade-up" data-aos-delay="500">
          <div class="title text-center"> 点击某个标签选择 ..编辑.. </div>
          <hr>
        <div class="widget-tags">

          <a  v-for="(p,index) in tagList" :key="index"   @click="openDialog(p.id)">
            {{p.title}}

            <font-awesome-icon v-show="p.is_disabled" icon="lock" fixed-width />
          </a>


        </div>
        </div>

        <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          width="100%">
          <input type="text" class="pull-left text-center" placeholder="标签名" v-model="updateInfo.title">
          <div style="margin-top: 40px">
            <el-radio-group v-model="radio1" size="small">
              <el-radio-button label="私密"></el-radio-button>
              <el-radio-button  label="公开"></el-radio-button>
            </el-radio-group>
          </div>

          <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="UpdateTagInfo">确 定</el-button>
  </span>
        </el-dialog>



        <div class="widget-content" data-aos="fade-up" data-aos-delay="500">
          <div class="title text-center"> 点击某个标签选择 ..删除.. </div>
          <hr>
          <p class="text-center">删除之后,该标签的文章也会删除,请慎重! 温馨提示:能修改就修改!</p>
          <div class="widget-tags">

            <a  v-for="(p,index) in tagList" :key="index" @click="deleteTagInfo(p.id)" >
              {{p.title}}

              <font-awesome-icon v-show="p.is_disabled" icon="lock" fixed-width />
            </a>


          </div>
        </div>


      </div>
      </div>
    </div>

  </div>
</template>

<script>
  import blog_person_nav from '../../components/community/comm_person_nav'
  import {addTag,deleteTag,updateTag,getTag}  from  '../../api/api'

    export default {
        name: "comm_admin_tag",
      components:{
          blog_person_nav,
      },
      data(){
          return{
            updateIndex:-1,
            newTagInfo:{
              title:'',
              is_disabled:false,
            },
            updateInfo:{
              title:'',
              is_disabled:false,
            },
            tagList:[],
            dialogVisible: false,
            radio1:'公开',
            propsid :'',
          }
      },

      methods:{

        openDialog(id){
          this.dialogVisible=true
          this.updateIndex=id;
        },

          getTagInfo()
          {
            getTag().then((response)=> {
              console.log(response.data);
              this.tagList = response.data;

            }).catch(function (error) {
              alert(error.response);
            });
        },

        UpdateTagInfo(){
          if(this.updateInfo.title==="")
          {
            alert('标题不能为空');
            return;
          }
          this.dialogVisible = false;
          this.updateInfo.is_disabled = this.radio1 !== '公开';

          updateTag(this.updateIndex,this.updateInfo).then((response)=> {
            alert('修改成功');
            this.getTagInfo();
          }).catch(function (error) {
            alert(error.response)
            console.log(error.response);
          });
        },



        addTagInfo(){
          this.newTagInfo.is_disabled=false;
            addTag(this.newTagInfo).then((response)=> {
              alert('添加成功');
              // 重置新的
              this.getTagInfo();
              this.newTagInfo.title='';
            }).catch(function (error) {
              alert(error.response);
            });
        },

        addSecretTagInfo(){
          this.newTagInfo.is_disabled=true;
          addTag(this.newTagInfo).then((response)=> {
            alert('添加成功');
            // 重置新的
            this.getTagInfo();
            this.newTagInfo.title='';
          }).catch(function (error) {
            alert(error.response);
          });
        },

        deleteTagInfo(id){
            if(confirm('确定要删除嘛? 该标签下的所有文章都会删除!')===true)
            {
              deleteTag(id).then((response)=> {
                alert('删除成功');
                this.getTagInfo();
              }).catch(function (error) {
                alert(error.response);
              });
            }

        }



      },




      created() {
        this.getTagInfo();
        this.propsid = localStorage.getItem('user_id');
      },






    }
</script>

<style scoped>

  .mybutton{
    width: 100%;
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
    background-color:red;
    color:white;
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


.center{
  padding-left: 23px;
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

  /*搜索框*/


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

