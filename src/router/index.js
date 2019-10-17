import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)
export default new VueRouter({
  //mode:'history',
  routes: [
    {
      path: '/',
      name:'comm_index',
      redirect: '/comm_index'
    },
    {
      path: '/oj_index',
      component: resolve =>require(['@/pages/oj_index'],resolve),

      meta:{
        requireAuth:false,
        keepAlive: false,
      },
    },

    {
      path: '/oj_problem',
      component: resolve =>require(['@/pages/oj_problems'],resolve),
      meta:{
        requireAuth:false,
        keepAlive: false,
      },
    },
    {
      path:'/oj_problem/:id',

      component: resolve =>require(['@/pages/oj_problem_detail'],resolve),
      meta:{
        requireAuth:false,
        keepAlive: false,
      },
    },
    {
      path: '/oj_contest',
      component: resolve =>require(['@/pages/oj_contest'],resolve),
      meta:{
        requireAuth:false,
        keepAlive: false,
      },
    },
    {
      path:'/oj_contest/detail/:id',
      component: resolve =>require(['@/pages/oj_contest_detail'],resolve),
      meta:{
        requireAuth:false,
        keepAlive: false,
      },
    },

    {
      path:'/oj_contest_rank/:id',
      component: resolve =>require(['@/pages/oj_contest_rank'],resolve),
      meta:{
        requireAuth:false,
        keepAlive: false,
      },
    },




    {
      path:'/oj_rank',
      component: resolve =>require(['@/pages/oj_rank'],resolve),
      meta:{
        requireAuth:false,
        keepAlive: false,
      },
    },

    {
      path:'/oj_state',
      component: resolve =>require(['@/pages/oj_state'],resolve),
      meta:{
        requireAuth:false,
        keepAlive: false,
      },
    },

    {
      path:'/oj_anns',
      component: resolve =>require(['@/pages/oj_ann_list'],resolve),
      meta:{
        requireAuth:false,
        keepAlive: false,
      },
    },

    {
      path:'/oj_ann/:id',
      component: resolve =>require(['@/pages/oj_ann_detail'],resolve),
      meta:{
        requireAuth:false,
        keepAlive: false,
      },
    },



    {
      path: '/test',
      component: resolve =>require(['@/pages/test'],resolve),
      meta:{
        requireAuth:false,
        keepAlive: false,
      },
    },

    {
      path: '/test2',
      component: resolve =>require(['@/pages/test2'],resolve),
      meta:{
        requireAuth:false,
        keepAlive: false,
      },
    },

    {
      path: '/demo',
      component: resolve =>require(['@/pages/demo'],resolve),
      meta:{
        requireAuth:false,
        keepAlive: false,
      },
    },
    {
      path: '/login',
      name:'login',
      component: resolve =>require(['@/pages/login'],resolve),
      meta:{
        requireAuth:false,
        keepAlive: false,
      },
    },

    {
      path: '/register',
      name:'register',
      component: resolve =>require(['@/pages/register'],resolve),
      meta:{
        requireAuth:false,
        keepAlive: false,
      },
    },

    {
      path: '/logout',
      name:'logout',
      component: resolve =>require(['@/pages/logout'],resolve),
      meta:{
        requireAuth:false,
        keepAlive: false,
      },
    },

    {
      path:'/oj_admin_problem',
      name:'oj_admin_problem',
      component: resolve =>require(['@/pages/oj_admin_problem'],resolve),
      meta:{
        requireAuth:true,
        keepAlive: true,

      },
    },

    {
      path:'/oj_add_problem',
      name:'oj_add_problem',
      component: resolve =>require(['@/pages/oj_add_problem'],resolve),

      meta:{
        requireAuth:true,
        keepAlive: false,
      },
    },

    {
      path:'/oj_update_problem/:id',
      name:'oj_update_problem',
      component: resolve =>require(['@/pages/oj_update_problem'],resolve),
      meta:{
        requireAuth:true,
        keepAlive: false,
      },
    },








    // 社区路由
    {
      path: '/comm_index',
      component: resolve =>require(['@/pages/community/comm_index'],resolve),
      meta:{
        requireAuth:false,
        keepAlive: true,
      },
    },


    {
      path: '/comm_person/:id',
      component: resolve =>require(['@/pages/community/comm_person_index'],resolve),
      children: [
        {
          name:'personindex',
          path:'',
          component: resolve =>require(['@/pages/community/comm_person_index2'],resolve),
          meta:{
            requireAuth:false,
            keepAlive: true,
          },
        },
        {
          name:'personabout',
          path:'about',
          component: resolve =>require(['@/pages/community/comm_person_about'],resolve),

          meta:{
            requireAuth:false,
            keepAlive: false,
          },
        },
        {
          name:'personphoto',
          path:'photo',
          component: resolve =>require(['@/pages/community/comm_person_photo'],resolve),

          meta:{
            requireAuth:false,
            keepAlive: false,
          },
        },
        {
          name:'personvideo',
          path:'video',
          component: resolve =>require(['@/pages/community/comm_person_video'],resolve),
          meta:{
            requireAuth:false,
            keepAlive: false,
          },
        },
        {
          name:'personarticle',
          path:'article',
          component: resolve =>require(['@/pages/community/comm_person_article'],resolve),
          meta:{
            requireAuth:false,
            keepAlive: true,
          },
        },

      ]
    },


    {
      name:'article',
      path:'/article/:id',
      component: resolve =>require(['@/pages/community/comm_article_detail'],resolve),
      meta:{
        requireAuth:false,
        keepAlive: false,
      },
    },

    {
      path:'/articleupdate/:id',
      component: resolve =>require(['@/pages/community/comm_update_article'],resolve),
      meta:{
        requireAuth:true,
        title:'更新文章动态',
        keepAlive: false,
      },
    },


    {
      path:'/chatlist',
      component: resolve =>require(['@/pages/community/comm_chatlist'],resolve),
      meta:{
        requireAuth:true,
        keepAlive: true,
        title:'聊天'
      },
    },

    {
      name:'trendlists',
      path:'/trendlist',
      component: resolve =>require(['@/pages/community/comm_team'],resolve),
      meta:{
        requireAuth:false,
        keepAlive: false,
        title:'动态大厅',
        xxx:'aaa',
      },

    },

    {

      name :'trendlist',
      path:'/trendlist/:id',
      component: resolve =>require(['@/pages/community/comm_trend'],resolve),
      meta:{
        requireAuth:false,
        keepAlive: true,
      },

    },


    {
      path:'/trend/:id',
      name:'trend',
      component: resolve =>require(['@/pages/community/comm_trend_detail'],resolve),
      meta:{
        requireAuth:false,
        keepAlive: false,
        xxx:'bbb',
      },

    },



    {
      path: '/comm_admin_trend',
      component: resolve =>require(['@/pages/community/comm_admin_trend'],resolve),
      meta:{
        requireAuth:true,
        keepAlive: true,
      },
    },

    {
      path: '/comm_update_trend/:id',
      component: resolve =>require(['@/pages/community/comm_update_trend'],resolve),
      meta:{
        requireAuth:true,
        keepAlive: false,
      },
    },

    {
      path: '/comm_add_trend/:id',
      component: resolve =>require(['@/pages/community/comm_add_trend'],resolve),
      name:'comm_add_trend',
      meta:{
        requireAuth:true,
        keepAlive: false,
      },
    },


    {
      path: '/comm_add_article',
      component: resolve =>require(['@/pages/community/comm_add_article'],resolve),
      meta:{
        requireAuth:true,
        keepAlive: false,
        title:'发布新文章'
      },
    },





    {
      path: '/comm_admin_article',
      component: resolve =>require(['@/pages/community/comm_admin_article'],resolve),
      meta:{
        requireAuth:true,
        keepAlive: true,
        title:'文章管理',
      },
    },
    {
      path: '/comm_admin_photo',
      component: resolve =>require(['@/pages/community/comm_admin_photo'],resolve),
      meta:{
        requireAuth:true,
        keepAlive: true,
        title:'相册管理',
      },
    },


    {
      path: '/comm_admin_video',
      component: resolve =>require(['@/pages/community/comm_admin_video'],resolve),
      meta:{
        requireAuth:true,
        keepAlive: true,
        title:'视频管理',
      },
    },
    {
      path: '/comm_admin_tag',
      component: resolve =>require(['@/pages/community/comm_admin_tag'],resolve),
      meta:{
        requireAuth:true,
        keepAlive: true,
        title:'标签管理',
      },
    },
    {
      path: '/comm_admin_userinfo',
      component: resolve =>require(['@/pages/community/comm_admin_userinfo'],resolve),

      meta:{
        requireAuth:true,
        keepAlive: true,
        title:'个人信息管理',
      },
    },





  ]
})

