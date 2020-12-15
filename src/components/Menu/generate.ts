import routes from "../../router/routes";
import { ref } from "vue";
import { RouteRecordRaw } from "vue-router";

export interface Menu {
  title: string;
  key: string;
  disabled: boolean;
  icon?: string;
  children?: Menu[];
}

function generateSubMenu(children: RouteRecordRaw[]) {
  return children.map(route => {
    const subMenu: Menu = {
      title: route!.meta!.title,
      key: route.path,
      disabled: !!route!.meta?.disabled
    };

    if (route.meta && route.meta.icon) {
      subMenu.icon = route.meta.icon;
    }

    if (route.children && route.children.length > 0) {
      subMenu.children = generateSubMenu(route.children);
    }

    return subMenu;
  });
}

export function generateMenu() {
  const menus = ref<Array<Menu>>([]);
  routes.map(route => {
    const menu: Menu = {
      title: route!.meta!.title,
      key: route.path,
      disabled: !!route!.meta?.disabled
    };

    if (route.meta && route.meta.icon) {
      menu.icon = route.meta.icon;
    }

    if (route.children && route.children.length > 0) {
      menu.children = generateSubMenu(route.children);
    }

    menus.value.push(menu);
  });

  return menus;
}
