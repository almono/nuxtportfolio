<template>
  <UModal 
    close-icon="i-lucide-arrow-right"
    :ui="{
      header: 'flex p-4 sm:px-6 min-h-16'
    }"
  >
    <template #header>
      <div class="grid grid-cols-2 w-full">
        <div>
          <span class="text-2xl font-bold capitalize">#{{ pokeInfo.id }} {{ pokeName }}</span>
        </div>
        <div class="flex items-center justify-end">
          <UIcon name="i-lucide-circle-x" label="Close" class="text-primary cursor-pointer" :size="36" @click="emit('close', false)" />
        </div>
      </div>
    </template>
    
    <template #body>
      <template v-if="pokeInfo?.stats">
        <div class="text-3xl w-full font-bold text-primary mb-1">Sprites</div>
        <USeparator color="primary" class="mb-1"></USeparator>
        <div class="columns-1 md:columns-2 items-center mt-4">
          <div class="items-center justify-center">
            <div class="w-full text-center font-bold">Default</div>
            <img lazy class="w-full" :src="pokeInfo?.sprites?.front_default" />
          </div>
          <div class="items-center justify-center">
            <div class="w-full text-center font-bold">Shiny</div>
            <img lazy class="w-full" :src="pokeInfo?.sprites?.front_shiny" />
          </div>
        </div>
      </template>
      <template v-if="pokeInfo?.stats">
        <div class="text-3xl w-full font-bold text-primary mb-1">Base Stats</div>
        <USeparator color="primary" class="mb-1"></USeparator>
        <div class="w-full" v-for="baseStats in pokeInfo?.stats" :key="stat">
          <ULink as="button" class="capitalize text-primary font-bold cursor-pointer" :href="baseStats?.stat?.url" target="_blank">{{ baseStats?.stat?.name }}:</ULink><span class="font-semibold ml-2"> {{ baseStats.base_stat }}</span>
        </div>
      </template>
      <template v-if="pokeInfo?.abilities">
        <div class="text-3xl w-full font-bold text-primary mb-1">Abilities</div>
        <USeparator color="primary" class="mb-1"></USeparator>
        <ul class="list-disc list-inside">
          <li class="w-full" v-for="baseAbilities in pokeInfo?.abilities" :key="ability">
            <ULink as="button" class="capitalize text-primary font-bold cursor-pointer" :href="baseAbilities?.ability?.url" target="_blank">{{ baseAbilities?.ability?.name }}</ULink>
          </li>
        </ul>
      </template>
    </template>
  </UModal>
</template>

<script lang="ts" setup>

const emit = defineEmits<{ close: [boolean] }>()

const props = defineProps({
  pokeName: { type: String, required: true },
  pokeInfo: { type: Object, required: true },
})

</script>

<style>

</style>