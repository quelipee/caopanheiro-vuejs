<template>
  <div class="min-h-screen flex flex-col">
    <HeaderComponent/>
    <main class="container mx-auto p-6 flex-grow">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Meus Favoritos</h1>

      <div v-if="useAuth.favorites_pets.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="pet in useAuth.favorites_pets" :key="pet.id" class="bg-white p-4 rounded-lg shadow-lg">
          <img :src="pet.photo" alt="Imagem do pet" class="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 class="text-xl font-semibold">{{ pet.name }}</h2>
          <p class="text-gray-600 font-semibold">Raça: {{ pet.breed }}</p>
          <p class="text-gray-600 font-semibold">Idade: {{ pet.age }} anos</p>
          <p class="text-gray-600 font-semibold">Status: {{ pet.status }}</p>
          <div class="mt-4 space-x-1">
            <button
              @click="adopt(pet.id)"
              class="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
              Adotar
            </button>
            <button
              @click="removeFromFavorites(pet.id)"
              class="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
              Remover
            </button>
          </div>
        </div>
      </div>

      <div v-else class="text-center">
        <p class="text-xl text-gray-600">Você ainda não tem animais favoritos.</p>
      </div>
    </main>
    <FooterComponent/>
  </div>
</template>

<script setup lang="ts">
import { HeaderComponent, FooterComponent, useAuthStore, onMounted, useRouter } from '@/shared/components'

const useAuth = useAuthStore();
const router = useRouter();

onMounted(async () => {
  await useAuth.getToFavoritesUserAuth();
});

function removeFromFavorites(petId: string) {
  useAuth.removeFavorite(petId);
}
const adopt = (id : string) => {
  console.log(id);
  router.replace({
    name: 'adopt',
    params: {
      id: id,
    }
  });
}
</script>

