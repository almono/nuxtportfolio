<template>
  <div>
    <USeparator class="px-3" />
    <div class="w-full text-xl text-primary my-4 px-3">
      <UInput icon="i-lucide-search" color="primary" highlight v-model="pokemonName" placeholder="Pokemon name..." />
      <UButton size="md" class="sm:ml-0 md:ml-2 cursor-pointer" @click="searchPokemon">Search</UButton>
      <div class="w-full float-right flex items-center justify-end mt-2">
        <UIcon name="i-ic-baseline-keyboard-double-arrow-left" class="cursor-pointer" @click="getPreviousPokePage" :size="36" />
        <UIcon name="i-ic-baseline-keyboard-double-arrow-right" class="cursor-pointer" @click="getNextPokePage" :size="36" />
      </div>
    </div>
    <USeparator class="px-3" />
    <div class="grid grid-cols-2 md:grid-cols-4" v-if="pokemons?.results && Object.keys(pokemons).length > 0">
      <div v-for="poke in pokemons.results" :key="poke['name']">
        <UCard 
          variant="outline" 
          class="group cursor-pointer col-span-1 m-2 items-center justify-items-center hover:ring-2 hover:ring-green-200/70 hover:shadow-xl/10 hover:shadow-green-500 inset-shadow-sm inset-shadow-green-500/30 transition-discrete duration-400" 
          :ui="{
            body: 'p-0 sm:p-0'
          }"
          @click="showPokeDetails(poke['name'])"
        >
          <template #header>
            <div class="text-md md:text-lg text-ellipsis sm:text-clip whitespace-nowrap font-bold capitalize group-hover:text-green-300/80">
              #{{ getNumberBeforeLastSlash(poke['url']) }} {{ poke['name'] }}
            </div>
          </template>
          <template #default>
            <img lazy class="h-36" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/` + getNumberBeforeLastSlash(poke['url']) + `.png`" />
          </template>
          <template #footer>
            <UButton size="md" class="cursor-pointer" @click="showPokeDetails(poke['name'])">View Details</UButton>
          </template>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { LazyPokedexPokeDetails } from '#components';
import { useExtractNumber } from '#imports';

const overlay = useOverlay()
const { getNumberBeforeLastSlash } = useExtractNumber()
const pokemonName = ref('')
const pokemons = ref({
  results: null,
  count: 0,
  previous: null,
  next: null
})

const modal = overlay.create(LazyPokedexPokeDetails, {
  props: {
    pokeName: pokemonName.value,
    pokeInfo: {}
  }
})

pokemons.value = await $fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`, {
  method: 'GET'
})

function searchPokemon()
{
  $fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.value}`, {
    method: 'GET'
  }).then(response => {
    console.log(response)
  }) 
}

function getPreviousPokePage() {
  if(pokemons.value.previous) {
    $fetch(pokemons.value.previous, {
      method: 'GET'
    }).then(response => {
      pokemons.value = response
    }) 
  }
}

function getNextPokePage() {
  if(pokemons.value.next) {
    $fetch(pokemons.value.next, {
      method: 'GET'
    }).then(response => {
      pokemons.value = response
    }) 
  }
}

async function showPokeDetails(name) {

  await $fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`, {
    method: 'GET'
  }).then(response => {

    modal.patch({
      pokeName: name,
      pokeInfo: response
    })

    modal.open()
  })
  
}

</script>

<style>

</style>