
<template>
  <div class="flex flex-col md:flex-row items-start">
    <!-- Animal Image -->
    <div class="w-full md:w-1/3 mb-4 md:mb-0">
      <img
        :src="photo"
        alt="Foto do animal"
        class="w-full h-72 object-cover rounded-lg"
      />
    </div>
    <!-- Info -->
    <div class="md:ml-6 flex-1 flex flex-col justify-between">
      <!-- Basic Info -->
      <div>
        <h1 class="text-3xl font-bold text-gray-800">{{ name }}</h1>
        <p class="text-gray-600 font-semibold">Raça: {{ breed }}</p>
        <p class="text-gray-600 font-semibold">Genero: {{ gender }}</p>
        <p class="text-gray-600 font-semibold">Espécie : {{ species }}</p>
        <p class="text-gray-600 font-semibold">Idade: {{ age }} anos</p>
        <p class="text-gray-600 font-semibold">Abrigo: {{ shelter }}</p>
        <p class="text-gray-500 mt-4 font-semibold">
          Status: <span :class="statusClass">{{ status }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PetDetail } from '@/interface/type'

defineProps<PetDetail>();
</script>
