<template>
  <a-layout-sider
    :collapsed="collapsed"
    @collapse="onCollapse"
    :trigger="null"
    :collapsible="collapsible"
  >
    <div class="flex-row-center pa-7">
      <h3>Arutoria</h3>
    </div>
    <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
      <template v-for="menu in menus" :key="menu.key">
        <a-menu-item
          :key="menu.key"
          v-if="!menu.children || menu.children.length === 0"
        >
          <user-outlined />
          <span>{{ menu.title }}</span>
        </a-menu-item>
        <template v-else-if="menu.children && menu.children.length > 0">
          <sub-menu :menu="menu" :menuKey="menu.key"></sub-menu>
        </template>
      </template>
    </a-menu>
  </a-layout-sider>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { UserOutlined } from "@ant-design/icons-vue";
import { generateMenu } from "./generate";
import SubMenu from "./SubMenu.vue";

export default defineComponent({
  name: "Menu",
  props: {
    collapsed: Boolean,
    collapsible: Boolean
  },
  emits: ["update:collapsed"],
  components: {
    UserOutlined,
    SubMenu
  },
  setup(props, ctx) {
    const menus = generateMenu();
    const selectedKeys = ref<Array<string>>([]);
    const onCollapse = (collapsed: boolean) => {
      ctx.emit("update:collapsed", collapsed);
    };

    watch(selectedKeys, value => {
      console.log("value ------------>", value);
    });
    return {
      selectedKeys,
      onCollapse,
      menus
    };
  }
});
</script>
