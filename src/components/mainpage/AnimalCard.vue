<template>
  <div class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <img :src="imageUrl" alt="Animal" class="rounded-t-lg mb-2" />
    <h3 class="font-bold text-lg text-gray-700">{{ name }}</h3>
    <p class="text-gray-600">Idade: {{ age }}</p>
    <p class="text-gray-600">Raça: {{ breed }}</p>
    <p class="text-gray-600">Abrigo: {{ shelter_id }}</p>
    <p class="mt-2 text-gray-700">{{ description }}</p>
    <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Adotar</button>
  </div>
</template>

<script setup lang="ts">
import type { Petlist } from '@/interface/type'

defineProps<Petlist>();

</script>
