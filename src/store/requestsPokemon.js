import { defineStore } from "pinia";
import { ref } from "vue";

export const reqPokemons = defineStore("requests-pokemons", () => {
  const pokemons = ref([]);
  const fetchPoke = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    const PokemonsAlterados = data.results.map((poke) => ({
      ...poke,
      imagem: `https://play.pokemonshowdown.com/sprites/xyani/${poke.name}.gif`,
    }));
    console.log(data);
    pokemons.value = data;
    pokemons.value.results = PokemonsAlterados;
  };

  return { fetchPoke, pokemons };
});
