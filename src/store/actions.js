import * as types from './mutation-types';
// 提交mutation
function makeAction (type) {
  return ({ commit }, ...args) => commit(type, ...args);
};

export const setInfo = makeAction(types.SET_INFO);

export const getalluserinfo = makeAction(types.GET_ALL_USER_INFO)

export const altervisit = makeAction(types.ALERT_VISIT)
