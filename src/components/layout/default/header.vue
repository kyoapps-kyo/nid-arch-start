<template>
  <header class="flex justify-between py-4 px-6">
    <AppLogo to="/" />
    <div class="flex gap-4">
      <button @click="colorMode.preference = 'light'">亮色</button>
      <button @click="colorMode.preference = 'dark'">暗色</button>
      <button @click="colorMode.preference = 'system'">系统</button>
    </div>
  </header>
</template>

<style lang="postcss">
.dark-mode {
  @apply bg-black text-white;
}

.light-mode {
  @apply bg-white text-black;
}
</style>

<script setup lang="ts">
const colorMode = useColorMode();
</script>
