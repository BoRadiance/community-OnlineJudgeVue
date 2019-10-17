//引入vue
import Vue from 'vue'
//全局引入vueX
import Vuex from 'vuex';

import mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';


//全局注册vueX
Vue.use(Vuex);

const  state ={
  userinfo:{
    token:localStorage.getItem('token')||'',
    user_id:localStorage.getItem('user_id')||'',
    username:localStorage.getItem('username')||'',
  }, //用户信息,包括id ,username,token等等...
  visit_user_id:localStorage.getItem('visit_user_id')||'', //当前访问的用户的id..也可能是自己
  all_userinfo:[], //所有用户信息
  articleurl:'',//当前请求文章的url

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});




