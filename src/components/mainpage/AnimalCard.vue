<template>
  <div class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <img :src="imageUrl" alt="Animal" class="rounded-t-lg mb-2" />
    <div class="flex justify-between">
      <h3 class="font-bold text-lg text-gray-700">{{ name }}</h3>
      <button
        @click="favorite(id)">
        <i :class="isFavorite"></i>
      </button>
    </div>
    <p class="text-gray-600">Idade: {{ age }}</p>
    <p class="text-gray-600">Raça: {{ breed }}</p>
    <p class="text-gray-600">Abrigo: {{ shelter_id }}</p>
    <p class="mt-2 text-gray-700">{{ description.slice(0,33) + '...' }}</p>
    <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Adotar</button>
  </div>
</template>

<script setup lang="ts">
import type { Petlist } from '@/interface/type'
import { addToFavorites, removeToFavorite } from '@/services/api'
import { computed, useAuthStore } from '@/shared/components'

const useAuth = useAuthStore();
const props = defineProps<Petlist>();

const isFavorite = computed(() => {
  return useAuth.favorites_pets.some(pet => pet.id === props.id) ? 'pi pi-star-fill' : 'pi pi-star';
})
const addFavorite = async (id: string) => {
  await addToFavorites(id).then((responseData) => {
    useAuth.getToFavoritesUserAuth();
    console.log(responseData);
  }).catch((err) => {
    console.log(err.response.data.message);
  });
}
const removeFavorite = async (id: string) => {
  await removeToFavorite(id).then((responseData) => {
    useAuth.getToFavoritesUserAuth();
    console.log(responseData);
  }).catch((err) => {
    console.log(err.response.data.message);
  });
}

const favorite = (id: string) => {
  if (isFavorite.value === 'pi pi-star') {
    addFavorite(id);
  }else {
    removeFavorite(id);
  }
}
</script>
