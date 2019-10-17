<template>
  <div>

    <div  class="text-center" id="controlnav" @click="changeshow">
      <p v-if="display">显示 <br>导航 </p>
      <p v-else>隐藏 <br>导航 </p>
    </div >

    <div id="index" v-bind:class="{'colordisplay':display}" >
      <div class="iscollapse" @click="setcollapse">
        <p v-if="isCollapse">展开 <br>导航 </p>
        <p v-else>收缩 <br>导航 </p>
      </div>


      <el-menu router :default-active="$route.path"  @open="handleOpen" @close="handleClose" :collapse="isCollapse">

        <el-submenu index="">
          <template slot="title">
            <i class=""> <font-awesome-icon icon="icons" fixed-width /> </i>
            <span slot="title">用户操作</span>
          </template>
          <el-menu-item-group v-if="user">
            <span slot="title">register&login</span>
            <el-menu-item index="/login">登录</el-menu-item>
            <el-menu-item index="/register">注册</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group title="manage">
            <el-menu-item index="/comm_admin_userinfo" @click="changevisitorid">个人信息管理</el-menu-item>
            <el-menu-item index="/comm_admin_article" @click="changevisitorid">文章管理</el-menu-item>
            <el-menu-item index="/comm_admin_trend" @click="changevisitorid">动态管理</el-menu-item>
            <el-menu-item index="/comm_admin_photo" @click="changevisitorid">相册管理</el-menu-item>
            <el-menu-item index="/comm_admin_video" @click="changevisitorid">视频管理</el-menu-item>
            <el-menu-item index="/comm_admin_tag" @click="changevisitorid">标签管理</el-menu-item>
            <el-menu-item index="/oj_admin_problem" @click="changevisitorid">上传题目管理</el-menu-item>


          </el-menu-item-group>

        </el-submenu>


        <el-menu-item index="/comm_index" @click="changevisitorid">
          <i class=""><font-awesome-icon icon="fire" fixed-width /></i>
          <span slot="title">南理社区首页</span>
        </el-menu-item>

        <el-menu-item index="/oj_index" @click="changevisitorid">
          <i class=""><font-awesome-icon icon="code" fixed-width /></i>
          <span slot="title">在线编程评测</span>
        </el-menu-item>

        <el-menu-item :index="url" @click="changevisitorid">
          <i class=""><font-awesome-icon icon="id-card" fixed-width /></i>
          <span slot="title">个人中心</span>
        </el-menu-item>


        <el-menu-item index="/trendlist" @click="changevisitorid">
          <i class=""><font-awesome-icon icon="heart" fixed-width /></i>
          <span slot="title">动态广场</span>
        </el-menu-item>

        <el-menu-item index="/chatlist" @click="changevisitorid">
          <i class=""><font-awesome-icon icon="comments" fixed-width /></i>
          <span slot="title">公聊大厅</span>
        </el-menu-item>






      </el-menu>

    </div>

  </div>

</template>

<script>

  export default {
    data() {
      return {
        isCollapse: true,
        display: true,
        url:"/comm_person/"+localStorage.getItem("user_id"),
        user:true,
      };

    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      setcollapse()
      {
        this.isCollapse=!this.isCollapse;

      },
      changeshow(){
        this.display=!this.display;
      },
      changevisitorid()
      {
          this.$store.dispatch('altervisit',this.$store.state.userinfo.user_id)
      }
    },

    created() {
      if (localStorage.getItem("user_id"))
      {

        this.user = false;

      }
    }

  }
</script>

<style scoped>

  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
  .iscollapse {
    background: white;
    color: #283644;
    width: 64px;
    height: 65px;
    padding-top: 8px;
    text-align: center;
    border: 1px #8c8c8c solid;
  }

  #index {
    position: fixed;
    margin-top: 150px;
    z-index: 99999;

  }
  #controlnav{
    opacity: 0.5;
    color:black ;
    width: 63px;
    height: 56px;
    padding-top: 8px;
    text-align: center;
    position: fixed;
    z-index: 99999;
    margin-top: 70px;

    border: 1px #283644 solid;

  }
  .colordisplay {
    display: none;
  }
</style>
