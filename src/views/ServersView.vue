<template>
  <div>
    <div class="bg-success p-4 text-white text-center m-2">
      <h2>Gestão de API WhatsApp</h2>
      <button class="btn btn-light" @click="getUsuarios()">Usuários</button>
    </div>
    <div class="row text-white p-2">
      <div class="col-lg-3 col-md-4">
        <div class="bg-primary p-4">
          <h3 class="text-center">Lista de Servers</h3>
          <form class="form" @submit="enviarForm">
            <div class="row">
              <div class="col-md-12">
                <label for="server" class="form-label h6">IP</label>
                <input
                  v-model="api.url"
                  type="text"
                  placeholder="URL"
                  id="server"
                  class="form-control"
                />
              </div>
              <div class="col-md-12">
                <label for="server" class="form-label h6">TOKEN</label>
                <input
                  v-model="api.token"
                  type="text"
                  placeholder="TOKEN"
                  id="server"
                  class="form-control"
                />
              </div>
              <div class="col-md-12">
                <label for="server" class="form-label h6">Sessão</label>
                <input
                  v-model="api.session"
                  type="text"
                  placeholder="Sessão"
                  id="server"
                  class="form-control"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 mt-4">
                <button class="btn btn-light">Salvar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="col-lg-9 col-md-8">
        <div class="row">
          <div class="col-md-12">
            <div class="bg-success p-2">
              <h3 class="text-center h5">Lista de servers</h3>
            </div>
          </div>
          <div class="col-md-12">
            <table class="table table-striped text-center">
              <thead>
                <tr>
                  <th scope="col">URL {{ $store.state.Usuarios.usuarios }}</th>
                  <th scope="col">TOKEN</th>
                  <th scope="col">Sessão</th>
                  <th scope="col">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="server in usuarios" :key="server.id">
                  <td>{{ server.nome }}</td>
                  <td>{{ server.cidade }}</td>
                  <td>{{ server.bairro }}</td>
                  <td>
                    <button
                      @click="$store.commit('removeServer', server.id)"
                      class="btn btn-danger rounded-0"
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "ServersView",
  data() {
    return {
      api: {
        id: "",
        url: "",
        token: "",
        session: "",
      },
      usuarios: [],
    };
  },
  created() {
    console.log(this.usuarios);
  },
  methods: {
    async getUsuarios() {
      await this.$axios
        .get("http://localhost:5252/backend.php")
        .then((result) => {
          console.log(result);
          this.usuarios = result.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    enviarForm(event) {
      event.preventDefault();
      if (!this.api.url || !this.api.token || !this.api.session) {
        alert("Preencha todos os campos");
      } else {
        this.$store.commit("setApi", this.api);
      }
    },
  },
};
</script>
