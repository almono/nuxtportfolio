<template>
  <div>
    <UContainer class="p-4">
      <UCard variant="outline">
        <template #header>
          <div>
            <p class="text-3xl">Paweł Walczykiewicz</p>
            <small class="text-l">Software Developer</small>
          </div>
          <div class="border-t-2 mt-3 pt-3 border-primary">
            <p class="text-m leading-7 mb-3">
              I'm a full-stack software developer with over 8 years of experience specializing in PHP (primarily Laravel), SQL, and frontend technologies like JavaScript and Vue.js. <br>
              I thrive on building scalable, maintainable applications using modern development principles such as SOLID, DRY, KISS, YAGNI and MVC architecture. <br><br>
              At my last work at Corcentric, I've led internal projects using SlimPHP ( PHP7 and later PHP8) and Vue.js ( version 2 later upgraded to 3), contributed to cross-project API communication using project created in Laravel framework, 
              and implemented third-party integrations including Flywire, Adyen, and OKTA. <br>
              I enjoy mentoring teammates, reviewing code, and finding clean, efficient solutions to complex problems. I believe teamwork is extremely important when it comes to delivering the best quality solutions. <br><br>
              I also have experience working on e-commerce platforms ( mainly custom CMS ), built web applications from scratch, and gained hands-on experience in CMS development and PL/SQL reporting. <br><br>
              I hold a Master’s degree in Mathematics and Computer Science from the University of Łódź.
            </p>
          </div>
        </template>

        <div class="flex items-center">
          <UIcon name="i-lucide-square-terminal" :size="28" class="text-primary"/>
          <p class="text-primary inline text-xl pl-1">Tech Stack Highlights</p>
        </div>
        <div class="flex items-center mt-4">
          <TechStack />
        </div>
        <div class="flex items-center">
          <UIcon name="i-material-symbols-deployed-code-account" :size="28" class="text-primary"/>
          <p class="text-primary inline text-xl pl-1">Experience</p>
        </div>

        <template #footer>
          
        </template>
      </UCard>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
import type { AccordionItem } from '@nuxt/ui'

const items = [
  {
    label: 'Tech Stack Highlights',
    icon: 'i-lucide-square-terminal',
    trailingIcon: 'i-lucide-plus',
    slot: 'techStack' as techStack
  }
] satisfies AccordionItem[]

</script>

<style>

</style>