import * as types from './mutation-types';

import Vue from 'vue';

export default {
  [types.SET_INFO](state,args){
    state.userinfo={
      username:args.username,
      user_id:args.user_id,
      token:args.token,


    }

  },

  [types.GET_ALL_USER_INFO](state,args){
    state.all_userinfo=args
  },

  [types.ALERT_VISIT](state,args){

    state.visit_user_id = args
  },




}
