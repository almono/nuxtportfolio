<template>
  <UModal 
    close-icon="i-lucide-arrow-right"
    :ui="{
      header: 'flex p-4 sm:px-6 min-h-16'
    }"
  >
    <template #header>
      <div class="grid grid-cols-4 w-full">
        <div class="col-span-3 w-full inline-flex items-center">
          <span class="text-2xl font-bold capitalize">{{ digiInfo.name }}</span>
          <div class="inline-flex" v-if="digiInfo?.attributes">
            <div class="inline-flex" v-for="att in digiInfo?.attributes" :key="att?.id">
              <UBadge size="sm" class="ml-1" :color="getBadgeColor(att.attribute)">{{ att.attribute }}</UBadge>
            </div>
          </div>
        </div>
        <div class="col-span-1 flex items-center justify-end">
          <UIcon name="i-lucide-circle-x" label="Close" class="text-primary cursor-pointer" :size="36" @click="emit('close', false)" />
        </div>
      </div>
    </template>
    
    <template #body>
      <template v-if="digiInfo?.images">
        <div class="text-3xl w-full font-bold text-primary mb-1">Images</div>
        <USeparator color="primary" class="mb-1"></USeparator>
        <div class="w-full flex items-center justify-center py-2" v-for="image in digiInfo?.images" :key="image?.href">
          <img lazy class="w-1/2" :src="image?.href" />
        </div>
      </template>
      <template v-if="digiInfo?.descriptions">
        <div class="text-3xl w-full font-bold text-primary mb-1">Description</div>
        <USeparator color="primary" class="mb-1"></USeparator>
        <div class="w-full" v-for="description in digiInfo?.descriptions" :key="description?.language">
          <div v-if="description?.language == 'en_us'">
            {{ description.description }}
          </div>
        </div>
      </template>
      <UAccordion :unmount-on-hide="false" :items="items" class="border-green-700/20 border-2 mt-2 px-2">
        <template #skills-body>
          <div v-if="digiInfo?.skills && Object.keys(digiInfo?.skills).length > 0">
            <ul class="list-disc list-inside">
              <li v-for="skill in digiInfo.skills" :key="skill.id" class="mb-1">
                <span class="text-primary font-semibold">{{ skill.skill }}</span> <div v-if="skill.description">( {{ skill.description }} )</div>
              </li>
            </ul>
          </div>
          <div v-else class="w-full text-warning text-center">
            No known skills available
          </div>
        </template>
        <template #priorEvolutions-body>
          <div v-if="digiInfo?.priorEvolutions && Object.keys(digiInfo?.priorEvolutions).length > 0">
            <ul class="list-disc list-inside">
              <li v-for="prior in digiInfo.priorEvolutions" :key="prior.id" class="mb-1">
                <span class="text-primary font-semibold">{{ prior.digimon }}</span> 
                <div v-if="prior.condition">Evolution conditions: {{ prior.condition }}</div>
              </li>
            </ul>
          </div>
          <div v-else class="w-full text-warning text-center">
            No known prior evolutions available
          </div>
        </template>
        <template #nextEvolutions-body>
          <div v-if="digiInfo?.nextEvolutions && Object.keys(digiInfo?.nextEvolutions).length > 0">
            <ul class="list-disc list-inside">
              <li v-for="prior in digiInfo.nextEvolutions" :key="prior.id" class="mb-1">
                <span class="text-primary font-semibold">{{ prior.digimon }}</span> 
                <div v-if="prior.condition">Evolution conditions: {{ prior.condition }}</div>
              </li>
            </ul>
          </div>
          <div v-else class="w-full text-warning text-center">
            No known next evolutions available
          </div>
        </template>
      </UAccordion>
    </template>
  </UModal>
</template>

<script lang="ts" setup>
import type { AccordionItem } from '@nuxt/ui';


const emit = defineEmits<{ close: [boolean] }>()

const props = defineProps({
  digiInfo: { type: Object, required: true },
})

function getBadgeColor(attribute) {
  if(attribute === 'Vaccine') {
    return 'warning'
  } else if(attribute === 'Virus') {
    return 'error'
  } else {
    return 'primary'
  }
}

const items = ref<AccordionItem[]>([
  {
    label: 'Skills',
    icon: 'i-lucide-radiation',
    content: '',
    trailingIcon: 'i-lucide-arrow-big-down',
    slot: 'skills',
    ui: {
      leadingIcon: 'text-primary text-3xl',
      trailingIcon: 'text-primary text-3xl transition-all duration-400'
    }
  },
  {
    label: 'Prior Evolutions',
    icon: 'i-lucide-arrow-left-from-line',
    content: '',
    trailingIcon: 'i-lucide-arrow-big-down',
    slot: 'priorEvolutions',
    ui: {
      leadingIcon: 'text-primary text-3xl',
      trailingIcon: 'text-primary text-3xl transition-all duration-400'
    }
  },
  {
    label: 'Next Evolutions',
    icon: 'i-lucide-arrow-right-from-line',
    content: '',
    trailingIcon: 'i-lucide-arrow-big-down',
    slot: 'nextEvolutions',
    ui: {
      leadingIcon: 'text-primary text-3xl',
      trailingIcon: 'text-primary text-3xl transition-all duration-400'
    }
  }
])

</script>

<style>

</style>