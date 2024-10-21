
<template>
  <section id="contact" class="mb-12">
    <h2 class="text-2xl font-bold mb-4 text-gray-700">Entre em Contato</h2>
    <form @submit.prevent="handleSubmit" class="bg-white p-6 rounded-lg shadow-md">
      <label for="name" class="block mb-2 text-gray-700">Nome:</label>
      <input type="text" id="name" v-model="formData.name" class="border border-gray-300 p-2 w-full mb-4" required />

      <label for="email" class="block mb-2 text-gray-700">Email:</label>
      <input type="email" id="email" v-model="formData.email" class="border border-gray-300 p-2 w-full mb-4" required />

      <label for="message" class="block mb-2 text-gray-700">Mensagem:</label>
      <textarea id="message" v-model="formData.message" class="border border-gray-300 p-2 w-full mb-4" required></textarea>

      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Enviar</button>
    </form>
  </section>
</template>
<script setup lang="ts">
import { ref } from '@/shared/components'

const formData = ref({
  name: '',
  email: '',
  message: '',
});

const handleSubmit = () => {
  console.log('Form Submitted:', formData.value);
}
</script>
