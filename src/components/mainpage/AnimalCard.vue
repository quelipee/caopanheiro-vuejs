<template>
  <div class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <img :src="imageUrl" alt="Animal" class="rounded-t-lg mb-2" />
    <h3 class="font-bold text-lg text-gray-700">{{ name }}</h3>
    <p class="text-gray-600">Idade: {{ age }}</p>
    <p class="text-gray-600">Raça: {{ breed }}</p>
    <p class="mt-2 text-gray-700">{{ description }}</p>
    <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Adotar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'AnimalCard',
  props: {
    name: {
      type: String as PropType<string>,
      required: true
    },
    age: {
      type: String as PropType<string>,
      required: true
    },
    breed: {
      type: String as PropType<string>,
      required: true
    },
    description: {
      type: String as PropType<string>,
      required: true
    },
    imageUrl: {
      type: String as PropType<string>,
      required: true
    }
  }
});
</script>

<style scoped>
/* Estilos adicionais podem ser adicionados aqui */
</style>
