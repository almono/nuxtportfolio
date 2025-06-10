<template>
  <div>
    <USeparator class="px-3" />
    <div class="w-full text-xl text-primary my-3 px-3">
      <UInput icon="i-lucide-search" color="primary" highlight v-model="digimonName" placeholder="Digimon name..." />
      <UButton size="md" class="sm:ml-0 md:ml-2 cursor-pointer" @click="searchDigimon(false)">Search</UButton>
    </div>
    <div class="px-3 w-72 mb-4">
      <UCheckbox size="lg" v-model="exactSearch" label="Exact name match" indicator="end" />
    </div>
    <div class="w-full text-primary flex items-center justify-end mt-2">
      <UIcon name="i-ic-baseline-keyboard-double-arrow-left" class="cursor-pointer" @click="getPreviousPage" :size="36" />
      <UIcon name="i-ic-baseline-keyboard-double-arrow-right" class="cursor-pointer" @click="getNextPage" :size="36" />
    </div>
    <USeparator class="px-3" />
    <div class="grid grid-cols-2 md:grid-cols-4" v-if="digimonsList?.content && Object.keys(digimonsList?.content).length > 0 && !isLoading">
      <div v-for="digi in digimonsList.content" :key="digi['id']">
        <UCard 
          variant="outline" 
          class="truncate group cursor-pointer col-span-1 m-2 items-center justify-items-center hover:ring-2 hover:ring-green-200/70 hover:shadow-xl/10 hover:shadow-green-500 inset-shadow-sm inset-shadow-green-500/30 transition-discrete duration-400" 
          :ui="{
            body: 'p-0 sm:p-0',
            header: 'truncate'
          }"
          @click="showDigimonInfo(digi['name'])"
        >
          <template #header>
            <div class="text-md md:text-lg truncate font-bold capitalize group-hover:text-green-300/80">
              {{ digi['name'] }}
            </div>
          </template>
          <template #default>
            <img lazy class="h-36" :src="digi['image']" />
          </template>
          <template #footer>
            <UButton size="md" class="cursor-pointer" @click="showDigimonInfo(digi['id'])">View Details</UButton>
          </template>
        </UCard>
      </div>
    </div>
    <div v-else>
      <div class="w-full text-center py-2 mt-4 font-bold text-warning">No digimons found :c </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { LazyDigimonDigiDetails } from '#components'

const overlay = useOverlay()

const digimonsList = ref({
  content: null,
  pageable: null
})

const digimonName = ref('')
const exactSearch = ref(false)
const isLoading = ref(true)
const currentPage = ref(1)

const modal = overlay.create(LazyDigimonDigiDetails, {
  props: {
    pokeInfo: {}
  }
})

const params = new URLSearchParams()
params.append("pageSize", "20")
params.append("page", currentPage.value)

digimonsList.value = await $fetch(`https://digi-api.com/api/v1/digimon?${params}`, {
  method: 'GET'
})

isLoading.value = false

function searchDigimon(appendPage = true) {
  const params = new URLSearchParams()
  params.append("pageSize", "20")
  params.append("name", digimonName.value)

  if(appendPage) {
    params.append("page", currentPage.value)
  }

  if(exactSearch.value) {
    params.append("exact", exactSearch.value)
  }

  $fetch(`https://digi-api.com/api/v1/digimon?${params}`, {
    method: 'GET'
  }).then(response => {
    digimonsList.value = response
  })
}

function showDigimonInfo(id) {
  $fetch(`https://digi-api.com/api/v1/digimon/${id}`, {
    method: 'GET'
  }).then(response => {
    modal.patch({
      digiInfo: response
    })

    modal.open()
  })
}

function getPreviousPage() {
  if(currentPage.value > 1) {
    currentPage.value--
    searchDigimon(true)
  }
}

function getNextPage() {
    if(currentPage.value < digimonsList.value?.pageable?.totalPages) {
      currentPage.value++
      searchDigimon(true)
    }
}

</script>

<style>

</style>