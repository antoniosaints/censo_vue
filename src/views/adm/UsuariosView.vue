<template>
  <div class="dark:text-white">
    {{ usuarios }}
    <input class="text-gray-900" v-model="usuarios[0].apellido" type="text" />
  </div>
</template>
<script>
export default {
  name: "UsuariosView",
  data() {
    return {
      usuarios: [
        {
          id: 1,
          nombre: "Juan",
          apellido: "Pérez",
        },
      ],
    };
  },
  mounted() {
    console.log(this.usuarios);
  },
  methods: {
    saveData() {
      this.$store.commit.usuarios("saveData", this.usuarios);
    },
  },
};
</script>
