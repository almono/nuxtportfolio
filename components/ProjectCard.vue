<template>
  <UCard class="group hover:ring-2 hover:ring-cyan-200/70 hover:shadow-xl/10 hover:shadow-cyan-500 inset-shadow-sm inset-shadow-cyan-500/30 transition-discrete duration-400">
    <template #header>
      <div class="font-bold text-xl flex items-center">
        <ULink :to="card.homepage ?? card.html_url">
          {{ card.name }}
        </ULink>
        <UBadge v-if="card.language" class="ml-1" color="primary" variant="outline">{{ card.language }}</UBadge>
      </div>
      <span class="w-full text-xs text-cyan-100/40">
        Created on {{ getTime(card.created_at) }}
      </span>
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
  'card': {
    type: Object,
    default: function() { return {} },
    required: false
  }
})

function getTime(val) 
{
  return new Date(val).toLocaleDateString()
}

</script>

<style>

</style>