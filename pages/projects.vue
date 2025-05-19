<template>
  <div>
    <UContainer class="p-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="card in projects" :key="card.id">
          <ProjectCard :card="card" />
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
const projects = await $fetch(`https://api.github.com/users/almono/repos`, {
  method: 'GET'
})

projects.sort((a,b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
</script>

<style>

</style>