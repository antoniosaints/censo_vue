<template lang="">
  <div class="px-4">
    <div class="w-full justify-center flex">
      <div class="flex">
        <!-- Previous Button -->
        <a
          href="javascript:void(0)"
          @click="previousPage"
          class="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Anterior
        </a>

        <!-- Next Button -->
        <a
          href="javascript:void(0)"
          @click="nextPage"
          class="flex items-center justify-center px-3 h-8 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Próximo
        </a>
      </div>
    </div>
    <div class="w-full mt-4 flex gap-2 flex-wrap justify-center">
      <CardPokemon :pokemons="reqPokemons().pokemons" />
    </div>
  </div>
</template>
<script setup>
// metodos e hooks
import { onMounted } from "vue";
// componentes
import CardPokemon from "@/components/pokemons/CardPokemon.vue";
// store
import { reqPokemons } from "@/store/requestsPokemon";

const requestPokemon = reqPokemons(); // store request de pokemons
const nextPage = () => {
  if (requestPokemon.pokemons.next) {
    requestPokemon.fetchPoke(requestPokemon.pokemons.next);
  }
};

const previousPage = () => {
  if (requestPokemon.pokemons.previous) {
    requestPokemon.fetchPoke(requestPokemon.pokemons.previous);
  }
};

onMounted(() => {
  requestPokemon.fetchPoke("https://pokeapi.co/api/v2/pokemon?limit=9");
});
</script>
