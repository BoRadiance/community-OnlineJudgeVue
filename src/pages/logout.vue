<template>
  <div>
  <blog_nav></blog_nav>
 <div class="container">
   <div class="row">
     <div class="col-md-12">
       <div class="text-center"> <h4>已经退出登录,清理了所有缓存数据,您可以重新登录</h4></div>
     </div>
   </div>
 </div>
  </div>
</template>

<script>
  import  blog_nav from '../components/community/comm_nav'
    export default {
        name: "logout",

      data(){
          return{

          }
      },
      components:{
        blog_nav,

      },

      methods:{
         mylogout(){
           localStorage.clear();
         }

      },

      created() {
          this.mylogout()
      },


    }
</script>

<style scoped>

</style>
