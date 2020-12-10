import Index from "@/layouts/Index.vue";
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
    component: () => import("@/components/Comment/Comment.vue")
  },
  {
    path: "/post",
    name: "post",
    meta: {
      title: "文章"
    },
    children: [
      {
        path: "/manage",
        name: "PostManage",
        meta: {
          title: "所有文章"
        },
        component: () => import("@/components/Post/PostAll.vue")
      },
      {
        path: "/editor/:id",
        name: "PostEditor",
        meta: {
          title: "编辑文章"
        },
        component: () => import("@/components/Post/PostEditor.vue")
      }
    ],
    component: () => import("@/components/Post/Post.vue")
  }
];

export default routes;
