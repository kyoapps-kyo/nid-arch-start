<template>
  <div>登陆</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "black",
  colorMode: 'dark'
});

/**
 * 页头
 */
 useHead({
    title: '登陆'
})
const colorMode = useColorMode();
console.log(colorMode);
</script>
