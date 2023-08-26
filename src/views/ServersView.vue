<template>
  <div>
    <div class="bg-success p-4 text-white text-center m-2 rounded-3">
      <h2>Gestão de API WhatsApp</h2>
    </div>
    <div class="row text-white p-2">
      <div class="col-md-4">
        <div class="bg-primary p-4 rounded-3">
          <h3 class="text-center">Lista de Servers</h3>
          <form class="form" @submit="enviarForm">
            <div class="row">
              <div class="col-md-12">
                <label for="server" class="form-label h6">Pokemon</label>
                <input
                  v-model="server.pokemon"
                  type="text"
                  placeholder="Pokemon"
                  id="server"
                  class="form-control"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 mt-4">
                <ButtonOutline textButton="Acessar" typeButton="light" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-12">
            <div class="bg-secondary p-2 rounded-3">
              <h3 class="text-center h5">Lista de servers</h3>
            </div>
            <div class="card" v-if="pokemonFind" style="width: 18rem">
              <img
                :src="pokemonUpdate.imagePokemon"
                class="card-img-top"
                :alt="pokemonUpdate.name"
              />
              <div class="card-body">
                <p class="card-text">{{ pokemonUpdate.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonOutline from "@/components/main/ButtonOutline.vue";

export default {
  components: { ButtonOutline },
  name: "ServersView",
  data() {
    return {
      server: {
        pokemon: "",
      },
      pokemonFind: false,
      pokemonUpdate: {
        imagePokemon: "",
        name: "",
      },
    };
  },
  created() {
    console.log(this.$store.state.user);
  },
  methods: {
    enviarForm(event) {
      event.preventDefault();
      if (!this.server.pokemon) {
        alert("Preencha todos os campos");
      } else {
        this.$axios
          .get(`pokemon/${this.server.pokemon}`)
          .then(({ data }) => {
            this.pokemonFind = true;
            console.log(data);
            this.pokemonUpdate.imagePokemon = data.sprites.front_default;
            this.pokemonUpdate.name = data.name;
          })
          .catch(({ response }) => {
            console.log(response);
          });
      }
    },
  },
};
</script>
