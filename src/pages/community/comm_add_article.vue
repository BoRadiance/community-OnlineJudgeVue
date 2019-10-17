<template>
  <div>
    <blog_nav>
    </blog_nav>

    <div class="container ">
      <div class="row">
        <div class="col-md-12">
          <div class="widget-content" data-aos="fade-up" data-aos-delay="300" style="padding-top:23px; padding-left: 23px;
padding-right: 23px;padding-bottom: 23px">



            <input type="text" class="pull-left text-center" placeholder="文章标题,(可以为空)" v-model="newarticle.title">
            <br>
            <br>
            <br>

            <tinymce-editor v-model="newarticle.content"


                            ref="editor"></tinymce-editor>

            <div style="margin-top: 20px;">选择该文章的标签(最少一种,您可以在标签管理页面管理自己的标签!)</div>
            <div class="widget-tags">

              <a  v-for="(p,index) in tagList" :key="index" @click="selectTags(index,p.id)" href="javascript:;" >
                {{p.title}}
                <font-awesome-icon v-show="p.is_disabled" icon="lock" fixed-width />
              </a>


            </div>
            <div>已经选中的: {{this.selectedTag}}</div>

            <div class="col-md-3 col-md-offset-9">
              <button type="submit" class="btn btn-primary " style="margin-bottom: 20px; margin-top: 20px;" @click="addArticle">上传公开文章</button>

              <button type="submit" class="btn btn-primary " @click="addSecretArticle">上传私密文章</button>
            </div>

          </div>

        </div>

      </div>

    </div>



  </div>
</template>

<script>

  import  blog_nav from '../../components/community/comm_nav'
  import { addArticle,getTag} from "../../api/api";
  import TinymceEditor from '../../components/tinymce-editor'


  export default {
    name: "comm_add_article",

    components:{
      blog_nav,
      TinymceEditor,
    },

    data(){
      return{
        newarticle:{
          tags:[],
          is_disabled:false,
          title:'',
          content: '',
        },
        uploadhead:{

        },
        Img:'',
        tagList:[],
        selectedTag:"",
        dialogVisible: false,

      }
    },

    methods:{


      getTagInfo()
      {
        getTag().then((response)=> {
          console.log(response.data);
          this.tagList = response.data;
          for(var i =0;i<this.tagList.length;i++)
          {
            this.tagList[i].select=false;
          }
        }).catch(function (error) {
          alert(error.response);
        });
      },


      selectTags(index,id){
        this.tagList[index].select=!this.tagList[index].select;
        this.getSelectedTag();
      },

      getSelectedTag(){
        this.newarticle.tags=[];
        this.selectedTag="";
        for(var i =0;i<this.tagList.length;i++)
        {
          if(this.tagList[i].select)
          {
            this.selectedTag = this.selectedTag+this.tagList[i].title+',';
            this.newarticle.tags.push(this.tagList[i].id);
          }
        }
      },

      addArticle(){
        this.newarticle.is_disabled=false;
        if(this.newarticle.tags.length===0){
          alert('请至少选择一个你的标签!');
          return;
        }

        if(this.newarticle.content===''){
          alert('内容不能为空!');
          return;
        }

        addArticle(this.newarticle).then((response)=> {
          alert('添加成功');
          this.$router.push({path:'/comm_admin_article'})
          // 重置新的
          this.newarticle.title='';
          this.newarticle.content='';
          this.newarticle.tags =[];
          this.newarticle.is_disabled = false;

        }).catch(function (error) {
          alert(error.response);
        });
      },

      addSecretArticle(){
        this.newarticle.is_disabled=true;
        if(this.newarticle.tags.length===0){
          alert('请至少选择一个你的标签!');
          return;
        }

        if(this.newarticle.content===''){
          alert('内容不能为空!');
          return;
        }

        addArticle(this.newarticle).then((response)=> {
          alert('添加成功');
          this.$router.push({path:'/comm_admin_article'})
          // 重置新的
          this.newarticle.title='';
          this.newarticle.content='';
          this.newarticle.tags =[];
          this.newarticle.is_disabled = true;

        }).catch(function (error) {
          alert(error.response);
        });

      },



    },

    created() {
      this.getTagInfo();
    },

    computed:{

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
