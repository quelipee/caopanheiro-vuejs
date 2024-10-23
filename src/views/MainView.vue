<template>
  <div class="bg-gray-100">
    <HeaderComponent/>

    <main class="container mx-auto p-6">
      <section id="about" class="mb-12">
        <h2 class="text-2xl font-bold mb-4 text-gray-700">Sobre Nós</h2>
        <p class="text-gray-700">
          Somos uma organização dedicada a encontrar lares amorosos para animais abandonados e resgatados.
          Junte-se a nós na missão de fazer a diferença na vida desses animais incríveis!
        </p>
      </section>

      <section id="pets" class="mb-12">
        <h2 class="text-2xl font-bold mb-4 text-gray-700">Nossos Animais para Adoção</h2>
      <!-- TODO ADJUST FILTER LATER -->
        <FilterPetComponent
          v-model:searchQuery="searchQuery" />
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <!--TODO ADJUST LATER SHELTER NAME-->
          <AnimalCard
            v-for="pet in filteredPets"
            :key="pet.id"
            :id="pet.id"
            :name="pet.name"
            :age="pet.age"
            :breed="pet.breed"
            :shelter_id="pet.shelter_id"
            :description="pet.description"
            :imageUrl="pet.photo"
          />
        </div>
      </section>
      <FormContactComponent/>
    </main>
    <FooterComponent/>
  </div>
</template>

<script setup lang="ts">
import { onMounted, AnimalCard, useAuthStore, FormContactComponent,
  FooterComponent, HeaderComponent, FilterPetComponent, ref, computed } from '@/shared/components'

const useAuth = useAuthStore();
const searchQuery = ref('');

onMounted(async () => {
  await useAuth.getToFavoritesUserAuth();
  await useAuth.getAnimalsForAdoption();
});

const filteredPets = computed(() => {
  return useAuth.pet.filter(pet =>
    pet.breed.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

</script>

