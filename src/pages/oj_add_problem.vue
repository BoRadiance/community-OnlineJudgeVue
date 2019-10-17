<template>
  <div>
    <blog_nav>
    </blog_nav>

    <div class="container" style="margin-top: 23px;">
      <div class="row">
        <div class="col-md-12">
          <div class="widget-content" data-aos="fade-up" data-aos-delay="300" style="padding-top:23px; padding-left: 23px;
padding-right: 23px;padding-bottom: 23px">

            <input type="text" class="pull-left text-center" placeholder="题目标题(不可为空)" v-model="newproblem.title">
            <br>
            <br>
            <br>

            <div>
              <div style="margin-top: 20px;">选择该题目的标签(最少一种,如果没有想要的标签,请联系管理员添加!)</div>
              <div class="widget-tags">

                <a  v-for="(p,index) in tagList" :key="index" @click="selectTags(index,p.id)" href="javascript:;" >
                  {{p.name}}
                  <font-awesome-icon v-show="!p.is_disabled" icon="lock" fixed-width />
                </a>


              </div>
              <div>已经选中的: {{this.selectedTag}}</div>
              <br>
              <br>
              <h4>题目描述:</h4>


              <tinymce-editor v-model="newproblem.pro_desc"

                              ref="editor"></tinymce-editor>

              <br>
              <h4>输入描述:</h4>
              <tinymce-editor v-model="newproblem.pro_input"


                              ref="editor"></tinymce-editor>

              <br>
              <h4>输出描述:</h4>
              <tinymce-editor v-model="newproblem.pro_output"

                              ref="editor"></tinymce-editor>


              <br>
              <h4>样例输入:</h4>
              <tinymce-editor v-model="newproblem.sample_input"


                              ref="editor"></tinymce-editor>


              <br>
              <h4>样例输出:</h4>
              <tinymce-editor v-model="newproblem.sample_output"


                              ref="editor"></tinymce-editor>




              <input type="text" class="pull-left text-center" placeholder="时间限制(ms)" v-model="newproblem.time_limit">
              <br>
              <br>

              <input type="text" class="pull-left text-center" placeholder="空间限制(m)" v-model="newproblem.memory_limit">
              <br>
              <br>
              <input type="text" class="pull-left text-center" placeholder="来源(可为空,默认原创)" v-model="newproblem.source">
              <br>
              <br>

              <input type="text" class="pull-left text-center" placeholder="提示(可为空)" v-model="newproblem.hit">
              <br>
              <br>
              <div>是否特判:</div>
              <el-radio-group v-model="radio1" size="small" @change="SpecialJudge">
                <el-radio-button label="是"></el-radio-button>
                <el-radio-button  label="否"></el-radio-button>
              </el-radio-group>

              <br>
              <br>
              <div>题目难度:</div>
              <el-radio-group v-model="radio2" size="small" @change="changedegree">
                <el-radio-button label="Low"></el-radio-button>
                <el-radio-button  label="Mid"></el-radio-button>
                <el-radio-button  label="Hard"></el-radio-button>
              </el-radio-group>

            </div>

            <div class="col-md-3 col-md-offset-9">
              <button type="submit" class="btn btn-primary " style="margin-bottom: 20px; margin-top: 20px;" @click="myaddProblem">上传题目</button>


            </div>




          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import blog_nav from '../components/community/comm_nav'
  import {addProblem,getProblemTag} from "../api/api";
  import TinymceEditor from '../components/tinymce-editor'



  export default {
        name: "oj_add_problem",
      components:{
          blog_nav,
        TinymceEditor,
      },

    data(){
      return {
          newproblem:{
            title: "",
            pro_desc: "请输入题目描述(请删除该提示)",
            source: "",
            pro_input: "请输入题目输入描述(请删除该提示)",
            pro_output: "请输入题目输出描述(请删除该提示)",
            sample_input: "请输入题目样例输入(请删除该提示)",
            sample_output: "请输入题目样例输出(请删除该提示)",
            tags: [],
            hit: "",
            time_limit: "",
            spj: false,
            memory_limit: "",
            degree: 1,
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
        radio1:'否',
        radio2:'Low',

      }
    },

    methods:{
      SpecialJudge(){
        this.newproblem.spj = !(this.radio1 === '是');
      },
      changedegree(){
        if(this.radio2==='Low'){
          this.newproblem.degree = 1;
        }
        if(this.radio2==='Mid'){
          this.newproblem.degree = 2;
        }
        if(this.radio2==='Hard'){
          this.newproblem.degree = 3;
        }
      },


      getTagInfo(){
        getProblemTag().then((response)=>{
          this.tagList = response.data;
        }).catch(function (error) {
          console.log(error.response)
        })
      },

      selectTags(index,id){
        this.tagList[index].select=!this.tagList[index].select;
        this.getSelectedTag();
      },

      getSelectedTag(){
        this.newproblem.tags=[];
        this.selectedTag="";
        for(var i =0;i<this.tagList.length;i++)
        {
          if(this.tagList[i].select)
          {
            this.selectedTag = this.selectedTag+this.tagList[i].name+',';
            this.newproblem.tags.push(this.tagList[i].id);
          }
        }
      },

      myaddProblem(){
        if(this.newproblem.title==='')
        {
          alert('问题标题不能为空');
          return ;
        }
        if(this.newproblem.tags.length===0){
          alert('至少选择一个标签');
          return ;
        }

        addProblem(this.newproblem).then((response)=>{
          alert('添加成功');
          this.$router.push({ name: 'oj_admin_problem'})
        }).catch(function (error) {
          console.log(error.response)
        })

      }

    },

    created() {
          this.getTagInfo();
    }


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
