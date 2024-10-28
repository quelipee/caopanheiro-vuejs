<template>
  <div class="min-h-screen flex flex-col">
    <HeaderComponent />
    <main class="container mx-auto p-6 flex-grow flex items-center justify-center">
      <div class="max-w-4xl mx-auto p-6">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Minhas Solicitações de Adoção</h2>
        <AdoptionListCard/>
      </div>
    </main>
    <FooterComponent />
  </div>
</template>
<script setup lang="ts">
import AdoptionListCard from '@/components/adoption/AdoptionListCard.vue'
import { FooterComponent, HeaderComponent } from '@/shared/components'
</script>
