<template>
  <a-layout id="IndexLayout">
    <Menu
      v-if="breakpoint && !breakpoint.mobile"
      v-model:collapsed="collapsed"
    ></Menu>
    <a-drawer
      placement="left"
      :closable="false"
      v-model:visible="visible"
      :bodyStyle="{ padding: 0 }"
      :width="200"
      class="drawer_menu"
      destroyOnClose
    >
      <Menu :collapsible="false" :collapsed="false"></Menu>
    </a-drawer>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="collapsed = !collapsed"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="collapsed = !collapsed"
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
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="tsx">
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import { computed, defineComponent, ref } from "vue";
import Menu from "@/components/Menu/Menu.vue";
import useBreakpoint from "@/hooks/useBreakpoint";
export default defineComponent({
  name: "Index",
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    Menu
  },

  setup() {
    const collapsed = ref(false);
    const breakpoint = useBreakpoint();
    const visible = computed({
      set: value => {
        collapsed.value = !!value;
      },
      get: () => breakpoint.mobile && collapsed.value
    });

    return {
      collapsed,
      visible,
      breakpoint
    };
  }
});
</script>
<style lang="less">
#IndexLayout,
.drawer_menu {
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
  .ant-layout-sider {
    height: 100vh;
  }
}
</style>
