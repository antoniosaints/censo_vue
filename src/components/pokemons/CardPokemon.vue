<template>
  <div
    v-for="pokemon in pokemons.results"
    :key="pokemon.id"
    class="w-full flex flex-col justify-evenly items-center max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <a href="javascript:void(0)" class="flex justify-center">
      <img class="p-8 rounded-t-lg" :src="pokemon.imagem" alt="product image" />
    </a>
    <div class="px-5 pb-5">
      <div class="flex items-center justify-center mt-2">
        <span class="text-3xl font-bold text-gray-900 dark:text-white">{{
          pokemon.name[0].toUpperCase() + pokemon.name.substring(1)
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  pokemons: Object,
});
</script>
