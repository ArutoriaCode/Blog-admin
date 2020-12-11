<template>
  <a-sub-menu :key="menuKey" v-if="menu.children">
    <template #title>
      {{ menu.title }}
    </template>
    <template v-for="m in menu.children" :key="m.key">
      <a-menu-item :key="m.key" v-if="!m.children">
        <span>{{ m.title }}</span>
      </a-menu-item>
      <template v-else-if="menu.children && menu.children.length > 0">
        <sub-menu :menu="m" :menuKey="m.key"></sub-menu>
      </template>
    </template>
  </a-sub-menu>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Menu } from "./generate";

export default defineComponent({
  name: "SubMenu",
  props: {
    menu: {
      type: Object as PropType<Menu>,
      required: true
    },
    menuKey: {
      type: String,
      required: true
    }
  },
  setup(props) {
    console.log("props ---->", props.menuKey);
    return {};
  }
});
</script>

<style scoped></style>
