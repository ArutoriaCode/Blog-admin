import Index from "@/views/Index.vue";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    meta: {
      title: "首页"
    },
    component: Index
  },
  {
    path: "/comment",
    name: "comment",
    meta: {
      title: "评论管理"
    },
    component: () => import("@/views/Comment.vue")
  },
  {
    path: "/post",
    name: "post",
    meta: {
      title: "文章"
    },
    children: [
      {
        path: "/post/manage",
        name: "PostManage",
        meta: {
          title: "所有文章"
        },
        component: () => import("@/components/Post/PostAll.vue")
      },
      {
        path: "/post/editor",
        name: "PostEditor",
        meta: {
          title: "新建文章"
        },
        component: () => import("@/components/Post/PostEditor.vue")
      }
    ],
    component: () => import("@/views/Post.vue")
  }
];

export default routes;
