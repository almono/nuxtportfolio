<template>
  <div>
    <UContainer class="flex items-center justify-center py-6 mb-2">
      Portfolio created using
      Vue.js 3 <UIcon name="i-vscode-icons-file-type-vue" :size="18" class="text-primary ml-1"/>,
      Nuxt 3 <UIcon name="i-vscode-icons-file-type-nuxt" :size="24" class="text-primary ml-1"/>, 
      and Tailwind CSS <UIcon name="i-vscode-icons-file-type-tailwind" :size="24" class="text-primary ml-1"/>
    </UContainer>
    <slot />
  </div>
</template>

<script setup lang="ts">

</script>

<style>

</style>