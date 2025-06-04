<template>
  <div>
    <USeparator class="px-3" />
    <div class="w-full text-xl text-primary my-4 px-3">
      <UInput icon="i-lucide-search" color="primary" highlight v-model="pokemonName" placeholder="Pokemon name..." />
      <UButton size="md" class="ml-2 cursor-pointer" @click="searchPokemon">Search</UButton>
      <div class="float-right flex items-center">
        <UIcon name="i-ic-baseline-keyboard-double-arrow-left" class="cursor-pointer" @click="getPreviousPokePage" :size="36" />
        <UIcon name="i-ic-baseline-keyboard-double-arrow-right" class="cursor-pointer" @click="getNextPokePage" :size="36" />
      </div>
    </div>
    <USeparator class="px-3" />
    <div class="grid grid-cols-4" v-if="pokemons?.results && Object.keys(pokemons).length > 0">
      <div v-for="poke in pokemons.results" :key="poke['name']">
        <UCard 
          variant="outline" 
          class="group cursor-pointer col-span-1 m-2 items-center justify-items-center hover:ring-2 hover:ring-green-200/70 hover:shadow-xl/10 hover:shadow-green-500 inset-shadow-sm inset-shadow-green-500/30 transition-discrete duration-400" 
          :ui="{
            body: 'p-0 sm:p-0'
          }"
        >
          <template #header>
            <div class="text-lg font-bold capitalize group-hover:text-green-300/80">
              #{{ getNumberBeforeLastSlash(poke['url']) }} {{ poke['name'] }}
            </div>
          </template>
          <template #default>
            <img lazy class="h-36" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/` + getNumberBeforeLastSlash(poke['url']) + `.png`" />
          </template>
          <template #footer>
            <Placeholder class="h-8" />
          </template>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useExtractNumber } from '#imports';

const { getNumberBeforeLastSlash } = useExtractNumber()
const pokemonName = ref('')
const pokemons = ref({
  results: null,
  count: 0,
  previous: null,
  next: null
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

</script>

<style>

</style>