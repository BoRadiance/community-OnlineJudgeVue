import axios from 'axios'
export const  host = 'http://120.78.176.233:8000';
//export const  host = 'http://127.0.0.1:8000';
/*获取幻灯片*/
export const getCarousel =(url) =>{
  return axios.get(url)
}


/*登录*/
export const login = params => {
  return axios.post(`${host}/login/`, params)
}


/*注册*/
export const register = params =>{
  return axios.post(`${host}/users/`, params)
}


/*每日一句*/

export const getDaySen = params =>{
  return axios.get(`${host}/daysen`,params)
}

/********adminTag**********/

/*添加标签*/
export const addTag = params =>{
  return axios.post(`${host}/admintags/`,params)
}


/*删除标签*/
export const deleteTag = tagId =>{
  return axios.delete(`${host}/admintags/`+tagId+'/')
}



/*更新标签*/
export const updateTag = (tagId, params) =>{
  console.log('打印');
  console.log(params);
  return axios.put(`${host}/admintags/`+tagId+'/',params)
}


/*获取标签*/
export const getTag = params =>{
  return axios.get(`${host}/admintags/`)
}



/********adminTag**********/


/******photos************/
/*获取具体某个用户所有的*/
export const getPhotos2=(id,params)=>{
 return axios.get(`${host}/photos/?ordering=-create_time&user=`+id)
}

/*获取所有图片*/
export const getAllPic=(id,params)=>{
  return axios.get(`${host}/photodetail/?belong=`+id,params)
}

/*管理 获取Pic*/
export const getPic=(id,params)=>{
  return axios.get(`${host}/adminphotodetail/?belong=`+id,params)
}

/*管理 删除Pic*/
export const delPic=(id,params)=>{
  return axios.delete(`${host}/adminphotodetail/`+id+'/')
}

/*管理 添加Pic*/
export const addPic =params =>{
 return axios.post(`${host}/adminphotodetail/`,params,{headers:{ 'Content-Type': 'multipart/form-data', }})
}


/******photos*************/

/**********adminphotos******----start*****/

/*增加相册*/
export const addPhotos = params =>{
  return axios.post(`${host}/adminphotos/`,params)
}


/*删除相册*/
export const delPhotos = id =>{
  return axios.delete(`${host}/adminphotos/`+id+'/')
}


/*更新相册信息*/
export const updatePhotos = (id,params) =>{
  return axios.put(`${host}/adminphotos/`+id+'/',params)
}


/*获取所有相册*/
export const getPhotos = params =>{
  return axios.get(`${host}/adminphotos/?ordering=-create_time`)
}


/**********adminphotos****----end*******/






/******video**********----start***/

/**获取视频**/
export const getvideo = (id,params) =>{
  return axios.get(`${host}/video/?ordering=-create_time&user=`+id)
}


/**获取视频 管理中心**/
export  const getvideo2 = params =>{
   return axios.get(`${host}/adminvideo/?ordering=-create_time`)
}


/**上传视频 **/
export  const addvideo = params =>{

  return axios.post(`${host}/adminvideo/`,params,{headers:{ 'Content-Type': 'multipart/form-data', }})
}



/**更新视频**/
export const updatevideo =(id,params) =>{
  return axios.patch(`${host}/adminvideo/`+id+'/',params,{headers:{ 'Content-Type': 'multipart/form-data', }})
}




/**删除视频**/
export const delvideo = (id,params) =>{
  return axios.delete(`${host}/adminvideo/`+id+'/')
}



/******video*********---end*/




/******article**********----start***/
export const getArticle = (url,params) =>{
  /*公开的接口,获取所有的文章*/
     if(url==="")
     {
       return axios.get(`${host}/article/?ordering=-create_time`)
     }
     else
     {
         return axios.get(url)
     }
}

/*获取具体的文章*/
export const getArticleDetail = (id,params)=>{
  return axios.get(`${host}/article/`+id,params)
}

/*添加文章*/
export const addArticle=params =>{
  return axios.post(`${host}/adminarticle/`,params)
}

/*个人管理页面获取所有文章*/
export const getArticle2 = url =>{
    return axios.get(url)
}

export const getArticleDetail2 = (id,params)=>{
  return axios.get(`${host}/adminarticle/`+id,params)
}

/*更新文章*/
export const updateArticle =  (id,params) =>{
    return axios.put(`${host}/adminarticle/`+id+`/`,params)
}

/**/
export const delArticle = (id) =>{
   return axios.delete(`${host}/adminarticle/`+id+`/`)
}



/******article*********---end***/



/********adminUserinfo**********/


/*获取用户的头像和封面图*/
export const getUserImg = params =>{
  return axios.get(`${host}/userinfoimg/?ordering=-create_time`,params)
}

/*获取具体的用户的头像和封面图*/
export const getUserImg2 = (id,params) =>{
  return axios.get(`${host}/userinfoimg/`+id+'/',params)
}



