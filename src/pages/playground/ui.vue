<template>
  <div class="flex-1 flex flex-col items-center justify-center px-4">
    <UButton @click="onClick">通知</UButton>
  </div>
</template>

<script setup lang="ts">
const onClick = () => {
  const toast = useToast()

  toast.add({
    id: 'message-1',
    title: '宁皓网',
    description: '欢迎参加独立开发者训练营。',
    icon: 'i-solar-basketball-outline',
    // timeout: 0,
    actions: [
      {
        label: '忽略',
        color: 'green',
        variant: 'outline',
        click: () => {},
      },
      {
        label: '接受',
        color: 'green',
        click: () => {},
      },
    ],
  })
}
</script>
