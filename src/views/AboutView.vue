
<template>
  <HeaderComponent/>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
    <div class="max-w-3xl text-center">
      <!-- Título da Seção -->
      <h1 class="text-4xl font-bold text-blue-600 mb-4">Sobre Nós</h1>

      <!-- Texto Descritivo -->
      <p class="text-gray-700 text-lg mb-6">
        Somos uma equipe dedicada à causa de ajudar animais a encontrarem novos lares. Nosso objetivo é conectar pessoas com animais de estimação, criando laços de amor e cuidado.
        Acreditamos que cada animal merece um lar e uma família que o acolha com carinho e responsabilidade.
      </p>

      <!-- Missão, Visão e Valores -->
      <div class="grid md:grid-cols-3 gap-6 text-left mt-8">
        <!-- Missão -->
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-semibold text-blue-600 mb-3">Nossa Missão</h2>
          <p class="text-gray-600">
            Facilitar o processo de adoção e ajudar animais em situação de vulnerabilidade a encontrarem lares permanentes, seguros e amorosos.
          </p>
        </div>

        <!-- Visão -->
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-semibold text-blue-600 mb-3">Nossa Visão</h2>
          <p class="text-gray-600">
            Um mundo onde todos os animais tenham uma família e um lar cheio de amor, promovendo o respeito e bem-estar animal.
          </p>
        </div>

        <!-- Valores -->
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-semibold text-blue-600 mb-3">Nossos Valores</h2>
          <ul class="text-gray-600 list-disc list-inside">
            <li>Comprometimento com a causa animal</li>
            <li>Empatia e respeito</li>
            <li>Responsabilidade e transparência</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

import HeaderComponent from '@/components/headers/HeaderComponent.vue'
</script>
