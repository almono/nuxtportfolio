<template>
  <div class="sticky top-0 z-100 bg-[#091a28] backdrop-blur-xl backdrop-opacity-100 md:backdrop-blur-sm">
    <UContainer class="p-4">
      <template v-if="$device.isMobile">
        <UAccordion :items="toggleMenu" class="border-b-4 border-[#05df729e]">
          <template #navigationToggle>
            <UNavigationMenu 
              orientation="vertical" 
              :items="items" 
              class="data-[orientation=vertical]:w-full"
              :ui="{
                linkLeadingIcon: 'text-primary',
                link: 'p-4'
              }"
            >
              <template #linked>
                <UIcon name="i-lucide-linkedin" class="size-5 text-secondary" />
                <div class="text-secondary">
                  LinkedIn<UIcon :size="12" name="i-lucide-external-link"/>
                </div>
              </template>
              <template #github>
                <UIcon name="i-lucide-github" class="size-5 text-secondary bg-danger" />
                <div class="text-secondary">
                  Github<UIcon :size="12" name="i-lucide-external-link"/>
                </div>
              </template>
            </UNavigationMenu>
          </template>
        </UAccordion>
        
      </template>
      <template v-else>
        <UNavigationMenu
          v-model="active"
          arrow
          content-orientation="vertical"
          orientation="horizontal" 
          :items="items" 
          class="w-full justify-center"
          :ui="{
            viewport: 'sm:w-(--reka-navigation-menu-viewport-width)',
            content: 'sm:w-auto',
            childList: 'sm:w-100',
            childLinkDescription: 'text-balance line-clamp-2',
            linkLeadingIcon: 'text-primary',
            childLinkIcon: 'text-primary'
          }"
        >
          <template #linked>
            <UIcon name="i-lucide-linkedin" class="size-5 text-secondary" />
            <div class="text-secondary">
              LinkedIn<UIcon :size="12" name="i-lucide-external-link"/>
            </div>
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
                @click="changeColorMode"
              >
                <UIcon name="i-lucide-sun" :size="20" class="text-info" />
              </UButton>
            </template>
            <template v-else-if="$colorMode.value === 'dark'">
              <UButton
                color="neutral"
                variant="outline"
                @click="changeColorMode"
              >
                <UIcon name="i-lucide-moon" :size="20" class="text-warning"/>
              </UButton>
            </template>
            
          </template>
        </UNavigationMenu>
      </template>
    </UContainer>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { AccordionItem, NavigationMenuItem } from '@nuxt/ui'

const active = ref()
const colorMode = useColorMode()

function changeColorMode() {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
}

const items = ref<NavigationMenuItem[]>([
  [
    {
      label: 'About Me',
      icon: 'i-lucide-house',
      class: 'text-l text-muted',
      to: '/'
    },
    {
      label: 'Contents',
      icon: 'i-lucide-box',
      defaultOpen: false,
      color: 'warning',
      class: 'text-l text-muted',
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
      slot: 'linked' as const
    },
    {
      label: 'Github',
      icon: 'i-lucide-github',
      to: 'https://github.com/almono',
      target: '_blank',
      variant: 'secondary',
      slot: 'github' as const
    },
    {
      slot: 'color' as const
    }
  ]
])

const toggleMenu = ref<AccordionItem[]>([
  {
    label: 'Menu',
    icon: '',
    content: '',
    trailingIcon: 'i-lucide-menu',
    slot: 'navigationToggle',
    ui: {
      leadingIcon: 'text-primary text-3xl',
      trailingIcon: 'text-primary text-3xl transition-all duration-200',
      label: 'text-primary text-xl'
    }
  }
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