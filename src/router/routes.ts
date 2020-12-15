import Index from "@/views/Index.vue";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    meta: {
      title: "首页",
      icon: "icon-zhuye"
    },
    component: Index
  },
  {
    path: "/comment",
    name: "comment",
    meta: {
      title: "评论管理",
      icon: "icon-shenhe"
    },
    component: () => import("@/views/Comment.vue")
  },
  {
    path: "/post",
    name: "post",
    meta: {
      title: "文章",
      icon: "icon-zixun"
    },
    children: [
      {
        path: "/post/manage",
        name: "PostManage",
        meta: {
          title: "所有文章",
          icon: "icon-liebiao"
        },
        component: () => import("@/components/Post/PostAll.vue")
      },
      {
        path: "/post/editor",
        name: "PostEditor",
        meta: {
          title: "新建文章",
          icon: "icon-xitong"
        },
        component: () => import("@/components/Post/PostEditor.vue")
      }
    ],
    component: () => import("@/views/Post.vue")
  }
];

export default routes;
