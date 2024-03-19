<template>
  <UModal v-model="isModalOpen">
    <UCommandPalette
      placeholder="搜索"
      :emptyState="emptyState"
      :groups="groups"
      @update:model-value="onSelect"
    />
  </UModal>
</template>

<script setup lang="ts">
import type { Command } from "@nuxt/ui/dist/runtime/types";
/**
 * 空白状态
 */
const emptyState = {
  icon: "i-heroicons-magnifying-glass-20-solid",
  label: "暂无可用的命令",
  queryLabel: "没找到相关的命令",
};
/**
 * 是否显示弹窗
 */
const isModalOpen = ref(false);
/**
 * 颜色模式
 */
const colorMode = useColorMode();
/**
 * 快捷键
 */
defineShortcuts({
  meta_k: {
    handler: () => {
      isModalOpen.value = true;
    },
  },
  meta_shift_l: {
    usingInput: true,
    handler: () => {
      colorMode.preference = "light";
    },
  },
  meta_shift_d: {
    usingInput: true,
    handler: () => {
      colorMode.preference = "dark";
    },
  },
  meta_shift_s: {
    usingInput: true,
    handler: () => {
      colorMode.preference = "system";
    },
  },
});
/**
 * 命令
 */
const commands: Array<Command> = [
  {
    id: "color-mode-light",
    label: "浅色外观",
    icon: "i-solar-sun-2-linear",
    shortcuts: ["⇧", "⌘", "L"],
    click: () => {
      colorMode.preference = "light";
    },
  },
  {
    id: "color-mode-dark",
    label: "深色外观",
    icon: "i-solar-moon-linear",
    shortcuts: ["⇧", "⌘", "D"],
    click: () => {
      colorMode.preference = "dark";
    },
  },
  {
    id: "color-mode-system",
    label: "跟随系统",
    icon: "i-solar-devices-linear",
    shortcuts: ["⇧", "⌘", "S"],
    click: () => {
      colorMode.preference = "system";
    },
  },
];
/**
 * 命令组
 */
const groups = [{ key: "commands", commands }];
/**
 * 路由器
 */
const router = useRouter();
/**
 * 选中时
 */
const onSelect = (option: Command) => {
  if (option.click) {
    option.click();
  }

  if (option.to) {
    router.push(option.to);
  }

  if (option.href) {
    window.open(option.href, "_blank");
  }
};
</script>
