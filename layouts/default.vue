<template>
  <div>
    <UContainer class="p-4">
      <UNavigationMenu 
        arrow
        highlight
        highlight-color="primary"
        orientation="horizontal" 
        :items="items" 
        class="w-full justify-center" 
        :ui="{
          viewport: 'sm:w-(--reka-navigation-menu-viewport-width)',
          content: 'sm:w-auto',
          childList: 'sm:w-160',
          childLinkDescription: 'text-balance line-clamp-2'
        }"
      >
        <template #linked>
          <UIcon name="i-lucide-linkedin" class="size-5 text-secondary" />
          <div class="text-secondary">LinkedIn</div>
        </template>
        <template #github>
          <UIcon name="i-lucide-github" class="size-5 text-secondary bg-danger" />
          <div class="text-secondary">
            Github<UIcon :size="12" name="i-lucide-external-link"/>
          </div>
        </template>
        <template #color>
          <template v-if="$colorMode.value === 'light'">
            <UButton
              color="neutral"
              variant="outline"
            >
              <UIcon name="i-lucide-lightbulb" :size="20" class="text-info" @click="changeColorMode"/>
            </UButton>
          </template>
          <template v-else-if="$colorMode.value === 'dark'">
            <UButton
              color="neutral"
              variant="outline"
            >
              <UIcon name="i-lucide-lightbulb-off" :size="20" class="text-warning" @click="changeColorMode"/>
            </UButton>
          </template>
          
        </template>
      </UNavigationMenu>
    </UContainer>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const colorMode = useColorMode()

function changeColorMode() {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
  console.log(colorMode.value)
}

const items = ref<NavigationMenuItem[]>([
  [
    {
      label: 'Homepage',
      icon: 'i-lucide-house',
      to: '/'
    },
    {
      label: 'Contents',
      icon: 'i-lucide-box',
      active: false,
      defaultOpen: false,
      color: 'warning',
      children: [
        {
          label: 'Projects List',
          icon: 'i-lucide-file-text',
          description: 'List of projects available on Github',
          to: '/projects'
        }
      ]
    }
  ],
  [
    {
      label: 'LinkedIn',
      icon: 'i-lucide-linkedin',
      to: 'https://www.linkedin.com/in/pwalczykiewicz/',
      target: '_blank',
      variant: 'secondary',
      slot: 'linked' as linked
    },
    {
      label: 'Github',
      icon: 'i-lucide-github',
      to: 'https://github.com/almono',
      target: '_blank',
      slot: 'github' as github
    },
    {
      slot: 'color' as color
    }
  ]
])
</script>

<style>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark body {
  background-color: #091a28 !important;
  color: #ebf4f1;
}
</style>