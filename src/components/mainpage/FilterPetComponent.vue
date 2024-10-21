
<template>
  <input
    type="text"
    :value="searchQuery"
    @input="$emit('update:searchQuery', ($event.target as HTMLInputElement).value)"
    placeholder="Pesquisar por raça"
    class="p-2 mb-6 border rounded w-full"
  />
</template>
<script setup lang="ts">
defineProps<{
  searchQuery: string;
}>();
defineEmits(["update:searchQuery"]);
</script>
