<template>
  <div id="app">

    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>


export default {


  name: 'App',
  components:{

  }
}

</script>

<style>

  body{
    background-color: #eee;
  }
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    font-size: 14px;
  }

  a:hover {
    text-decoration: none;
  }

  a:focus{outline:none;}

  /*-------main---------*/
  .autoMenu{
    position: fixed;
    bottom: 10%;
    right: 5%;
    z-index: 1;
    text-align: left;
  }
  .autoMenu ul{
    line-height: 2;
    overflow-y: auto;
    background: #fff;
    -webkit-box-shadow:0 0 10px #CCC;
    -moz-box-shadow:0 0 10px #CCC;
    box-shadow:0 0 10px #CCC;
  }
  .autoMenu ul>li.sub{
    padding-left: 20px;
  }
  .autoMenu ul>li>a{
    color: #399c9c;
  }
  .autoMenu ul>li.active>a{
    color: #ff5370;
  }

  .btn-box{
    display: inline-block;
    width: 40px;
    height: 40px;
    text-decoration: none;
    position: relative;
  }
  .icon-plus-sign{
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border:4px solid #91ba61;
    background: #91ba61;
    position: absolute;
    top:3px;
    left:3px;
  }
  .icon-plus-sign:before,.icon-plus-sign:after{
    content: '';
    display: inline-block;
    width: 3px;
    height: 20px;
    background: #fff;
    margin-top: 4px;
    margin-left: 2px;
    padding-top: 6px;
    border-radius: 1px;
    position: absolute;
    top:3px;
    left:11.5px;
  }
  .icon-plus-sign:after{
    -webkit-transform:rotate(90deg);
  }
  .icon-minus-sign{
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border:4px solid #ff5370;
    background: #ff5370;
    position: absolute;
    top:3px;
    left:3px;
  }
  .icon-minus-sign:before{
    content: '';
    display: inline-block;
    width: 23px;
    height: 3px;
    background: #fff;
    border-radius: 1px;
    margin-top: 2px;
    position: absolute;
    left:3px;
    top:11.5px;
  }
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  ::-webkit-scrollbar
  {
    width: 4px;
    height: 4px;
    background-color: #F5F5F5;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.3);
    border-radius: 5px;
    background-color: #F5F5F5;
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb
  {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,.3);
    background-color: #555;
  }
</style>
