
<template>
  <div class="mt-8">
    <h2 class="text-2xl font-semibold text-gray-700">Sobre o {{ name }}</h2>
    <p class="mt-4 text-gray-600">{{ description }}</p>
  </div>
  <div class="mt-6 space-x-4 items-end flex justify-end">
    <button @click="adopt(id)" class="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
      Adotar
    </button>
    <button class="bg-emerald-400 text-white py-2 px-4 rounded-lg hover:bg-emerald-500">
      Compartilhar
    </button>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from '@/shared/components'

defineProps<{
  id:string,
  name: string,
  description: string,
}>()
const router = useRouter();
const adopt = (id : string) => {
  router.replace({
    name: 'adopt',
    params: {
      id: id,
    }
  });
}
</script>
