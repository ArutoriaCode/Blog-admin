<template>
  <a-layout id="IndexLayout">
    <a-layout-sider
      v-if="breakpoint && !breakpoint.mobile"
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
    >
      <div class="flex-row-center pa-7">
        <h3>Arutoria</h3>
      </div>
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item key="1">
          <user-outlined />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px'
        }"
      >
        <pre>{{ breakpoint }}</pre>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="tsx">
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
import useBreakpoint from "@/hooks/useBreakpoint";
export default defineComponent({
  name: "Index",
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined
  },

  setup() {
    const collapsed = ref(false);
    const selectedKeys = ref([]);
    const breakpoint = useBreakpoint();
    return {
      collapsed,
      selectedKeys,
      breakpoint
    };
  }
});
</script>
<style lang="less">
#IndexLayout {
  .ant-layout-sider-children {
    h3 {
      color: #ffffff;
    }
  }
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  .ant-layout-content {
    height: 100%;
  }
}
</style>
