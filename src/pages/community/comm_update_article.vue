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
              <button type="submit" class="btn btn-primary " style="margin-bottom: 20px; margin-top: 20px;" @click="addArticle">更新为公开文章</button>

              <button type="submit" class="btn btn-primary " @click="addSecretArticle">更新为私密文章</button>
            </div>





          </div>
        </div>



      </div>
    </div>



  </div>
</template>

<script>

  import  blog_nav from '../../components/community/comm_nav'
  import { updateArticle,getArticleDetail2,getTag} from "../../api/api";
  import TinymceEditor from '../../components/tinymce-editor'


  export default {
    name: "comm_update_article",

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
        myConfig: {
          // 编辑器自动被内容撑高
          autoHeightEnabled: true,
          // 初始容器高度
          initialFrameHeight: 400,
          // 初始容器宽度
          initialFrameWidth: '100%',
          UEDITOR_HOME_URL: '/static/UEditor/',

        },
        editorHandler: null,

      }
    },

    methods:{

      setHeader(){
        this.uploadhead.Authorization = `JWT `+localStorage.getItem('token') ;
      },

      uploadfile(){
        this.setHeader();
        this.$refs.upload.submit();
        this.dialogVisible=false;
      },

      addCustomButtom (editorId) {
        let _this = this;
        window.UE.registerUI('test-button', function (editor, uiName) {
          // 注册按钮执行时的 command 命令，使用命令默认就会带有回退操作
          editor.registerCommand(uiName, {
            execCommand: () => {
              // _this.imageList = [];
              _this.dialogVisible = true;
              _this.editorHandler = editor;
              //editor.execCommand('inserthtml', `<span>这是一段由自定义按钮添加的文字</span>`)
            }
          })

          // 创建一个 button
          var btn = new window.UE.ui.Button({
            // 按钮的名字
            name: uiName,
            // 提示
            title: '插入图片',
            // 需要添加的额外样式，可指定 icon 图标，图标路径参考常见问题 2
            cssRules: "background-position: -380px 0;",
            // 点击时执行的命令
            onclick: function () {
              // 这里可以不用执行命令，做你自己的操作也可
              editor.execCommand(uiName)
            }
          })

          // 当点到编辑内容上时，按钮要做的状态反射
          editor.addListener('selectionchange', function () {
            var state = editor.queryCommandState(uiName)
            if (state === -1) {
              btn.setDisabled(true)
              btn.setChecked(false)
            } else {
              btn.setDisabled(false)
              btn.setChecked(state)
            }
          })

          // 因为你是添加 button，所以需要返回这个 button
          return btn
        } /* 指定添加到工具栏上的哪个位置，默认时追加到最开始 */, editorId /* 指定这个 UI 是哪个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮 */)
      },

      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogVisible = true;
      },
      successup(response){
        //alert('上传成功');
        // alert(response.data.url);
        let imageHtml = "";
        imageHtml = imageHtml + "<p><img src=\"" +response.data.url+ "\"/></p>";
        //alert(imageHtml);
        this.editorHandler.execCommand('inserthtml', imageHtml);
        this.$refs.upload.clearFiles();
      },




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

      getArticleInfo()
      {
        getArticleDetail2(this.$route.params.id).then((response) =>{
            console.log('获取文章信息');
            console.log(response.data);
            this.newarticle.title = response.data['title'];
            this.newarticle.content = response.data['content'];
           // this.newarticle.tags =this.tagList;
        }).catch(function (error) {
          console.log('有错误了');
          console.log(error.response.data)
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

        updateArticle(this.$route.params.id,this.newarticle).then((response)=> {
          alert('更新成功');
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

        updateArticle(this.$route.params.id,this.newarticle).then((response)=> {
          alert('更新成功');
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
      this.getArticleInfo();
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
