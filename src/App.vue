<template>
  <div class="container-fuild">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      server: {
        name: "",
        port: "",
      },
    };
  },
  methods: {
    enviarForm(event) {
      event.preventDefault();
      if (!this.server.name || !this.server.port) {
        alert("Preencha todos os campos");
      }
      console.log(this.server);
    },
  },
};
</script>
