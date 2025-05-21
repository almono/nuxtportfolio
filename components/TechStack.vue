<template>
  <div class="mt-2">
    <ul class="list-none list-outside block">
      <div class="grid md:grid-cols-3 sm:grid-cols-1">
        <li class="p-1">
          <UCard class="hover:bg-muted hover:ring-2 hover:ring-cyan-500/50 hover:shadow-xl/10 hover:shadow-cyan-500 inset-shadow-sm inset-shadow-cyan-500/30 transition-discrete duration-400 h-60 hover:rotate-1">
            <div class="flex items-center text-base font-semibold">
              <UIcon name="i-lucide-file-code-2" :size="18" class="text-info mr-1"/>Languages & Programming Concepts
            </div>
            <ol class="text-m list-disc list-inside text-muted">
              <li>PHP (5.6, 7.x, 8.x), JavaScript, MySQL, HTML5, CSS3, C#</li>
              <li>Object-Oriented Programming (OOP)</li>
              <li>SOLID, DRY, KISS, YAGNI Principles</li>
              <li>Design Patterns (Factory, Repository, Observer)</li>
            </ol>
          </UCard>
        </li>
        <li class="p-1">
          <UCard class="hover:bg-muted hover:ring-2 hover:ring-cyan-500/50 hover:shadow-xl/10 hover:shadow-cyan-500 inset-shadow-sm inset-shadow-cyan-500/30 transition-discrete duration-400 h-60 hover:rotate-1">
            <div class="flex items-center text-base font-semibold">
              <UIcon name="i-lucide-library" :size="18" class="text-info mr-1"/>Frameworks & Libraries
            </div>
            <ol class="list-disc list-inside text-muted">
              <li>Laravel (multiple versions), Symfony, SlimPHP</li>
              <li>Vue.js (2 & 3), jQuery, Bootstrap, Tailwind CSS</li>
            </ol>
          </UCard>
        </li>
        <li class="p-1">
          <UCard class="hover:bg-muted hover:ring-2 hover:ring-cyan-500/50 hover:shadow-xl/10 hover:shadow-cyan-500 inset-shadow-sm inset-shadow-cyan-500/30 transition-discrete duration-400 h-60 hover:rotate-1">
            <div class="flex items-center text-base font-semibold">
              <UIcon name="i-material-symbols-api" :size="18" class="text-info mr-1"/>Backend & API Development
            </div>
            <ol class="list-disc list-inside text-muted">
              <li>RESTful API Design</li>
              <li>OpenAPI (Swagger UI)</li>
              <li>SSO implementation (OKTA, CAS, SAML)</li>
              <li>Payment implementations (Adyen, Global Payments, Flywire)</li>
              <li>Design Patterns (Factory, Repository, Observer)</li>
            </ol>
          </UCard>
        </li>
        <li class="p-1">
          <UCard class="hover:bg-muted hover:ring-2 hover:ring-cyan-500/50 hover:shadow-xl/10 hover:shadow-cyan-500 inset-shadow-sm inset-shadow-cyan-500/30 transition-discrete duration-400 h-60 hover:rotate-1">
            <div class="flex items-center text-base font-semibold">
              <UIcon name="i-material-symbols-view-quilt-outline" :size="18" class="text-info mr-1"/>Frontend Development
            </div>
            <ol class="list-disc list-inside text-muted">
              <li>Vue.js Components, State Management (vuex, pinia)</li>
              <li>AJAX and jQuery for dynamic interfaces</li>
            </ol>
          </UCard>
        </li>
        <li class="p-1">
          <UCard class="hover:bg-muted hover:ring-2 hover:ring-cyan-500/50 hover:shadow-xl/10 hover:shadow-cyan-500 inset-shadow-sm inset-shadow-cyan-500/30 transition-discrete duration-400 h-60 hover:rotate-1">
            <div class="flex items-center text-base font-semibold">
              <UIcon name="i-material-symbols-tools-wrench-outline-sharp" :size="18" class="text-info mr-1"/>DevOps & Tooling
            </div>
            <ol class="list-disc list-inside text-muted">
              <li>Docker (development and deployment)</li>
              <li>Git (version control)</li>
              <li>JIRA, Redmine (issue tracking)</li>
              <li>Confluence (documentation, reporting)</li>
            </ol>
          </UCard>
        </li>
        <li class="p-1">
          <UCard class="hover:bg-muted hover:ring-2 hover:ring-cyan-500/50 hover:shadow-xl/10 hover:shadow-cyan-500 inset-shadow-sm inset-shadow-cyan-500/30 transition-discrete duration-400 h-60 hover:rotate-1">
            <div class="flex items-center text-base font-semibold">
              <UIcon name="i-material-symbols-code-blocks-outline" :size="18" class="text-info mr-1"/>Software Engineering Practices
            </div>
            <ol class="list-disc list-inside text-muted">
              <li>MVC Architecture</li>
              <li>Domain-Driven Design (DDD)</li>
              <li>Code Review & Mentorship</li>
              <li>Legacy Code Refactoring & Modernization</li>
            </ol>
          </UCard>
        </li>
        <li class="p-1">
          <UCard class="hover:bg-muted hover:ring-2 hover:ring-cyan-500/50 hover:shadow-xl/10 hover:shadow-cyan-500 inset-shadow-sm inset-shadow-cyan-500/30 transition-discrete duration-400 h-60 hover:rotate-1">
            <div class="flex items-center text-base font-semibold">
              <UIcon name="i-material-symbols-bookmark-manager-outline-rounded" :size="18" class="text-info mr-1"/>CMS & E-Commerce
            </div>
            <ol class="list-disc list-inside text-muted">
              <li>Custom Laravel-based CMS solutions</li>
              <li>E-commerce platform development and maintenance</li>
            </ol>
          </UCard>
        </li>
      </div>
    </ul>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>