<template>
  <div class="min-h-screen flex flex-col">
    <HeaderComponent />
    <main class="container mx-auto p-6 flex-grow">
      <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 class="text-3xl font-semibold text-gray-700 mb-6">Formulário de Interesse em Adoção</h2>

        <form @submit.prevent="submitForm">
          <!-- Tipo de Moradia -->
          <div class="mb-4">
            <label class="block text-gray-600 font-semibold mb-2">Tipo de Moradia</label>
            <select v-model="formData.housing_type" class="w-full p-2 border rounded-lg">
              <option value="" disabled selected>Selecione o tipo de moradia</option>
              <option value="Casa">Casa</option>
              <option value="Apartamento">Apartamento</option>
            </select>
          </div>

          <!-- Disponibilidade de Tempo -->
          <div class="mb-4">
            <label class="block text-gray-600 font-semibold mb-2">Disponibilidade de Tempo</label>
            <input
              type="text"
              v-model="formData.availability"
              placeholder="Ex.: Tempo diário para cuidados"
              class="w-full p-2 border rounded-lg"
            />
          </div>

          <!-- Experiência com Animais -->
          <div class="mb-4">
            <label class="block text-gray-600 font-semibold mb-2">Experiência com Animais</label>
            <textarea
              v-model="formData.experience"
              placeholder="Descreva sua experiência com animais de estimação"
              class="w-full p-2 border rounded-lg"
            ></textarea>
          </div>

          <!-- Informações sobre Outros Animais -->
          <div class="mb-4">
            <label class="block text-gray-600 font-semibold mb-2">Outros Animais em Casa</label>
            <textarea
              v-model="formData.other_animals"
              placeholder="Informe se você possui outros animais em casa"
              class="w-full p-2 border rounded-lg"
            ></textarea>
          </div>

          <!-- Motivo da Adoção -->
          <div class="mb-4">
            <label class="block text-gray-600 font-semibold mb-2">Motivo da Adoção</label>
            <textarea
              v-model="formData.reason"
              placeholder="Descreva o motivo pelo qual deseja adotar um animal"
              class="w-full p-2 border rounded-lg"
            ></textarea>
          </div>
          <div class="mb-3" v-if="errorLogin">
            <p class="text-red-400 text-sm text-center">{{errorLogin}}</p>
          </div>

          <!-- Botão de Envio -->
          <div class="mt-6 text-right">
            <button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              Enviar Interesse
            </button>
          </div>
        </form>
      </div>
    </main>
    <FooterComponent />
  </div>
</template>
<script setup lang="ts">
import { FooterComponent, HeaderComponent, ref, useRouter } from '@/shared/components'
import type { AdoptForm } from '@/interface/type'
import { adoptionAnalysis } from '@/services/api'
import { useRoute } from 'vue-router'

const route = useRoute();
const router = useRouter()
const formData = ref<AdoptForm>(
  {
    housing_type: '',
    availability: null,
    experience: '',
    other_animals: '',
    reason: '',
  }
);
const errorLogin = ref(null);
const clearError = () =>{
  errorLogin.value = null;
};
const submitForm = async () => {
  console.log('Dados do formulário de adoção:', formData.value);
  await adoptionAnalysis(formData.value, route.params.id).then(() => {
    router.replace('/');
    }
  ).catch((err) => {
    errorLogin.value = err.response.data.message;
    setTimeout(() =>{
      clearError();
    },5000)
  });
};
</script>

<style scoped>
.container {
  max-width: 1000px;
}
</style>
