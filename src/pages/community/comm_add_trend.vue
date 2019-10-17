<template>
  <div>
    <blog_nav></blog_nav>

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="widget-content" data-aos="fade-up" data-aos-delay="300" style="padding-top:23px; padding-left: 23px;
padding-right: 23px;padding-bottom: 23px">
            <p class="text-center">发布新动态</p>
            <tinymce-editor v-model="newtrend.content"
                            ref="editor"></tinymce-editor>




            <div class="col-md-3 col-md-offset-9">
              <button type="submit" class="btn btn-primary " style="margin-bottom: 20px; margin-top: 20px;" @click="addATrend">发布</button>

              <button type="submit" class="btn btn-primary " style="margin-bottom: 20px; margin-top: 20px;" @click="addATrendAnonymous">匿名发布</button>

            </div>
          </div>

          </div>
      </div>
    </div>

  </div>
</template>

<script>
  import  blog_nav from '../../components/community/comm_nav'
  import TinymceEditor from '../../components/tinymce-editor'

  import {addTrend} from "../../api/api";

  export default {
        name: "comm_add_trend",

      data(){
          return {
            newtrend:{
              tags:'',
              content:'',
              is_disabled:false,
            },
          }
      },

    components:{
          blog_nav,
          TinymceEditor,
    },

      methods:{
        addATrend(){
          if(this.newtrend.content===''){
            alert('内容不能为空');
            return;
          }
          addTrend(this.newtrend).then((response)=> {
            alert('发布动态成功,快到管理页面为动态添加图片吧..');
            this.$router.push({path: '/comm_admin_trend'});
          }).catch(function (error) {
            alert(error.response);
          })
        },

        addATrendAnonymous(){
          this.newtrend.is_disabled =  true;
          if(this.newtrend.content===''){
            alert('内容不能为空');
            return;
          }

          addTrend(this.newtrend).then((response)=> {
            alert('发布动态成功,快到管理页面为动态添加图片吧..');
            this.$router.push({path: '/comm_admin_trend'});
          }).catch(function (error) {
            alert(error.response);
          })
        }
      },

      created() {
          this.newtrend.tags = this.$route.params.id;
      },


    }
</script>

<style scoped>
  .col-md-12{
    overflow: hidden;
  }
  .el-upload__input {
    display: none;

  }
  /*面板&样式*/
  .widget-content {
    display: inline-block;
    border-radius: 5px;
    width: 100%;
    background-color:white;
    margin-bottom: 20px;
  }

  /*搜索框*/
  input {
    width: 100%;
    border-bottom: 1px solid #dbdbdb;
    border-top:0px;
    border-left:0px;
    border-right:0px;
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


</style>
