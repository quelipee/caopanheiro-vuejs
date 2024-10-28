<template>
  <header class="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/">
        <h1 class="text-3xl font-bold">Cãopanheiro</h1>
      </router-link>
      <nav class="mt-4">
        <router-link to="/user/adoptions" class="mr-6 hover:text-gray-300">Adoções</router-link>
        <router-link to="/favorites" class="mr-6 hover:text-gray-300">Favoritos</router-link>
        <router-link to="#about" class="mr-6 hover:text-gray-300">Sobre Nós</router-link>
        <router-link to="#contact" class="hover:text-gray-300">Contato</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>
