<template>
  <div class="bg-gray-100">
    <header class="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-3xl font-bold">Cãopanheiro</h1>
        <nav class="mt-4">
          <router-link to="#about" class="mr-6 hover:text-gray-300">Sobre Nós</router-link>
          <router-link to="#pets" class="mr-6 hover:text-gray-300">Nossos Animais</router-link>
          <router-link to="#contact" class="hover:text-gray-300">Contato</router-link>
        </nav>
      </div>
    </header>

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
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimalCard
            name="Nome do Animal 1"
            age="2 anos"
            breed="Labrador"
            description="Descrição breve sobre o animal."
            imageUrl="https://via.placeholder.com/300x200"
          />
          <AnimalCard
            name="Nome do Animal 2"
            age="1 ano"
            breed="Beagle"
            description="Descrição breve sobre o animal."
            imageUrl="https://via.placeholder.com/300x200"
          />
          <AnimalCard
            name="Nome do Animal 3"
            age="3 anos"
            breed="Poodle"
            description="Descrição breve sobre o animal."
            imageUrl="https://via.placeholder.com/300x200"
          />
          <AnimalCard
            name="Nome do Animal 4"
            age="4 anos"
            breed="Gato"
            description="Descrição breve sobre o animal."
            imageUrl="https://via.placeholder.com/300x200"
          />
        </div>
      </section>

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
    </main>

    <footer class="bg-blue-600 text-white p-4 text-center">
      <p>&copy; 2024 Adoção de Animais. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AnimalCard from '../components/mainpage/AnimalCard.vue';

export default defineComponent({
  components: {
    AnimalCard
  },
  setup() {
    const formData = ref({
      name: '',
      email: '',
      message: ''
    });

    const handleSubmit = () => {
      console.log('Form Submitted:', formData.value);
      // Aqui você pode implementar a lógica para enviar o formulário
    };

    return { formData, handleSubmit };
  }
});
</script>

<style scoped>
/* Estilos adicionais podem ser adicionados aqui */
</style>
