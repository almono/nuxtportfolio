<template>
  <div>
    <UContainer class="p-4">
      <div class="w-full text-2xl">Pokedex API</div>
      <USeparator class="my-2" color="primary" type="solid" />
      <UAccordion v-model="activeTab" :unmount-on-hide="false" :items="items" class="border-green-700/20 border-2 p-2">
        <template #default="{ item }">
          <div class="flex items-center cursor-pointer">
            <span class="truncate inline text-xl pl-1">{{ item.label }}</span>
          </div>
        </template>
        <template #pokeInfo-body>
          <PokedexPokeInfo />
        </template>
      </UAccordion>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
import type { AccordionItem } from '@nuxt/ui';

const activeTab = ref('0')
const items = ref<AccordionItem[]>([
  {
    label: 'Pokemon List',
    icon: 'i-material-symbols-info-outline-rounded',
    content: '',
    trailingIcon: 'i-lucide-arrow-big-down',
    slot: 'pokeInfo',
    ui: {
      leadingIcon: 'text-primary text-3xl',
      trailingIcon: 'text-primary text-3xl transition-all duration-400'
    }
  }
])
</script>

<style>

</style>