/*上传封面图和头像*/
export const updateUserImg = (id,params) =>{

   return axios.patch(`${host}/adminuserinfoimg/`+id+'/',params,{headers:{ 'Content-Type': 'multipart/form-data', }})
}


/*获取用户信息*/
export const getUserinfo = params =>{
    return axios.get(`${host}/users/1/`,)
}

/*更新用户信息*/

export const updateUserinfo = params =>{
  return axios.put(`${host}/users/1/`,params)
}



/********adminUserinfo**********/





/*******访客访问************/

/*查看所有用户*/
export const getAllUser = params =>{
  return axios.get(`${host}/userinfoimg/`)
}



/*查看某一个具体用户*/
export const getUserDetail = id =>{
  return axios.get(`${host}/visitor/`+id+'/')
}

/*查看排行*/




/*访客访问标签*/
export const getUserTag = (id,params) =>{
  return axios.get(`${host}/tags/?user=`+id)
}

/*******访客访问************/




/*******点赞********/



export  const addUpArticle = params =>{
  return axios.post(`${host}/adminupdown/`,params)
}

export const delUpArticle = (id,params) =>{
  return axios.delete(`${host}/adminupdown/`+id+'/',params)
}


/*******点赞*******/



/******评论*******/

export const getComments = (id,params) =>{
  return axios.get(`${host}/comment/?article=`+id,params)
}

export const addComment =params =>{
  return axios.post(`${host}/admincomment/`,params)
}

export const delComment = (id,params) =>{
  return axios.delete(`${host}/admincomment/`+id,params)
}

/********评论*******/



/*****动态相关********/

//动态
export const getTrendTag =params =>{
  return axios.get(`${host}/trendtag/`,params)
}

export const getTrend = (url,params) =>{
  return axios.get(url)
}

export const getTrendDetail = (id,params) =>{
  return axios.get(`${host}/trend/`+id)
}

export const addTrend =params =>{
  return axios.post(`${host}/admintrend/`,params)
}

export const updateTrend = (id,params) =>{
  return axios.put(`${host}/admintrend/`+id+'/',params)
}


export const delTrend = (id) =>{
  return axios.delete(`${host}/admintrend/`+id)
}

//动态相册
export const getTrendPic = (id,params) =>{
  return axios.get(`${host}/admintrendphoto/?article=`+id,params)
}

export const delTrendPic = (id,params) =>{
  return axios.delete(`${host}/admintrendphoto/`+id+'/')
}

export const addTrendPic = params =>{
  return axios.post(`${host}/admintrendphoto/`,params,{headers:{ 'Content-Type': 'multipart/form-data', }})
}


//动态点赞
export const addUpTrend = params =>{
  return axios.post(`${host}/admintrendupdown/`,params)
}

export const delUpTrend = (id,params) =>{
  return axios.delete(`${host}/admintrendupdown/`+id,params)
}

//动态评论
export const getTrendComments = (id,params) =>{
  return axios.get(`${host}/trendcomment/?article=`+id,params)
}

export const addTrendComment = params =>{
  return axios.post(`${host}/admintrendcomment/`,params)
}

export const delTrendComment = (id,params) =>{
  return axios.delete(`${host}/admintrendcomment/`+id,params)
}


/*****动态相关********/














/******oj blog************/


/*******新闻公告********/
export const getAnnouncements = params =>{
  return axios.get(`${host}/announcement/`,params)
}

export const getDetailAnn = (id,params) =>{
  return axios.get(`${host}/announcement/`+id,params)
}


/*******新闻公告********/


/********题目标签**********/
export const getHotProblemTag = params =>{
  return axios.get(`${host}/problemtag/?is_hot=1`,params)
}

export const getProblemTag =params =>{
  return axios.get(`${host}/problemtag/`,params)
}

/********题目标签*********/


/************题目*************/
export const getProblem =  (url,params) =>{
  if (url==="")
  {
    return axios.get(`${host}/codingproblem/?ordering=-create_time`,params)
  }
  else
  {
      return axios.get(url)
  }
}

export const getDetailProblem = (id,params) =>{
  return axios.get(`${host}/codingproblem/`+id,params)
}


export const getProblem2 = params =>{
  return axios.get(`${host}/admincodingproblem/`)
}

export const getDetailProblem2 =(id,params) =>{
  return axios.get(`${host}/admincodingproblem/`+id);
}

export const addProblem = params =>{

  return axios.post(`${host}/admincodingproblem/`,params)
}

export const updateProblem = (id,params) =>{
  return axios.put(`${host}/admincodingproblem/`+id+`/`,params)
}

export const delProblem =(id) =>{
  return axios.delete(`${host}/admincodingproblem/`+id+`/`)
}

/************题目*************/


/***排行****/

export const getRank = (url) =>{
  return axios.get(url)
}
/***排行****/




