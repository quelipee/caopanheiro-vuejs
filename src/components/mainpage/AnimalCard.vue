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
      <a href="" @click="showAnimalProfile(id)">
      <p class="text-gray-600 font-semibold">Idade: {{ age }}</p>
      <p class="text-gray-600 font-semibold">Raça: {{ breed }}</p>
      <p class="text-gray-600 font-semibold">Abrigo: {{ shelter_id }}</p>
      <p class="mt-2 text-gray-700 font-semibold">{{ description.slice(0,33) + '...' }}</p>
      </a>
  </div>
</template>

<script setup lang="ts">
import type { Petlist } from '@/interface/type'
import { addToFavorites, removeToFavorite } from '@/services/api'
import { computed, useAuthStore, useRouter } from '@/shared/components'

const useAuth = useAuthStore();
const router = useRouter();
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
const showAnimalProfile = (id : string) => {
  router.push({
    name: 'profile',
    params: {
      id: id
    }
  });
}
</script>
