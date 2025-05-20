<template>
  <NuxtParticles
    id="tsparticles"
    :options="options"
    class="opacity-20"
  />
  <UApp>
    <NuxtLayout>
      <SiteHeader />
      <div class="relative">
        <NuxtPage />
      </div>
      <SiteFooter />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#imports'
import { loadFull } from 'tsparticles'
import { tsParticles } from '@tsparticles/engine'

const { mode } = useRuntimeConfig().public.particles

if(import.meta.client && mode === 'custom') {
  await loadFull(tsParticles)
}

const options = {
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  particles: {
    color: {
      value: "#05df7226"
    },
    links: {
      color: "#05df7226",
      enable: false
    },
    move: {
      enable: true
    },
    number: {
      value: 50
    }
  }
}
</script>