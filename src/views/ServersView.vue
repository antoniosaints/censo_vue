<template>
  <div>
    <div class="flex text-white px-4 gap-2">
      <div class="w-[25%]">
        <div class="dark:bg-gray-800 bg-gray-200 p-4 rounded-md">
          <h3
            class="text-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Novo server
          </h3>
          <form class="form" @submit="salvaServer">
            <div class="row">
              <div class="col-md-12">
                <label
                  for="server"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Server</label
                >
                <input
                  v-model="api.nome"
                  type="text"
                  required
                  placeholder="Server"
                  id="server"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div class="col-md-12">
                <label
                  for="server"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >IP</label
                >
                <input
                  v-model="api.ip"
                  type="text"
                  required
                  placeholder="IP"
                  id="server"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div class="col-md-12">
                <label
                  for="server"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >TOKEN</label
                >
                <input
                  v-model="api.token"
                  type="text"
                  required
                  placeholder="TOKEN"
                  id="server"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div class="col-md-12">
                <label
                  for="server"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Porta</label
                >
                <input
                  v-model="api.porta"
                  type="number"
                  required
                  placeholder="Porta"
                  id="server"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 mt-4">
                <button
                  class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Salvar
                </button>
                <button
                  @click.prevent="limparForm"
                  class="focus:outline-none text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                  Limpar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="w-[75%]">
        <div class="row">
          <div class="w-full">
            <div class="bg-green-600 dark:bg-green-900 p-2 rounded-t-md">
              <h3 class="bg-gray text-center">Lista de servers</h3>
            </div>
          </div>
          <div class="col-md-12">
            <table
              class="w-full text-sm text-center text-gray-500 dark:text-gray-400"
            >
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th class="px-6 py-3" scope="col">Server</th>
                  <th class="px-6 py-3" scope="col">IP</th>
                  <th class="px-6 py-3" scope="col">TOKEN</th>
                  <th class="px-6 py-3" scope="col">Porta</th>
                  <th class="px-6 py-3" scope="col">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  v-for="server in servers"
                  :key="server.id"
                >
                  <td
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {{ server.nome }}
                  </td>
                  <td>{{ server.ip }}</td>
                  <td>{{ server.token }}</td>
                  <td>{{ server.porta }}</td>
                  <td>
                    <button
                      @click="deleteServer(server.id)"
                      class="bg-red-700 hover:bg-red-800 text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
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
  name: "ServersView",
  data() {
    return {
      api: {
        nome: "",
        ip: "",
        token: "",
        porta: "",
      },
      servers: [],
    };
  },
  mounted() {
    console.log(this.servers);
    this.getUsuarios();
  },
  methods: {
    async getUsuarios() {
      await this.$axios
        .get("servers")
        .then((result) => {
          console.log(result.headers);
          this.servers = result.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    limparForm() {
      this.api.nome = "";
      this.api.ip = "";
      this.api.token = "";
      this.api.porta = "";
    },
    deleteServer(id) {
      console.log(id);
      if (id) {
        this.$swal({
          title: "Tem certeza?",
          text: "Você não poderá reverter isso!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sim, deletar!",
          cancelButtonText: "Cancelar",
        }).then((event) => {
          if (event.isConfirmed) {
            this.$axios
              .delete(`servers/${id}`)
              .then((response) => {
                console.log(response);
                this.getUsuarios();
                this.$swal({
                  icon: "success",
                  title: "Deletado!",
                  text: "O servidor foi deletado com sucesso!",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          }
        });
      }
    },
    salvaServer(event) {
      event.preventDefault();
      if (
        !this.api.nome ||
        !this.api.token ||
        !this.api.porta ||
        !this.api.ip
      ) {
        this.$swal({
          icon: "error",
          title: "Preencha todos os campos",
          confirmButtonText: "Ok",
        });
      } else {
        this.$axios
          .post("servers", this.api)
          .then((result) => {
            console.log(result);
            this.getUsuarios();
            this.api.nome = "";
            this.api.ip = "";
            this.api.token = "";
            this.api.porta = "";
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
