<template>
  <UCard>
    <template #header>
      <div class="h-8 font-weight-600">
        {{ card.name }}
      </div>
    </template>

    <div class="h-24 overflow-auto">
      <template v-if="card.description">
        <div>
          {{ card.description }}
        </div>
      </template>
      <template v-else>
        Information on the repository/project can be found in the README file
      </template>
    </div>

    <template #footer>
      <div class="h-8">
        <UButton active 
          color="neutral" 
          variant="outline" 
          active-color="primary" 
          active-variant="outline"
          :to="card.html_url"
          target="_blank"
        >
          View Repository
        </UButton>
        {{  }}
      </div>
    </template>
  </UCard>
</template>

<script lang="ts" setup>
defineProps({
  'card': Object,
  default: {}
})

</script>

<style>

</style>