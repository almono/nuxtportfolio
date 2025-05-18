<template>
  <div>
    <UContainer class="p-4">
      <UNavigationMenu 
        orientation="horizontal" 
        :items="items" 
        class="w-full justify-center" 
        :ui="{
          viewport: 'sm:w-(--reka-navigation-menu-viewport-width)',
          content: 'sm:w-auto',
          childList: 'sm:w-160',
          childLinkDescription: 'text-balance line-clamp-2'
        }"
      />
    </UContainer>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  [
    {
      label: 'Homepage',
      icon: 'i-lucide-database',
      to: '/'
    },
    {
      label: 'Components',
      icon: 'i-lucide-box',
      active: false,
      defaultOpen: false,
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
      label: 'Socials',
      icon: 'i-ooui-user-avatar',
      active: true,
      children: [
        {
          label: 'LinkedIn',
          icon: 'i-lucide-file-text',
          to: 'https://www.linkedin.com/in/pwalczykiewicz/',
          target: '_blank'
        },
        {
          label: 'Github',
          icon: 'i-lucide-file-text',
          to: 'https://github.com/almono',
          target: '_blank'
        }
      ]
    }
  ]
])
</script>

<style>

</style>