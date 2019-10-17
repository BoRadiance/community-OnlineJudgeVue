// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import  'jq-fakeloader/dist/fakeLoader.min.js'
import 'jq-fakeloader/dist/fakeLoader.min.css'
import highcharts from 'highcharts'
import VueHighCharts from 'vue-highcharts'
import highcharts3d from 'highcharts/highcharts-3d'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
// 复制到粘贴板插件



import axios from 'axios'

//全局状态控制引入
import store from './store/store';

//高亮插件

import hljs from 'highlight.js';
import 'highlight.js/styles/tomorrow-night-eighties.css' //样式文件

Vue.directive('highlight',function (el) {
  setTimeout(() =>{
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block)=>{
      hljs.highlightBlock(block)
    })
  }, 200)
})
// css样式还是需要全部引入
import 'element-ui/lib/theme-chalk/index.css'
import element from './element/index'
Vue.use(element)


library.add(fas, far, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)


highcharts3d(highcharts)



Vue.config.productionTip = false

//全局加载resource拦截器
import './axios/';
import Axios from 'axios';
Vue.prototype.$http = Axios


router.beforeEach((to, from, next) => {

  if(to.name==='trendlist')
  {
      if(from.name==='trend'||from.name==='comm_add_trend'){
        to.meta.keepAlive = true;
      }
      else{
        to.meta.keepAlive = false;
      }
  }

  if(to.name==='personindex')
  {
     if(from.name==='trend'){
       to.meta.keepAlive = true;
     }
     else{
       to.meta.keepAlive = false;
     }
  }

  if(to.name==='personarticle'){
    if(from.name==='article'){
      to.meta.keepAlive = true;
    }
    else{
      to.meta.keepAlive = false;
    }
  }

  if (to.matched.some(record => record.meta.requireAuth)){ // 判断该路由是否需要登录权限
    if (localStorage.getItem("user_id")) { // 判断当前的token是否存在
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
});
/* eslint-disable no-new */
new Vue({
  created() {
    AOS.init();
  },
  el: '#app',
  components: { App },
  $,
  router,
  store,
  template: '<App/>'
})

Vue.filter("truncature",function (value) {
   return value;
})
