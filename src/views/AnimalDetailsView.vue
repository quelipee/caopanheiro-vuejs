<template>
  <div class="min-h-screen flex flex-col">
    <HeaderComponent/>
    <div v-if="loading" class="flex justify-center items-center h-64">
      <p class="text-gray-500 text-lg">Carregando informações...</p>
    </div>

    <main v-else class="container mx-auto p-6 flex-grow flex items-center justify-center">
      <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">

        <InformationComponent
        v-if="isPetDetailsValid"
        :photo="useAuth.petDetails.photo"
        :name="useAuth.petDetails.name"
        :breed="useAuth.petDetails.breed"
        :gender="useAuth.petDetails.gender"
        :species="useAuth.petDetails.species"
        :age="useAuth.petDetails.age"
        :shelter="useAuth.petDetails.shelter.name"
        :status="useAuth.petDetails.status"
        :statusClass="statusClass"
        />
        <AdoptionButtonsComponent
        v-if="isPetDetailsValid"
        :id="useAuth.petDetails.id"
        :name="useAuth.petDetails.name"
        :description="useAuth.petDetails.description"/>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  onMounted, HeaderComponent, useAuthStore,
  InformationComponent, AdoptionButtonsComponent, computed, ref, useRouter
} from '@/shared/components'
import { useRoute } from 'vue-router'

const route = useRoute()
const useAuth = useAuthStore();
const loading = ref(true);
const router = useRouter();

onMounted(async () => {
  try {
    await useAuth.getPetDetails(route.params.id);
  }catch (err){
    console.log(err);
    await router.replace('/');
  }finally {
    loading.value = false;
  }
});

const statusClass = computed(() =>
  useAuth.petDetails.status === "available" ? "text-green-500" : "text-red-500"
);

const isPetDetailsValid = computed(() => {
  const details = useAuth.petDetails;
  return (
    details &&
    details.photo &&
    details.name &&
    details.breed &&
    details.gender &&
    details.species &&
    details.age &&
    details.shelter &&
    details.status
  );
});

</script>

<style scoped>
.container {
  max-width: 1000px;
}
</style>
