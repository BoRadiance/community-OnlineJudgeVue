<template>
  <div >
    <input type="text" v-model="message">
    <button type="button"
            v-clipboard:copy="message"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError">Copy!</button>
  </div>
</template>

<script>

  export default {
    name: "login",
    data: function () {
      return {
        message: 'Copy These Text'
      }
    },
    methods: {
      onCopy: function (e) {
        alert('You just copied: ' + e.text)
      },
      onError: function (e) {
        alert('Failed to copy texts')
      }
    }
  }
</script>

<style scoped>
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
  /*面板&样式*/
  .widget-content {
    display: inline-block;
    padding: 20px 30px 55px 34px;
    margin-top: 10px;
    width: 100%;
    background-color:white;


    border-radius:30px;
  }



  .title{
    width:100%; display:block; line-height:1.5em; overflow:visible; font-size:22px; text-shadow:#f3f3f3 1px 1px 0px, #b2b2b2 1px 2px 0
  }
  /*tag &样式*/



  .container {
    margin-top:5%;
  }




  .row{
    margin-top: 20px;
  }

  /*登录样式*/
  .col-md-6-left{
    border-right:  1px solid #dbdbdb;

  }

  .cmp-info {
    float: left;
    width: 100%;
    padding: 70px 5px 92px 5px;
  }


  .cm-logo {
    float: left;
    width: 100%;
    padding-left: 45px;
    margin-bottom: 120px;
  }


  .login-sec {
    float: left;
    width: 100%;
    padding: 30px 0;
    position: relative;
  }



  .row {
    margin: 0;
  }


  .checky-sec > a {
    float: right;
    color: #000000;
    font-size: 14px;
    font-weight: 600;
  }
  .sign_in_sec form {
    float: left;
    width: 100%;
  }

  img{
    width: 100%;
    height:100%
  }

  button:hover{
    background-color: #2d8cf0;
    color:white;
  }

  .no-pdd{
    padding:0px;
  }

  form .row{

  }
  a{
    color: black;
    text-decoration: none;
  }

  .help-block{
    color:red;
  }
  /*登录样式*/


</style>
