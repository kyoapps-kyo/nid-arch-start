<template>
  <UDropdown :items="items">
    <div class="flex gap-4 items-center">
      <UAvatar
        src="https://avatars.githubusercontent.com/u/1585696?v=4"
        alt="头像"
      />
      <div v-if="withName" :class="['text-gray-600 dark:text-gray-400', text]">
        王皓
      </div>
    </div>
  </UDropdown>
</template>

<script setup lang="ts">
import type { DropdownItem } from "@nuxt/ui/dist/runtime/types";
/**
 * 属性
 */
type Props = { withName?: boolean; text?: string };

defineProps<Props>();

/**
 * 颜色模式
 */
const colorMode = useColorMode();

/**
 * 当前颜色模式小图标
 */
const currentColorModelIcon = computed(() => {
  switch (colorMode.value) {
    case "light":
      return "i-solar-sun-2-linear";
    case "dark":
      return "i-solar-moon-linear";
  }
});

/**
 * 当前项目组名称
 */
const currentItems = ref<"main" | "appearance">("main");

const mainItems = computed<DropdownItem[][]>(() => {
  return [
    [
      {
        label: "王皓",
        avatar: {
          src: "https://avatars.githubusercontent.com/u/1585696?v=4",
        },
      },
    ],
    [
      {
        label: "外观",
        icon: currentColorModelIcon.value,
        click: (event: PointerEvent) => {
          event.preventDefault();
          currentItems.value = "appearance";
        },
      },
    ],
  ];
});

/**
 * 外观项目组
 */
const appearanceItems = computed<DropdownItem[][]>(() => {
  return [
    [
      {
        label: "返回",
        icon: "i-solar-arrow-left-linear",
        click: (event: PointerEvent) => {
          event.preventDefault();
          currentItems.value = "main";
        },
      },
    ],
    [
      {
        label: "浅色",
        icon: "i-solar-sun-2-linear",
        click: (event: PointerEvent) => {
          event.preventDefault();
          colorMode.preference = "light";
        },
      },
      {
        label: "深色",
        icon: "i-solar-moon-linear",
        click: (event: PointerEvent) => {
          event.preventDefault();
          colorMode.preference = "dark";
        },
      },
      {
        label: "跟随设备",
        icon: "i-solar-devices-linear",
        click: (event: PointerEvent) => {
          event.preventDefault();
          colorMode.preference = "system";
        },
      },
    ],
  ];
});

/**
 * 下拉菜单项目组
 */
const items = computed(() => {
  switch (currentItems.value) {
    case "appearance":
      return appearanceItems.value;
    default:
      return mainItems.value;
  }
});
</script>
