<template>
  <div class="space-y-4">
    <div
      v-for="pet in useAuth.adoption_list"
      :key="pet.id"
      class="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <img :src="pet.photo" alt="Pet Image" class="w-24 h-24 rounded-lg object-cover mr-4" />

      <div class="flex-1">
        <h3 class="text-xl font-semibold text-gray-700">{{ pet.name }}</h3>
        <p class="text-gray-500">{{ pet.breed }} - {{ pet.pivot.status }}</p>
        <p class="text-gray-400 text-sm">Idade: {{ pet.age }} anos</p>
        <p class="text-gray-400 text-sm">Data da Solicitação: {{ new Date(pet.pivot.adoption_date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }) }}</p>
      </div>

      <button
        @click="viewDetails(pet.id)"
        class="ml-auto px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
      >
        Ver Detalhes
      </button>
    </div>
  </div>

  <p v-if="useAuth.adoption_list.length === 0" class="text-gray-500 text-center mt-6">
    Você ainda não fez nenhuma solicitação de adoção.
  </p>
</template>
<script setup lang="ts">
import { onMounted, useAuthStore } from '@/shared/components'

const useAuth = useAuthStore();
const viewDetails = (id: string) => {
  console.log(id);
}
onMounted(async () => {
  await useAuth.listAdoptions();
  console.log(useAuth.adoption_list);
})
</script>
